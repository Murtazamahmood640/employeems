import { LucideIcon } from "lucide-react";
import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CapabilityCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  accentColor: string;
}

export function CapabilityCard({ icon: Icon, title, items, accentColor }: CapabilityCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-elevated/80 to-background p-6 transition-all duration-500 hover:shadow-lg"
      style={{
        opacity: isVisible ? 1 : 0.5,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"
      }}
    >
      {/* Accent glow on hover */}
      <div
        className="absolute -right-16 -top-16 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
        style={{ background: accentColor }}
      />

      {/* Icon container */}
      <div
        className="relative inline-grid h-14 w-14 place-items-center rounded-xl text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
          boxShadow: `0 4px 16px ${accentColor}44`
        }}
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="relative z-10 mt-4 font-semibold text-foreground">{title}</h3>

      {/* Items list */}
      <ul className="relative z-10 mt-4 space-y-2.5">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Check
              className="mt-0.5 h-4 w-4 shrink-0 transition-all duration-300 group-hover:scale-110"
              style={{ color: accentColor }}
            />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
