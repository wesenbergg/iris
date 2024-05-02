import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-24 my-12 min-h-screen space-y-12">
      <h1 className="text-4xl font-bold">Hello world</h1>
      <Link
        href="/api/auth/signout"
        className="rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-purple-800"
      >
        Sign Out
      </Link>
    </main>
  );
}
