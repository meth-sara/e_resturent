import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — JuiceBar" },
      { name: "description", content: "Get in touch with JuiceBar — for orders, partnerships or any questions." },
    ],
  }),
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="text-center">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            We'd love to hear from you! Reach out for orders, partnerships or any questions.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            {[
              { i: <Mail className="size-5" />, t: "Email", d: "hello@juicebar.com" },
              { i: <Phone className="size-5" />, t: "Phone", d: "+1 (555) 123-4567" },
              { i: <MapPin className="size-5" />, t: "Location", d: "123 Green Avenue, Los Angeles, CA 90001" },
            ].map((c) => (
              <div key={c.t} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="grid size-11 place-items-center rounded-full bg-primary/15 text-primary-foreground">{c.i}</div>
                <div>
                  <div className="font-semibold">{c.t}</div>
                  <div className="mt-0.5 text-sm text-muted-foreground">{c.d}</div>
                </div>
              </div>
            ))}
          </div>

          <form
            className="space-y-4 rounded-2xl border border-border bg-card p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <Field label="Your Name" placeholder="Jane Doe" />
            <Field label="Email Address" placeholder="jane@example.com" type="email" />
            <Field label="Subject" placeholder="How can we help?" />
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us a bit more…"
                className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <button className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-95">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
