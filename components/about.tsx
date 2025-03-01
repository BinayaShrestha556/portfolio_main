import React from "react";
import Reveal from "./animated-components/reveal";

import Orange from "./ui/orange";
import Image from "next/image";

const About = () => {
  return (
    <div id="aboutme" className="flex pt-10  p-2 items-center">
      <div className="md:w-[70%] w-full gap-4 items-center justify-between  md:flex-row flex-col-reverse mt-10 flex  m-auto ">
        <div className=" w-full md:w-1/2 h-fit">
          <Reveal className="my-4">
            <h1 className="-ml-1 text-2xl font-bold  ">🚀 ABOUT ME</h1>
          </Reveal>
          <section className="text-left text-base md:text-lg text-muted-foreground lg:text-xl  w-full">
            Highly motivated and detail-oriented{" "}
            <Orange>Full-Stack Web Developer</Orange> with experience in
            designing, building, and deploying{" "}
            <Orange>scalable web applications</Orange>.<br />
            <br /> Proficient in front-end and back-end technologies, I excel in
            crafting intuitive user interfaces, developing{" "}
            <Orange>robust APIs</Orange>, and optimizing application
            performance.
          </section>
        </div>
        <div className="w-[80%] self-center md:w-[40%] aspect-square overflow-hidden rounded-full relative">
          <Image
            src="/image.png"
            alt=""
            fill
            className="object-center  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
