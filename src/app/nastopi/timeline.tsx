"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { plural } from "@/lib/plural";
import { filters, isFilterId, type FilterId } from "./filters";

export type TimelineItem = { key: string; tags: FilterId[]; node: ReactNode };
export type TimelineGroup = { year: string; items: TimelineItem[] };

// Izbrani filter živi v URL-ju (?vrsta=…). Na strežniku (in brez JS) je vedno "vse",
// zato HTML vsebuje vse nastope.
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("popstate", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
}

function getSnapshot(): FilterId {
  const value = new URLSearchParams(window.location.search).get("vrsta");
  return isFilterId(value) ? value : "vse";
}

function getServerSnapshot(): FilterId {
  return "vse";
}

function selectFilter(id: FilterId) {
  const url = new URL(window.location.href);
  if (id === "vse") url.searchParams.delete("vrsta");
  else url.searchParams.set("vrsta", id);
  window.history.replaceState(null, "", url);
  listeners.forEach((listener) => listener());
}

function countLabel(n: number): string {
  return `${n} ${plural(n, ["nastop", "nastopa", "nastopi", "nastopov"])}`;
}

export function NastopiTimeline({ groups }: { groups: TimelineGroup[] }) {
  const active = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const matches = (item: TimelineItem) => active === "vse" || item.tags.includes(active);

  const visible = groups
    .map((group) => ({ ...group, items: group.items.filter(matches) }))
    .filter((group) => group.items.length > 0);
  const total = visible.reduce((sum, group) => sum + group.items.length, 0);

  return (
    <div>
      <div className="mb-10 flex flex-wrap items-center gap-2" role="group" aria-label="Prikaži nastope">
        {filters.map((filter) => {
          const pressed = filter.id === active;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={pressed}
              onClick={() => selectFilter(filter.id)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm font-medium transition-colors",
                pressed
                  ? "border-plum-700 bg-plum-700 text-white"
                  : "border-line bg-white text-ink hover:border-plum-300 hover:bg-plum-50",
              )}
            >
              {filter.label}
            </button>
          );
        })}
        <p className="ml-1 text-sm text-muted" aria-live="polite">
          {countLabel(total)}
        </p>
      </div>

      <div className="space-y-12 md:space-y-16">
        {visible.map((group) => (
          <section
            key={group.year}
            aria-labelledby={`leto-${group.year}`}
            className="grid gap-4 md:grid-cols-[7rem_1fr] md:gap-8"
          >
            <h2
              id={`leto-${group.year}`}
              className="font-serif text-2xl font-semibold text-plum-800 md:sticky md:top-28 md:self-start md:text-3xl"
            >
              {group.year}
            </h2>
            <ol className="space-y-4 md:border-l md:border-line md:pl-8">
              {group.items.map((item) => (
                <li key={item.key}>{item.node}</li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
