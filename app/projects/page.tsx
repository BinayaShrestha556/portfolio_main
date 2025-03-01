import Reveal from "@/components/animated-components/reveal";
import ProjectCard from "@/components/projectCard";
import { ProjectsData } from "@/data";
const page = async () => {
  return (
    <div className="xl:w-[50%] m-auto  md:w-[80%] w-full min-h-full flex gap-14 flex-col justify-center p-3 ">
      <div className="m-auto w-full pt-20 mb-2  ">
        <Reveal>
          <p className="font-bold text-3xl">PROJECTS</p>
        </Reveal>
      </div>
      {ProjectsData.map((e) => (
        <ProjectCard
          key={e.name}
          description={e.description}
          images={e.images}
          name={e.name}
          techStack={e.techStack}
          github={e.github}
          liveUrl={e.liveUrl}
          github_back={e.github_back}
          github_front={e.github_front}
        />
      ))}
    </div>
  );
};

export default page;
