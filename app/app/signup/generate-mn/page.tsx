import { Button } from "@/components/ui/button"

export default function GenerateMnemonicPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6">
      <header className="text-center mt-12">
        <h1 className="text-3xl font-bold text-purple-400 mb-4">Your Mnemonic Phrase</h1>
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
        <p className="text-amber-400 font-bold">
          ⚠️ Remember to write this down and keep it safe!
        </p>
      </main>
      
      <footer className="mt-8 px-4">
        <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg transition-colors duration-300 text-lg font-semibold">
          I've Saved My Mnemonic
        </Button>
      </footer>
    </div>
  )
}

