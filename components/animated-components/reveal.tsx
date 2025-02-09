"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
interface RevealProps{
  children:React.ReactNode
  width?:string
}
const Reveal:React.FC<RevealProps> = ({children,width}) => {
  const [mounted, isMounted] = useState(false);
  useEffect(() => {
    isMounted(true);
  }, []);
  if (!mounted) return ;
  return (
    <div className={cn(`relative z-0 overflow-hidden w-fit`,width)}>
      <div className="w-full px-2 py-0.5"> {children} </div>
      <motion.div
        className="absolute bg-[rgb(255,81,0)] top-0 w-full h-full left-0  z-50"
        variants={{ hidden: { left: 0 }, show: { left: "100%" } }}
        initial="hidden"
        whileInView={{left:"100%"}}
        transition={{ duration: 0.4, delay: 0.3 }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
