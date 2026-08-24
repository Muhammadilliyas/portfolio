"use client";

import { motion } from "framer-motion";
import { GitCommitHorizontal } from "lucide-react";
import EditorFrame from "./EditorFrame";
import { experience, certifications } from "@/data/portfolio";

export default function Experience() {
  return (
    <EditorFrame id="experience" filename="experience.tsx" lineStart={1} lineCount={30}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          04 — journey
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
          Commit history.
        </h2>
      </motion.div>

      <div className="relative mt-10 space-y-10 border-l border-ink-border/50 pl-6 dark:border-ink-border sm:pl-8">
        {experience.map((entry, i) => (
          <motion.div
            key={`${entry.company}-${entry.start}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative"
          >
            <GitCommitHorizontal
              size={16}
              className="absolute -left-[31px] top-0.5 text-amber sm:-left-[41px]"
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-mono text-[15px] font-medium text-ink dark:text-paper">
                {entry.role} <span className="text-ink/40 dark:text-paper/40">@</span>{" "}
                {entry.company}
              </h3>
              <span className="font-mono text-[12px] text-ink/45 dark:text-paper/45">
                {entry.start} — {entry.end}
              </span>
            </div>

            <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-ink/70 dark:text-paper/70">
              {entry.summary}
            </p>

            <ul className="mt-3 space-y-1.5">
              {entry.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 font-mono text-[13px] text-ink/60 dark:text-paper/60"
                >
                  <span className="text-teal">+</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {certifications.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="mt-12 border-t border-ink-border/40 pt-8 dark:border-ink-border/60"
        >
          <span className="font-mono text-xs uppercase tracking-wide text-ink/45 dark:text-paper/45">
            certifications &amp; workshops
          </span>
          <ul className="mt-4 space-y-2">
            {certifications.map((c) => (
              <li
                key={c}
                className="flex gap-2 font-mono text-[13px] text-ink/65 dark:text-paper/65"
              >
                <span className="text-amber">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </EditorFrame>
  );
}
