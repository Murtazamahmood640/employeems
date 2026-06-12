import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Eye, EyeOff, Lock, Mail } from "lucide-react";
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

  return (
    <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
      {/* LEFT — about module */}
      <aside
        className="relative hidden overflow-hidden text-white lg:flex lg:flex-col lg:justify-between lg:p-12"
        style={{ background: `linear-gradient(155deg, ${mod.accentHex}, oklch(0.18 0.04 260) 75%)` }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 grid-bg" />
        <div
          className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full opacity-40 blur-3xl animate-pulse"
          style={{ background: mod.accentHex }}
        />
        <div
          className="absolute -top-40 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: mod.accentHex,
            animationDelay: "0.5s"
          }}
        />

        {/* Back button */}
        <div className="relative z-10">
          <Link to="/modules/$slug" params={{ slug: mod.slug }} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-300">
            <ArrowLeft className="h-4 w-4" /> Back to {mod.name}
          </Link>
        </div>

        {/* Module info */}
        <div className="relative z-10 space-y-8">
          {/* Module card */}
          <div className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-background/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-background/20 hover:border-white/25">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-background/20 text-white">
              <mod.icon className="h-7 w-7" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/70 font-semibold">ByThawkHR · {mod.category}</p>
              <p className="text-xl font-bold text-white">{mod.name}</p>
            </div>
          </div>

          {/* Tagline and description */}
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight xl:text-5xl leading-tight text-balance">
              {mod.tagline}
            </h1>
            <p className="mt-4 max-w-md text-white/85 leading-relaxed">{mod.description}</p>
          </div>

          {/* Features list with enhanced styling */}
          <ul className="space-y-4">
            {mod.features.slice(0, 4).map((f, idx) => (
              <li
                key={f.title}
                className="flex items-start gap-3 opacity-0 animate-slideIn"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                  animationFillMode: "forwards"
                }}
              >
                <div className="relative flex-shrink-0 mt-0.5">
                  <div
                    className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center"
                    style={{ borderColor: "white", borderWidth: "1.5px" }}
                  >
                    <Check className="h-3 w-3" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white">{f.title}</p>
                  <p className="text-sm text-white/75 mt-0.5">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer note */}
        <div className="relative z-10 text-xs text-white/60 border-t border-white/10 pt-6">
          <p className="leading-relaxed">One ByThawkHR account unlocks every module you have access to. Single sign-on, instant switching, seamless experience.</p>
        </div>
      </aside>

      {/* RIGHT — login form */}
      <section className="flex items-center justify-center bg-background px-6 py-12 lg:px-12 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at top right, ${mod.accentHex}15, transparent 70%)`
          }}
        />

        <div className="w-full max-w-md relative z-10">
          {/* Mobile header */}
          <div className="mb-8 lg:hidden">
            <Link to="/modules/$slug" params={{ slug: mod.slug }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to {mod.name}
            </Link>
            <div className="mt-4 flex items-center gap-3">
              <div
                className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}
              >
                <mod.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{mod.category}</p>
                <p className="text-lg font-bold">{mod.name}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <span className="eyebrow text-xs font-semibold uppercase tracking-widest">Sign in</span>
            <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
            <p className="text-sm text-muted-foreground">
              Use your ByThawkHR account. New here?{" "}
              <Link to="/contact" className="font-semibold text-foreground hover:underline">
                Request access
              </Link>
              .
            </p>
          </div>

          {submitted ? (
            <div className="mt-8 card-soft p-8 text-center border border-border">
              <div
                className="inline-grid h-12 w-12 place-items-center rounded-xl text-white mb-4"
                style={{ background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}
              >
                <Check className="h-6 w-6" />
              </div>
              <p className="text-sm font-medium">Demo only — connect Lovable Cloud to enable real auth.</p>
              <Link to="/modules/$slug" params={{ slug: mod.slug }} className="btn-primary mt-6">
                Back to {mod.name}
              </Link>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="mt-8 space-y-6"
            >
              {/* Email field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Work email</label>
                <div className="relative group">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:transition-colors group-focus-within:duration-300" style={{ color: "inherit" }} />
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-full border border-border bg-surface-elevated py-3 pl-11 pr-4 text-sm outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{
                      "--tw-ring-color": mod.accentHex + "55"
                    } as React.CSSProperties}
                  />
                </div>
              </div>

              {/* Password field */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <a href="#" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">Forgot?</a>
                </div>
                <div className="relative group">
                  <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground group-focus-within:transition-colors group-focus-within:duration-300" />
                  <input
                    id="password"
                    type={showPass ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    className="w-full rounded-full border border-border bg-surface-elevated py-3 pl-11 pr-12 text-sm outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{
                      "--tw-ring-color": mod.accentHex + "55"
                    } as React.CSSProperties}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Toggle password"
                  >
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Remember me checkbox */}
              <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer group hover:text-foreground transition-colors">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-border cursor-pointer"
                  defaultChecked
                />
                <span>Keep me signed in for 30 days</span>
              </label>

              {/* Sign in button */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-all duration-300 hover:brightness-110 hover:shadow-xl active:scale-95"
                style={{ background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}
              >
                Sign in to {mod.name} <ArrowRight className="h-4 w-4" />
              </button>

              {/* Divider */}
              <div className="relative my-4">
                <span className="relative z-10 bg-background px-3 text-xs uppercase tracking-widest text-muted-foreground font-medium">or continue with</span>
                <span className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border" />
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="btn-ghost !py-3 group transition-all duration-300 hover:border-current"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.25 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.4 14.5 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-1.6H12z" /></svg>
                  <span className="ml-1 hidden sm:inline">Google</span>
                </button>
                <button
                  type="button"
                  className="btn-ghost !py-3 group transition-all duration-300 hover:border-current"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.04c-.03-2.8 2.29-4.14 2.4-4.21-1.31-1.91-3.34-2.17-4.06-2.2-1.73-.17-3.37 1.01-4.25 1.01-.88 0-2.23-.98-3.67-.95-1.89.03-3.63 1.1-4.6 2.79-1.96 3.4-.5 8.43 1.41 11.19.93 1.35 2.04 2.86 3.49 2.8 1.41-.06 1.94-.91 3.65-.91s2.19.91 3.69.88c1.52-.03 2.49-1.37 3.42-2.73 1.08-1.57 1.52-3.09 1.55-3.17-.03-.01-2.97-1.14-3-4.5zM14.41 4.1c.78-.94 1.3-2.25 1.16-3.55-1.12.05-2.47.74-3.27 1.68-.72.83-1.35 2.16-1.18 3.43 1.24.1 2.51-.63 3.29-1.56z" /></svg>
                  <span className="ml-1 hidden sm:inline">Apple</span>
                </button>
              </div>

              {/* Support link */}
              <p className="text-center text-xs text-muted-foreground">
                Need help signing in?{" "}
                <Link to="/contact" className="font-semibold text-foreground hover:underline">
                  Contact support
                </Link>
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
