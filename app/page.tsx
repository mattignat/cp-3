import Counter from "./Counter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Next.js Counter App</h1>
      <Counter />
    </main>
  );
}
