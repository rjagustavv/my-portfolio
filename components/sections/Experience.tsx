import { experiences } from "@/data/experience";

const statistics = [
  {
    value: "3",
    label: "Projects",
  },
  {
    value: "5+",
    label: "Technologies",
  },
  {
    value: "2+",
    label: "Years Learning",
  },
  {
    value: "∞",
    label: "Curiosity",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-[var(--rule)]"
    >
      <div className="mx-auto max-w-[1120px] px-6 py-24 lg:px-12 lg:py-28">
        {/* Experience + Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* Sticky Heading */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              04 — Experience
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
              Experience & journey
            </h2>
          </div>

          {/* Experience + Statistics */}
          <div>
            {/* Experience list */}
            <div className="border-y border-[var(--rule)]">
              {experiences.map((experience) => (
                <article
                  key={`${experience.period}-${experience.title}`}
                  className="grid gap-4 border-b border-[var(--rule)] py-7 last:border-b-0 sm:grid-cols-[150px_1fr]"
                >
                  <p className="text-xs text-[var(--ink-muted)]">
                    {experience.period}
                  </p>

                  <div>
                    <h3 className="text-base font-medium">
                      {experience.title}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--ink-muted)]">
                      {experience.organization}
                    </p>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--ink-muted)]">
                      {experience.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-16">
              <div className="grid grid-cols-2 border-y border-[var(--rule)] sm:grid-cols-4">
                {statistics.map((statistic) => (
                  <div
                    key={statistic.label}
                    className="border-b border-[var(--rule)] px-5 py-7 sm:border-b-0 sm:border-r last:border-r-0"
                  >
                    <p className="text-3xl font-medium tracking-[-0.03em]">
                      {statistic.value}
                    </p>

                    <p className="mt-2 text-xs text-[var(--ink-muted)]">
                      {statistic.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}