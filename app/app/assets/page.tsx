"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Mock data for the coin list
const coinData = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    value: 32000,
    change: 2.5,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    value: 1800,
    change: -1.2,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    value: 0.5,
    change: 5.7,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    value: 7.2,
    change: -0.8,
    image: "/placeholder.svg?height=40&width=40",
  },
];

export default function AssetsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Your Assets</h1>
      </header>
      <main className="space-y-4">
        {coinData.map((coin) => (
          <Card key={coin.symbol} className="bg-zinc-900 border-none">
            <CardContent className="p-4 flex items-center">
              <Image
                src={coin.image}
                alt={coin.name}
                width={40}
                height={40}
                className="rounded-full mr-4"
              />
              <div className="flex-grow">
                <h3 className="font-bold text-white">{coin.name}</h3>
                <p className="text-sm text-gray-400">{coin.symbol}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">
                  $
                  {coin.value.toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p
                  className={`text-sm ${
                    coin.change >= 0 ? "text-green-500" : "text-red-500"
                  } flex items-center justify-end`}
                >
                  {coin.change >= 0 ? (
                    <ArrowUpRight size={16} />
                  ) : (
                    <ArrowDownRight size={16} />
                  )}
                  {Math.abs(coin.change)}%
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
