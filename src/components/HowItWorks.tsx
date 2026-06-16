import { Check } from "lucide-react";
import { StepCard } from "@/components/cards/StepCard";
import type { Module } from "@/lib/modules";

interface HowItWorksProps {
  module: Module;
}

export function HowItWorks({ module: mod }: HowItWorksProps) {
  const steps = [
    {
      title: "Connect",
      description: "Activate the module from Admin Panel â€” instantly available on web and mobile.",
    },
    {
      title: "Configure",
      description: "Set policies, approval chains, and access for the roles that need it.",
    },
    {
      title: "Roll out",
      description: "Invite your team. Built-in onboarding flows guide first-time use.",
    },
  ];

  const features = [
    "Multi-tenant data isolation",
    "Real-time sync via Socket.io",
    "Offline-ready on mobile",
    "Full audit log",
  ];

  return (
    <section className="container-x pb-20">
      <div className="card-soft p-8 md:p-10">
        <h2 className="text-3xl font-bold">How it fits together</h2>

        {/* Steps timeline */}
        <div className="mt-10 space-y-8">
          {steps.map((step, idx) => (
            <StepCard
              key={step.title}
              number={idx + 1}
              title={step.title}
              description={step.description}
              accentColor={mod.accentHex}
              isLast={idx === steps.length - 1}
            />
          ))}
        </div>

        {/* Features checklist */}
        <div className="mt-12 border-t border-border pt-10">
          <h3 className="font-semibold text-foreground mb-4">Built-in capabilities</h3>
          <ul className="grid gap-3 md:grid-cols-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <Check
                  className="h-4 w-4 shrink-0"
                  style={{ color: mod.accentHex }}
                />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
