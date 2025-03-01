import { Projects } from "@/data";
import React from "react";
import EmblaCarousel from "./ui/carousel";

import Link from "next/link";
import { Button } from "./ui/button";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard: React.FC<Projects> = (e) => {
  const bgs = [
    "hsla(319, 88%, 50%, 0.5)", // #9E0A56
    "hsla(226, 64%, 50%, 0.5)", // #1A2F79
    "hsla(164, 85%, 50%, 0.5)", // #0A845B
    "hsla(164, 85%, 50%, 0.5)", // #0A845B (same as above)
  ];
  const randomNum = Math.floor(Math.random() * 4);
  const bg = bgs[randomNum];

  return (
    <div
      key={e.name}
      style={{ backgroundColor: bg }}
      className={`w-full m-auto flex flex-col rounded-[5px] p-1`}
    >
      <EmblaCarousel className="h-80 w-full " bg={bg} images={e.images} />
      <div className="w-full p-4 flex gap-3 flex-col justify-center ">
        <div className="flex gap-2 items-center justify-between">
          <h1 className="text-2xl font-bold">{e.name}</h1>
          <div className="flex gap-6">
            {e.liveUrl && (
              <Link href={e.liveUrl}>
                <FaExternalLinkAlt size={25} />
              </Link>
            )}

            {e.github && (
              <Link href={e.github}>
                {" "}
                <FaGithub size={25} />
              </Link>
            )}

            {e.github_back && (
              <Link href={e.github_back} className="flex items-center gap-1">
                {" "}
                <FaGithub size={25} /> back
              </Link>
            )}

            {e.github_front && (
              <Link href={e.github_front} className="flex items-center gap-1">
                {" "}
                <FaGithub size={25} /> front
              </Link>
            )}
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          {e.techStack.map((tech) => (
            <Button
              key={tech.title}
              className="flex items-center gap-2 hover:text-primary"
              size="sm"
              variant="secondary"
            >
              <tech.icon /> {tech.title}
            </Button>
          ))}
        </div>
        <p className=" ">{e.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
