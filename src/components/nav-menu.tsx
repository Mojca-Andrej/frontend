"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import type { NavItem } from "@/content/navigation";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string) {
  return href !== "/" && !href.startsWith("#") && (pathname === href || pathname.startsWith(href + "/"));
}

const linkClass =
  "rounded-sm px-2 py-1 text-[0.95rem] text-muted transition-colors hover:text-plum-700 aria-[current=page]:text-plum-700 aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8";

export function NavMenu({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);
  const navRef = useRef<HTMLElement>(null);
  const mobileId = useId();

  // Ob menjavi strani zapri vse menije.
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenDropdown(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    function onPointer(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenDropdown(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav ref={navRef} aria-label="Glavni meni">
      {/* Namizje */}
      <ul className="hidden items-center gap-1 lg:flex">
        {items.map((item) =>
          "children" in item ? (
            <li
              key={item.label}
              className="relative"
              onPointerEnter={(e) => e.pointerType === "mouse" && setOpenDropdown(item.label)}
              onPointerLeave={(e) => e.pointerType === "mouse" && setOpenDropdown(null)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenDropdown(null);
              }}
            >
              <button
                type="button"
                aria-expanded={openDropdown === item.label}
                aria-controls={`podmeni-${item.label}`}
                onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                className={cn(
                  linkClass,
                  "inline-flex items-center gap-1",
                  isActive(pathname, item.href) && "text-plum-700",
                )}
              >
                {item.label}
                <ChevronDown
                  aria-hidden
                  className={cn("size-4 transition-transform", openDropdown === item.label && "rotate-180")}
                />
              </button>
              <ul
                id={`podmeni-${item.label}`}
                hidden={openDropdown !== item.label}
                className="absolute top-full left-0 z-50 min-w-48 rounded-md border border-line bg-white py-2 shadow-lg"
              >
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      aria-current={pathname === child.href ? "page" : undefined}
                      className="block px-4 py-2 text-muted hover:bg-plum-50 hover:text-plum-700 aria-[current=page]:font-semibold aria-[current=page]:text-plum-700"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={linkClass}
              >
                {item.label}
              </Link>
            </li>
          ),
        )}
      </ul>

      {/* Mobilno */}
      <button
        type="button"
        className="-mr-2 inline-flex size-11 items-center justify-center rounded-md text-ink lg:hidden"
        aria-expanded={mobileOpen}
        aria-controls={mobileId}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X aria-hidden className="size-6" /> : <Menu aria-hidden className="size-6" />}
        <span className="sr-only">{mobileOpen ? "Zapri meni" : "Odpri meni"}</span>
      </button>
      <div
        id={mobileId}
        hidden={!mobileOpen}
        className="absolute inset-x-0 top-full z-40 h-[calc(100dvh-100%)] overflow-y-auto border-t border-line bg-paper px-6 pt-4 pb-10 lg:hidden"
      >
        <ul className="divide-y divide-line">
          {items.map((item) => (
            <li key={item.label} className="py-1">
              {"children" in item ? (
                <>
                  <p className="pt-3 pb-1 text-sm font-semibold tracking-wider text-muted uppercase">{item.label}</p>
                  <ul className="pb-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          aria-current={pathname === child.href ? "page" : undefined}
                          className="block py-2.5 pl-3 text-lg text-ink aria-[current=page]:text-plum-700"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className="block py-3 text-lg text-ink aria-[current=page]:text-plum-700"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
