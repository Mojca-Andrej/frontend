import { formatInline } from "@/components/rich-text";
import { cn } from "@/lib/cn";

/** Zvočni posnetek s podnapisom. Datoteka se naloži šele, ko jo obiskovalec zažene (preload="none"). */
export function AudioPlayer({ src, caption, className }: { src: string; caption: string; className?: string }) {
  return (
    <figure className={cn("rounded-md border border-line bg-paper p-4", className)}>
      <audio controls preload="none" src={src} className="w-full">
        Vaš brskalnik ne podpira predvajanja zvoka.
      </audio>
      <figcaption className="mt-3 text-sm text-muted">{formatInline(caption)}</figcaption>
    </figure>
  );
}
