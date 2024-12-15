'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { ChartContainer } from "@/components/ui/chart"
import { ArrowUpRight, ArrowDownRight, Home, User, Settings } from 'lucide-react'
import Image from 'next/image'

// Mock data for the chart
const chartData = [
  { date: '2023-01-01', value: 1000 },
  { date: '2023-02-01', value: 1200 },
  { date: '2023-03-01', value: 1100 },
  { date: '2023-04-01', value: 1400 },
  { date: '2023-05-01', value: 1300 },
  { date: '2023-06-01', value: 1600 },
]

// Mock data for the coin list
const coinData = [
  { name: 'Bitcoin', symbol: 'BTC', value: 32000, change: 2.5, image: '/placeholder.svg?height=40&width=40' },
  { name: 'Ethereum', symbol: 'ETH', value: 1800, change: -1.2, image: '/placeholder.svg?height=40&width=40' },
  { name: 'Cardano', symbol: 'ADA', value: 0.5, change: 5.7, image: '/placeholder.svg?height=40&width=40' },
  { name: 'Polkadot', symbol: 'DOT', value: 7.2, change: -0.8, image: '/placeholder.svg?height=40&width=40' },
]

export default function HomePage() {
  const [totalValue, setTotalValue] = useState(35800.7)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="p-6 mb-4">
        <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
          hello
          {/* Replace with your actual logo */}
          <span className="text-2xl">🔮</span>
        </div>
      </header>

      <main className="flex-grow px-6 space-y-8 overflow-y-auto pb-20">
        <div className="text-center">
          <h2 className="text-xl text-gray-400 mb-2">Total Portfolio Value</h2>
          <p className="text-4xl font-bold">${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        </div>

        <Card className="bg-zinc-900 border-none">
          <CardContent className="p-6">
            <ChartContainer
              config={{
                value: {
                  label: "Portfolio Value",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[200px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Your Assets</h2>
          {coinData.map((coin) => (
            <Card key={coin.symbol} className="bg-zinc-900 border-none">
              <CardContent className="p-4 flex items-center">
                <Image src={coin.image} alt={coin.name} width={40} height={40} className="rounded-full mr-4" />
                <div className="flex-grow">
                  <h3 className="font-bold">{coin.name}</h3>
                  <p className="text-sm text-gray-400">{coin.symbol}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${coin.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                  <p className={`text-sm ${coin.change >= 0 ? 'text-green-500' : 'text-red-500'} flex items-center justify-end`}>
                    {coin.change >= 0 ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                    {Math.abs(coin.change)}%
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800">
        <div className="flex justify-around items-center h-16">
          <button className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
            <User size={24} />
          </button>
          <button className="text-purple-400 hover:text-purple-300 focus:outline-none focus:text-purple-300">
            <Home size={24} />
          </button>
          <button className="text-gray-400 hover:text-white focus:outline-none focus:text-white">
            <Settings size={24} />
          </button>
        </div>
      </nav>
    </div>
  )
}

