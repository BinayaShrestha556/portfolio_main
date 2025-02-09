export const revalidate=0
import React from "react";
import EmblaCarousel from "./ui/carousel";
import Reveal from "./animated-components/reveal";
import { Button } from "./ui/button";
import prismadb from "@/lib/db";
import Link from "next/link";
const Projects = async () => {
  const projects = await prismadb.project.findMany({
    orderBy:{
 priority:"desc"
    },
    include: {
      images: true,
    },
  
    
  });

  return (
    <div id="projects" className="pt-10 w-full min-h-full  mx-auto flex flex-col items-center justify-center">
      <div className="xl:w-[80%] mb-2 md:w-[90%] w-full">
        <Reveal>
          <p className="tracking-[5px]">PROJECTS</p>
        </Reveal>
      </div>
      {projects.map((e) => (
        <div
          key={e.title}
          className="xl:w-[80%] md:w-[90%] w-full flex flex-col gap-4 xl:h-96 lg:h-80  items-stretch lg:flex-row"
        >
          <EmblaCarousel className="h-96" images={e.images.map((e) => e.url)} />
          <div className="w-full flex gap-3 flex-col justify-center ">
            <Reveal>
              <h1 className="text-3xl font-bold -ml-2">{e.title}</h1>
            </Reveal>
            <p className="text-xl ">{e.description}</p>
            <div className="flex w-full gap-2">
              <Link href={e.liveWebsiteUrl}>
                <Button
                  size={"lg"}
                  variant="default"
                  className="rounded-[3px] text-white"
                >
                  Live Website
                </Button>
              </Link>
              <Link href={e.sourceCodeUrl}>
                {" "}
                <Button
                  variant={"secondary"}
                  size={"lg"}
                  className="rounded-[3px] text-white"
                >
                  source code
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    <div className="xl:w-[80%] mb-2 md:w-[90%] w-full mt-5 "><Link href="/projects" className="self-start "><Button className="rounded-[3px] text-white font-bold" size={"lg"}>View all projects</Button></Link></div>
    </div>
  );
};

export default Projects;
