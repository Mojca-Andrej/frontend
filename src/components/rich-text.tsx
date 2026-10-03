import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { ExternalLink } from "./external-link";
import { linkClass } from "@/lib/styles";

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
          const [, label, href = ""] = link;
          if (href.startsWith("http")) {
            return (
              <ExternalLink key={i} href={href} className={linkClass}>
                {label}
              </ExternalLink>
            );
          }
          return (
            <Link key={i} href={href} className={linkClass}>
              {label}
            </Link>
          );
        }
        return part;
      })}
    </Fragment>
  ));
}

/** Besedilo brez oznak oblikovanja (za metapodatke in mesta, kjer povezave niso dovoljene). */
export function toPlainText(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

export function RichText({ text, className }: { text: string; className?: string }) {
  return <p className={className}>{formatInline(text)}</p>;
}
