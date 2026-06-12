import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Lock, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { getModule, type Module } from "@/lib/modules";

export const Route = createFileRoute("/modules/$slug/login")({
  loader: ({ params }): { mod: Module } => {
    const mod = getModule(params.slug);
    if (!mod) throw notFound();
    return { mod };
  },
  head: ({ loaderData }) => {
    const m = loaderData?.mod;
    return {
      meta: [
        { title: `Sign in to ${m?.name ?? "Module"} — ByThawkHR` },
        { name: "description", content: `Access ${m?.name} in your ByThawkHR workspace.` },
        { name: "robots", content: "noindex" },
      ],
    };
  },
  component: ModuleLogin,
});

function ModuleLogin() {
  const { mod } = Route.useLoaderData() as { mod: Module };
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* LEFT — Module Showcase */}
      <aside
        className="relative hidden overflow-hidden text-white lg:flex lg:flex-col lg:justify-between lg:p-12 animate-fade-in-left"
        style={{ background: `linear-gradient(155deg, ${mod.accentHex}, oklch(0.18 0.04 260) 75%)` }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 grid-bg" />
        <div
          className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
          style={{ background: mod.accentHex }}
        />

        <div className="relative">
          <Link to="/modules/$slug" params={{ slug: mod.slug }} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to {mod.name}
          </Link>
        </div>

        <div className="relative space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-white/20 shadow-lg">
              <mod.icon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/70 font-semibold">ByThawkHR · {mod.category}</p>
              <p className="text-xl font-bold text-white">{mod.name}</p>
            </div>
          </div>
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight xl:text-5xl">
            {mod.tagline}.
          </h1>
          <p className="mt-4 max-w-md text-white/80">{mod.description}</p>

          <ul className="mt-8 space-y-3 text-sm text-white/85">
            {mod.features.slice(0, 4).map((f) => (
              <li key={f.title} className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0" />
                <span><span className="font-semibold text-white">{f.title}.</span> {f.body}</span>
              </li>
            ))}
          </ul>

          {/* Highlights badges */}
          <div className="pt-4 border-t border-white/20 flex flex-wrap gap-2">
            {mod.highlights.slice(0, 3).map((h) => (
              <span key={h} className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <Sparkles className="h-3 w-3" />
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="relative text-xs text-white/60 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center gap-2">
            <Zap className="h-3 w-3" />
            One ByThawkHR account unlocks every module. Instant switching, single sign-on.
          </div>
        </div>
      </aside>

      {/* RIGHT — login form */}
      <section className="flex items-center justify-center bg-background px-6 py-12 lg:px-12">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link to="/modules/$slug" params={{ slug: mod.slug }} className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <ArrowLeft className="h-4 w-4" /> Back to {mod.name}
            </Link>
            <div className="mt-4 flex items-center gap-3 p-4 rounded-2xl border border-border bg-surface-elevated/50">
              <div className="grid h-12 w-12 place-items-center rounded-xl text-white font-bold" style={{ background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}>
                <mod.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{mod.category}</p>
                <p className="text-lg font-bold text-foreground">{mod.name}</p>
              </div>
            </div>
          </div>

          <span className="eyebrow">Sign in</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">Welcome back to {mod.name}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Use your ByThawkHR account. New here? <Link to="/contact" className="font-semibold text-foreground hover:underline">Request access</Link>.
          </p>

          {submitted ? (
            <div className="mt-8 card-soft p-6 text-center">
              <p className="text-sm">Demo only — connect Lovable Cloud to enable real auth.</p>
              <Link to="/modules/$slug" params={{ slug: mod.slug }} className="btn-primary mt-4">
                Back to {mod.name}
              </Link>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-8 space-y-5"
            >
              <div>
                <label htmlFor="email" className="text-sm font-medium">Work email</label>
                <div className="relative mt-1.5">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="email" type="email" required placeholder="you@company.com"
                    className="w-full rounded-full border border-border bg-surface-elevated py-3 pl-11 pr-4 text-sm outline-none focus:ring-2"
                    style={{ ['--tw-ring-color' as never]: mod.accentHex + "55" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <a href="#" className="text-xs font-semibold text-muted-foreground hover:text-foreground">Forgot?</a>
                </div>
                <div className="relative mt-1.5">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="password" type={showPass ? "text" : "password"} required placeholder="••••••••"
                    className="w-full rounded-full border border-border bg-surface-elevated py-3 pl-11 pr-12 text-sm outline-none focus:ring-2"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Toggle password">
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" className="h-4 w-4 rounded border-border" />
                Keep me signed in for 30 days
              </label>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:brightness-110"
                style={{ background: `linear-gradient(135deg, ${mod.accentHex}, oklch(0.22 0.06 255))` }}
              >
                Sign in to {mod.name} <ArrowRight className="h-4 w-4" />
              </button>

              <div className="relative my-2 text-center">
                <span className="relative z-10 bg-background px-3 text-xs uppercase tracking-widest text-muted-foreground">or continue with</span>
                <span className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border" />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="btn-ghost !py-2.5">
                  <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.25 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.4 14.5 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-1.6H12z"/></svg>
                  Google
                </button>
                <button type="button" className="btn-ghost !py-2.5">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.04c-.03-2.8 2.29-4.14 2.4-4.21-1.31-1.91-3.34-2.17-4.06-2.2-1.73-.17-3.37 1.01-4.25 1.01-.88 0-2.23-.98-3.67-.95-1.89.03-3.63 1.1-4.6 2.79-1.96 3.4-.5 8.43 1.41 11.19.93 1.35 2.04 2.86 3.49 2.8 1.41-.06 1.94-.91 3.65-.91s2.19.91 3.69.88c1.52-.03 2.49-1.37 3.42-2.73 1.08-1.57 1.52-3.09 1.55-3.17-.03-.01-2.97-1.14-3-4.5zM14.41 4.1c.78-.94 1.3-2.25 1.16-3.55-1.12.05-2.47.74-3.27 1.68-.72.83-1.35 2.16-1.18 3.43 1.24.1 2.51-.63 3.29-1.56z"/></svg>
                  Apple
                </button>
              </div>

              <p className="text-center text-xs text-muted-foreground">
                Need help signing in? <Link to="/contact" className="font-semibold text-foreground hover:underline">Contact support</Link>
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
