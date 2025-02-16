import React from "react";
import Reveal from "./animated-components/reveal";
import BigDescription from "./ui/bigDescription";
import Orange from "./ui/orange";
import Image from "next/image";

const About = () => {
  return (
    <div id="aboutme" className="flex pt-10  p-2 items-center">
      <div className="md:w-[80%] w-full gap-4 items-center  md:flex-row flex-col-reverse mt-10 flex md:gap-5 m-auto ">
        <div  className=" w-full md:w-[58%] h-fit">
          <Reveal>
            <h1  className="-ml-1 tracking-[4px] text-lg font-bold ">
              ABOUT ME
           </h1>
          </Reveal>
          <BigDescription className="text-left text-xl md:text-3xl  lg:text-4xl  w-full">
            Highly motivated and{" "}
            detail-oriented <Orange>Full-Stack Web Developer</Orange> with
            experience in designing, building, and deploying{" "}
            <Orange>scalable web applications</Orange>. Proficient in front-end
            and back-end technologies, I excel in crafting intuitive user
            interfaces, developing <Orange>robust APIs</Orange>, and optimizing
            application performance.
          </BigDescription>
        </div>
        <div  className="w-[80%] self-center md:w-[40%] aspect-square overflow-hidden rounded-xl relative">
          <Image src="/image.png" alt="" fill className="object-center  object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
