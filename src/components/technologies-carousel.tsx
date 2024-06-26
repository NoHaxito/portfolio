import { chunk } from "../lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "./carousel";
import {
  Nodejs,
  React,
  Svelte,
  Typescript,
  Javascript,
  TailwindCSS,
  Docker,
  Git,
  Nextjs,
  Postgresql,
  Mongodb,
  Mysql,
} from "./icons";
import { useMemo } from "react";

export function TechnologiesCarousel() {
  const technologies = useMemo(
    () =>
      chunk(
        [
          { name: "Javascript", icon: Javascript },
          { name: "Typescript", icon: Typescript },
          { name: "React", icon: React },
          { name: "Next.js", icon: Nextjs },
          { name: "Svelte", icon: Svelte },
          { name: "TailwindCSS", icon: TailwindCSS },
          { name: "Node.js", icon: Nodejs },
          { name: "Postgresql", icon: Postgresql },
          { name: "Mongodb", icon: Mongodb },
          { name: "Mysql", icon: Mysql },
          { name: "Docker", icon: Docker },
          { name: "Git", icon: Git },
        ],
        8,
      ),
    [],
  );
  return (
    <Carousel className="h-full p-2">
      <CarouselContent className="h-full p-2">
        {technologies.map((technologies, i) => (
          <CarouselItem className="h-full" key={i}>
            <div className="grid h-full min-h-full  grid-cols-4 place-items-center">
              {technologies.map((technology) => {
                const { icon: Icon } = technology;
                return (
                  <div
                    className="flex flex-col items-center gap-y-1"
                    key={technology.name}
                    title={technology.name}
                  >
                    <Icon className="size-12" />
                    <span className="text-neutral-400">{technology.name}</span>
                  </div>
                );
              })}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
}
