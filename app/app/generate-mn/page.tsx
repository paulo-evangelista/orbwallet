"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Logo } from "@/components/logo";
import { useRouter } from "next/navigation";
import { FullScreenLoading } from "@/components/fullscreenLoading";
import generateMnemonic from "./functions";
import { motion } from "framer-motion";

export default function GenerateMnemonicPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [mnemonic, setMnemonic] = useState(Array(24).fill(" "));
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const mnemonic = generateMnemonic();
    setMnemonic(mnemonic.split(" "));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!isConfirmed) {
      alert("Please confirm that you've saved your mnemonic phrase.");
      return;
    }
    // Here you would typically send the password to your backend
    // and handle the mnemonic phrase securely
    console.log("Password set and mnemonic confirmed");
    setIsLoading(true);
    console.log({
      password,
      mnemonic,
    });
    // router.push("/"); // Redirect to the main page or wherever appropriate
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
      <header className="text-center mb-6">
        <div className="max-w-[120px] mx-auto mb-4">
          <Logo variant="small" />
        </div>
        <h1 className="text-2xl font-bold text-purple-400">
          Your Mnemonic Phrase
        </h1>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center space-y-8">
        <div className="bg-zinc-800 p-6 rounded-lg max-w-md w-full">
          <p className="text-center mb-4">Your 12-word mnemonic phrase is:</p>
          <div className="grid grid-cols-3 gap-2">
            {mnemonic.map((word, i) => (
              <motion.div
                initial={{ opacity: 0, translateY: -10 }}
                animate={{
                  opacity: 1,
                  translateY: 0,
                  transition: { delay: 0.05 * i },
                }}
                key={i}
                className="bg-zinc-700 p-2 text-sm rounded text-center"
              >
                <span className=" text-neutral-400">{i + 1}.</span> {word}
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-amber-400 font-bold text-center">
          ⚠️ Write this down and keep it safe!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
          <div className="space-y-2">
            <Label htmlFor="password">Create Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="bg-zinc-800 border-zinc-700 text-white"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="confirm"
              checked={isConfirmed}
              onCheckedChange={(checked) => setIsConfirmed(checked as boolean)}
              className="border-purple-500"
            />
            <Label htmlFor="confirm" className="text-sm">
              I've saved my mnemonic somewhere safe. I understand that OrbWallet
              cannot recover my mnemonic or password.
            </Label>
          </div>
        </form>
      </main>

      <footer className="mt-6">
        <Button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold"
        >
          Create My Wallet
        </Button>
      </footer>
      <FullScreenLoading
        isLoading={isLoading}
        text="Generating your wallet..."
      />
    </div>
  );
}
