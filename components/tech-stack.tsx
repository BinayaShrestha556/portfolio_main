import React from "react";
import Reveal from "./animated-components/reveal";
import { TechStack as TechStacks } from "@/data";
import FadeUp from "./animated-components/faade-up";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tech stacks and technologies",
  description:
    "All the programming language frameworks and technologies i use for development. Next.js, react, express, node, typescript",
};
const TechStack = () => {
  return (
    <div
      id="tech_stacks"
      className="w-[95%] overflow-hidden lg:w-[70%] m-auto  flex flex-col gap-8 items-center justify-center"
    >
      <Reveal className="text-2xl font-bold self-start">
        <h1>TECH STACK</h1>
      </Reveal>
      <section className="w-full flex flex-col items-center gap-4">
        {TechStacks.map((e, mi) => (
          <div key={e.title} className="w-full flex flex-col items-center">
            <h2 className="my-3 font-bold">{e.title}</h2>
            <ul className="flex gap-4 items-center justify-center flex-wrap ">
              {e.techStack.map((e, i) => (
                <FadeUp key={e.title} delay={mi * 0.1 + i * 0.1}>
                  <li className="flex group gap-1 lg:gap-2 border-border rounded hover:bg-primary  transition hover:text-black bg-secondary px-2.5 py-1.5 text-sm lg:px-3.5 lg:py-2.5 lg:text-base font-semibold relative cursor-pointer">
                    <e.icon className=" w-5 h-5 lg:w-6 lg:h-6 text-primary duration-300 transition group-hover:text-black" />
                    {e.title}

                    {/* Dropdown should be inside the same group */}

                    <div className="absolute opacity-0 group-hover:opacity-100 transition  w-40 top-[115%] rounded bg-white/5 shadow-inner shadow-white/10 backdrop-blur-lg  text-white text-sm -left-2   z-50 pointer-events-none group-hover:pointer-events-auto p-3 leading-tight">
                      <div className="absolute left-4  -top-1 h-[8px] w-[9px] rotate-45 overflow-hidden">
                        {" "}
                        <div className="h-3 w-3 relative bottom-[6.5px] right-1.5  bg-white/10 -rotate-45"></div>
                      </div>
                      {e.description}
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TechStack;
