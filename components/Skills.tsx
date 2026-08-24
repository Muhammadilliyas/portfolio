"use client";

import { motion } from "framer-motion";
import EditorFrame from "./EditorFrame";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <EditorFrame id="skills" filename="skills.tsx" lineStart={1} lineCount={22}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          02 — skills
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
          What is in the stack.
        </h2>

        <div className="mt-8 space-y-5 font-mono text-sm">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex flex-wrap items-baseline gap-x-2 gap-y-2 border-b border-ink-border/30 pb-4 dark:border-ink-border/60"
            >
              <span className="text-teal">import</span>
              <span className="text-ink/70 dark:text-paper/70">{"{"}</span>
              <span className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-ink-border/60 bg-ink-elevated/[0.03] px-2 py-1 text-[13px] text-ink/80 transition-colors hover:border-amber hover:text-ink dark:border-ink-border dark:bg-paper/[0.03] dark:text-paper/80 dark:hover:text-paper"
                  >
                    {item}
                  </span>
                ))}
              </span>
              <span className="text-ink/70 dark:text-paper/70">{"}"}</span>
              <span className="text-teal">from</span>
              <span className="text-amber">&quot;./{group.category}&quot;</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </EditorFrame>
  );
}
