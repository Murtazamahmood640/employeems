import { createFileRoute, Link } from "react-router-dom";
import { useState } from "react";
import { modules, type Module } from "@/lib/modules";
import { ArrowRight, Sparkles, Zap, Clock, BarChart3 } from "lucide-react";



export default function ModulesPage() {
  const [cat, setCat] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(modules.map(m => m.category)))];
  const list: Module[] = cat === "All" ? modules : modules.filter(m => m.category === cat);

  const liveCount = modules.filter(m => m.features.some(f => f.status === 'live')).length;
  const totalFeatures = modules.reduce((acc, m) => acc + m.features.length, 0);

  return (
    <div className="bg-background min-h-screen">
      <section className="relative overflow-hidden border-b border-border hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-15 blur-3xl animate-pulse-slow bg-primary/30 pointer-events-none" />
        <div className="container-x py-20 lg:py-28 relative">
          <span className="eyebrow inline-flex items-center gap-2 bg-primary/10 border-primary/20 text-primary">
            <Sparkles className="h-4 w-4" /> The full suite
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl animate-fade-in-up leading-tight">
            Complete platform.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Modular control.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground animate-fade-in-up-delay leading-relaxed">
            Every module is built on the same data model, the same API, and the same design language.
            Switch one on and it works immediately, no integrations to maintain.
          </p>

          <div className="mt-12 flex flex-wrap gap-6">
            {[
              { icon: Zap, label: "Live Now", value: liveCount, color: "text-green-500" },
              { icon: Clock, label: "In Roadmap", value: modules.length - liveCount, color: "text-primary" },
              { icon: BarChart3, label: "Total Features", value: totalFeatures, color: "text-accent" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-surface-elevated/60 border border-border/60 rounded-2xl px-5 py-3 backdrop-blur-sm">
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
                <div>
                  <p className="text-2xl font-extrabold text-foreground leading-none">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 lg:py-24">
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                cat === c
                  ? "border-transparent bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                  : "border-border/60 bg-surface-elevated/50 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-surface-elevated"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((m, idx) => {
            const ModIcon = m.icon;
            return (
              <Link
                key={m.slug}
                to={`/modules/${m.slug}`}
                className="uiverse-card group flex flex-col h-full animate-scale-in"
                style={{ animationDelay: `${(idx % 9) * 50}ms` }}
              >
                <div className="uiverse-card-content flex flex-col flex-1 p-7 bg-surface-elevated/30">
                  <div className="flex items-start justify-between mb-7">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/10 flex items-center justify-center text-primary shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      <ModIcon className="h-8 w-8" />
                    </div>
                    <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary">
                      {m.category.replace(/ ï¿½ /g, ' ').replace(/_/g, ' ')}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold tracking-tight text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {m.name.replace(/ ï¿½ /g, ' ').replace(/_/g, ' ')}
                  </h3>
                  <p className="text-sm font-semibold text-primary mb-4">{m.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{m.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {m.highlights.slice(0, 3).map(h => (
                      <span key={h} className="rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/40">
                    <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      <span className="inline-block h-2 w-2 rounded-full bg-primary/60" />
                      {m.features.length} features
                    </span>
                    <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="uiverse-card">
          <div className="uiverse-card-content flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14 bg-primary/5 relative overflow-hidden">
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full opacity-20 blur-3xl bg-primary/30 pointer-events-none" />
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">Not sure where to start?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">We will recommend a module mix based on your team size and goals. Activate what you need, when you need it.</p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link to="/contact" className="btn-primary group text-base px-8 py-4">
                Talk to an expert <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
