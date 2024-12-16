'use client'

import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useRouter } from "next/navigation"

export default function GenerateMnemonicPage() {
  const router = useRouter()
return (
  <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
    <header className="text-center mb-6">
      <div className="max-w-[120px] mx-auto mb-4">
        <Logo variant="small" />
      </div>
      <h1 className="text-2xl font-bold text-purple-400">Your Mnemonic Phrase</h1>
    </header>
    
    <main className="flex-grow flex flex-col justify-center items-center space-y-8">
      <div className="bg-zinc-800 p-6 rounded-lg max-w-md w-full">
        <p className="text-center mb-4">Your 12-word mnemonic phrase is:</p>
        <div className="grid grid-cols-3 gap-2">
          {Array(12).fill(0).map((_, i) => (
            <div key={i} className="bg-zinc-700 p-2 rounded text-center">
              {i + 1}. Word
            </div>
          ))}
        </div>
      </div>
      <p className="text-amber-400 font-bold text-center">
        ⚠️ Remember to write this down and keep it safe!
      </p>
    </main>
    
    <footer className="mt-6">
      <Button onClick={()=>router.push("/")} className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold">
        I've Saved My Mnemonic
      </Button>
    </footer>
  </div>
)
}

