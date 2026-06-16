import { createFileRoute, Link } from "react-router-dom";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";



export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link to="/" className="flex items-center gap-2.5 mb-12 inline-block">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground font-bold text-lg">
            B
          </span>
          <span className="text-xl font-bold tracking-tight text-foreground">
            ByThawk<span className="text-accent">HR</span>
          </span>
        </Link>

        {!submitted ? (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Reset your password</h1>
              <p className="text-muted-foreground">
                Enter your email address and we&apos;ll send you a link to reset your password.
              </p>
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
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition bg-background text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  We&apos;ll send a password reset link to this address
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[image:var(--gradient-primary)] text-primary-foreground font-semibold py-2.5 rounded-lg hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : <>Send reset link <ArrowRight className="h-4 w-4" /></>}
              </button>

              <Link
                to="/login"
                className="w-full flex items-center justify-center gap-2 border border-border text-foreground font-medium py-2.5 rounded-lg hover:bg-secondary transition"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to login
              </Link>
            </form>
          </div>
        ) : (
          <div className="text-center space-y-8">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-accent/10">
              <Mail className="h-8 w-8 text-accent" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Check your email</h2>
              <p className="text-muted-foreground">
                We&apos;ve sent a password reset link to{" "}
                <span className="font-semibold text-foreground">{email}</span>
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-4 text-sm text-muted-foreground">
              <p>
                Can&apos;t find the email? Check your spam folder or{" "}
                <button
                  onClick={() => setSubmitted(false)}
                  className="font-semibold text-primary hover:text-primary/80 transition"
                >
                  try a different email
                </button>
              </p>
            </div>

            <Link
              to="/login"
              className="w-full flex items-center justify-center gap-2 bg-[image:var(--gradient-primary)] text-primary-foreground font-semibold py-2.5 rounded-lg hover:opacity-90 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to login
            </Link>
          </div>
        )}

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="font-semibold text-primary hover:text-primary/80 transition">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
}
