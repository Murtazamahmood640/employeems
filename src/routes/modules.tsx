import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { modules, type Module } from "@/lib/modules";
import { ArrowRight, Sparkles, Layers } from "lucide-react";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "All 21 Modules — ByThawkHR" },
      { name: "description", content: "Browse all 21 ByThawkHR modules across Core HR, Operations, Finance, Talent, Engagement, and Governance — delivered across 4 phases." },
      { property: "og:title", content: "All 21 Modules — ByThawkHR" },
      { property: "og:description", content: "21 focused HR modules. Activate only what you need." },
    ],
  }),
  component: ModulesPage,
});

const categories = ["All", "Core HR", "Operations", "Finance", "Talent", "Engagement", "Governance"] as const;

function ModulesPage() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list: Module[] = cat === "All" ? modules : modules.filter((m) => m.category === cat);
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-x py-20">
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> The full suite</span>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl animate-fade-in-up">
            21 modules. <span className="text-gradient">One platform.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground animate-fade-in-up-delay">
            Every module is built on the same data model, the same API, and the same design language.
            Switch one on and it just works — no integrations to maintain.
          </p>
        </div>
      </section>

      <section className="container-x py-16">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                cat === c
                  ? "border-transparent bg-[image:var(--gradient-primary)] text-primary-foreground shadow-lg scale-105"
                  : "border-border bg-surface-elevated text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((m, idx) => (
            <Link
              key={m.slug}
              to={`/modules/${m.slug}`}
              className="group relative overflow-hidden rounded-3xl border border-border bg-background backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-primary/40 animate-scale-in"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -inset-1 rounded-3xl opacity-0 transition-all duration-500 group-hover:opacity-20 blur-xl" style={{ background: m.accentHex }} />
              
              <div className="relative flex flex-col h-full p-8">
                {/* Top section with icon and category badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl text-2xl font-bold" style={{ background: `linear-gradient(135deg, ${m.accentHex}, ${m.accentHex}cc)` }}>
                    {m.name.charAt(0)}
                  </div>
                  <span className="rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary/80 backdrop-blur-sm">
                    {m.category}
                  </span>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold tracking-tight text-foreground mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-primary/80 group-hover:bg-clip-text transition-all duration-300">{m.name}</h3>
                <p className="text-sm font-medium mb-3 transition-colors duration-300" style={{ color: m.accentHex }}>{m.tagline}</p>
                <p className="flex-1 text-sm text-muted-foreground leading-relaxed mb-6">{m.description}</p>
                
                {/* Feature count */}
                <div className="mb-4 flex items-center gap-2">
                  <Layers className="h-3.5 w-3.5" style={{ color: m.accentHex }} />
                  <span className="text-xs font-semibold text-muted-foreground">{m.features.length} core features</span>
                </div>
                
                {/* Highlights */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {m.highlights.slice(0, 2).map((h) => (
                    <span key={h} className="rounded-full border border-border/60 bg-surface-elevated/60 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                      {h}
                    </span>
                  ))}
                  {m.highlights.length > 2 && (
                    <span className="text-[10px] font-medium text-muted-foreground/60">+{m.highlights.length - 2} more</span>
                  )}
                </div>
                
                {/* Bottom section */}
                <div className="flex items-center justify-between pt-4 border-t border-border/30">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: m.accentHex }}></span>
                    Explore
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="card-soft flex flex-col items-start justify-between gap-6 p-10 md:flex-row md:items-center hover:shadow-lg transition-shadow duration-300">
          <div>
            <h2 className="text-2xl font-bold">Not sure where to start?</h2>
            <p className="mt-1 text-muted-foreground">We'll recommend a module mix based on your team size and goals.</p>
          </div>
          <Link to="/contact" className="btn-primary">
            Talk to us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
