import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Module } from "@/lib/modules";

interface RelatedModulesProps {
  modules: Module[];
  category: string;
}

export function RelatedModules({ modules, category }: RelatedModulesProps) {
  if (modules.length === 0) return null;

  return (
    <section className="container-x pb-24">
      <h2 className="text-2xl font-bold mb-8">More in {category}</h2>
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {modules.map((mod, idx) => (
          <ModuleCardRelated key={mod.slug} module={mod} index={idx} />
        ))}
      </div>
    </section>
  );
}

interface ModuleCardRelatedProps {
  module: Module;
  index: number;
}

function ModuleCardRelated({ module: mod, index }: ModuleCardRelatedProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border card-soft p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0.5,
        transform: isVisible
          ? "translateY(0) scale(1)"
          : "translateY(30px) scale(0.95)",
        transition: `all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms`,
      }}
    >
      <Link
        to="/modules/$slug"
        params={{ slug: mod.slug }}
        className="absolute inset-0 z-0"
      />
      {/* Background glow on hover */}
      <div
        className="absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20 pointer-events-none"
        style={{ background: mod.accentHex }}
      />

      {/* Content */}
      <div className="relative z-10 cursor-pointer">
        {/* Icon */}
        <div
          className="inline-grid h-11 w-11 place-items-center rounded-xl text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)`,
            boxShadow: `0 4px 12px ${mod.accentHex}33`
          }}
        >
          <mod.icon className="h-5 w-5" />
        </div>

        {/* Title */}
        <h3 className="mt-4 font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
          {mod.name}
        </h3>

        {/* Tagline */}
        <p className="mt-1 text-sm text-muted-foreground group-hover:text-muted-foreground/90 transition-colors">
          {mod.tagline}
        </p>

        {/* CTA */}
        <p
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-all duration-300 group-hover:translate-x-1"
          style={{ color: mod.accentHex }}
        >
          Explore{" "}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </p>
      </div>

      {/* Accent border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-30 pointer-events-none"
        style={{
          border: `1px solid ${mod.accentHex}`,
          background: `linear-gradient(135deg, ${mod.accentHex}10, transparent)`
        }}
      />
    </div>
  );
}
