import { User } from "./ui/User";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <h1 className="font-semibold text-3xl">Guess AI</h1>
      <User />
    </main>
  );
}
