import { ArrowUp } from "lucide-react";

import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-12">
        {/* Copyright */}
        <p className="text-xs text-[var(--ink-muted)]">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        {/* Back to top */}
        <a
          href="#top"
          className="group flex w-fit items-center gap-2 text-xs text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
        >
          Back to top

          <ArrowUp
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-200 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </footer>
  );
}