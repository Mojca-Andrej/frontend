import { Fragment, type ReactNode } from "react";

/**
 * Preprosto oblikovanje v podatkih namesto HTML-ja:
 *   *ležeče*   **krepko**   [besedilo povezave](https://…)
 * Prelomi vrstic (\n) se ohranijo kot <br />.
 */
const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

export function formatInline(text: string): ReactNode {
  return text.split("\n").map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {line.split(TOKEN).map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const external = link[2].startsWith("http");
          return (
            <a
              key={i}
              href={link[2]}
              className="text-plum-700 underline decoration-plum-300 underline-offset-2 hover:decoration-plum-700"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link[1]}
            </a>
          );
        }
        return part;
      })}
    </Fragment>
  ));
}

export function RichText({ text, className }: { text: string; className?: string }) {
  return <p className={className}>{formatInline(text)}</p>;
}
