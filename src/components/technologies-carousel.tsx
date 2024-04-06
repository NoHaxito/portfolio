import chunk from "lodash.chunk";
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
import { Icons } from "./icons";
import { useMemo } from "react";

export function TechnologiesCarousel() {
  const technologies = useMemo(
    () =>
      chunk(
        [
          { name: "Node.js", icon: Nodejs },
          { name: "React", icon: React },
          { name: "Svelte", icon: Svelte },
          { name: "Typescript", icon: Typescript },
          { name: "Javascript", icon: Javascript },
          { name: "TailwindCSS", icon: TailwindCSS },
          { name: "Docker", icon: Docker },
          { name: "Git", icon: Git },
          { name: "Next.js", icon: Nextjs },
          { name: "Postgresql", icon: Postgresql },
          { name: "Mongodb", icon: Mongodb },
          { name: "Mysql", icon: Mysql },
        ],
        8
      ),
    []
  );
  return (
    <Carousel className="h-full p-2">
      <CarouselContent className="h-full p-2">
        {technologies.map((technologies, i) => (
          <CarouselItem className="h-full" key={i}>
            <div className="grid h-full min-h-full grid-cols-4 place-items-center">
              {technologies.map((technology) => {
                const { icon: Icon } = technology;
                return (
                  <div key={technology.name} title={technology.name}>
                    <Icon className="size-12" />
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
