export const revalidate = 0;
import React from "react";

import Reveal from "./animated-components/reveal";

import { ProjectsData, Projects as Project } from "@/data";
import Link from "next/link";
import ProjectCard from "./projectCard";
import { FaArrowRight } from "react-icons/fa";

const Projects = async () => {
  return (
    <div
      id="projects"
      className="pt-10  min-h-full xl:w-[80%] mb-2 md:w-[90%] w-full  mx-auto flex gap-5 flex-col items-center justify-center"
    >
      <div className=" w-full"></div>
      <div className="flex w-full items-stretch gap-20">
        <div className="flex flex-col flex-1 justify-center">
          <Reveal className="justify-self-start mt-5 ml-5 -mb-24">
            <h1 className=" text-2xl font-bold">PROJECTS</h1>
            <h2 className="text-muted-foreground">Some of my curated works</h2>
          </Reveal>
          <ProjectCard
            description={ProjectsData[1].description}
            images={ProjectsData[1].images}
            name={ProjectsData[1].name}
            techStack={ProjectsData[1].techStack}
            github={ProjectsData[1].github}
            liveUrl={ProjectsData[1].liveUrl}
            github_back={ProjectsData[1].github_back}
            github_front={ProjectsData[1].github_front}
          />
        </div>
        <div className="flex flex-col flex-1 gap-20">
          <ProjectCard
            description={ProjectsData[0].description}
            images={ProjectsData[0].images}
            name={ProjectsData[0].name}
            techStack={ProjectsData[0].techStack}
            github={ProjectsData[0].github}
            liveUrl={ProjectsData[0].liveUrl}
            github_back={ProjectsData[0].github_back}
            github_front={ProjectsData[0].github_front}
          />
          <ProjectCard
            description={ProjectsData[2].description}
            images={ProjectsData[2].images}
            name={ProjectsData[2].name}
            techStack={ProjectsData[2].techStack}
            github={ProjectsData[2].github}
            liveUrl={ProjectsData[2].liveUrl}
            github_back={ProjectsData[2].github_back}
            github_front={ProjectsData[2].github_front}
          />
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
