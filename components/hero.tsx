import React from "react";
import Reveal from "./animated-components/reveal";

import BigDescription from "./ui/bigDescription";
import Image from "next/image";
import dotted from "../public/26432.svg";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import FadeUp from "./animated-components/faade-up";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Binaya Shrestha",
  description: "Landing page section for the site",
};

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
          <h1 className="text-5xl lg:text-8xl text-center  font-bold tracking-tighter">
            BINAYA SHRESTHA
          </h1>
        </Reveal>
      </div>
      <div className=" w-2/3 md:w-1/2 self-center flex flex-col items-center">
        <BigDescription className="text-xl md:text-2xl lg:text-3xl lg:my-4 my-2">
          <h3>
            Full-Stack developer.{" "}
            <span className="text-muted-foreground">
              {" "}
              A tech enthusiast and self taught developer
            </span>{" "}
          </h3>
        </BigDescription>
        <div className="flex items-center gap-4 mt-4 justify-center">
          <FadeUp delay={0.05}>
            <Link
              href="https://github.com/BinayaShrestha556"
              className="flex items-center gap-1 px-3 py-2 rounded  underline underline-offset-2 hover:text-primary transition"
            >
              <FaGithub color="#19e691" className="text-xl" />
              Github
            </Link>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              href="https://www.linkedin.com/in/binaya-shrestha-1b906a326"
              className="items-center flex gap-1 px-3 py-2 rounded underline underline-offset-2 hover:text-primary transition"
            >
              <FaLinkedin color="#19e691" className="text-xl" />
              LinkedIn
            </Link>
          </FadeUp>
          <FadeUp delay={0.15}>
            <Link
              href="mailto:binayashrestha862@gmail.com"
              className="flex items-center gap-1 px-3 py-2 rounded underline underline-offset-2 hover:text-primary transition"
            >
              <MdEmail color="#19e691" />
              Email
            </Link>
          </FadeUp>
        </div>
        <div className="relative self-end">
          <div className="absolute h-48 w-48 -right-14 -bottom-12 border-r-8  border-b-8 border-neutral-500/15"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
