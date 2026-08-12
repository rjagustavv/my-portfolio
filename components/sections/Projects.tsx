import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="border-b border-[var(--rule)]"
    >
      <div className="mx-auto max-w-[1120px] px-6 py-24 lg:px-12 lg:py-28">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              03 — Projects
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
              Selected work
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--ink-muted)]">
            A selection of projects I've built while exploring
            different areas of software development.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 space-y-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}