import React from "react";
import Reveal from "./animated-components/reveal";

import BigDescription from "./ui/bigDescription";
import Image from "next/image";
import dotted from "../public/26432.svg";
import { Button } from "./ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  return (
    <div className=" h-full w-full flex items-center flex-col justify-center">
      <div className="relative">
        <Image
          className="invert absolute z-0 -left-20 -bottom-5 opacity-15"
          height={200}
          width={200}
          src={dotted}
          alt="design "
        />
        <div className="absolute right-[80%] -top-24 h-48 w-48 bg-neutral-500/10 z-1"></div>
        <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold">
          {" "}
          Hello there! I&apos;m -{" "}
        </h2>
        <Reveal className="my-1">
          <h1 className=" text-8xl  font-bold tracking-tighter">
            BINAYA SHRESTHA
          </h1>
        </Reveal>
      </div>
      <div className=" w-2/3 md:w-1/2 self-center flex flex-col items-center">
        <BigDescription className="text-xl md:text-2xl lg:text-3xl my-4">
          <h3>
            Full-Stack developer.{" "}
            <span className="text-muted-foreground">
              {" "}
              A tech enthusiast and self taught developer
            </span>{" "}
          </h3>
        </BigDescription>
        <div className="flex items-center gap-4 mt-4 justify-center">
          <Link href="https://github.com/BinayaShrestha556">
            <Button
              variant="secondary"
              className="font-bold text-base flex items-center rounded"
            >
              <FaGithub color="#19e691" className="text-xl" />
              Github
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/binaya-shrestha-1b906a326">
            {" "}
            <Button
              variant="secondary"
              className="font-bold text-base flex items-center rounded"
            >
              <FaLinkedin color="#19e691" className="text-xl" />
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:binayashrestha862@gmail.com">
            <Button
              variant="secondary"
              className="font-bold text-base flex items-center rounded"
            >
              <MdEmail color="#19e691" />
              Email
            </Button>
          </Link>
        </div>
        <div className="relative self-end">
          <div className="absolute h-48 w-48 -right-14 -bottom-12 border-r-8  border-b-8 border-neutral-500/15"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
