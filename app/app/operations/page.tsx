"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Mock data for recent operations
const recentOperations = [
  {
    id: 1,
    user: { name: "Alice", image: "/placeholder.svg?height=32&width=32" },
    asset: "BTC",
    amount: 0.5,
    type: "send",
  },
  {
    id: 2,
    user: { name: "Bob", image: "/placeholder.svg?height=32&width=32" },
    asset: "ETH",
    amount: 2.0,
    type: "receive",
  },
  {
    id: 3,
    user: { name: "Charlie", image: "/placeholder.svg?height=32&width=32" },
    asset: "ADA",
    amount: 100,
    type: "send",
  },
  {
    id: 4,
    user: { name: "David", image: "/placeholder.svg?height=32&width=32" },
    asset: "DOT",
    amount: 50,
    type: "receive",
  },
  {
    id: 5,
    user: { name: "Eve", image: "/placeholder.svg?height=32&width=32" },
    asset: "BTC",
    amount: 0.1,
    type: "send",
  },
];

export default function OperationsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Recent Operations</h1>
      </header>
      <main className="space-y-4">
        {recentOperations.map((operation) => (
          <Card key={operation.id} className="bg-zinc-900 border-none">
            <CardContent className="p-4 flex items-center">
              <Image
                src={operation.user.image}
                alt={operation.user.name}
                width={32}
                height={32}
                className="rounded-full mr-4"
              />
              <div className="flex-grow">
                <h3 className="font-bold text-white">{operation.user.name}</h3>
                <p className="text-sm text-gray-400">
                  {operation.type === "send" ? "Sent" : "Received"}{" "}
                  {operation.amount} {operation.asset}
                </p>
              </div>
              <p
                className={`font-bold ${
                  operation.type === "send" ? "text-red-500" : "text-green-500"
                }`}
              >
                {operation.type === "send" ? "-" : "+"}
                {operation.amount} {operation.asset}
              </p>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  );
}
