"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FadeUp = ({
  children,
  delay,
}: {
  delay: number;
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);
  const variations = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom,
        duration: 0.5, // You can adjust this
        ease: "easeOut",
      },
    }),
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <motion.div
      variants={variations}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
};

export default FadeUp;
