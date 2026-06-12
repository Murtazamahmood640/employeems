import { createFileRoute, Link } from "@tanstack/react-router";
import { Compass, Heart, Rocket, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ByThawkHR" },
      { name: "description", content: "ByThawkHR is on a mission to give every company a humane, unified HR platform — modular, mobile-first, and built to scale." },
      { property: "og:title", content: "About ByThawkHR" },
      { property: "og:description", content: "We build the HR platform we always wanted: modular, fast, mobile-first." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" },
    ],
  }),
  component: About,
});

const values = [
  { icon: Compass, title: "Clarity over clutter", body: "Every screen earns its place. If a feature doesn't help an employee or admin, it doesn't ship." },
  { icon: Heart, title: "People first, always", body: "HR software touches real lives. We design for dignity, not for box-ticking." },
  { icon: Rocket, title: "Ship in phases", body: "Four focused delivery phases — never a big-bang rewrite that breaks live workflows." },
  { icon: Users, title: "One team, one API", body: "A single backend serves web, mobile, and integrations. No duplicated logic, no drift." },
];

function About() {
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Our story</span>
            <h1 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
              We're building the HR platform we <span className="text-gradient">always wanted</span>.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              ByThawkHR started with a simple frustration — running a company shouldn't mean stitching
              together ten subscriptions, three spreadsheets, and a WhatsApp group. So we built one
              modular workspace where People, Operations, Finance, Talent, and Governance live together.
            </p>
          </div>
          <div className="card-soft overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=80"
              alt="Team collaborating around a table"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="max-w-2xl">
          <span className="eyebrow">What we believe</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Principles, not slogans.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="card-soft p-7">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="card-soft p-10">
            <h2 className="text-3xl font-bold">A roadmap in four phases.</h2>
            <p className="mt-3 text-muted-foreground">We deliver in focused phases so live customers never get disrupted by a big-bang release.</p>
            <ol className="mt-8 space-y-5">
              {[
                { p: "Phase 1", t: "Foundation (Core HR)", d: "People, Attendance, Leave, Projects, Desk." },
                { p: "Phase 2", t: "Enrich the foundation", d: "Documents, org chart, comments, announcements, onboarding." },
                { p: "Phase 3", t: "Power modules", d: "Payroll, Expenses, Assets, Analytics, Performance." },
                { p: "Phase 4", t: "Enterprise suite", d: "Recruit, Cliq, Training, OKRs, Compliance, Exit, and more." },
              ].map((s) => (
                <li key={s.p} className="flex gap-4">
                  <div className="grid h-10 w-20 shrink-0 place-items-center rounded-full bg-accent-soft text-xs font-bold uppercase tracking-wider text-accent-foreground">{s.p}</div>
                  <div>
                    <p className="font-semibold">{s.t}</p>
                    <p className="text-sm text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="space-y-6">
            <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=900&q=80" alt="" className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
            <div className="card-soft p-6">
              <p className="text-sm text-muted-foreground">"We replaced four tools in our first month with ByThawkHR. The mobile clock-in alone paid for the year."</p>
              <p className="mt-3 text-sm font-semibold">— Pilot customer, 80-person logistics team</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-[image:var(--gradient-primary)] p-10 text-primary-foreground">
          <h3 className="text-2xl font-bold">Want to chat with the team?</h3>
          <Link to="/contact" className="inline-flex items-center rounded-full bg-[oklch(0.984_0.012_85)] px-6 py-3 text-sm font-semibold text-foreground hover:opacity-90">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
