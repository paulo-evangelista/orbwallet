"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Settings</h1>
      </header>
      <main className=" text-center flex-grow">
        <p className="text-center text-gray-400">
          Hang on! <br /> We're still working in this one.
        </p>
        <p className="text-center text-2xl text-gray-400">🚧</p>
        <Button
          onClick={() => router.push("/welcome")}
          variant={"destructive"}
          className="border-red-950 mt-20"
        >
          Log out
        </Button>
      </main>
    </div>
  );
}
