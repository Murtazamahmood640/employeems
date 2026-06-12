import { Sparkles } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import type { Module } from "@/lib/modules";

interface FeaturesSectionProps {
  module: Module;
}

export function FeaturesSection({ module: mod }: FeaturesSectionProps) {
  return (
    <section className="container-x py-20">
      {/* Section header */}
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/50 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" style={{ color: mod.accentHex }} />
          <span>Key features</span>
        </div>
        <h2 className="mt-6 text-4xl font-bold tracking-tight text-balance">
          Everything you need from {mod.name}.
        </h2>
      </div>

      {/* Features grid */}
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:gap-6">
        {mod.features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            index={index}
            title={feature.title}
            body={feature.body}
            accentColor={mod.accentHex}
          />
        ))}
      </div>
    </section>
  );
}
