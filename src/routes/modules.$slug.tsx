import { createFileRoute, Link, useParams, notFound } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { getModule, modules } from "@/lib/modules";

export const Route = createFileRoute("/modules/$slug")({
  head: ({ params }) => {
    const mod = getModule(params.slug);
    if (!mod) return { meta: [{ title: 'Not Found' }] };
    return {
      meta: [
        { title: `${mod.name} — ByThawkHR` },
        { name: "description", content: mod.description },
      ],
    };
  },
  loader: ({ params }) => {
    const mod = getModule(params.slug);
    if (!mod) throw notFound();
    return mod;
  },
  component: ModuleDetail,
});

function ModuleDetail() {
  const { slug } = Route.useParams();
  const currentMod = getModule(slug)!;
  const others = modules.filter((m) => m.slug !== slug && m.category === currentMod.category).slice(0, 3);
  
  const ModIcon = Icons[currentMod.icon.displayName || currentMod.icon.name || "Box"] as any || Icons.Box;

  return (
    <div className="bg-background min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Use theme primary for the hero gradient instead of heavy module accent */}
        <div className="absolute inset-0 -z-10" style={{ background: `radial-gradient(ellipse at top left, var(--color-primary) / 0.15, transparent 55%), var(--gradient-hero)` }} />
        <div className="absolute inset-0 -z-10 grid-bg opacity-30" />
        
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow bg-primary/30" />
        
        <div className="container-x py-16 lg:py-24 relative">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground animate-fade-in-down mb-8">
            <Link to="/modules" className="hover:text-foreground transition-colors">Modules</Link>
            <Icons.ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-semibold">{currentMod.name.replace(/ — /g, ' ').replace(/[-_]/g, ' ')}</span>
          </nav>
          
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="animate-fade-in-left space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 text-2xl font-bold bg-gradient-to-br from-primary to-accent">
                  {currentMod.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {currentMod.category.replace(/ — /g, ' ').replace(/[-_]/g, ' ')}
                  </p>
                  <p className="text-sm font-semibold mt-1 text-primary">{currentMod.tagline}</p>
                </div>
              </div>
              
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight text-foreground">
                {currentMod.name}
              </h1>
              
              <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">{currentMod.longDescription}</p>
              
              {/* Highlights badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {currentMod.highlights.map((h, i) => (
                  <span 
                    key={h} 
                    className="rounded-full border border-border/60 bg-surface-elevated/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {h}
                  </span>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Link to={`/modules/${slug}/login`} className="btn-primary group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    <Icons.LogIn className="h-4 w-4 group-hover:-rotate-12 transition-transform" />
                    Sign in to {currentMod.name}
                  </span>
                </Link>
                <Link to="/contact" className="btn-ghost hover:bg-primary/5 transition-all duration-300">
                  Book a demo <Icons.ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Feature preview image */}
            <div className="relative animate-fade-in-right hidden lg:block">
              <div className="absolute -inset-8 rounded-3xl opacity-20 blur-3xl animate-pulse bg-primary/40" />
              <div className="relative uiverse-card">
                <div className="uiverse-card-content rounded-2xl overflow-hidden bg-background">
                  <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 text-xs text-muted-foreground font-medium flex items-center gap-2">
                      <Icons.Lock className="h-3 w-3" /> bythawkhr.app / {currentMod.slug}
                    </span>
                  </div>
                  <img src={currentMod.image} alt={`${currentMod.name} interface`} className="w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-x py-24">
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <span className="eyebrow inline-flex items-center gap-2 text-primary border-primary/20 bg-primary/5"><Icons.Sparkles className="h-3.5 w-3.5" /> Platform Features</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-bold tracking-tight leading-tight">Everything you need from <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{currentMod.name}</span>.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">A complete breakdown of what is live today and what is coming next in our roadmap.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentMod.features.map((f, i) => {
            const FeatureIcon = (Icons as any)[f.iconName] || Icons.CheckCircle;
            return (
              <div 
                key={f.title} 
                className="uiverse-card animate-scale-in"
                style={{ animationDelay: `${(i % 10) * 50}ms` }}
              >
                <div className="uiverse-card-content p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <FeatureIcon className="h-5 w-5" />
                    </div>
                    <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${f.status === 'live' ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-muted border-border text-muted-foreground'}`}>
                      {f.status === 'live' ? <Icons.Check className="h-3 w-3" /> : <Icons.CircleDashed className="h-3 w-3" />}
                      {f.status === 'live' ? 'Live' : 'Planned'}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x py-24 border-t border-border/50">
        <div className="rounded-3xl bg-surface-elevated border border-border/60 p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-10 blur-3xl bg-primary/40" />
          
          <div className="mb-12 relative">
            <span className="eyebrow text-primary border-primary/20 bg-primary/5"><Icons.Rocket className="h-3.5 w-3.5" /> Getting started</span>
            <h2 className="mt-4 text-3xl lg:text-4xl font-bold">How {currentMod.name} integrates</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 relative z-10">
            {["Connect", "Configure", "Roll out"].map((t, i) => (
              <div key={t} className="uiverse-card p-6 h-full flex flex-col items-start group">
                <div className="uiverse-card-content w-full">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl text-lg font-bold text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg bg-gradient-to-br from-primary to-accent">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {["Activate the module from Admin Panel — instantly available on web and mobile.",
                      "Set policies, approval chains, and access controls for roles that need it.",
                      "Invite your team. Built-in onboarding flows guide first-time users."][i]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED MODULES */}
      {others.length > 0 && (
        <section className="container-x py-24 border-t border-border/50">
          <div className="mb-12">
            <span className="eyebrow text-primary border-primary/20 bg-primary/5"><Icons.Layers className="h-3.5 w-3.5" /> Explore more</span>
            <h2 className="mt-4 text-3xl font-bold">More in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{currentMod.category}</span></h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((o, idx) => (
              <Link 
                key={o.slug} 
                to={`/modules/${o.slug}`}
                className="uiverse-card group animate-scale-in block"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="uiverse-card-content p-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-md group-hover:scale-110 transition-transform duration-300 text-xl font-bold mb-6 bg-gradient-to-br from-primary to-accent">
                    {o.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{o.name}</h3>
                  <p className="text-sm font-medium mb-3 text-primary">{o.tagline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{o.description.substring(0, 90)}...</p>
                  
                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{o.features.length} features</span>
                    <Icons.ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section className="container-x py-24 border-t border-border/50">
        <div className="rounded-3xl border border-primary/30 relative overflow-hidden p-12 lg:p-20 text-center bg-primary/5 backdrop-blur-md">
          <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(circle at center, var(--color-primary), transparent 60%)` }} />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Ready to explore {currentMod.name}?</h2>
            <p className="text-lg text-muted-foreground mb-10">Join thousands of companies using ByThawkHR to streamline their HR operations and empower their teams.</p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={`/modules/${slug}/login`} className="btn-primary group">
                <Icons.LogIn className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                Sign in to {currentMod.name}
              </Link>
              <Link to="/contact" className="btn-ghost border border-primary/30 hover:bg-primary/10 transition-all duration-300 text-primary">
                Schedule a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
