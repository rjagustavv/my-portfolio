import { ArrowUpRight, Mail } from "lucide-react";

import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-[var(--rule)]"
    >
      <div className="mx-auto max-w-[1120px] px-6 py-24 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Heading */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              05 — Contact
            </p>

            <h2 className="mt-4 text-3xl font-medium tracking-[-0.03em] sm:text-4xl">
              Let&apos;s build something.
            </h2>
          </div>

          {/* Content */}
          <div>
            <p className="max-w-xl text-lg leading-8 text-[var(--ink-muted)]">
              Have a project in mind, want to collaborate, or simply
              want to say hello? Feel free to reach out.
            </p>

            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="group mt-8 flex w-fit items-center gap-3 border-b border-[var(--rule)] pb-2 text-lg font-medium transition-colors hover:border-[var(--ink)]"
            >
              <Mail
                size={18}
                strokeWidth={1.6}
              />

              {profile.email}

              <ArrowUpRight
                size={17}
                strokeWidth={1.6}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Social links */}
            <div className="mt-10 flex flex-wrap gap-3">
              {profile.social.github && (
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-[var(--rule)] px-4 py-2.5 text-sm transition-colors hover:bg-[var(--surface)]"
                >
                  GitHub
                </a>
              )}

              {profile.social.linkedin && (
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-[var(--rule)] px-4 py-2.5 text-sm transition-colors hover:bg-[var(--surface)]"
                >
                  LinkedIn
                </a>
              )}

              {profile.social.instagram && (
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-[var(--rule)] px-4 py-2.5 text-sm transition-colors hover:bg-[var(--surface)]"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}