import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Lock, User, Building2, ArrowRight, Check, Zap, Users, BarChart3, Rocket } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign up for ByThawkHR" },
      { name: "description", content: "Create your ByThawkHR account. Start your free 14-day trial with no credit card required." },
    ],
  }),
  component: Signup,
});

function Signup() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left side - Hero Section */}
        <div className="hidden lg:flex flex-col justify-center px-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Start Your HR Transformation
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of forward-thinking companies using ByThawkHR to streamline their workforce management across 20 integrated modules.
            </p>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">14 Days Free Trial</h3>
                  <p className="text-sm text-muted-foreground">Full access to all modules, no credit card needed</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Instant Setup</h3>
                  <p className="text-sm text-muted-foreground">Activate modules and invite your team in minutes</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Multi-Tenant Architecture</h3>
                  <p className="text-sm text-muted-foreground">Secure, isolated data for your entire organization</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary">
                    <Check className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Mobile-First Design</h3>
                  <p className="text-sm text-muted-foreground">Full-featured iOS & Android apps included</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-primary">5-200</div>
                <p className="text-xs text-muted-foreground mt-1">Employee teams</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">83.9%</div>
                <p className="text-xs text-muted-foreground mt-1">Gross margin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex flex-col justify-between px-6 py-12 sm:px-8 lg:px-12">
          <div>
            <Link to="/" className="flex items-center gap-2.5 inline-block">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground font-bold text-lg">
                B
              </span>
              <span className="text-xl font-bold tracking-tight text-foreground">
                ByThawk<span className="text-accent">HR</span>
              </span>
            </Link>
          </div>

          <div className="w-full max-w-sm">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Get started free</h1>
              <p className="text-muted-foreground">14 days of unlimited access to all 20 HR modules</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Company name
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Your Company Inc."
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Work email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input type="checkbox" className="w-4 h-4 rounded border-border text-primary mt-1" required />
                <span className="text-sm text-muted-foreground">
                  I agree to the <Link to="/terms" className="text-primary hover:text-primary/80">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:text-primary/80">Privacy Policy</Link>
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[image:var(--gradient-primary)] text-primary-foreground font-semibold py-2.5 rounded-lg hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? "Creating account..." : <>Start free trial <Rocket className="h-4 w-4" /></>}
              </button>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account? <Link to="/login" className="text-primary font-medium hover:text-primary/80">Sign in here</Link>
              </p>
            </form>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">No credit card required.</strong> Get instant access to all modules. Cancel anytime.
              </p>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>Secure • Enterprise-Grade • GDPR Compliant</p>
          </div>
        </div>
      </div>
    </div>
  );
}
