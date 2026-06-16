import { Link, useNavigate, useParams } from "react-router-dom";
import * as Icons from "lucide-react";
import { useState } from "react";
import { getModule, type Module } from "@/lib/modules";



export default function ModuleLogin() {
  const { slug_ } = useParams();
  const mod = getModule(slug_ || "");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  if (!mod) {
    return <div className="min-h-screen flex items-center justify-center p-8 text-center text-xl">Module not found</div>;
  }

  const ModIcon = Icons[mod.icon.displayName || mod.icon.name || "Box"] as any || Icons.Box;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate({ to: "/dashboard" });
    }, 1500);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* LEFT " Module Showcase */}
      <aside
        className="relative hidden overflow-hidden text-white lg:flex lg:flex-col lg:justify-between lg:p-12 animate-fade-in-left"
        style={{ background: `linear-gradient(155deg, var(--color-primary), oklch(0.18 0.04 260) 85%)` }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 grid-bg" />
        <div
          className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full opacity-30 blur-3xl"
          style={{ background: mod.accentHex }}
        />
        <div
          className="absolute -top-20 -left-20 h-64 w-64 rounded-full opacity-20 blur-3xl"
          style={{ background: mod.accentHex }}
        />

        <div className="relative z-10">
          <Link to={`/modules/${mod.slug}`} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors">
            <Icons.ArrowLeft className="h-4 w-4" /> Back to {mod.name}
          </Link>
        </div>

        <div className="relative z-10 space-y-8 animate-fade-in-up mt-12 mb-auto">
          <div className="inline-flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl hover:bg-white/15 transition-all duration-300 shadow-xl">
            <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-white/20 to-white/5 shadow-inner">
              <ModIcon className="h-7 w-7 text-white" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/70 font-semibold mb-1">Ceedrs · {mod.category.replace(/ " /g, ' ').replace(/[-_]/g, ' ')}</p>
              <p className="text-xl font-bold text-white">{mod.name.replace(/ " /g, ' ').replace(/[-_]/g, ' ')}</p>
            </div>
          </div>
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight xl:text-5xl leading-tight">
            {mod.tagline}.
          </h1>
          <p className="mt-4 max-w-md text-white/80 text-lg leading-relaxed">{mod.description}</p>

          <ul className="mt-8 space-y-4 text-sm text-white/90">
            {mod.features.slice(0, 4).map((f) => (
              <li key={f.title} className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                <div className="bg-white/20 p-1 rounded-full shrink-0">
                  <Icons.Check className="h-3 w-3 text-white" />
                </div>
                <div>
                  <span className="font-bold text-white block mb-0.5">{f.title}</span> 
                  <span className="text-white/70 leading-snug">{f.description}</span>
                </div>
              </li>
            ))}
          </ul>

          {/* Highlights badges */}
          <div className="pt-6 flex flex-wrap gap-2 mt-8">
            {mod.highlights.slice(0, 4).map((h) => (
              <span key={h} className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                <Icons.Sparkles className="h-3 w-3 text-white/70" />
                {h}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-xs text-white/60 animate-fade-in-up mt-8 border-t border-white/10 pt-6" style={{ animationDelay: '400ms' }}>
          <div className="flex items-center gap-2 bg-white/5 inline-flex px-4 py-2 rounded-full">
            <Icons.Zap className="h-3.5 w-3.5 text-yellow-400" />
            <span className="font-medium text-white/80">One Ceedrs account unlocks every module. Instant switching, single sign-on.</span>
          </div>
        </div>
      </aside>

      {/* RIGHT " login form */}
      <section className="flex items-center justify-center bg-background px-6 py-12 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="w-full max-w-md relative z-10">
          <div className="mb-8 lg:hidden">
            <Link to={`/modules/${mod.slug}`} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Icons.ArrowLeft className="h-4 w-4" /> Back to {mod.name}
            </Link>
            <div className="mt-6 flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface-elevated shadow-sm">
              <div className="grid h-12 w-12 place-items-center rounded-xl text-white font-bold bg-gradient-to-br from-primary to-accent shadow-inner">
                <ModIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">{mod.category}</p>
                <p className="text-lg font-bold text-foreground">{mod.name}</p>
              </div>
            </div>
          </div>

          <div className="bg-surface-elevated/50 p-8 sm:p-10 rounded-3xl border border-border/60 shadow-xl backdrop-blur-xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
            
            <span className="eyebrow bg-primary/10 border-primary/20 text-primary mb-4 block w-max">Sign in</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">Welcome back to {mod.name}</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Use your Ceedrs account. New here? <Link to="/contact" className="font-semibold text-primary hover:text-primary/80 hover:underline transition-all">Request access</Link>.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-foreground">Work email</label>
                <div className="relative mt-2">
                  <Icons.Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="email" type="email" required placeholder="you@company.com"
                    className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="text-sm font-semibold text-foreground">Password</label>
                  <a href="#" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">Forgot?</a>
                </div>
                <div className="relative">
                  <Icons.Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="password" type={showPass ? "text" : "password"} required placeholder="••••••••"
                    className="w-full rounded-xl border border-border bg-background py-3 pl-11 pr-12 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors" aria-label="Toggle password">
                    {showPass ? <Icons.EyeOff className="h-4 w-4" /> : <Icons.Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <label className="flex items-center gap-3 text-sm text-muted-foreground mt-4 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input type="checkbox" className="peer h-4 w-4 appearance-none rounded border border-border checked:border-primary checked:bg-primary transition-all" />
                  <Icons.Check className="absolute h-3 w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                </div>
                <span className="group-hover:text-foreground transition-colors">Keep me signed in for 30 days</span>
              </label>
              
              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full mt-6 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                  {loading ? (
                    <Icons.Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Sign in to {mod.name} <Icons.ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              <div className="relative my-8 text-center">
                <span className="relative z-10 bg-surface-elevated px-4 text-xs uppercase tracking-widest text-muted-foreground font-semibold">or continue with</span>
                <span className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border/80" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="btn-ghost flex items-center justify-center gap-2 hover:border-border hover:bg-background transition-all">
                  <svg className="h-4 w-4" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 10.2v3.9h5.5c-.25 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.4 14.5 2.5 12 2.5 6.8 2.5 2.5 6.8 2.5 12s4.3 9.5 9.5 9.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-1.6H12z"/></svg>
                  Google
                </button>
                <button type="button" className="btn-ghost flex items-center justify-center gap-2 hover:border-border hover:bg-background transition-all">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.04c-.03-2.8 2.29-4.14 2.4-4.21-1.31-1.91-3.34-2.17-4.06-2.2-1.73-.17-3.37 1.01-4.25 1.01-.88 0-2.23-.98-3.67-.95-1.89.03-3.63 1.1-4.6 2.79-1.96 3.4-.5 8.43 1.41 11.19.93 1.35 2.04 2.86 3.49 2.8 1.41-.06 1.94-.91 3.65-.91s2.19.91 3.69.88c1.52-.03 2.49-1.37 3.42-2.73 1.08-1.57 1.52-3.09 1.55-3.17-.03-.01-2.97-1.14-3-4.5zM14.41 4.1c.78-.94 1.3-2.25 1.16-3.55-1.12.05-2.47.74-3.27 1.68-.72.83-1.35 2.16-1.18 3.43 1.24.1 2.51-.63 3.29-1.56z"/></svg>
                  Apple
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
