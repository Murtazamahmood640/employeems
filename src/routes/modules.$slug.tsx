import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, LogIn, Sparkles } from "lucide-react";
import { getModule, modules, type Module } from "@/lib/modules";

export const Route = createFileRoute("/modules/$slug")({
  loader: ({ params }): { mod: Module } => {
    const mod = getModule(params.slug);
    if (!mod) throw notFound();
    return { mod };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.mod;
    return {
      meta: [
        { title: `${m?.name ?? "Module"} — ByThawkHR` },
        { name: "description", content: m?.description ?? "ByThawkHR module" },
        { property: "og:title", content: `${m?.name} — ByThawkHR` },
        { property: "og:description", content: m?.description },
        { property: "og:image", content: m?.image },
      ],
    };
  },
  component: ModuleDetail,
  notFoundComponent: () => (
    <div className="container-x py-32 text-center">
      <h1 className="text-3xl font-bold">Module not found</h1>
      <Link to="/modules" className="btn-primary mt-6">Back to all modules</Link>
    </div>
  ),
});

function ModuleDetail() {
  const { mod } = Route.useLoaderData() as { mod: Module };
  const others = modules.filter((m) => m.slug !== mod.slug && m.category === mod.category).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10" style={{ background: `radial-gradient(ellipse at top left, ${mod.accentHex}22, transparent 55%), var(--gradient-hero)` }} />
        <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
        <div className="container-x py-16 lg:py-20">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link to="/modules" className="hover:text-foreground">Modules</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{mod.name}</span>
          </nav>
          <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-[var(--shadow-soft)]" style={{ background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}>
                  <mod.icon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{mod.category} · Phase {mod.phase}</p>
                  <p className="text-sm font-semibold" style={{ color: mod.accentHex }}>{mod.tagline}</p>
                </div>
              </div>
              <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">{mod.name}</h1>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground">{mod.longDescription}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {mod.highlights.map((h) => (
                  <span key={h} className="rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium">{h}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/modules/$slug/login" params={{ slug: mod.slug }} className="btn-primary">
                  <LogIn className="h-4 w-4" /> Sign in to {mod.name}
                </Link>
                <Link to="/contact" className="btn-ghost">Book a demo</Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl opacity-30 blur-3xl" style={{ background: mod.accentHex }} />
              <div className="relative card-soft overflow-hidden">
                <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-xs text-muted-foreground">bythawkhr.app / {mod.slug}</span>
                </div>
                <img src={mod.image} alt={`${mod.name} screenshot`} className="aspect-[4/3] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container-x py-20">
        <div className="max-w-2xl">
          <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" style={{ color: mod.accentHex }} /> Key features</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">Everything you need from {mod.name}.</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {mod.features.map((f, i) => (
            <div key={f.title} className="card-soft p-7">
              <div className="grid h-10 w-10 place-items-center rounded-xl text-sm font-bold text-white" style={{ background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENSHOTS / GALLERY */}
      <section className="container-x pb-20">
        <div className="grid gap-5 md:grid-cols-3">
          {[mod.image, "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80", "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80"].map((src, i) => (
            <div key={i} className="card-soft overflow-hidden">
              <img src={src} alt="" className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <div className="p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{["Overview", "Dashboard", "Detail"][i]}</p>
                <p className="mt-1 text-sm">{["Quick stats, recent activity, and at-a-glance status.", "Drill into metrics and slice by team or location.", "Per-record detail view with full history."][i]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-x pb-20">
        <div className="card-soft p-10">
          <h2 className="text-3xl font-bold">How it fits together</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["Connect", "Configure", "Roll out"].map((t, i) => (
              <div key={t}>
                <div className="grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white" style={{ background: mod.accentHex }}>{i + 1}</div>
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {["Activate the module from Admin Panel — instantly available on web and mobile.",
                    "Set policies, approval chains, and access for the roles that need it.",
                    "Invite your team. Built-in onboarding flows guide first-time use."][i]}
                </p>
              </div>
            ))}
          </div>
          <ul className="mt-8 grid gap-2 md:grid-cols-2">
            {["Multi-tenant data isolation", "Real-time sync via Socket.io", "Offline-ready on mobile", "Full audit log"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4" style={{ color: mod.accentHex }} /> {t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* RELATED */}
      {others.length > 0 && (
        <section className="container-x pb-24">
          <h2 className="text-2xl font-bold">More in {mod.category}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} to="/modules/$slug" params={{ slug: o.slug }} className="card-soft group p-6 transition-all hover:-translate-y-1">
                <div className="grid h-11 w-11 place-items-center rounded-xl text-white" style={{ background: o.accentHex }}>
                  <o.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{o.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.tagline}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-xs font-semibold" style={{ color: o.accentHex }}>
                  Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
