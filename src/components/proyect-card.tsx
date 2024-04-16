import { Github } from "./icons";

interface Props {
  name: string;
  href: string | null;
  description: string;
  img: string;
  repository: string | null;
  techs: string[];
}

export function ProjectCard({
  name,
  href,
  description,
  img,
  repository,
  techs,
}: Props) {
  return (
    <article>
      <div className="relative aspect-[2_/_3] h-64 w-full overflow-hidden rounded-lg hover:*:scale-125 max-[480px]:h-44">
        <img
          alt={`Project ${name}`}
          src={img}
          className="absolute aspect-[2_/_3] h-full w-full transform overflow-hidden bg-cover bg-center object-cover transition-all ease-in-out"
        />
      </div>
      <div className="space-y-2 py-1">
        <p className="line-clamp-1 font-medium">{name}</p>
        <span className="text-sm text-neutral-400">{description}</span>
        <div className="space-y-2">
          <div className="space-x-1">
            {techs.map((tech) => (
              <span className="rounded-xl bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-400">
                {tech}
              </span>
            ))}
          </div>
          <div className="ml-auto mt-2 flex items-center gap-0.5">
            {repository !== null && (
              <a
                href={repository}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 items-center justify-center gap-2 rounded-lg px-3 py-2 text-neutral-400 transition-colors duration-500 hover:bg-neutral-800 hover:text-white"
              >
                <Github className="size-4" />
                Repository
              </a>
            )}
            {href !== null && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 items-center justify-center gap-2 rounded-lg px-3 py-2 text-neutral-400 transition-colors duration-500 hover:bg-neutral-800 hover:text-white"
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
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
