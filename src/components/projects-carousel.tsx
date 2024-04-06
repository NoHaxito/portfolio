import chunk from "lodash.chunk";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "./carousel";
import projects from "../data/projects.json";
import { Github } from "./icons";

export function ProjectsCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="h-full min-w-full"
    >
      <CarouselContent className="h-full">
        {projects.map(
          ({ img, name, description, repository, techs, href }, i) => (
            <CarouselItem key={`Project ${name}`}>
              <article className="overflow-hidden">
                <div className="relative max-[480px]:h-44 h-64 w-full overflow-hidden rounded-lg hover:*:scale-150 sm:h-52">
                  <img
                    src={img}
                    className="absolute aspect-video h-full w-full scale-125 transform overflow-hidden bg-cover bg-center object-cover transition-all ease-in-out"
                  />
                </div>
                <div className="space-y-2 py-1">
                  <p className="font-medium line-clamp-2">{name}</p>
                  <span className="text-sm text-neutral-400">
                    {description}
                  </span>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-0.5">
                      {techs.map((tech) => (
                        <span className="rounded-xl bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-400">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-0.5">
                      <a
                        href={repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 flex items-center justify-center gap-2 rounded-lg hover:bg-neutral-800"
                      >
                        <Github className="size-4" />
                      </a>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="size-8 flex items-center justify-center gap-2 rounded-lg hover:bg-neutral-800"
                      >
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </CarouselItem>
          )
        )}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
}
