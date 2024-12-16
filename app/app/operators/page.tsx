'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { TransactionsList } from '@/components/transactions-list'

// Mock data for operators
const operators = [
  { 
    id: 1, 
    name: 'Alice', 
    image: '/placeholder.svg?height=48&width=48',
    limitAmount: 1000,
    limitCurrency: 'USD',
    limitTime: '2023-12-31',
  },
  { 
    id: 2, 
    name: 'Bob', 
    image: '/placeholder.svg?height=48&width=48',
    limitAmount: 500,
    limitCurrency: 'EUR',
    limitTime: '2023-09-30',
  },
  { 
    id: 3, 
    name: 'Charlie', 
    image: '/placeholder.svg?height=48&width=48',
    limitAmount: 2000,
    limitCurrency: 'GBP',
    limitTime: '2024-03-15',
  },
]

export default function OperatorsPanel() {
  const router = useRouter()
  const [selectedOperator, setSelectedOperator] = useState<null | typeof operators[0]>(null)

  const handleRevoke = (operatorId: number) => {
    // Implement revoke logic here
    console.log(`Revoking operator with ID: ${operatorId}`)
  }

  return (
    <div className="flex flex-col p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Operators Panel</h1>
      </header>
      <main className="space-y-6">
        <p className="text-gray-400">Manage operators who have permission to use your assets:</p>
        {operators.map((operator) => (
          <Card key={operator.id} className="bg-zinc-900 border-none">
            <CardContent className="p-4 flex items-center">
              <Image src={operator.image} alt={operator.name} width={48} height={48} className="rounded-full mr-4" />
              <div className="flex-grow">
                <h3 className="font-bold text-white">{operator.name}</h3>
                <p className="text-sm text-gray-400">Limit: {operator.limitAmount} {operator.limitCurrency}</p>
                <p className="text-sm text-gray-400">Until: {operator.limitTime}</p>
              </div>
              <div className="flex flex-col space-y-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full" onClick={() => setSelectedOperator(operator)}>
                      See Transactions
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-zinc-900 text-white">
                    <DialogHeader>
                      <DialogTitle>{selectedOperator?.name}'s Transactions</DialogTitle>
                    </DialogHeader>
                    <TransactionsList operatorId={selectedOperator?.id} />
                  </DialogContent>
                </Dialog>
                <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white" onClick={() => handleRevoke(operator.id)}>
                  Revoke
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </main>
    </div>
  )
}

