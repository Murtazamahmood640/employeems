import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  accentColor: string;
  isLast?: boolean;
}

export function StepCard({ number, title, description, accentColor, isLast = false }: StepCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.4);

  return (
    <div ref={ref} className="relative">
      {/* Connector line to next step */}
      {!isLast && (
        <div
          className="absolute left-6 top-16 hidden h-12 w-0.5 md:block"
          style={{
            background: `linear-gradient(to bottom, ${accentColor}, transparent)`,
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease-out"
          }}
        />
      )}

      <div
        className="relative transition-all duration-700"
        style={{
          opacity: isVisible ? 1 : 0.3,
          transform: isVisible ? "translateX(0)" : "translateX(-20px)",
          transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
        }}
      >
        {/* Step number circle */}
        <div className="flex items-start gap-4">
          <div
            className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-center text-sm font-bold text-white shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
              boxShadow: `0 4px 20px ${accentColor}44`
            }}
          >
            {number}
            {/* Animated pulse on initial load */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px solid ${accentColor}`,
                opacity: isVisible ? 0 : 1,
                animation: isVisible ? `pulse-ring 2s ease-out` : "none"
              }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 pt-1">
            <h4 className="font-semibold text-foreground">{title}</h4>
            <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </div>
      </div>

      {/* CSS for pulse animation */}
      <style>{`
        @keyframes pulse-ring {
          0% {
            box-shadow: 0 0 0 0 ${accentColor}66;
          }
          70% {
            box-shadow: 0 0 0 10px ${accentColor}00;
          }
          100% {
            box-shadow: 0 0 0 0 ${accentColor}00;
          }
        }
      `}</style>
    </div>
  );
}
