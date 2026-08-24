"use client";

import { motion } from "framer-motion";
import EditorFrame from "./EditorFrame";
import { about, profile } from "@/data/portfolio";

export default function About() {
  return (
    <EditorFrame id="about" filename="about.tsx" lineStart={1} lineCount={18}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          01 — about
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
          A developer who reads the whole ticket.
        </h2>

        <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink/75 dark:text-paper/75">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink-border/50 pt-8 dark:border-ink-border sm:grid-cols-3">
          {about.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-ink/45 dark:text-paper/45">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-xl font-semibold leading-tight text-ink dark:text-paper sm:text-2xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 font-mono text-xs text-ink/40 dark:text-paper/40">
          {profile.location} · {profile.yearsExperience}+ years in production
        </p>
      </motion.div>
    </EditorFrame>
  );
}
