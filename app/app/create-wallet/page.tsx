'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Server } from 'lucide-react'
import { Logo } from "@/components/logo"

export default function CreateWalletIntroPage() {
  const [selectedServer, setSelectedServer] = useState('default')
  const [customServer, setCustomServer] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()

  const handleServerChange = (value: string) => {
    if (value === 'custom') {
      setIsDialogOpen(true)
    } else {
      setSelectedServer(value)
    }
  }

  const handleCustomServerSubmit = () => {
    if (customServer) {
      setSelectedServer(customServer)
      setIsDialogOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
      <header className="text-center mb-6">
        <div className="max-w-[120px] mx-auto mb-4">
          <Logo variant="small" />
        </div>
        <h1 className="text-2xl font-bold text-purple-400">Create Your OrbWallet</h1>
      </header>
      
      <main className="flex-grow flex flex-col justify-center space-y-6">
        <div className="space-y-4 text-center">
          <p className="text-lg">
            You're about to embark on your journey into the world of decentralized finance with OrbWallet.
          </p>
          <p className="text-lg font-semibold text-purple-300">
            On the next page, you will receive your mnemonic phrase.
          </p>
          <div className="bg-zinc-800 p-4 rounded-lg max-w-md mx-auto">
            <p className="text-amber-400 font-bold mb-2">⚠️ Important:</p>
            <ul className="text-left list-disc list-inside space-y-2">
              <li>Your mnemonic phrase is the key to your wallet.</li>
              <li>Write it down and store it in a safe place.</li>
              <li>Never share it with anyone.</li>
              <li>OrbWallet cannot recover your mnemonic if you lose it.</li>
            </ul>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto space-y-2">
          <Label htmlFor="server" className="text-sm font-medium text-gray-300">Select Server</Label>
          <Select value={selectedServer} onValueChange={handleServerChange}>
            <SelectTrigger id="server" className="bg-zinc-800 border-none text-white focus:ring-2 focus:ring-purple-500">
              <SelectValue placeholder="Choose a server" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-none">
              <SelectItem value="default" className="text-white focus:bg-purple-500">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  <span>Default Server (Recommended)</span>
                </div>
              </SelectItem>
              <SelectItem value="server1" className="text-white focus:bg-purple-500">Server 1</SelectItem>
              <SelectItem value="server2" className="text-white focus:bg-purple-500">Server 2</SelectItem>
              <SelectItem value="custom" className="text-white focus:bg-purple-500">Add my own server</SelectItem>
            </SelectContent>
          </Select>
          {selectedServer === 'default' && (
            <p className="text-xs text-green-500">Using the default server ensures the best performance and security.</p>
          )}
        </div>
      </main>
      
      <footer className="mt-6">
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold"
          onClick={() => router.push('/generate-mn')}
        >
          I Understand, Continue
        </Button>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-zinc-800 text-white">
          <DialogHeader>
            <DialogTitle>Add Custom Server</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="custom-server" className="text-sm font-medium text-gray-300">Server URL</Label>
              <Input
                id="custom-server"
                placeholder="https://your-server-url.com"
                value={customServer}
                onChange={(e) => setCustomServer(e.target.value)}
                className="bg-zinc-700 border-none text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <Button onClick={handleCustomServerSubmit} className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            Add Server
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  </div>
)
}

