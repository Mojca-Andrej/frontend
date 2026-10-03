import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-2xl font-semibold">Strani ni mogoče najti</h1>
      <Link href="/" className="underline">Na domačo stran</Link>
    </main>
  );
}
