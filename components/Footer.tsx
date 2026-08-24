import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-ink-border/50 py-8 dark:border-ink-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 font-mono text-xs text-ink/45 dark:text-paper/45 sm:flex-row sm:px-8">
        <span>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </span>
        <a href="#top" className="hover:text-amber">
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
