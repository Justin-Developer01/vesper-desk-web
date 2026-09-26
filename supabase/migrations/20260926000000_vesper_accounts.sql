-- Migration: 20260926000000_vesper_accounts.sql
-- Target Project: mhowgvkyfnzpciwcbivr (https://mhowgvkyfnzpciwcbivr.supabase.co)
-- Description: Profiles and linked_platforms tables with strict RLS and secure token isolation.

-- 1. Profiles table
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  display_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- RLS on profiles
alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles
  for select
  to authenticated
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles
  for update
  to authenticated
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- Trigger to automatically populate profile when a user signs up
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, display_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'display_name', new.raw_user_meta_data->>'name', split_part(new.email, '@', 1))
  )
  on conflict (id) do update set
    email = excluded.email,
    updated_at = now();
  return new;
end;
$$;

-- Drop trigger if already exists then recreate
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2. Linked Platforms table
-- Note: Contains ciphertext columns for access/refresh tokens.
-- To ensure linked platform tokens NEVER reach the browser, authenticated clients only
-- interact with public.linked_platforms_public view, or direct SELECT on token columns is revoked.
create table if not exists public.linked_platforms (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  platform text not null check (platform in ('kick', 'twitch', 'youtube')),
  platform_user_id text not null,
  platform_username text,
  status text not null default 'connected' check (status in ('connected', 'expired', 'error')),
  scopes text[] default array[]::text[],
  access_token_ciphertext text,
  refresh_token_ciphertext text,
  token_expires_at timestamptz,
  last_error text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint uq_user_platform unique (user_id, platform)
);

-- RLS on linked_platforms
alter table public.linked_platforms enable row level security;

-- Policy for authenticated users:
-- Allows authenticated users to view their own linked platform rows,
-- BUT we revoke column-level SELECT on the ciphertext columns from authenticated and anon.
create policy "Users can view their own linked platforms"
  on public.linked_platforms
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can update their own linked platforms"
  on public.linked_platforms
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Users can delete their own linked platforms"
  on public.linked_platforms
  for delete
  to authenticated
  using (auth.uid() = user_id);

-- Revoke column-level select permissions on token ciphertexts from public, anon, and authenticated roles.
-- Only service_role can read access_token_ciphertext and refresh_token_ciphertext.
revoke select (access_token_ciphertext, refresh_token_ciphertext) on public.linked_platforms from public, anon, authenticated;

-- Service role retains full access for server-side token management
grant all on public.linked_platforms to service_role;
grant all on public.profiles to service_role;

-- 3. Convenient security-invoker view omitting secrets entirely (defense-in-depth)
create or replace view public.user_linked_platforms with (security_invoker = true) as
  select
    id,
    user_id,
    platform,
    platform_user_id,
    platform_username,
    status,
    scopes,
    token_expires_at,
    last_error,
    created_at,
    updated_at
  from public.linked_platforms;

grant select on public.user_linked_platforms to authenticated;

-- 4. Automatically touch updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

drop trigger if exists set_linked_platforms_updated_at on public.linked_platforms;
create trigger set_linked_platforms_updated_at
  before update on public.linked_platforms
  for each row execute procedure public.set_updated_at();
