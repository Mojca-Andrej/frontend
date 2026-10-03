import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Verse } from "@/components/poem";
import { formatInline } from "@/components/rich-text";
import { cn } from "@/lib/cn";
import { proseWorks, type ProseBlock, type ProseWork } from "@/content/prose";
import { linkClass } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Proza",
  description: "Odlomki iz romana Kavč učiteljice Veronike Mojce Andrej.",
  alternates: { canonical: "/branja/proza" },
};

/** Sidra so kratka (#odlomek-1), dokler je na strani eno samo delo. */
function anchor(work: ProseWork, part: number | "seznam") {
  const base = part === "seznam" ? "odlomki" : `odlomek-${part}`;
  return proseWorks.length > 1 ? `${work.book}-${base}` : base;
}

function Block({ block }: { block: ProseBlock }) {
  if (block.kind === "verse")
    return <Verse text={block.lines} className="my-8 border-l-2 border-plum-200 pl-6 italic" />;
  return (
    <p
      className={
        block.dropCap
          ? "first-letter:font-serif first-letter:text-4xl first-letter:leading-none first-letter:font-semibold first-letter:text-plum-800"
          : undefined
      }
    >
      {formatInline(block.text)}
    </p>
  );
}

export default function Proza() {
  return (
    <div>
      <PageHeader
        title="Proza"
        intro={
          <>
            Odlomki iz romana{" "}
            <Link href="/knjige/kavc-uciteljice-veronike" className={linkClass}>
              Kavč učiteljice Veronike
            </Link>
            .
          </>
        }
      />

      {proseWorks.map((work) => {
        const listId = anchor(work, "seznam");
        return (
          <section key={work.book} aria-labelledby={`${work.book}-naslov`} className="mx-auto max-w-3xl">
            <h2 id={`${work.book}-naslov`} className="font-serif text-2xl font-semibold text-ink md:text-3xl">
              {work.title}
            </h2>

            <nav id={listId} aria-label={`Odlomki – ${work.title}`} className="mt-5 scroll-mt-28">
              <ul className="flex flex-wrap gap-3">
                {work.excerpts.map((excerpt) => (
                  <li key={excerpt.part}>
                    <a
                      href={`#${anchor(work, excerpt.part)}`}
                      className="inline-flex min-h-11 items-center rounded-full border border-line bg-white px-5 text-sm font-medium hover:border-plum-300 hover:text-plum-700"
                    >
                      Odlomek {excerpt.part}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-10 space-y-10">
              {work.excerpts.map((excerpt) => {
                const id = anchor(work, excerpt.part);
                return (
                  <article
                    key={excerpt.part}
                    id={id}
                    aria-labelledby={`${id}-naslov`}
                    className="scroll-mt-28 rounded-lg border border-line bg-white p-6 shadow-sm md:p-12"
                  >
                    <header className="mb-8">
                      <h3 id={`${id}-naslov`} className="font-serif text-xl font-semibold text-ink md:text-2xl">
                        Odlomek {excerpt.part}
                      </h3>
                      {excerpt.title && <p className="mt-1 text-muted">{excerpt.title}</p>}
                    </header>
                    <div className="max-w-prose space-y-4 font-serif text-lg leading-relaxed text-ink">
                      {excerpt.blocks.map((block, i) => (
                        <Block key={i} block={block} />
                      ))}
                    </div>
                    <p className="mt-10 text-sm">
                      <a href={`#${listId}`} className={cn(linkClass, "inline-flex min-h-11 items-center gap-1")}>
                        <ArrowUp aria-hidden className="size-4" />
                        Na seznam odlomkov
                      </a>
                    </p>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
