import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Check, Leaf, Snowflake, Truck } from "lucide-react";
import hero from "@/assets/hero-juices.jpg";

export const Route = createFileRoute("/benefits")({
  component: BenefitsPage,
  head: () => ({
    meta: [
      { title: "Cleanse Plans — JuiceBar" },
      { name: "description", content: "Plans designed to reset, refresh and recharge your body naturally." },
    ],
  }),
});

const plans = [
  { name: "1-Day Cleanse", price: "$59", desc: "A gentle reset to refresh your system.", popular: false },
  { name: "3-Day Reset Cleanse", price: "$149", desc: "Detoxify, boost energy, support digestion.", popular: true },
  { name: "5-Day Cleanse", price: "$229", desc: "A deep restorative reset for body & mind.", popular: false },
];

function BenefitsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Cleanse <span className="text-primary">Plans</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Plans designed to reset, refresh and recharge your body naturally.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div className="grid gap-4">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-6 ring-1 transition ${
                  p.popular ? "bg-dark-panel text-dark-panel-foreground ring-primary" : "bg-card ring-border"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-sm uppercase tracking-wider opacity-70">{p.name}</div>
                    <div className="mt-1 font-display text-2xl font-bold">{p.price}</div>
                  </div>
                  {p.popular && (
                    <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                      Popular
                    </span>
                  )}
                </div>
                <p className={`mt-2 text-sm ${p.popular ? "opacity-80" : "text-muted-foreground"}`}>{p.desc}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {["Detoxify your body", "Boost energy levels", "Support digestion", "Feel lighter & refreshed"].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="size-4 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">
                  ORDER NOW
                </button>
              </div>
            ))}
          </div>
          <img src={hero} alt="Cleanse juice bottles" loading="lazy" width={1280} height={1024} className="rounded-2xl object-cover" />
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { i: <Snowflake className="size-5" />, t: "Cold-Pressed", d: "For maximum nutrition" },
            { i: <Leaf className="size-5" />, t: "100% Natural", d: "No additives" },
            { i: <Truck className="size-5" />, t: "Delivered Fresh", d: "To your door" },
          ].map((b) => (
            <div key={b.t} className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5">
              <div className="grid size-10 place-items-center rounded-full bg-primary/15 text-primary-foreground">{b.i}</div>
              <div>
                <div className="font-semibold">{b.t}</div>
                <div className="text-sm text-muted-foreground">{b.d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
