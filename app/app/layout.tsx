"use client";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import { useRouter, usePathname } from "next/navigation";
import { Home, User, Settings, Wallet, Clock } from "lucide-react";
import { motion } from "framer-motion";

const dmSans = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const showNavbar = ![
    "/welcome",
    "/login",
    "/create-wallet",
    "/generate-mn",
  ].includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${dmSans.className} min-h-screen bg-black text-white flex flex-col`}
      >
        <main className="flex-grow overflow-y-auto">{children}</main>
        {showNavbar && (
          <motion.nav
            className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="container mx-auto px-4">
              <div className="flex justify-between items-center h-16 relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => router.push("/assets")}
                  className={`text-gray-400 hover:text-white focus:outline-none ${
                    pathname === "/assets" ? "text-purple-400" : ""
                  }`}
                >
                  <Wallet size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => router.push("/operations")}
                  className={`text-gray-400 hover:text-white focus:outline-none ${
                    pathname === "/operations" ? "text-purple-400" : ""
                  }`}
                >
                  <Clock size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => router.push("/")}
                  className={` bg-purple-600/80 text-white p-3 rounded-full shadow-md hover:bg-purple-700/50 focus:outline-none transition-colors ${
                    pathname === "/" ? "ring-purple-300" : ""
                  }`}
                >
                  <Home size={26} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => router.push("/operators")}
                  className={`text-gray-400 hover:text-white focus:outline-none ${
                    pathname === "/operators" ? "text-purple-400" : ""
                  }`}
                >
                  <User size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => router.push("/settings")}
                  className={`text-gray-400 hover:text-white focus:outline-none ${
                    pathname === "/settings" ? "text-purple-400" : ""
                  }`}
                >
                  <Settings size={24} />
                </motion.button>
              </div>
            </div>
          </motion.nav>
        )}
      </body>
    </html>
  );
}
