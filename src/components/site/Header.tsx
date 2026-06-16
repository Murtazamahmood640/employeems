import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, BarChart3, Users, Clock, Wallet, KanbanSquare, LifeBuoy, Building2, Phone, BookOpen, FileText, Shield, Info } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from '../../../public/logo.png';

const productLinks = [
  { to: "/modules/people", label: "People & HR", desc: "Employee directory, leave, attendance", icon: Users },
  { to: "/modules/payroll", label: "Payroll", desc: "Salary, deductions, payslips", icon: Wallet },
  { to: "/modules/projects", label: "Projects", desc: "Task & project management", icon: KanbanSquare },
  { to: "/modules/analytics", label: "Analytics", desc: "Data, reports, dashboards", icon: BarChart3 },
  { to: "/modules/desk", label: "Helpdesk", desc: "Internal support tickets", icon: LifeBuoy },
  { to: "/modules/admin", label: "Admin Panel", desc: "Platform configuration", icon: Shield },
];

const companyLinks = [
  { to: "/about", label: "About Us", desc: "Our story and mission", icon: Info },
  { to: "/contact", label: "Contact", desc: "Talk to our team", icon: Phone },
  { to: "/blog", label: "Blog", desc: "HR insights and news", icon: BookOpen },
];

const resourceLinks = [
  { to: "/features", label: "All Features", desc: "Everything Ceedrs offers", icon: FileText },
  { to: "/pricing", label: "Pricing", desc: "Plans for every team size", icon: BarChart3 },
  { to: "/security", label: "Security", desc: "How we protect your data", icon: Shield },
];

function DropdownMenu({ label, items, location }: { label: string; items: { to: string; label: string; desc: string; icon: any }[]; location: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = items.some(i => location.pathname.startsWith(i.to));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
          isActive ? "text-primary bg-primary/10 shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-black/5"
        }`}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Panel */}
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 transition-all duration-200 origin-top ${
          isOpen ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {/* Arrow */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 h-3 w-3 rotate-45 bg-white border-l border-t border-border/50 shadow-sm" />
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
          <div className="p-2">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-primary/5 group transition-all duration-200"
                >
                  <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                    <p className="text-xs text-muted-foreground leading-tight mt-0.5">{item.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
          {label === "Products" && (
            <div className="border-t border-border/50 px-4 py-3 bg-primary/5">
              <Link
                to="/modules"
                onClick={() => setIsOpen(false)}
                className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
              >
                View all 20 modules →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-lg border-b border-border/40 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 transition-transform hover:scale-105 shrink-0">
          <img src={logo} width={150} alt="Ceedrs Logo" className="object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 md:flex bg-white/80 backdrop-blur-xl px-1.5 py-1.5 rounded-full border border-border/60 shadow-[0_2px_16px_rgba(0,107,60,0.08)]">
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              location.pathname === "/" ? "text-primary bg-primary/10 shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-black/5"
            }`}
          >
            Home
          </Link>

          <DropdownMenu label="Products" items={productLinks} location={location} />
          <DropdownMenu label="Company" items={companyLinks} location={location} />
          <DropdownMenu label="Resources" items={resourceLinks} location={location} />

          <Link
            to="/pricing"
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
              location.pathname === "/pricing" ? "text-primary bg-primary/10 shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-black/5"
            }`}
          >
            Pricing
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 md:flex shrink-0">
          <Link to="/login" className="text-sm font-bold text-foreground hover:text-primary transition-colors">
            Sign in
          </Link>
          <Link to="/signup" className="btn-primary !py-2.5 !px-6 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Get started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden grid place-items-center h-10 w-10 rounded-full bg-white border border-border/50 text-foreground shadow-sm"
          onClick={() => setOpen(!open)}
          aria-label="menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-border/50 shadow-2xl overflow-hidden transition-all duration-300 ${
          open ? "max-h-[80vh] opacity-100 overflow-y-auto" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-x flex flex-col py-6 gap-1">
          <Link to="/" onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 text-base font-semibold transition-colors ${location.pathname === "/" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-black/5 hover:text-foreground"}`}>
            Home
          </Link>

          {/* Mobile Dropdowns */}
          {[
            { label: "Products", items: productLinks },
            { label: "Company", items: companyLinks },
            { label: "Resources", items: resourceLinks },
          ].map((group) => (
            <div key={group.label}>
              <button
                className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-muted-foreground hover:bg-black/5 hover:text-foreground transition-colors"
                onClick={() => setOpenMobileSection(openMobileSection === group.label ? null : group.label)}
              >
                {group.label}
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${openMobileSection === group.label ? "rotate-180 text-primary" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openMobileSection === group.label ? "max-h-96" : "max-h-0"}`}>
                <div className="mx-2 mb-2 rounded-2xl bg-primary/5 p-2 space-y-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white group transition-all"
                      >
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{item.label}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          <Link to="/pricing" onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 text-base font-semibold transition-colors ${location.pathname === "/pricing" ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-black/5 hover:text-foreground"}`}>
            Pricing
          </Link>

          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-border/50">
            <Link to="/login" className="btn-ghost w-full justify-center" onClick={() => setOpen(false)}>Sign in</Link>
            <Link to="/signup" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>Get started</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

