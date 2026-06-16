import { createFileRoute, Link } from "react-router-dom";
import { Mail, Lock, ArrowRight, Zap, Clock, BarChart3, Users, CheckCircle } from "lucide-react";
import logo from '../../public/logo.png';



export default function Login() {
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
        {/* Left side - Form */}
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
              <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back</h1>
              <p className="text-muted-foreground">Sign in to access 20 powerful HR modules designed to streamline your workforce management.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@company.com"
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

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-border text-primary" />
                  <span className="text-sm text-muted-foreground">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm font-medium text-primary hover:text-primary/80 transition">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[image:var(--gradient-primary)] text-primary-foreground font-semibold py-2.5 rounded-lg hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? "Signing in..." : <>Sign in <ArrowRight className="h-4 w-4" /></>}
              </button>

              <p className="text-center text-sm text-muted-foreground">
                Don&apos;t have an account? <Link to="/signup" className="text-primary font-medium hover:text-primary/80">Start your 14-day free trial</Link>
              </p>
            </form>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3">Need module-specific access?</p>
              <Link to="/modules" className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition">
                Browse all modules <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>Secure • Multi-tenant • GDPR-ready</p>
          </div>
        </div>

        {/* Right side - Hero Section */}
        <div className="hidden lg:flex flex-col justify-center px-12 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Complete HR Suite with 20 Modules
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              From People Management to Payroll, we've built everything you need to run an efficient, compliant, and engaged workforce.
            </p>

            <div className="space-y-4 mb-12">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Core HR Management</h3>
                  <p className="text-sm text-muted-foreground">People, Attendance, Leave, Admin Panel & more</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Finance & Operations</h3>
                  <p className="text-sm text-muted-foreground">Payroll, Expenses, Assets, Analytics & more</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Talent & Engagement</h3>
                  <p className="text-sm text-muted-foreground">Recruit, Training, Performance, Goals & more</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">20</div>
                <p className="text-xs text-muted-foreground mt-1">Modules</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100+</div>
                <p className="text-xs text-muted-foreground mt-1">Features</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4</div>
                <p className="text-xs text-muted-foreground mt-1">Phases</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
