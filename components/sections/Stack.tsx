import { technologies } from "@/data/technologies";

export function Stack() {
  return (
    <section
      id="stack"
      className="border-b border-[var(--rule)]"
    >
      <div className="mx-auto max-w-[1120px] px-6 py-24 lg:px-12 lg:py-28">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            02 — Stack
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            Tools I work with
          </h2>

          <p className="mt-5 text-[16px] leading-7 text-[var(--ink-muted)]">
            Technologies I use to design, build, and ship digital products.
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[var(--rule)] bg-[var(--rule)] sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="group bg-[var(--paper)] p-6 transition-colors hover:bg-[var(--surface)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">
                  {technology.name}
                </h3>

                <span className="text-xs text-[var(--ink-muted)] transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </div>

              <p className="mt-2 text-xs text-[var(--ink-muted)]">
                {technology.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}