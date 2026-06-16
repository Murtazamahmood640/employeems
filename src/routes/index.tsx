import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { modules } from "@/lib/modules";
import { useState, useEffect } from "react";

const slides = [
  {
    title: <>One workspace for your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">entire workforce.</span></>,
    subtitle: "Ceedrs replaces ten disconnected tools with one modular platform. From onboarding and attendance to payroll, performance, and exit.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=1600&q=80"
  },
  {
    title: <>Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Attendance</span> Tracking.</>,
    subtitle: "Clock in even when offline. Geo-fenced tracking and auto-sync ensures perfect time logs without the hassle.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80"
  },
  {
    title: <>Automate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Leave & Payroll.</span></>,
    subtitle: "Multi-level approvals, auto-deductions, and one-click salary slip generation. Let the platform handle the math.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=80"
  }
];

export default function Home() {
  const featured = modules.slice(0, 8);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <>
      {/* HERO SLIDER */}
      <section className="relative overflow-hidden bg-background pt-8 pb-28 min-h-[calc(100vh-5rem)] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        
        <div className="container-x relative z-10 mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left animate-fade-in-left">
              <div className="relative min-h-[200px]">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100 relative z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                  >
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl drop-shadow-sm leading-[1.15]">
                      {slide.title}
                    </h1>
                    <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
                      {slide.subtitle}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                <Link to="/signup" className="btn-primary group w-full sm:w-auto text-lg px-8 py-4 shadow-xl shadow-primary/20 hover:shadow-primary/40">
                  Start free trial <Icons.ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/features" className="btn-ghost w-full sm:w-auto text-lg px-8 py-4 bg-white hover:bg-gray-50 border-gray-200">
                  Explore features
                </Link>
              </div>
              
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
                {["No credit card", "14-day trial", "Cancel anytime"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icons.Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Slider */}
            <div className="relative animate-fade-in-right">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 blur-3xl opacity-50 rounded-full" />
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white p-2 shadow-2xl backdrop-blur-sm aspect-[4/3]">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.image}
                    alt="Ceedrs Dashboard Overview"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 rounded-xl ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-primary' : 'w-2.5 bg-border hover:bg-primary/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS / TRUST */}
      <section className="border-y border-border bg-surface-elevated">
        <div className="container-x flex flex-wrap items-center justify-between gap-8 py-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by modern, fast-growing teams
          </p>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4 text-xl font-bold tracking-tight text-muted-foreground/60">
            <span className="hover:text-primary transition-colors cursor-pointer">Northwind</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Lumenly</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Forge & Co.</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Patternlab</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Helio</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Acme HR</span>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / PILLARS */}
      <section className="container-x py-24">
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <span className="eyebrow bg-primary/10 border-primary/20 text-primary">Why Ceedrs</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            A platform, not a folder of features.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Most HR tools force you to glue together a dozen point solutions.
            Ceedrs is one unified product " and you only turn on what your company actually needs. No bloat, no confusion.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Icons.Layers, title: "Modular by design", body: "Activate any of 20 modules per plan, role, or department. No clutter, no upsell creep." },
            { icon: Icons.Lock, title: "Multi-tenant secure", body: "Every record carries an orgId. Strict data isolation between companies, baked into the database layer." },
            { icon: Icons.Smartphone, title: "Mobile-first, offline", body: "Flutter app queues clock-ins, requests, and approvals when offline, syncing instantly on reconnect." },
            { icon: Icons.Globe, title: "One API, three clients", body: "A single Node.js backend powers web, mobile, and integrations, no logic duplication." },
          ].map((p, i) => (
            <div key={p.title} className="uiverse-card group" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="uiverse-card-content p-8 flex flex-col h-full bg-surface-elevated/50 backdrop-blur-sm">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APP HUB SHOWCASE */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-ink)] py-24 text-primary-foreground">
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-accent/20 blur-[80px] pointer-events-none" />
        
        <div className="container-x relative grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow !border-white/15 !bg-white/5 !text-white/80">The App Hub model</span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              One login. Only the apps your team actually uses.
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Inspired by Zoho One and Google Workspace " every employee gets a single SSO account.
              The home screen shows a clean grid of icons for modules they have access to. Each module opens into its own focused, distraction-free workspace.
            </p>
            <ul className="mt-8 space-y-4 text-white/90">
              {[
                "Strict role-based access if you don't have Payroll, the icon doesn't exist on your screen.",
                "Identical layout on web and mobile so muscle memory carries over perfectly.",
                "Workspace sidebars adapt dynamically to the specific module you're in.",
              ].map((t) => (
                <li key={t} className="flex gap-4 items-start">
                  <div className="mt-1 h-6 w-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Icons.Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="leading-relaxed text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {featured.map((m, i) => {
                const ModIcon = Icons[m.icon.displayName || m.icon.name || "Box"] as any || Icons.Box;
                return (
                  <Link
                    to={`/modules/${m.slug}`}
                    key={m.slug}
                    className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10 hover:shadow-2xl"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-white/20 to-white/5 text-white shadow-inner mb-4 group-hover:scale-110 transition-transform">
                      <ModIcon className="h-6 w-6" />
                    </div>
                    <p className="text-sm font-bold text-white mb-1 group-hover:text-accent transition-colors">{m.name.replace(/ " /g, ' ').replace(/[-_]/g, ' ')}</p>
                    <p className="text-xs text-white/60 line-clamp-1">{m.tagline}</p>
                  </Link>
                );
              })}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Link to="/modules" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors">
                View all 20 modules <Icons.ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE + REALTIME */}
      <section className="container-x py-24 space-y-16 lg:space-y-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 relative uiverse-card group">
            <div className="uiverse-card-content rounded-3xl overflow-hidden border border-border/60">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80"
                alt="Mobile attendance clock-in"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-surface-elevated/90 backdrop-blur-md p-4 rounded-2xl border border-border/50 inline-flex items-center gap-4 shadow-lg">
                  <div className="h-10 w-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <Icons.WifiOff className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Offline mode active</p>
                    <p className="text-xs text-muted-foreground">Clock-in queued for sync</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent font-semibold text-xs tracking-widest uppercase mb-6">
              <Icons.Smartphone className="h-4 w-4" /> Field Ready
            </div>
            <h3 className="text-4xl font-bold leading-tight mb-6">Clock-in even with no signal.</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The native Flutter app uses a local database to queue actions when offline. Field staff can clock in, file
              expenses, and approve requests in dead zones " everything replays seamlessly the moment they reconnect to the internet.
            </p>
            <ul className="space-y-4">
              {["Geo-fenced clock ins", "Photo receipt uploads", "Push notifications"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground font-medium">
                  <Icons.CheckCircle2 className="h-5 w-5 text-primary" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-xs tracking-widest uppercase mb-6">
              <Icons.Activity className="h-4 w-4" /> Live WebSockets
            </div>
            <h3 className="text-4xl font-bold leading-tight mb-6">Changes broadcast instantly.</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Powered by advanced WebSockets, approvals, chat mentions, and roster updates push to every connected
              web and mobile client in milliseconds. No more refreshing the page to see if your leave was approved.
            </p>
            <ul className="space-y-4">
              {["Live dashboard widgets", "Instant chat delivery", "Real-time ticket status"].map((f) => (
                <li key={f} className="flex items-center gap-3 text-foreground font-medium">
                  <Icons.CheckCircle2 className="h-5 w-5 text-accent" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative uiverse-card group">
            <div className="uiverse-card-content rounded-3xl overflow-hidden border border-border/60">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80"
                alt="Real-time HR dashboard"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-primary text-primary-foreground p-4 rounded-2xl shadow-xl border border-white/20 inline-flex items-center gap-4">
                  <Icons.BellRing className="h-6 w-6 animate-pulse" />
                  <div>
                    <p className="text-sm font-bold">New Leave Request</p>
                    <p className="text-xs text-white/80">John Doe • Sick Leave</p>
                  </div>
                  <button className="ml-4 bg-white text-primary text-xs font-bold px-4 py-2 rounded-lg hover:bg-white/90">Approve</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container-x pb-24">
        <div className="uiverse-card">
          <div className="uiverse-card-content grid divide-y divide-border/50 md:grid-cols-4 md:divide-x md:divide-y-0 rounded-3xl overflow-hidden bg-surface-elevated/50 backdrop-blur-sm p-2">
            {[
              { v: "20", l: "Focused modules", icon: Icons.Grid3X3 },
              { v: "4", l: "Delivery phases", icon: Icons.GitMerge },
              { v: "<60s", l: "Mobile sync window", icon: Icons.Timer },
              { v: "99.9%", l: "Target uptime", icon: Icons.Server },
            ].map((s) => (
              <div key={s.l} className="p-10 text-center group">
                <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent mb-2">{s.v}</p>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-accent p-12 text-primary-foreground sm:p-20 text-center lg:text-left shadow-2xl">
          <div className="absolute inset-0 grid-bg opacity-20 mix-blend-overlay" />
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-white/20 blur-[100px] pointer-events-none" />
          
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight mb-4">Ready to consolidate your HR stack?</h2>
              <p className="max-w-2xl text-lg text-white/80 leading-relaxed mx-auto lg:mx-0">
                See Ceedrs running with your actual data in a 30-minute personalized demo. No presentation slides " just the live product solving your problems.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <Link to="/signup" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-xl hover:scale-105 transition-all">
                Start free trial <Icons.ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-black/10 px-8 py-4 text-base font-bold backdrop-blur-sm hover:bg-black/20 hover:border-white/50 transition-all">
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
