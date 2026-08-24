"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/portfolio";

const codeLines = [
  `const developer = {`,
  `  name: "${profile.name}",`,
  `  role: "${profile.role}",`,
  `  focus: [${profile.focus.map((f) => `"${f}"`).join(", ")}],`,
  `  basedIn: "${profile.location}",`,
  `  status: "${profile.availability}",`,
  `};`,
];

function useTypedLines(lines: string[], speed = 18, lineDelay = 90) {
  const [rendered, setRendered] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let out: string[] = [];

    async function run() {
      for (let i = 0; i < lines.length; i++) {
        if (cancelled) return;
        const full = lines[i];
        for (let c = 0; c <= full.length; c++) {
          if (cancelled) return;
          out = [...out.slice(0, i), full.slice(0, c)];
          setRendered([...out]);
          await new Promise((r) => setTimeout(r, speed));
        }
        out[i] = full;
        await new Promise((r) => setTimeout(r, lineDelay));
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { rendered, done };
}

export default function Hero() {
  const { rendered, done } = useTypedLines(codeLines);

  return (
    <section
      id="top"
      className="grid-bg relative flex min-h-[92vh] items-center overflow-hidden pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper dark:to-ink" />

      <div className="relative mx-auto grid max-w-5xl gap-10 px-5 py-15 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-amber">
            {profile.availability}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink dark:text-paper sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-md text-lg text-ink/70 dark:text-paper/70">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 rounded-md bg-amber px-4 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View projects
              <ArrowUpRight size={15} />
            </a>
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-1.5 rounded-md border border-ink-border/70 px-4 py-2.5 font-mono text-sm text-ink/80 transition-colors hover:border-amber hover:text-ink dark:border-ink-border dark:text-paper/80 dark:hover:text-paper"
            >
              Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="overflow-hidden rounded-lg border border-ink-border/60 bg-ink-elevated shadow-2xl shadow-black/10 dark:border-ink-border"
        >
          <div className="flex items-center gap-2 border-b border-ink-border/60 px-4 py-3 dark:border-ink-border">
            <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
            <span className="ml-2 font-mono text-[11px] text-paper/40">whoami.ts</span>
          </div>
          <pre className="min-h-[220px] whitespace-pre-wrap break-words px-5 py-5 font-mono text-[13px] leading-relaxed text-paper/90 sm:text-sm">
            {rendered.map((line, i) => (
              <div key={i}>
                <span className="text-teal">{line}</span>
                {i === rendered.length - 1 && !done && (
                  <span className="ml-0.5 inline-block h-4 w-[7px] translate-y-[2px] animate-blink bg-amber align-middle" />
                )}
              </div>
            ))}
          </pre>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-ink/40 hover:text-ink/70 dark:text-paper/40 dark:hover:text-paper/70 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
