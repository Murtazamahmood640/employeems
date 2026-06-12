import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground font-bold">B</span>
              <span className="text-lg font-bold tracking-tight">ByThawk<span className="text-accent">HR</span></span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              One workspace for your people, processes, and payroll — built for modern teams.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/modules" className="hover:text-foreground">All modules</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link to="/modules" className="hover:text-foreground">Mobile app</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Status</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold">Stay in the loop</h4>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="you@work.com" className="w-full rounded-full border border-border bg-surface-elevated px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/40" />
              <button className="btn-primary !py-2 !text-sm">Join</button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">Product updates, no spam.</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ByThawkHR. All rights reserved.</p>
          <p>Built for teams that take people seriously.</p>
        </div>
      </div>
    </footer>
  );
}
