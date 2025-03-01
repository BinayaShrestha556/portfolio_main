"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface RevealProps {
  children: React.ReactNode;

  className?: string;
}
const Reveal: React.FC<RevealProps> = ({ children, className }) => {
  const [mounted, isMounted] = useState(false);
  useEffect(() => {
    isMounted(true);
  }, []);
  if (!mounted) return <div className="w-full px-2 py-0.5">{children}</div>;
  return (
    <div className={cn(`relative z-0 overflow-hidden w-fit`, className)}>
      <div className="w-full px-2 py-0.5"> {children} </div>
      <motion.div
        className="absolute bg-primary top-0 w-full h-full left-0  z-50"
        variants={{ hidden: { left: 0 }, show: { left: "100%" } }}
        initial="hidden"
        whileInView={{ left: "100%" }}
        transition={{ duration: 0.4, delay: 0.3 }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
