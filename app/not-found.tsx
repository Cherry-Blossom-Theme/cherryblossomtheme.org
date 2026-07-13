import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pink-600">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-slate-900">This page drifted away.</h1>
      <p className="mt-3 max-w-md text-slate-600">The blossoms have carried it somewhere else, but the rest of the garden is still nearby.</p>
      <Link href="/" className="mt-8 rounded-full bg-pink-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-pink-700">
        Return home
      </Link>
    </div>
  );
}
