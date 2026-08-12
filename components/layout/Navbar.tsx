"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

import { profile } from "@/data/profile";

export function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isThemeReady, setIsThemeReady] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  let theme: "dark" | "light";

  if (savedTheme === "dark" || savedTheme === "light") {
    theme = savedTheme;
  } else {
    theme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
  }

  document.documentElement.dataset.theme = theme;
  setIsDark(theme === "dark");
  setIsThemeReady(true);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 8);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const toggleTheme = () => {
  const nextTheme = isDark ? "light" : "dark";

  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  setIsDark(nextTheme === "dark");
};

  const toggleMenu = () => {
    setIsMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigation = [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-16 border-b transition-colors ${
          isScrolled
            ? "border-[var(--rule)]"
            : "border-transparent"
        } bg-[color-mix(in_srgb,var(--paper)_80%,transparent)] backdrop-blur-xl`}
      >
        <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 lg:px-12">
          
          {/* Logo */}
          <a
            href="#top"
            className="font-mono text-sm font-medium"
          >
            {profile.name}
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[15px] text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Theme */}
<button
  type="button"
  onClick={toggleTheme}
  aria-label={
    isDark
      ? "Switch to light theme"
      : "Switch to dark theme"
  }
  className="relative z-[60] grid size-11 place-items-center rounded-md text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
>
  {isDark ? (
    <Sun size={18} strokeWidth={1.6} />
  ) : (
    <Moon size={18} strokeWidth={1.6} />
  )}
</button>

            {/* Let's Talk */}
            <a
              href="#contact"
              className="hidden min-h-9 items-center rounded-md border border-[var(--rule)] px-3.5 text-sm font-medium transition-colors hover:bg-[var(--surface)] md:inline-flex"
            >
              Let's talk
            </a>

            {/* Mobile Menu */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={
                isMenuOpen ? "Close menu" : "Open menu"
              }
              aria-expanded={isMenuOpen}
              className="grid size-11 place-items-center rounded-md text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)] md:hidden"
            >
              {isMenuOpen ? (
                <X size={20} strokeWidth={1.6} />
              ) : (
                <Menu size={20} strokeWidth={1.6} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[var(--paper)] transition-opacity duration-200 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-16 items-center justify-end px-6">
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-md text-[var(--ink-muted)]"
          >
            <X size={20} strokeWidth={1.6} />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-6 pt-8">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="py-3 text-3xl tracking-tight"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}