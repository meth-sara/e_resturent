import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { juices } from "@/lib/juices";
import { useState } from "react";

export const Route = createFileRoute("/menu")({
  component: MenuPage,
  head: () => ({
    meta: [
      { title: "Our Menu — JuiceBar" },
      { name: "description", content: "Cold-pressed juices made with real ingredients. Browse our full menu of cleanses, boosters and wellness shots." },
    ],
  }),
});

const tabs = ["All Juices", "Cleanses", "Boosters", "Wellness Shots"] as const;

function MenuPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All Juices");
  const visible = tab === "All Juices" ? juices : juices.filter((j) => j.category === tab);
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Our <span className="text-primary">Menu</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Cold-pressed juices made with real ingredients. Nothing added, nothing artificial.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2 rounded-full border border-border bg-card p-1.5">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                tab === t ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((j) => (
            <article key={j.name} className="group rounded-2xl bg-card p-5 ring-1 ring-border transition hover:shadow-md">
              <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                <img
                  src={j.image}
                  alt={j.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="size-full object-cover transition group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">{j.name}</h3>
                <p className="text-sm text-muted-foreground">{j.tagline}</p>
                <div className="mt-2 font-semibold text-primary">{j.price}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
