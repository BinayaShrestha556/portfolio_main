import React from "react";
import Reveal from "./animated-components/reveal";
import Orange from "./ui/orange";
import BigDescription from "./ui/bigDescription";
import Image from "next/image";
import dotted from "../public/26432.svg";


const Hero = () => {
  return (
    <div className=" flex-grow-0 flex-shrink flex items-center flex-col justify-center">
      
      
        <div className="relative">
            <Image
          className="invert absolute z-0 -left-full -bottom-5 opacity-10"
          height={200}
          width={200}
          src={dotted}
          alt="design "
        />
        <div className="absolute right-[80%] -top-24 h-48 w-48 bg-neutral-500/5 z-1">

        </div>
        
        <Reveal>
          <h1 className="tracking-[4px] text-lg font-bold">BINAYA SHRESTHA</h1>
        </Reveal>
        </div>
        <div className=" w-2/3 md:w-1/2">
      <BigDescription>

            HI! IM <Orange>BINAYA</Orange> , AN EXPERIENCED AND SKILLFULL <Orange>FULLSTACK DEVELOPER</Orange> 
            <div className="relative">
              <div className="absolute h-48 w-48 -right-4 -bottom-12 border-r-4  border-b-4 border-neutral-500/10">

              </div>
            </div>
           
        </BigDescription>

        </div>
      </div>

    
  );
};

export default Hero;
