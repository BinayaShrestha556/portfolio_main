import Reveal from "@/components/animated-components/reveal"
import { Button } from "@/components/ui/button"
import EmblaCarousel from "@/components/ui/carousel"

import { Images, Project } from "@prisma/client"
import Link from "next/link"

interface Projects extends Project{
  images:Images[]
}
const page =async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,{cache:"no-store"})
    const projects=await data.json()
  return (
    <div className="w-full min-h-full flex gap-6 flex-col justify-center p-3 ">
    <div className="xl:w-[80%] mb-2 md:w-[90%] m-auto pt-20  w-full">
    <Reveal>
      <p className="tracking-[5px]">PROJECTS</p>
    </Reveal>
  </div>
  {projects.map((e:Projects) => (
    <div
      key={e.title}
      className="xl:w-[80%] md:w-[90%] w-full mx-auto grid gap-4 xl:h-96 lg:h-80 h-96 items-stretch lg:grid-cols-2"
    >
      <EmblaCarousel className="h-96" images={e.images.map((e:Images) => e.url)} />
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
</div>

  )
}

export default page