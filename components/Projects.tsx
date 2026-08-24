"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, CircleDot } from "lucide-react";
import EditorFrame from "./EditorFrame";
import { projects, type Project } from "@/data/portfolio";

const statusColor: Record<Project["status"], string> = {
  active: "text-teal",
  stable: "text-amber",
  archived: "text-ink/40 dark:text-paper/40",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
      className="group flex flex-col rounded-lg border border-ink-border/60 bg-ink-elevated/[0.02] p-5 transition-colors hover:border-amber/60 dark:border-ink-border dark:bg-paper/[0.02]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-mono text-[15px] font-medium text-ink dark:text-paper">
          {project.name}
        </h3>
        <span
          className={`flex items-center gap-1 font-mono text-[11px] uppercase tracking-wide ${statusColor[project.status]}`}
        >
          <CircleDot size={11} />
          {project.status}
        </span>
      </div>

      <p className="mt-3 text-[14px] leading-relaxed text-ink/70 dark:text-paper/70">
        {project.description}
      </p>

      {project.metric && (
        <p className="mt-3 font-mono text-[12px] text-amber">→ {project.metric}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-ink-border/50 px-2 py-0.5 font-mono text-[11px] text-ink/60 dark:border-ink-border dark:text-paper/60"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-ink-border/40 pt-4 dark:border-ink-border/60">
        {project.href && (
          <a
            href={project.href}
            className="inline-flex items-center gap-1 font-mono text-[12px] text-ink/70 transition-colors hover:text-amber dark:text-paper/70"
          >
            <ExternalLink size={13} /> live
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            className="inline-flex items-center gap-1 font-mono text-[12px] text-ink/70 transition-colors hover:text-amber dark:text-paper/70"
          >
            <Github size={13} /> source
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <EditorFrame id="projects" filename="projects.tsx" lineStart={1} lineCount={34}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
          03 — projects
        </span>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
          Things I have shipped.
        </h2>
        <p className="mt-3 max-w-xl text-[15px] text-ink/65 dark:text-paper/65">
          A mix of client work and side projects. Status reflects whether I am
          actively maintaining it.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </EditorFrame>
  );
}
