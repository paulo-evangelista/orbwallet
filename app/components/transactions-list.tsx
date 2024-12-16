import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"

interface Transaction {
  id: number
  date: string
  amount: number
  currency: string
  type: 'send' | 'receive'
}

interface TransactionsListProps {
  operatorId: number | undefined
}

export function TransactionsList({ operatorId }: TransactionsListProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    // In a real application, you would fetch transactions from an API
    // For this example, we'll use mock data
    const mockTransactions: Transaction[] = [
      { id: 1, date: '2023-06-15', amount: 100, currency: 'USD', type: 'send' },
      { id: 2, date: '2023-06-14', amount: 50, currency: 'EUR', type: 'receive' },
      { id: 3, date: '2023-06-13', amount: 75, currency: 'GBP', type: 'send' },
    ]
    setTransactions(mockTransactions)
  }, [operatorId])

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <Card key={transaction.id} className="bg-zinc-800 border-none">
          <CardContent className="p-4 flex justify-between items-center">
            <div>
              <p className="font-bold text-white">{transaction.type === 'send' ? 'Sent' : 'Received'}</p>
              <p className="text-sm text-gray-400">{transaction.date}</p>
            </div>
            <p className={`font-bold ${transaction.type === 'send' ? 'text-red-500' : 'text-green-500'}`}>
              {transaction.type === 'send' ? '-' : '+'}{transaction.amount} {transaction.currency}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

