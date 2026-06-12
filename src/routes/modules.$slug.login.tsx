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
          className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full opacity-40 blur-3xl animate-pulse-slow"
          style={{ background: mod.accentHex }}
        />
        <div
          className="absolute top-40 -left-32 h-72 w-72 rounded-full opacity-30 blur-3xl animate-pulse-slow-delay"
          style={{ background: mod.accentHex }}
        />

        <div className="relative animate-fade-in-down">
          <Link to="/modules/$slug" params={{ slug: mod.slug }} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors duration-300 group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" /> Back to {mod.name}
          </Link>
        </div>

        <div className="relative space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl hover:bg-white/15 transition-all duration-300">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-white/20 shadow-lg text-xl font-bold text-white">
              {mod.name.charAt(0)}
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/70">ByThawkHR · {mod.category}</p>
              <p className="text-lg font-bold">{mod.name}</p>
            </div>
          </div>

          <div>
            <h1 className="text-5xl font-extrabold tracking-tight leading-tight">
              {mod.tagline}
            </h1>
            <p className="mt-4 max-w-lg text-white/85 leading-relaxed">{mod.longDescription}</p>
          </div>

          {/* Features list with animations */}
          <ul className="space-y-4 text-sm text-white/90">
            {mod.features.slice(0, 4).map((f, i) => (
              <li 
                key={f.title} 
                className="flex items-start gap-4 group animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Check className="mt-1 h-5 w-5 shrink-0 text-white/70 group-hover:text-white transition-colors duration-300" />
                <div className="group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-bold text-white">{f.title}</span>
                  <p className="text-white/75 mt-1">{f.body}</p>
                </div>
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
          One ByThawkHR account unlocks every module. Instant switching, single sign-on.
        </div>
      </aside>

      {/* RIGHT — Login Form */}
      <section className="flex items-center justify-center bg-background px-6 py-12 lg:px-12 animate-fade-in-right">
        <div className="w-full max-w-md">
          {/* Mobile header */}
          <div className="mb-8 lg:hidden animate-fade-in-down">
            <Link to="/modules/$slug" params={{ slug: mod.slug }} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" /> Back to {mod.name}
            </Link>
            <div className="mt-4 flex items-center gap-3 p-4 rounded-2xl border border-border bg-surface-elevated/50">
              <div className="grid h-12 w-12 place-items-center rounded-xl text-white font-bold text-lg" style={{ background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}>
                {mod.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{mod.category}</p>
                <p className="text-lg font-bold text-foreground">{mod.name}</p>
              </div>
            </div>
          </div>

          {!submitted ? (
            <>
              <div className="mb-8 animate-fade-in-up">
                <span className="eyebrow"><Sparkles className="h-3.5 w-3.5" /> Sign in</span>
                <h2 className="mt-4 text-3xl font-bold tracking-tight bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}>
                  Welcome to {mod.name}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use your ByThawkHR account. <Link to="/contact" className="font-semibold text-primary hover:text-primary/80 transition-colors">Request access</Link>.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2.5">Work email</label>
                  <div className="relative group">
                    <Mail className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-border bg-surface-elevated pl-12 pr-4 py-3 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-muted-foreground hover:border-border/80"
                    />
                  </div>
                </div>

                {/* Password Input */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <label htmlFor="password" className="text-sm font-semibold text-foreground">Password</label>
                    <Link to="/forgot-password" className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors">Forgot?</Link>
                  </div>
                  <div className="relative group">
                    <Lock className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" />
                    <input
                      id="password"
                      type={showPass ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      className="w-full rounded-xl border border-border bg-surface-elevated pl-12 pr-12 py-3 text-sm outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder-muted-foreground hover:border-border/80"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPass(!showPass)}
                      className="absolute right-4 top-3.5 text-muted-foreground hover:text-foreground transition-colors duration-300"
                      aria-label="Toggle password"
                    >
                      {showPass ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {/* Remember me */}
                <label className="flex items-center gap-3 text-sm text-muted-foreground group cursor-pointer hover:text-foreground transition-colors">
                  <input type="checkbox" className="h-4 w-4 rounded border-border text-primary accent-primary cursor-pointer" />
                  <span>Keep me signed in for 30 days</span>
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
                  style={{ 
                    background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)`,
                    boxShadow: `0 8px 32px -8px ${mod.accentHex}66`
                  }}
                >
                  {loading ? (
                    <>
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign in to {mod.name}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="relative my-6">
                  <span className="relative z-10 bg-background px-3 text-xs uppercase tracking-widest text-muted-foreground/60">or continue with</span>
                  <span className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border" />
                </div>

                {/* Social buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" className="btn-ghost hover:bg-surface-elevated/80 transition-all duration-300 group">
                    <svg className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.25 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.4 14.5 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-1.6H12z"/></svg>
                    Google
                  </button>
                  <button type="button" className="btn-ghost hover:bg-surface-elevated/80 transition-all duration-300 group">
                    <svg className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.04c-.03-2.8 2.29-4.14 2.4-4.21-1.31-1.91-3.34-2.17-4.06-2.2-1.73-.17-3.37 1.01-4.25 1.01-.88 0-2.23-.98-3.67-.95-1.89.03-3.63 1.1-4.6 2.79-1.96 3.4-.5 8.43 1.41 11.19.93 1.35 2.04 2.86 3.49 2.8 1.41-.06 1.94-.91 3.65-.91s2.19.91 3.69.88c1.52-.03 2.49-1.37 3.42-2.73 1.08-1.57 1.52-3.09 1.55-3.17-.03-.01-2.97-1.14-3-4.5zM14.41 4.1c.78-.94 1.3-2.25 1.16-3.55-1.12.05-2.47.74-3.27 1.68-.72.83-1.35 2.16-1.18 3.43 1.24.1 2.51-.63 3.29-1.56z"/></svg>
                    Apple
                  </button>
                </div>

                <p className="text-center text-xs text-muted-foreground">
                  Need help? <Link to="/contact" className="font-semibold text-foreground hover:text-primary transition-colors">Contact support</Link>
                </p>
              </form>
            </>
          ) : (
            <div className="animate-scale-in">
              <div className="card-soft p-8 text-center space-y-6">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl mx-auto text-white" style={{ background: `linear-gradient(135deg, ${mod.accentHex}, ${mod.accentHex}cc)` }}>
                  <Check className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Welcome!</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    This is a demo. Connect your auth provider to enable real authentication.
                  </p>
                </div>
                <Link to="/modules/$slug" params={{ slug: mod.slug }} className="btn-primary w-full justify-center">
                  <ArrowRight className="h-4 w-4" />
                  Back to {mod.name}
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
