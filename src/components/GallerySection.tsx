import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { Module } from "@/lib/modules";

interface GallerySectionProps {
  module: Module;
}

export function GallerySection({ module: mod }: GallerySectionProps) {
  const galleryItems = [
    {
      image: mod.image,
      label: "Overview",
      description: "Quick stats, recent activity, and at-a-glance status.",
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
      label: "Dashboard",
      description: "Drill into metrics and slice by team or location.",
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80",
      label: "Detail",
      description: "Per-record detail view with full history.",
    },
  ];

  return (
    <section className="container-x pb-20">
      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {galleryItems.map((item, idx) => (
          <GalleryCard
            key={idx}
            image={item.image}
            label={item.label}
            description={item.description}
            accentColor={mod.accentHex}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}

interface GalleryCardProps {
  image: string;
  label: string;
  description: string;
  accentColor: string;
  index: number;
}

function GalleryCard({ image, label, description, accentColor, index }: GalleryCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl border border-border card-soft transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0.5,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Image wrapper with overlay on hover */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={label}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(135deg, ${accentColor}20, transparent)`
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
          {label}
        </p>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Accent border on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-50 pointer-events-none"
        style={{
          border: `2px solid ${accentColor}`,
          boxShadow: `inset 0 0 30px ${accentColor}22`
        }}
      />
    </div>
  );
}
