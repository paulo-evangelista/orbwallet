"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [server, setServer] = useState("xxx.com");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-purple-400">
          Log In to OrbWallet
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
            placeholder="Enter your username"
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
            placeholder="Enter your password"
            className="bg-zinc-900 border-none text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="server" className="text-sm font-medium text-gray-300">
            Server
          </Label>
          <Select defaultValue={server} onValueChange={setServer}>
            <SelectTrigger
              id="server"
              className="bg-zinc-900 border-none text-white focus:ring-2 focus:ring-purple-500"
            >
              <SelectValue placeholder="Select a server" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-none">
              <SelectItem
                value="xxx.com"
                className="text-white focus:bg-purple-500"
              >
                xxx.com
              </SelectItem>
              <SelectItem
                value="yyy.com"
                className="text-white focus:bg-purple-500"
              >
                yyy.com
              </SelectItem>
              <SelectItem
                value="zzz.com"
                className="text-white focus:bg-purple-500"
              >
                zzz.com
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </main>

      <footer className="mt-8 px-4">
        <a href="/">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold">
            Log In
          </Button>
        </a>
      </footer>
    </div>
  );
}
