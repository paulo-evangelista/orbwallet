import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
      <header className="text-center mt-12">
        <h1 className="text-4xl font-bold text-purple-400 mb-2">OrbWallet</h1>
        <p className="text-xl text-gray-300">Your Gateway to Web3</p>
      </header>
      
      <main className="flex-grow flex flex-col justify-center items-center space-y-8">
        <div className="w-48 h-48 bg-purple-600 rounded-full flex items-center justify-center">
          {/* Replace with your actual logo */}
          <span className="text-6xl">🔮</span>
        </div>
        <p className="text-center text-lg max-w-xs">
          Secure, simple, and seamless access to your digital assets
        </p>
      </main>
      
      <footer className="space-y-4 mb-8 px-4">
        <Button asChild className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold">
          <Link href="/login">Log In</Link>
        </Button>
        <Button asChild variant="outline" className="w-full bg-transparent border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold">
          <Link href="/create-wallet">Create Your Wallet</Link>
        </Button>
      </footer>
    </div>
  )
}

