import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Leaf, Snowflake, Truck, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-juices.jpg";
import { juices } from "@/lib/juices";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JuiceBar — Good Juice. Real Results." },
      { name: "description", content: "Cold-pressed juices made from the freshest fruits and vegetables. No sugar. No shortcuts." },
    ],
  }),
});

function Index() {
  const popular = juices.slice(0, 4);
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border/60 sm:p-10 md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground/80">
                <span className="mr-2 size-1.5 rounded-full bg-primary" />
                100% Cold-Pressed
              </span>
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                Good Juice.<br />
                Real <span className="text-primary">Results.</span>
              </h1>
              <p className="mt-5 max-w-md text-base text-muted-foreground">
                Nutrient-rich juices made from the freshest fruits and vegetables.
                No sugar. No shortcuts.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/menu"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-95"
                >
                  ORDER NOW <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/menu"
                  className="inline-flex items-center rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold transition hover:bg-foreground/5"
                >
                  EXPLORE MENU
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                <Feature icon={<Leaf className="size-5" />} title="100% Natural" sub="No additives" />
                <Feature icon={<Snowflake className="size-5" />} title="Cold-Pressed" sub="Maximum nutrition" />
                <Feature icon={<Truck className="size-5" />} title="Delivered Fresh" sub="To your door" />
              </div>
            </div>
            <div className="relative">
              <img
                src={hero}
                alt="Cold-pressed juice bottles with fresh fruit"
                width={1280}
                height={1024}
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Picks */}
      <section className="mx-auto mt-6 max-w-7xl px-5 sm:px-8">
        <div className="rounded-3xl bg-dark-panel p-6 text-dark-panel-foreground sm:p-10">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">Popular Picks</h2>
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:bg-white/15">
              View all <ArrowRight className="size-3.5" />
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((j) => (
              <div key={j.name} className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-3">
                  <img src={j.image} alt={j.name} loading="lazy" width={640} height={640} className="size-16 rounded-xl object-cover" />
                  <div>
                    <div className="text-sm font-semibold">{j.name}</div>
                    <div className="text-xs text-dark-panel-foreground/60">{j.tagline}</div>
                    <div className="mt-1 text-sm font-semibold text-primary">{j.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <section className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Fresh Visual Identity", d: "Vibrant, natural & memorable.", c: "text-primary" },
            { t: "Easy Navigation", d: "Clean structure for a smooth user journey.", c: "text-accent" },
            { t: "Responsive Design", d: "Optimized for a flawless experience on all devices.", c: "text-primary" },
            { t: "High Conversion", d: "Strategic design that drives trust and boosts actions.", c: "text-accent" },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-5">
              <div className={`size-9 rounded-full bg-foreground/5 grid place-items-center ${b.c}`}>
                <Leaf className="size-4" />
              </div>
              <div className="mt-4 font-semibold">{b.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{b.d}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

function Feature({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid size-9 place-items-center rounded-full bg-primary/15 text-primary-foreground">{icon}</div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}
