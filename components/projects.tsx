export const revalidate = 0;
import React from "react";

import Reveal from "./animated-components/reveal";

import { ProjectsData } from "@/data";
import Link from "next/link";
import ProjectCard from "./projectCard";
import { FaArrowRight } from "react-icons/fa";
import FadeUp from "./animated-components/faade-up";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
  description: "all the cool projects here",
};
const Projects = async () => {
  return (
    <div
      id="projects"
      className="pt-10  min-h-full xl:w-[80%] mb-2 md:w-[90%] w-full  mx-auto flex gap-5 flex-col items-center justify-center"
    >
      <div className=" w-full"></div>
      <div className="flex flex-col lg:flex-row w-full items-stretch gap-5 lg:gap-20">
        <div className="flex flex-col flex-1 relative justify-center mt-10">
          <Reveal className="justify-self-start lg:absolute mb-5  lg:top-10 lg:left-10 lg:-mb-24">
            <h1 className=" text-4xl font-bold">PROJECTS</h1>
            <span className="flex items-center gap-2">
              <h2 className="text-muted-foreground underline text-lg">
                Some of my curated works
              </h2>
              <FaArrowRight size={22} className="text-primary" />
            </span>
          </Reveal>
          <div className="flex flex-col flex-1 gap-5 mt-5 lg:mt-[60%] lg:gap-20">
            <FadeUp delay={0.25}>
              <ProjectCard
                n={0}
                description={ProjectsData[1].description}
                images={ProjectsData[1].images}
                name={ProjectsData[1].name}
                techStack={ProjectsData[1].techStack}
                github={ProjectsData[1].github}
                liveUrl={ProjectsData[1].liveUrl}
                github_back={ProjectsData[1].github_back}
                github_front={ProjectsData[1].github_front}
              />
            </FadeUp>
            <FadeUp delay={0.25}>
              <ProjectCard
                n={3}
                description={ProjectsData[3].description}
                images={ProjectsData[3].images}
                name={ProjectsData[3].name}
                techStack={ProjectsData[3].techStack}
                github={ProjectsData[3].github}
                liveUrl={ProjectsData[3].liveUrl}
                github_back={ProjectsData[3].github_back}
                github_front={ProjectsData[3].github_front}
              />
            </FadeUp>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-5 lg:gap-20">
          <FadeUp delay={0.25}>
            <ProjectCard
              n={1}
              description={ProjectsData[0].description}
              images={ProjectsData[0].images}
              name={ProjectsData[0].name}
              techStack={ProjectsData[0].techStack}
              github={ProjectsData[0].github}
              liveUrl={ProjectsData[0].liveUrl}
              github_back={ProjectsData[0].github_back}
              github_front={ProjectsData[0].github_front}
            />
          </FadeUp>
          <FadeUp delay={0.25}>
            <ProjectCard
              n={2}
              description={ProjectsData[2].description}
              images={ProjectsData[2].images}
              name={ProjectsData[2].name}
              techStack={ProjectsData[2].techStack}
              github={ProjectsData[2].github}
              liveUrl={ProjectsData[2].liveUrl}
              github_back={ProjectsData[2].github_back}
              github_front={ProjectsData[2].github_front}
            />
          </FadeUp>
        </div>
      </div>

      <div className=" w-full mt-5 ">
        <Link
          prefetch={false}
          href="/projects"
          className="self-start w-fit flex items-center gap-2 text-2xl font-bold text-primary hover:underline"
        >
          View All Projects <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Projects;
