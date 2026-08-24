import { ReactNode } from "react";

type EditorFrameProps = {
  id: string;
  filename: string;
  lineStart?: number;
  lineCount?: number;
  children: ReactNode;
  className?: string;
};

export default function EditorFrame({
  id,
  filename,
  lineStart = 1,
  lineCount = 24,
  children,
  className = "",
}: EditorFrameProps) {
  const lines = Array.from({ length: lineCount }, (_, i) => lineStart + i);

  return (
    <section id={id} className={`relative scroll-mt-20 ${className}`}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* file tab */}
        <div className="flex items-center gap-2 border-b border-ink-border/60 pb-3 dark:border-ink-border">
          <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
          <span className="ml-3 font-mono text-xs text-ink/50 dark:text-paper/50">
            {filename}
          </span>
        </div>

        {/* body with gutter */}
        <div className="relative flex gap-4 pt-8 pb-20 sm:gap-6">
          <div
            aria-hidden
            className="hidden select-none flex-col items-end gap-[2px] pt-1 font-mono text-[11px] leading-relaxed text-ink/25 dark:text-paper/20 sm:flex"
            style={{ minWidth: "1.75rem" }}
          >
            {lines.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </div>
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>
    </section>
  );
}
