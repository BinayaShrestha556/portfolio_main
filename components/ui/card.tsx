import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
interface CardProps {
  className: string;
  src: string;
  children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ className, src, children }) => {
  return (
    <div
      className={cn(
        "rounded-[4px] cursor-pointer border sborder-border flex items-center flex-col justify-center group relative hover:border-opacity-100 border-opacity-0 transition overflow-hidden ",
        className
      )}
    >
      <Image
        src={src}
        fill
        alt="logo here"
        className="object-cover object-center"
      />
      <div className="h-full w-full p-4 flex items-center flex-col justify-center  z-30 bg-primary opacity-0 group-hover:backdrop-blur-sm  group-hover:flex group-hover:opacity-100 transition ">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
