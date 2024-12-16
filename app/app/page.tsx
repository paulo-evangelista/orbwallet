"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { ArrowUpRight, ArrowDownRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";

// Mock data for the chart
const chartData = [
  { date: "2023-01-01", value: 1000 },
  { date: "2023-02-01", value: 1200 },
  { date: "2023-03-01", value: 1100 },
  { date: "2023-04-01", value: 1400 },
  { date: "2023-05-01", value: 1300 },
  { date: "2023-06-01", value: 1400 },
];

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

// Mock data for recent operations
const recentOperations = [
  {
    id: 1,
    user: { name: "Alice", image: "/placeholder2.svg?height=32&width=32" },
    asset: "BTC",
    amount: 0.5,
    type: "send",
  },
  {
    id: 2,
    user: { name: "Bob", image: "/placeholder2.svg?height=32&width=32" },
    asset: "ETH",
    amount: 2.0,
    type: "receive",
  },
  {
    id: 3,
    user: { name: "Charlie", image: "/placeholder2.svg?height=32&width=32" },
    asset: "ADA",
    amount: 100,
    type: "send",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function HomePage() {
  const [totalValue, setTotalValue] = useState(35800.7);
  const router = useRouter();

  const { percentageChange, isIncreasing } = useMemo(() => {
    const lastValue = chartData[chartData.length - 1].value;
    const secondLastValue = chartData[chartData.length - 2].value;
    const change = ((lastValue - secondLastValue) / secondLastValue) * 100;
    return {
      percentageChange: Math.abs(change).toFixed(2),
      isIncreasing: change >= 0,
    };
  }, []);

  const chartColor = isIncreasing ? "#22c55e" : "#ef4444"; // green-500 or red-500

  return (
    <motion.div
      className="flex flex-col"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <header className="p-6">
        <motion.div
          className="max-w-[50px] mx-auto"
          initial="hidden"
          animate="visible"
        >
          <Logo variant="icon" />
        </motion.div>
      </header>

      <motion.div
        className=" mx-auto text-center"
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-xl text-gray-400 mb-2">Total Portfolio Value</h2>
        <p className="text-5xl font-bold">
          $
          {totalValue.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <div
          className={`flex justify-center pt-2 pr-4 w-full ${
            isIncreasing ? "text-green-500" : "text-red-500"
          }`}
        >
          {isIncreasing ? (
            <ArrowUpRight size={20} />
          ) : (
            <ArrowDownRight size={20} />
          )}
          <p className="ml-1">{percentageChange}%</p>
        </div>
      </motion.div>
      <div className="flex justify-between items-center mb-2"></div>

      <motion.div
        className="h-[100px] w-full"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="value"
              stroke={chartColor}
              strokeWidth={2}
              fill="url(#colorValue)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

      <div className="px-6 pt-4 space-y-8">
        <motion.div
          className="space-y-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Your Assets</h2>
            <Button
              variant="ghost"
              className="text-purple-400"
              onClick={() => router.push("/assets")}
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          {coinData.slice(0, 2).map((coin, index) => (
            <motion.div
              key={coin.symbol}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900 border-none">
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recent Operations</h2>
            <Button
              variant="ghost"
              className="text-purple-400"
              onClick={() => router.push("/operations")}
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          {recentOperations.slice(0, 2).map((operation, index) => (
            <motion.div
              key={operation.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-zinc-900 border-none">
                <CardContent className="p-4 flex items-center">
                  <Image
                    src={operation.user.image}
                    alt={operation.user.name}
                    width={32}
                    height={32}
                    className="rounded-full mr-4"
                  />
                  <div className="flex-grow">
                    <h3 className="font-bold text-white">
                      {operation.user.name}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {operation.type === "send" ? "Sent" : "Received"}{" "}
                      {operation.amount} {operation.asset}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <div className="h-20" />
        </motion.div>
      </div>
    </motion.div>
  );
}
