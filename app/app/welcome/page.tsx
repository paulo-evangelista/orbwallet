"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
      <header className="text-center mt-6">
        <div className="max-w-[200px] mx-auto mb-4">
          <Logo variant="large" />
        </div>
        <p className="text-xl text-gray-300">Your Gateway to Web3</p>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center">
        <p className="text-center text-lg max-w-xs">
          Secure, simple, and seamless access to your digital assets
        </p>
      </main>

      <footer className="space-y-4 mb-6">
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold"
          onClick={() => router.push("/login")}
        >
          Log In
        </Button>
        <Button
          variant="outline"
          className="w-full bg-transparent border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold"
          onClick={() => router.push("/create-wallet")}
        >
          Create Your Wallet
        </Button>
      </footer>
    </div>
  );
}
