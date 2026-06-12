import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Smartphone, Globe, Wifi, Lock, Sparkles, Layers } from "lucide-react";
import { modules } from "@/lib/modules";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ByThawkHR — One workspace for your entire workforce" },
      { name: "description", content: "Modular, multi-tenant HR platform with 21 focused modules. Web + mobile, real-time, offline-ready. Replace 10 tools with one." },
      { property: "og:title", content: "ByThawkHR — One workspace for your entire workforce" },
      { property: "og:description", content: "Replace 10 HR tools with one modular platform. 21 modules across People, Operations, Finance, Talent, and Governance." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = modules.slice(0, 6);
  return (
    <>
      {/* HERO */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="container-x relative grid gap-12 pb-24 pt-20 lg:grid-cols-2 lg:items-center lg:pb-32 lg:pt-28">
          <div>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Now in private beta · v1.0
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              One workspace for your <span className="text-gradient">entire workforce</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              ByThawkHR replaces ten disconnected tools with one modular platform —
              from onboarding and attendance to payroll, performance, and exit.
              Built for the web, perfected on mobile.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/signup" className="btn-primary">
                Start free trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/features" className="btn-ghost">Explore features</Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              {["No credit card", "14-day trial", "Cancel anytime"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-3xl" />
            <div className="relative card-soft overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1400&q=80"
                alt="ByThawkHR dashboard preview showing team analytics"
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-56 card-soft p-4 sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Clocked in</p>
                  <p className="text-xs text-muted-foreground">Sarah · 9:02 AM</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden w-60 card-soft p-4 sm:block">
              <p className="text-xs font-medium text-muted-foreground">This month</p>
              <p className="mt-1 text-2xl font-bold">98.4% <span className="text-sm font-medium text-accent">attendance</span></p>
              <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
                <div className="h-full w-[92%] rounded-full bg-[image:var(--gradient-accent)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS / TRUST */}
      <section className="border-y border-border bg-surface">
        <div className="container-x flex flex-wrap items-center justify-between gap-6 py-8">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by teams shipping serious work
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-lg font-bold tracking-tight text-muted-foreground/70">
            <span>Northwind</span><span>Lumenly</span><span>Forge & Co.</span><span>Patternlab</span><span>Helio</span><span>Acme HR</span>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container-x py-24">
        <div className="max-w-3xl">
          <span className="eyebrow">Why ByThawkHR</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            A platform, not a folder of features.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Most HR tools force you to glue together a dozen point solutions.
            ByThawkHR is one unified product — and you only turn on what your company needs.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Layers, title: "Modular by design", body: "Activate any of 21 modules per plan, role, or department. No clutter, no upsell creep." },
            { icon: Lock, title: "Multi-tenant secure", body: "Every record carries an orgId. Strict data isolation between companies, baked into the database layer." },
            { icon: Smartphone, title: "Mobile-first, offline-ready", body: "Flutter app queues clock-ins, requests, and approvals when offline, syncing instantly on reconnect." },
            { icon: Globe, title: "One API, three clients", body: "A single Node.js/Express backend powers web, mobile, and integrations — no logic duplication." },
          ].map((p) => (
            <div key={p.title} className="card-soft p-6">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* APP HUB SHOWCASE */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-ink)] py-24 text-primary-foreground">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow !border-white/15 !bg-background/5 !text-white/80">App Hub model</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              One login. Only the apps your team actually uses.
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Inspired by Zoho One and Google Workspace — every employee gets a single SSO account.
              The home screen shows a clean grid of icons for modules they have access to. No mixed-up
              dashboards. No tab overload. Each module opens into its own focused workspace.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {[
                "Strict role-based access — if you don't have Payroll, the icon doesn't exist on your screen.",
                "Identical layout on web and mobile so muscle memory carries over.",
                "Workspace sidebars adapt to the module you're in.",
              ].map((t) => (
                <li key={t} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {featured.map((m, i) => (
              <div
                key={m.slug}
                className="group rounded-2xl border border-white/10 bg-background/[0.04] p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-white/25 hover:bg-background/[0.08]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-accent)] text-accent-foreground">
                  <m.icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-semibold">{m.name}</p>
                <p className="mt-1 text-xs text-white/60">{m.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE + REALTIME */}
      <section className="container-x grid gap-10 py-24 lg:grid-cols-2">
        <div className="card-soft overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
            alt="Mobile attendance clock-in"
            className="h-72 w-full object-cover"
            loading="lazy"
          />
          <div className="p-8">
            <div className="flex items-center gap-2 text-accent"><Wifi className="h-4 w-4" /><span className="text-xs font-semibold uppercase tracking-widest">Offline-first mobile</span></div>
            <h3 className="mt-3 text-2xl font-bold">Clock-in even with no signal.</h3>
            <p className="mt-2 text-muted-foreground">
              The Flutter app uses Hive to queue actions locally. Field staff can clock in, file
              expenses, and approve requests anywhere — everything replays the moment they reconnect.
            </p>
          </div>
        </div>
        <div className="card-soft overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
            alt="Real-time HR dashboard"
            className="h-72 w-full object-cover"
            loading="lazy"
          />
          <div className="p-8">
            <div className="flex items-center gap-2 text-accent"><Sparkles className="h-4 w-4" /><span className="text-xs font-semibold uppercase tracking-widest">Real-time sync</span></div>
            <h3 className="mt-3 text-2xl font-bold">Changes broadcast instantly.</h3>
            <p className="mt-2 text-muted-foreground">
              Powered by Socket.io, approvals, mentions, and roster updates push to every connected
              web and mobile client in milliseconds. No refresh required.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x pb-24">
        <div className="card-soft grid divide-y divide-border md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            { v: "21", l: "Focused modules" },
            { v: "4", l: "Delivery phases" },
            { v: "<60s", l: "Mobile sync window" },
            { v: "99.9%", l: "Target uptime" },
          ].map((s) => (
            <div key={s.l} className="p-8 text-center">
              <p className="text-4xl font-extrabold tracking-tight text-gradient">{s.v}</p>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-primary-foreground sm:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to consolidate your HR stack?</h2>
              <p className="mt-3 max-w-xl text-white/80">
                See ByThawkHR running with your data in a 30-minute demo. No slides — just the product.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/signup" className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.984_0.012_85)] px-6 py-3 text-sm font-semibold text-foreground transition hover:opacity-90">
                Start free trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-background/10">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
