import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/call-for-papers", label: "Call for Papers" },
  { to: "/committee", label: "Committee" },
  { to: "/speakers", label: "Speakers" },
  { to: "/registration", label: "Registration" },
  { to: "/author-guidelines", label: "Author Guidelines" },
  { to: "/travel", label: "Travel" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="bg-navy-deep text-navy-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs">
          <p className="tracking-wide">May 28-29, 2027 | Hybrid Mode | NIT Jalandhar</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}nitj-logo.png`}
            alt="NIT Jalandhar logo"
            className="h-12 w-12 object-contain"
          />
          <span className="leading-tight">
            <span className="block font-display text-xl font-semibold text-navy">NITCOM-2027</span>
            <span className="block text-[11px] text-muted-foreground">
              Dept. of Computer Science &amp; Engineering, NIT Jalandhar
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-navy after:scale-x-100" }}
              className="relative whitespace-nowrap px-2 py-2 text-sm font-medium text-muted-foreground transition-colors after:absolute after:inset-x-2 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-navy hover:after:scale-x-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border text-navy xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card px-4 py-2 xl:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
