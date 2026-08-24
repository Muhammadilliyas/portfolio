"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import EditorFrame from "./EditorFrame";
import { contact, profile } from "@/data/portfolio";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!contact.formEndpoint) {
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio inquiry from ${values.name || "a visitor"}`
      )}&body=${encodeURIComponent(values.message)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(contact.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <EditorFrame id="contact" filename="contact.tsx" lineStart={1} lineCount={20}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-10 lg:grid-cols-[1fr_1.1fr]"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-amber">
            05 — contact
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink dark:text-paper sm:text-4xl">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ink/70 dark:text-paper/70">
            {contact.subheading}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-ink/80 transition-colors hover:text-amber dark:text-paper/80"
          >
            <Mail size={15} />
            {profile.email}
          </a>

          <div className="mt-8 flex gap-4">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="font-mono text-xs text-ink/50 underline decoration-ink-border underline-offset-4 transition-colors hover:text-amber dark:text-paper/50"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-ink-border/60 bg-ink-elevated/[0.02] p-5 dark:border-ink-border dark:bg-paper/[0.02] sm:p-6"
        >
          <div className="mb-4 flex items-center gap-2 font-mono text-xs text-ink/50 dark:text-paper/50">
            <span className="text-teal">$</span> send --to={profile.name.split(" ")[0].toLowerCase()}
          </div>

          <label className="block">
            <span className="mb-1.5 block font-mono text-xs text-ink/60 dark:text-paper/60">
              name
            </span>
            <input
              required
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              className="w-full rounded-md border border-ink-border/60 bg-transparent px-3 py-2 text-sm text-ink outline-none placeholder:text-ink/30 dark:border-ink-border dark:text-paper dark:placeholder:text-paper/30"
              placeholder="Jane Doe"
            />
          </label>

          <label className="mt-4 block">
            <span className="mb-1.5 block font-mono text-xs text-ink/60 dark:text-paper/60">
              email
            </span>
            <input
              required
              type="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="w-full rounded-md border border-ink-border/60 bg-transparent px-3 py-2 text-sm text-ink outline-none placeholder:text-ink/30 dark:border-ink-border dark:text-paper dark:placeholder:text-paper/30"
              placeholder="jane@company.com"
            />
          </label>

          <label className="mt-4 block">
            <span className="mb-1.5 block font-mono text-xs text-ink/60 dark:text-paper/60">
              message
            </span>
            <textarea
              required
              rows={4}
              value={values.message}
              onChange={(e) => setValues({ ...values, message: e.target.value })}
              className="w-full resize-none rounded-md border border-ink-border/60 bg-transparent px-3 py-2 text-sm text-ink outline-none placeholder:text-ink/30 dark:border-ink-border dark:text-paper dark:placeholder:text-paper/30"
              placeholder="What are you building?"
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 disabled:opacity-60"
          >
            <Send size={14} />
            {status === "sending" ? "Sending…" : "Send message"}
          </button>

          {status === "sent" && (
            <p className="mt-3 font-mono text-xs text-teal">Message sent — thanks!</p>
          )}
          {status === "error" && (
            <p className="mt-3 font-mono text-xs text-rose">
              Something went wrong. Try emailing directly instead.
            </p>
          )}
        </form>
      </motion.div>
    </EditorFrame>
  );
}
