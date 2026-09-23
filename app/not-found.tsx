import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";

export default function NotFound() {
  return (
    <main
      id="content"
      className="shell flex flex-1 flex-col items-center justify-center py-32 text-center"
    >
      <LogoMark className="size-12" />
      <h1 className="mt-8 mb-0 text-4xl font-semibold tracking-tight text-paper">Page not found</h1>
      <p className="mt-4 mb-0 text-lg text-muted">This page does not exist or has moved.</p>
      <Link href="/" className="btn btn-ghost mt-8">
        Back to Vesper Desk
      </Link>
    </main>
  );
}
