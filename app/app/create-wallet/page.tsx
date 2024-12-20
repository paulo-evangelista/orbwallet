"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Server } from "lucide-react";
import { Logo } from "@/components/logo";

export default function CreateWalletIntroPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white font-light flex flex-col justify-between p-6">
      <header className="text-center mb-6">
        <div className="max-w-[120px] mx-auto mb-4">
          <Logo variant="small" />
        </div>
        <h1 className="text-2xl font-bold text-purple-400">
          Create Your OrbWallet
        </h1>
      </header>

      <main className="flex-grow flex flex-col justify-center">
        <div className="space-y-4 text-center">
          <p className="text-lg font-semibold text-purple-300">
            On the next page, you will receive your mnemonic phrase.
          </p>
          <div className="bg-zinc-900 p-4 rounded-lg max-w-md mx-auto">
            <p className="text-amber-400 font-bold mb-2">⚠️ Important:</p>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Your mnemonic phrase is the key to your wallet.</li>
              <li>Write it down and store it in a safe place.</li>
              <li>
                <span className="font-bold">Never</span> share it with anyone.
              </li>
              <li>OrbWallet cannot recover your mnemonic if you lose it.</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-6 mb-2 font-medium text-xl">Select your server</p>
        </div>
        <div className="bg-zinc-900 p-4 mb-2 rounded-lg max-w-md mx-auto">
          <p className="text-amber-400 font-bold mb-2">About the server:</p>
          <p>
            Orb uses a centralized server to handle your operators and
            transactions. An untrusted server can intercept your private key
            (and, consequently, your funds). If you're hosting your own server,
            be sure to follow all security conventions.
          </p>
          <ul className="text-left mt-2 list-disc list-inside space-y-2">
            <li>
              The server will <span className="font-bold">never</span> store
              your private key.
            </li>
            <li>
              You will create a password that gives the server access to your
              wallet. You cannot recover the password if lost.
            </li>
            <li>
              If you loose your password or the server goes down, you operators
              will loose control over your funds.{" "}
              <span className="font-bold">
                Your wallet will NOT be compromised.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full max-w-md mx-auto space-y-2">
          <Select value={"default"}>
            <SelectTrigger
              id="server"
              className="bg-zinc-800 border-none text-white focus:ring-2 focus:ring-purple-500"
            >
              <SelectValue placeholder="Choose a server" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-none">
              <SelectItem
                value="default"
                className="text-white focus:bg-purple-500"
              >
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  <span>Orb Server (Recommended)</span>
                </div>
              </SelectItem>
              <SelectItem
                value="custom (coming soon...)"
                className="text-neutral-500 focus:bg-purple-500"
              >
                Add my own server (coming soon...)
              </SelectItem>
            </SelectContent>
          </Select>
          <p className="text-xs text-green-500">
            Using the default server ensures the best performance and security.
          </p>
        </div>
      </main>

      <footer className="mt-6">
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold"
          onClick={() => router.push("/generate-mn")}
        >
          I Understand, Continue
        </Button>
      </footer>
    </div>
  );
}
