"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-400">
          Create Your OrbWallet
        </h1>
      </header>

      <main className="flex-grow flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <Label
            htmlFor="username"
            className="text-sm font-medium text-gray-300"
          >
            Username
          </Label>
          <Input
            id="username"
            placeholder="Choose a username"
            className="bg-zinc-900 border-none text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="bg-zinc-900 border-none text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-medium text-gray-300"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Create a password"
            className="bg-zinc-900 border-none text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </main>

      <footer className="mt-8 px-4">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold">
          <p>Create Your Wallet</p>
        </Button>
      </footer>
    </div>
  );
}
