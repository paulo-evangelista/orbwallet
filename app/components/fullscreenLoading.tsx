"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Logo } from "./logo";
import { BeatLoader } from "react-spinners";
interface FullScreenLogoProps {
  isLoading?: boolean;
  text: string;
}

export function FullScreenLoading(props: FullScreenLogoProps) {
  if (!props.isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
    >
      <div className="text-center mx-auto">
        <div className="w-32 mb-8 mx-auto">
          <Logo variant="icon" />
        </div>
        {props.text && (
          <p className="text-neutral-300 mb-4 text-xl">{props.text}</p>
        )}
        <BeatLoader color="#81559a" speedMultiplier={0.5} />
      </div>
    </motion.div>
  );
}
