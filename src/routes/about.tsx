import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import about from "@/assets/about-juices.jpg";
import { Leaf, Sparkles, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — JuiceBar" },
      { name: "description", content: "Rooted in purity. Driven by purpose. Learn how JuiceBar crafts cold-pressed juices from the finest fruits and vegetables." },
    ],
  }),
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
            About <span className="text-primary">Us</span>
          </h1>
        </div>

        <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight">
              Rooted in purity.<br />
              Driven by <span className="text-primary">purpose.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              At JuiceBar, we believe that real ingredients create real change. Our juices
              are made fresh daily with the finest fruits and vegetables — never heated,
              never sweetened, never compromised.
            </p>
            <div className="mt-8 grid grid-cols-4 gap-4">
              {[
                { v: "100%", l: "Natural" },
                { v: "0", l: "Additives" },
                { v: "100%", l: "Cold-Pressed" },
                { v: "10K+", l: "Happy Customers" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-bold text-primary">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <img src={about} alt="JuiceBar cold-pressed bottles on a wooden table" loading="lazy" width={1024} height={800} className="rounded-2xl object-cover" />
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {[
            { i: <Leaf className="size-5" />, t: "Our Mission", d: "Make healthy living easy & accessible." },
            { i: <Sparkles className="size-5" />, t: "Our Promise", d: "Pure ingredients, real results." },
            { i: <Heart className="size-5" />, t: "Sustainability", d: "Good for you & the planet." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6">
              <div className="grid size-10 place-items-center rounded-full bg-primary/15 text-primary-foreground">{b.i}</div>
              <div className="mt-4 font-semibold">{b.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{b.d}</div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
