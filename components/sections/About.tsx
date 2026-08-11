import { profile } from "@/data/profile";

export function About() {
  return (
    <section
      id="about"
      className="border-b border-[var(--rule)]"
    >
      <div className="mx-auto grid max-w-[1120px] gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-28">
        {/* Section heading */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            01 — About
          </p>

          <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
            A little about me
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-2xl">
          <div className="space-y-5 text-[16px] leading-7 text-[var(--ink-muted)]">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Location / availability */}
          <div className="mt-10 grid gap-6 border-t border-[var(--rule)] pt-6 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                Location
              </p>

              <p className="mt-2 text-sm">
                {profile.location}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                Currently
              </p>

              <p className="mt-2 text-sm">
                {profile.availability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}