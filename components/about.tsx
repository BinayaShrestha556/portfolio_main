import React from "react";
import Reveal from "./animated-components/reveal";
import BigDescription from "./ui/bigDescription";
import Orange from "./ui/orange";

const About = () => {
  return (
    <div id="aboutme" className="flex pt-10  p-2 items-center">
      <div className="md:w-[80%] w-full gap-4  md:flex-row flex-col-reverse mt-10 flex md:gap-2 m-auto ">
        <div  className=" w-full md:w-[60%] h-fit">
          <Reveal>
            <p  className="-ml-1 tracking-[5px]">
              ABOUT ME
            </p>
          </Reveal>
          <BigDescription className="text-left text-xl md:text-3xl  lg:text-4xl xl:text-5xl w-full">
            Highly motivated and{" "}
            detail-oriented <Orange>Full-Stack Web Developer</Orange> with
            experience in designing, building, and deploying{" "}
            <Orange>scalable web applications</Orange>. Proficient in front-end
            and back-end technologies, I excel in crafting intuitive user
            interfaces, developing <Orange>robust APIs</Orange>, and optimizing
            application performance.
          </BigDescription>
        </div>
        <div  className="w-[80%] self-center md:w-[40%] aspect-square bg-red-300"></div>
      </div>
    </div>
  );
};

export default About;
