import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselDots,
} from "./carousel";
import projects from "../data/projects.json";
import { ProjectCard } from "./proyect-card";

export function ProjectsCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      className="h-full min-w-full"
    >
      <CarouselContent className="h-full">
        {projects.map((project) => (
          <CarouselItem key={`Project ${project.name}`}>
            <ProjectCard {...project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselDots />
    </Carousel>
  );
}
