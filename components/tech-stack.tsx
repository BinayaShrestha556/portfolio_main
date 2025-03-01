import React from "react";
import Reveal from "./animated-components/reveal";
import { TechStack as TechStacks } from "@/data";

const TechStack = () => {
  return (
    <div className="w-[70%] m-auto h-[80vh] flex flex-col gap-8 items-center justify-center">
      <Reveal className="text-2xl font-bold self-start">
        <h1>TECH STACK</h1>
      </Reveal>
      <section className="w-full flex flex-col gap-4">
        {TechStacks.map((e) => (
          <div key={e.title} className="w-full flex flex-col items-center">
            <h2 className="my-4 font-bold">{e.title}</h2>
            <div className="flex gap-4 ">
              {" "}
              {e.techStack.map((e) => (
                <div key={e.title} className="group relative h-fit">
                  <button className="flex gap-2 shadow-inner shadow-white/[0.07] rounded hover:bg-primary  transition hover:text-black bg-secondary px-3.5 py-2.5 font-semibold">
                    <e.icon className="w-6 h-6 text-primary duration-300 transition group-hover:text-black" />
                    {e.title}
                  </button>

                  {/* Dropdown should be inside the same group */}

                  <div className="absolute opacity-0 group-hover:opacity-100 transition  w-40 top-[115%] rounded bg-white/5 shadow-inner shadow-white/10 backdrop-blur-lg  text-white text-sm   z-50 pointer-events-none group-hover:pointer-events-auto p-3 leading-tight">
                    <div className="absolute left-4  -top-1 h-[8px] w-[9px] rotate-45 overflow-hidden">
                      {" "}
                      <div className="h-3 w-3 relative bottom-[6.5px] right-1.5  bg-white/10 -rotate-45"></div>
                    </div>
                    {e.description}
                  </div>
                </div>
              ))}{" "}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TechStack;
