import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { profile } from "@/data/profile";

export function ProfileBanner() {
  return (
    <section className="border-b border-[var(--rule)]">
      <div className="mx-auto max-w-[1120px] px-6 py-8 lg:px-12 lg:py-10">
        <div className="group grid overflow-hidden rounded-2xl border border-[var(--rule)] bg-[var(--surface)] lg:grid-cols-[1fr_1fr]">
          {/* Profile Image */}
          <div className="relative min-h-[420px] overflow-hidden bg-[var(--paper)] sm:min-h-[500px] lg:min-h-[560px]">
            <Image
              src="/images/profiless.webp"
              alt={`${profile.name} profile`}
              fill
              priority
              className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Small label */}
            <div className="absolute bottom-6 left-6">
              <span className="rounded-md border border-white/20 bg-black/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                Profile
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--accent)]">
                A little about me
              </p>

              <h2 className="mt-5 max-w-lg text-3xl font-medium tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                I build digital experiences with code.
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[var(--ink-muted)] sm:text-base">
                I&apos;m {profile.name}, a software developer focused on
                building clean, useful, and thoughtful digital products.
                I enjoy turning ideas into real products through design
                and code.
              </p>
            </div>

            {/* Bottom */}
            <div className="mt-12">
              <div className="mb-6 h-px w-full bg-[var(--rule)]" />

              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                    Currently
                  </p>

                  <p className="mt-2 text-sm">
                    Learning · Building · Exploring
                  </p>
                </div>

                <a
                  href="#about"
                  className="group/link inline-flex shrink-0 items-center gap-2 border-b border-[var(--rule)] pb-1.5 text-sm transition-colors hover:border-[var(--ink)]"
                >
                  About me

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}