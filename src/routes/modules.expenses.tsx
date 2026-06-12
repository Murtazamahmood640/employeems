import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, LogIn, Sparkles, Layers, Rocket } from "lucide-react";
import { modules } from "@/lib/modules";

const MODULE_SLUG = "expenses";

export const Route = createFileRoute("/modules/expenses")({
  head: () => {
    const mod = modules.find(m => m.slug === MODULE_SLUG)!;
    return {
      meta: [
        { title: `${mod.name} — ByThawkHR` },
        { name: "description", content: mod.description },
      ],
    };
  },
  component: ModuleDetail,
});

function ModuleDetail() {
  const currentMod = modules.find(m => m.slug === MODULE_SLUG)!;
  const others = modules.filter((m) => m.slug !== MODULE_SLUG && m.category === currentMod.category).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10" style={{ background: `radial-gradient(ellipse at top left, ${currentMod.accentHex}22, transparent 55%), var(--gradient-hero)` }} />
        <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
        
        {/* Animated background blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ background: currentMod.accentHex }} />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15 blur-3xl animate-pulse-slow-delay" style={{ background: currentMod.accentHex }} />
        
        <div className="container-x py-16 lg:py-24 relative">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground animate-fade-in-down">
            <Link to="/modules" className="hover:text-foreground transition-colors">Modules</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-semibold">{currentMod.name}</span>
          </nav>
          
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="animate-fade-in-left space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="grid h-16 w-16 place-items-center rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 text-2xl font-bold" style={{ background: `linear-gradient(135deg, ${currentMod.accentHex}, ${currentMod.accentHex}cc)` }}>
                  {currentMod.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {currentMod.category}
                  </p>
                  <p className="text-sm font-semibold mt-1" style={{ color: currentMod.accentHex }}>{currentMod.tagline}</p>
                </div>
              </div>
              
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-tight">
                {currentMod.name}
              </h1>
              
              <p className="max-w-xl text-lg text-muted-foreground leading-relaxed">{currentMod.longDescription}</p>
              
              {/* Highlights badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {currentMod.highlights.map((h, i) => (
                  <span 
                    key={h} 
                    className="rounded-full border border-border/60 bg-surface-elevated/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    {h}
                  </span>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <Link to={`/modules/${MODULE_SLUG}/login`} className="btn-primary group">
                  <LogIn className="h-4 w-4 group-hover:-rotate-12 transition-transform" />
                  Sign in to {currentMod.name}
                </Link>
                <Link to="/contact" className="btn-ghost hover:bg-primary/5 transition-all duration-300">
                  Book a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            
            {/* Feature preview image */}
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-8 rounded-3xl opacity-30 blur-3xl animate-pulse" style={{ background: currentMod.accentHex }} />
              <div className="relative card-soft overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-border/50 hover:border-primary/40">
                <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-muted-foreground">bythawkhr.app / {currentMod.slug}</span>
                </div>
                <img src={currentMod.image} alt={`${currentMod.name} screenshot`} className="aspect-[4/3] w-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-x py-24">
        <div className="max-w-3xl mb-16 animate-fade-in-up">
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" style={{ color: currentMod.accentHex }} /> Key features</span>
          <h2 className="mt-4 text-5xl font-bold tracking-tight leading-tight">Everything you need from <span className="text-transparent bg-gradient-to-r bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${currentMod.accentHex}, ${currentMod.accentHex}cc)` }}>{currentMod.name}</span>.</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">Powerful features designed to streamline your workflows and boost team productivity.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {currentMod.features.map((f, i) => (
            <div 
              key={f.title} 
              className="group card-soft p-8 hover:-translate-y-2 hover:shadow-lg transition-all duration-300 animate-scale-in border border-border/50 hover:border-primary/40"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-xl text-sm font-bold text-white shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${currentMod.accentHex}, ${currentMod.accentHex}cc)` }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 group-hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENSHOTS / GALLERY */}
      <section className="container-x py-24 border-t border-border/50">
        <div className="mb-12 animate-fade-in-up">
          <span className="eyebrow"><Layers className="h-3.5 w-3.5" style={{ color: currentMod.accentHex }} /> Interface gallery</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Explore {currentMod.name} in action</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {[currentMod.image, "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format&fit=crop", "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&auto=format&fit=crop"].map((src, i) => (
            <div 
              key={i} 
              className="group card-soft overflow-hidden hover:-translate-y-3 hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ background: currentMod.accentHex }}></span>
                  {["Overview", "Analytics", "Management"][i]}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{["Central dashboard with real-time stats and recent activity.", "In-depth analytics with custom filters and drill-down views.", "Detailed records with complete history and audit trails."][i]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x py-24 border-t border-border/50">
        <div className="card-soft p-12 border-2 border-border/50 hover:border-primary/40 transition-all duration-300">
          <div className="mb-12 animate-fade-in-up">
            <span className="eyebrow"><Rocket className="h-3.5 w-3.5" style={{ color: currentMod.accentHex }} /> Getting started</span>
            <h2 className="mt-4 text-4xl font-bold">How {currentMod.name} integrates</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {["Connect", "Configure", "Roll out"].map((t, i) => (
              <div 
                key={t} 
                className="group animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full text-sm font-bold text-white mb-4 group-hover:scale-125 transition-transform duration-300" style={{ background: `linear-gradient(135deg, ${currentMod.accentHex}, ${currentMod.accentHex}cc)` }}>
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed group-hover:translate-x-2 transition-transform duration-300">
                  {["Activate the module from Admin Panel — instantly available on web and mobile.",
                    "Set policies, approval chains, and access controls for roles that need it.",
                    "Invite your team. Built-in onboarding flows guide first-time users."][i]}
                </p>
              </div>
            ))}
          </div>
          
          {/* Benefits checklist */}
          <div className="grid gap-3 md:grid-cols-2 pt-8 border-t border-border/50">
            {["Multi-tenant data isolation", "Real-time sync via Socket.io", "Offline-ready on mobile", "Complete audit trail", "GDPR-compliant", "Zero context-switching"].map((t, i) => (
              <div 
                key={t} 
                className="flex items-center gap-3 text-sm group animate-fade-in-up hover:translate-x-2 transition-all duration-300"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="h-5 w-5 rounded-full flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-all duration-300">
                  <Check className="h-3 w-3" style={{ color: currentMod.accentHex }} />
                </div>
                <span className="text-foreground">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED MODULES */}
      {others.length > 0 && (
        <section className="container-x py-24 border-t border-border/50">
          <div className="mb-12 animate-fade-in-up">
            <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" style={{ color: currentMod.accentHex }} /> Explore more</span>
            <h2 className="mt-4 text-4xl font-bold">More in <span className="text-transparent bg-gradient-to-r bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${currentMod.accentHex}, ${currentMod.accentHex}cc)` }}>{currentMod.category}</span></h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((o, idx) => (
              <Link 
                key={o.slug} 
                to={`/modules/${o.slug}`}
                className="group card-soft p-8 transition-all duration-300 hover:-translate-y-3 hover:shadow-xl border border-border/50 hover:border-primary/40 animate-scale-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg group-hover:scale-125 transition-transform duration-300 text-xl font-bold" style={{ background: `linear-gradient(135deg, ${o.accentHex}, ${o.accentHex}cc)` }}>
                  {o.name.charAt(0)}
                </div>
                <h3 className="mt-6 text-lg font-bold text-foreground">{o.name}</h3>
                <p className="mt-2 text-sm font-medium transition-colors duration-300" style={{ color: o.accentHex }}>{o.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.description.substring(0, 80)}...</p>
                
                <div className="mt-6 pt-4 border-t border-border/30 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{o.features.length} features</span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300" style={{ color: o.accentHex }}>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section className="container-x py-24">
        <div className="card-soft border-2 border-border/50 relative overflow-hidden p-12 lg:p-16 text-center animate-fade-in-up">
          {/* Background animation */}
          <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(ellipse at center, ${currentMod.accentHex}, transparent 70%)` }} />
          
          <div className="relative">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">Ready to explore {currentMod.name}?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Join thousands of companies using ByThawkHR to streamline their HR operations.</p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to={`/modules/${MODULE_SLUG}/login`} className="btn-primary group">
                <LogIn className="h-4 w-4 group-hover:-rotate-12 transition-transform duration-300" />
                Sign in to {currentMod.name}
              </Link>
              <Link to="/contact" className="btn-ghost hover:bg-primary/5 transition-all duration-300">
                Schedule a demo <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
