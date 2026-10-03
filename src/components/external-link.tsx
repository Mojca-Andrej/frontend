import type { ComponentProps } from "react";

/** Zunanja povezava: odpre nov zavihek in to pove tudi bralnikom zaslona. */
export function ExternalLink({ children, ...props }: ComponentProps<"a">) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <span className="sr-only"> (odpre se v novem zavihku)</span>
    </a>
  );
}
