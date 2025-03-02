import { Projects } from "@/data";
import React from "react";
import EmblaCarousel from "./ui/carousel";

import Link from "next/link";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard: React.FC<Projects & { n?: 1 | 2 | 3 | 0 }> = (e) => {
  const bgs = [
    "hsla(319, 88%, 50%, 0.7)", // #9E0A56
    "hsla(226, 64%, 50%, 0.7)", // #1A2F79
    "hsla(164, 85%, 40%, 0.7)", // #0A845B
    "hsla(164, 85%, 50%, 0.7)", // #0A845B (same as above)
  ];
  const randomNum = Math.floor(Math.random() * 4);

  const bg = e.n !== undefined ? bgs[e.n] : bgs[randomNum];

  return (
    <div
      key={e.name}
      style={{ backgroundColor: bg }}
      className={`w-full m-auto flex flex-col rounded-[5px] p-1`}
    >
      <EmblaCarousel className="h-80 w-full " images={e.images} />
      <div className="w-full  flex gap-3 flex-col justify-center ">
        <div className="flex gap-2 items-center justify-between px-3 pt-3">
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
        <ul className="flex gap-2 flex-wrap px-3">
          {e.techStack.map((tech) => (
            <li
              key={tech.title}
              className="flex items-center bg-secondary cursor-crosshair px-2.5 py-1.5 text-sm rounded gap-2 hover:text-primary"
            >
              <tech.icon /> {tech.title}
            </li>
          ))}
        </ul>
        <p className="bg-background/50 p-3 shadow-inner shadow-white/20 rounded-[4px]">
          {e.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
