"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/data/portfolio";

const tabs = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = tabs
      .map((t) => document.getElementById(t.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-ink-border/60 bg-paper/90 backdrop-blur dark:border-ink-border dark:bg-ink/90"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-ink dark:text-paper"
        >
          <span className="text-amber">~/</span>
          {profile.name.toLowerCase().replace(/\s+/g, "-")}
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`rounded-t-md border-b-2 px-3 py-2 font-mono text-xs transition-colors ${
                active === tab.id
                  ? "border-amber text-ink dark:text-paper"
                  : "border-transparent text-ink/50 hover:text-ink/80 dark:text-paper/45 dark:hover:text-paper/80"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="text-ink dark:text-paper md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-ink-border/60 bg-paper px-5 py-3 dark:border-ink-border dark:bg-ink md:hidden">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm text-ink/80 dark:text-paper/80"
            >
              {tab.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
