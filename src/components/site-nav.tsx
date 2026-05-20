import { Link } from "@tanstack/react-router";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/benefits", label: "Benefits" },
  { to: "/contact", label: "Locations" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="font-display text-2xl font-bold tracking-tight">
          juice<span className="text-primary">bar.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{
                className: "text-foreground after:content-[''] relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:bg-primary",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="relative rounded-full p-2 text-foreground/70 hover:text-foreground" aria-label="Cart">
            <ShoppingCart className="size-5" />
            <span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
              0
            </span>
          </button>
          <Link
            to="/menu"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-95 sm:inline-flex"
          >
            ORDER NOW
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
            <Menu className="size-6" />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm font-medium">
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
