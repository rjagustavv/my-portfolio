import type { Project } from "@/types/portfolio";

interface ProjectCardProps {
  project: Project;
  reverse?: boolean;
}

export function ProjectCard({
  project,
  reverse = false,
}: ProjectCardProps) {
  return (
    <article
      className={`grid overflow-hidden rounded-2xl border border-[var(--rule)] bg-[var(--surface)] lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative min-h-[320px] bg-[var(--paper)] lg:min-h-[480px]">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="rounded-md border border-dashed border-[var(--rule)] px-3 py-2 font-mono text-xs text-[var(--ink-muted)]">
              /public/projects/{project.slug}.webp
            </span>
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
        {/* Client */}
        {project.client && (
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
            {project.client}
          </p>
        )}

        {/* Year */}
        {project.year && (
          <p className="mt-4 font-mono text-xs text-[var(--ink-muted)]">
            {project.year}
          </p>
        )}

        {/* Title */}
        <h3 className="mt-4 text-2xl font-medium tracking-[-0.03em] sm:text-3xl">
          {project.name}
        </h3>

        {/* Description */}
        <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[var(--rule)] px-3 py-1.5 font-mono text-xs text-[var(--ink-muted)]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-[var(--rule)] px-4 py-2.5 font-mono text-xs transition-colors hover:border-[var(--ink-muted)]"
            >
              View repository
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-[var(--rule)] px-4 py-2.5 font-mono text-xs transition-colors hover:border-[var(--ink-muted)]"
            >
              Live demo
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}