-- Migration: 20260926010000_linked_platforms_ciphertext_revoke_write.sql
-- Target Project: mhowgvkyfnzpciwcbivr (https://mhowgvkyfnzpciwcbivr.supabase.co)
-- Description: Revoke INSERT and UPDATE on token ciphertext columns from PUBLIC, anon, authenticated.
-- Ensures token ciphertexts can only be read, inserted, or updated via service_role.

revoke insert, update (access_token_ciphertext, refresh_token_ciphertext)
  on public.linked_platforms
  from public, anon, authenticated;
