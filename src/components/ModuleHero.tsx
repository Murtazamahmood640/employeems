import { Link } from "@tanstack/react-router";
import { ChevronRight, LogIn } from "lucide-react";
import { useParallax } from "@/hooks/useScrollAnimation";
import type { Module } from "@/lib/modules";

interface ModuleHeroProps {
  module: Module;
}

export function ModuleHero({ module: mod }: ModuleHeroProps) {
  const { ref: imageRef, offset } = useParallax();

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10" style={{ background: `radial-gradient(ellipse at top left, ${mod.accentHex}22, transparent 55%), var(--gradient-hero)` }} />
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />

      <div className="container-x py-16 lg:py-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-muted-foreground animate-fadeIn">
          <Link to="/modules" className="hover:text-foreground transition-colors">Modules</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{mod.name}</span>
        </nav>

        {/* Main content grid */}
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Left: Text content */}
          <div className="space-y-8 animate-slideUp" style={{ animationDelay: "0.1s" }}>
            {/* Header badge */}
            <div className="flex items-center gap-3">
              <div
                className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}
              >
                <mod.icon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{mod.category} · Phase {mod.phase}</p>
                <p className="text-sm font-semibold" style={{ color: mod.accentHex }}>{mod.tagline}</p>
              </div>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl leading-tight text-balance">
                {mod.name}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground leading-relaxed">
                {mod.longDescription}
              </p>
            </div>

            {/* Highlight badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {mod.highlights.map((h) => (
                <span
                  key={h}
                  className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-foreground transition-all duration-300 hover:border-current hover:shadow-sm"
                >
                  {h}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/modules/$slug/login"
                params={{ slug: mod.slug }}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all duration-300 hover:brightness-110 hover:shadow-xl active:scale-95"
                style={{ background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}
              >
                <LogIn className="h-4 w-4" /> Sign in to {mod.name}
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-current hover:bg-surface-elevated active:scale-95"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Right: Image with parallax */}
          <div className="relative animate-slideUp" style={{ animationDelay: "0.2s" }}>
            {/* Glow effect */}
            <div className="absolute -inset-6 rounded-3xl opacity-30 blur-3xl" style={{ background: mod.accentHex }} />

            {/* Image container with parallax */}
            <div
              ref={imageRef}
              className="relative card-soft overflow-hidden transition-transform duration-300"
              style={{
                transform: `translateY(${offset}px)`,
                willChange: "transform"
              }}
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-xs text-muted-foreground">bythawkhr.app / {mod.slug}</span>
              </div>

              {/* Image */}
              <img
                src={mod.image}
                alt={`${mod.name} screenshot`}
                className="aspect-[4/3] w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
}
