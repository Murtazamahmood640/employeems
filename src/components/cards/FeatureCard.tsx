import { LucideIcon } from "lucide-react";
import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

interface FeatureCardProps {
  index: number;
  title: string;
  body: string;
  icon?: LucideIcon;
  accentColor: string;
}

export function FeatureCard({ index, title, body, icon: Icon, accentColor }: FeatureCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const { ref: countRef, count } = useCountUp(index + 1, 600);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated/50 p-7 backdrop-blur transition-all duration-500 hover:border-border hover:shadow-xl md:p-8"
      style={{
        opacity: isVisible ? 1 : 0.5,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
      }}
    >
      {/* Animated gradient border on hover */}
      <div
        className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${accentColor}22, ${accentColor}11)`,
          pointerEvents: "none"
        }}
      />

      {/* Background accent glow */}
      <div
        className="absolute -right-24 -top-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ background: accentColor }}
      />

      {/* Content container */}
      <div className="relative z-10">
        {/* Badge with number */}
        <div
          ref={countRef}
          className="inline-grid h-12 w-12 place-items-center rounded-xl text-center text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
            boxShadow: `0 4px 20px ${accentColor}33`
          }}
        >
          {count.toString().padStart(2, "0")}
        </div>

        {/* Icon if provided */}
        {Icon && (
          <div className="mt-4 inline-block transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            <Icon className="h-6 w-6" style={{ color: accentColor }} />
          </div>
        )}

        {/* Title */}
        <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground group-hover:text-foreground/90">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:text-muted-foreground/90">
          {body}
        </p>
      </div>

      {/* Hover arrow indicator */}
      <div className="absolute bottom-4 right-4 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <svg className="h-5 w-5" fill="none" stroke={accentColor} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </div>
  );
}
