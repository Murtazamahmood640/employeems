import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Sparkles } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ByThawkHR" },
      { name: "description", content: "Simple per-employee pricing with three plans. Activate only the modules your team needs." },
      { property: "og:title", content: "Pricing — ByThawkHR" },
      { property: "og:description", content: "Per-employee pricing. Modular. Transparent." },
    ],
  }),
  component: Pricing,
});

const plans = [
  {
    name: "Starter",
    price: "$3",
    blurb: "Core HR for growing teams up to 50 people.",
    cta: "Start free trial",
    features: ["People directory", "Attendance & clock-in", "Leave management", "Projects & tasks", "Internal helpdesk", "Mobile app (web + iOS + Android)"],
  },
  {
    name: "Growth",
    price: "$6",
    popular: true,
    blurb: "Everything in Starter, plus finance and analytics.",
    cta: "Book a demo",
    features: ["Everything in Starter", "Payroll & salary slips", "Expense claims", "Asset management", "Performance & 360 reviews", "Advanced analytics & exports", "Priority email support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "The full suite, dedicated infrastructure, and SLA.",
    cta: "Talk to sales",
    features: ["All 21 modules", "Recruit, Cliq, Training, Surveys", "Travel, Shifts, OKRs, Compliance", "Exit & Approvals + e-sign", "SSO / SAML & audit logs", "Dedicated success manager"],
  },
];

function Pricing() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-x py-20 text-center">
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5 text-accent" /> Simple pricing</span>
          <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
            Pay per employee. <span className="text-gradient">Pay for what you use.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            No seat counts. No surprise add-ons. Activate modules as your company grows.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl p-8 ${
                p.popular
                  ? "bg-[image:var(--gradient-ink)] text-primary-foreground shadow-[var(--shadow-elevated)]"
                  : "card-soft"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-[image:var(--gradient-accent)] px-3 py-1 text-xs font-bold text-accent-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.popular ? "text-white/70" : "text-muted-foreground"}`}>{p.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight">{p.price}</span>
                {p.price !== "Custom" && <span className={p.popular ? "text-white/60" : "text-muted-foreground"}>/ user / month</span>}
              </div>
              <Link
                to="/contact"
                className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  p.popular
                    ? "bg-[oklch(0.984_0.012_85)] text-foreground hover:opacity-90"
                    : "btn-primary"
                }`}
              >
                {p.cta}
              </Link>
              <ul className="mt-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${p.popular ? "text-accent" : "text-accent"}`} />
                    <span className={p.popular ? "text-white/85" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { q: "Is there a free trial?", a: "Yes — 14 days, no credit card required, on any plan." },
            { q: "Can I switch plans later?", a: "Anytime. Pro-rated billing kicks in automatically." },
            { q: "Do you offer non-profit pricing?", a: "Yes. Reach out via the contact page and we'll set it up." },
          ].map((f) => (
            <div key={f.q} className="card-soft p-6">
              <p className="font-semibold">{f.q}</p>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
