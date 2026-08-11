import { ArrowDownRight, MapPin } from "lucide-react";

import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="border-b border-[var(--rule)]"
    >
      <div className="mx-auto grid max-w-[1120px] gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-32">
        {/* Main content */}
        <div>
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--rule)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--ink-muted)]">
            <span className="size-1.5 rounded-full bg-[var(--accent)]" />
            {profile.roleBadge}
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {profile.headline}
          </h1>

          {/* Intro */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--ink-muted)]">
            {profile.intro}
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[var(--ink)] px-5 text-sm font-medium text-[var(--paper)] transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowDownRight size={16} strokeWidth={1.7} />
            </a>

            <a
              href="#contact"
              className="inline-flex min-h-11 items-center rounded-md border border-[var(--rule)] px-5 text-sm font-medium transition-colors hover:bg-[var(--surface)]"
            >
              Let's talk
            </a>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-col justify-end">
          <div className="border-t border-[var(--rule)] pt-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              Based in
            </p>

            <div className="mt-2 flex items-center gap-2 text-sm">
              <MapPin size={15} strokeWidth={1.5} />
              {profile.location}
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--rule)] pt-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              Availability
            </p>

            <p className="mt-2 text-sm">
              {profile.availability}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}