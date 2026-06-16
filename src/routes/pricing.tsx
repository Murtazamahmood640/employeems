import React from "react";
import { createFileRoute, Link } from "react-router-dom";
import { Check, Sparkles, X, HelpCircle, CheckCircle2 } from "lucide-react";



const plans = [
  {
    name: "Starter",
    price: "$3",
    blurb: "Core HR for growing teams up to 50 people.",
    cta: "Start free trial",
    features: ["People directory", "Attendance & clock-in", "Leave management", "Projects & tasks", "Internal helpdesk", "Mobile app (web + iOS + Android)"],
  },
  {
    name: "Growth",
    price: "$6",
    popular: true,
    blurb: "Everything in Starter, plus finance and analytics.",
    cta: "Book a demo",
    features: ["Everything in Starter", "Payroll & salary slips", "Expense claims", "Asset management", "Performance & 360 reviews", "Advanced analytics & exports", "Priority email support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    blurb: "The full suite, dedicated infrastructure, and SLA.",
    cta: "Talk to sales",
    features: ["All 20 modules", "Recruit, Cliq, Training, Surveys", "Travel, Shifts, OKRs, Compliance", "Exit & Approvals + e-sign", "SSO / SAML & audit logs", "Dedicated success manager"],
  },
];

const featureComparison = [
  {
    category: "Core HR",
    items: [
      { name: "Employee Directory", starter: true, growth: true, enterprise: true },
      { name: "Attendance & Time Tracking", starter: true, growth: true, enterprise: true },
      { name: "Leave Management", starter: true, growth: true, enterprise: true },
      { name: "Shift Scheduling", starter: false, growth: false, enterprise: true },
      { name: "Compliance & Warnings", starter: false, growth: false, enterprise: true },
    ]
  },
  {
    category: "Finance & Operations",
    items: [
      { name: "Internal Helpdesk", starter: true, growth: true, enterprise: true },
      { name: "Project Management", starter: true, growth: true, enterprise: true },
      { name: "Payroll Processing", starter: false, growth: true, enterprise: true },
      { name: "Expense Claims", starter: false, growth: true, enterprise: true },
      { name: "Asset Management", starter: false, growth: true, enterprise: true },
      { name: "Travel Management", starter: false, growth: false, enterprise: true },
    ]
  },
  {
    category: "Talent & Development",
    items: [
      { name: "Performance Reviews", starter: false, growth: true, enterprise: true },
      { name: "Recruitment (ATS)", starter: false, growth: false, enterprise: true },
      { name: "Learning Management (LMS)", starter: false, growth: false, enterprise: true },
      { name: "Surveys & eNPS", starter: false, growth: false, enterprise: true },
      { name: "Goals & OKRs", starter: false, growth: false, enterprise: true },
    ]
  },
  {
    category: "Security & Support",
    items: [
      { name: "Role-Based Access", starter: true, growth: true, enterprise: true },
      { name: "Email Support", starter: "Standard", growth: "Priority", enterprise: "24/7 Priority" },
      { name: "Data Exports", starter: false, growth: true, enterprise: true },
      { name: "SSO / SAML", starter: false, growth: false, enterprise: true },
      { name: "Dedicated Success Manager", starter: false, growth: false, enterprise: true },
    ]
  }
];

export default function Pricing() {
  return (
    <div className="bg-background min-h-screen">
      <section className="hero-bg border-b border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container-x py-24 text-center relative z-10">
          <span className="eyebrow inline-flex items-center gap-2 border-primary/20 bg-primary/5 text-primary">
            <Sparkles className="h-4 w-4" /> Simple, transparent pricing
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl leading-tight">
            Pay per employee. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Pay for what you use.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground leading-relaxed">
            No rigid seat counts. No surprise add-ons. Activate modules dynamically as your company scales.
          </p>
        </div>
      </section>

      <section className="container-x py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div key={p.name} className="uiverse-card group" style={{ animationDelay: `${i * 150}ms` }}>
              <div className={`uiverse-card-content p-10 flex flex-col h-full ${p.popular ? "bg-gradient-to-b from-primary/10 to-transparent border-primary/50" : ""}`}>
                {p.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1 text-xs font-bold text-white shadow-lg uppercase tracking-wider">
                    Most popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed h-10">{p.blurb}</p>
                <div className="mt-8 flex items-baseline gap-1">
                  <span className={`text-6xl font-extrabold tracking-tight ${p.popular ? "text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent" : "text-foreground"}`}>{p.price}</span>
                  {p.price !== "Custom" && <span className="text-muted-foreground font-medium">/ user / month</span>}
                </div>
                
                <div className="mt-8 mb-8 flex-1">
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">What's included</p>
                  <ul className="space-y-4 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-3 items-start">
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${p.popular ? "text-primary" : "text-muted-foreground"}`} />
                        <span className="text-foreground font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className={`mt-auto w-full inline-flex items-center justify-center rounded-full px-6 py-4 text-base font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                    p.popular
                      ? "bg-gradient-to-r from-primary to-accent text-white"
                      : "bg-surface-elevated border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Compare plans in detail</h2>
            <p className="text-lg text-muted-foreground">Find the perfect feature set for your organization's current stage.</p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-border bg-surface-elevated/30 backdrop-blur-sm shadow-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="p-6 text-sm font-bold uppercase tracking-wider text-muted-foreground w-2/5">Features</th>
                  <th className="p-6 text-center text-sm font-bold uppercase tracking-wider text-foreground w-1/5">Starter</th>
                  <th className="p-6 text-center text-sm font-bold uppercase tracking-wider text-primary w-1/5 relative">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary to-accent"></div>
                    Growth
                  </th>
                  <th className="p-6 text-center text-sm font-bold uppercase tracking-wider text-foreground w-1/5">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {featureComparison.map((category) => (
                  <React.Fragment key={category.category}>
                    <tr className="bg-muted/30">
                      <td colSpan={4} className="p-4 text-sm font-bold text-foreground pl-6">
                        {category.category}
                      </td>
                    </tr>
                    {category.items.map((item) => (
                      <tr key={item.name} className="hover:bg-surface-elevated/50 transition-colors">
                        <td className="p-4 pl-6 text-sm font-medium text-muted-foreground flex items-center gap-2">
                          {item.name}
                          <HelpCircle className="h-3 w-3 text-border cursor-help" />
                        </td>
                        <td className="p-4 text-center">
                          {typeof item.starter === 'boolean' ? (item.starter ? <Check className="h-5 w-5 text-green-500 mx-auto" /> : <X className="h-4 w-4 text-border mx-auto" />) : <span className="text-sm font-medium">{item.starter}</span>}
                        </td>
                        <td className="p-4 text-center bg-primary/5">
                          {typeof item.growth === 'boolean' ? (item.growth ? <Check className="h-5 w-5 text-primary mx-auto" /> : <X className="h-4 w-4 text-border mx-auto" />) : <span className="text-sm font-bold text-primary">{item.growth}</span>}
                        </td>
                        <td className="p-4 text-center">
                          {typeof item.enterprise === 'boolean' ? (item.enterprise ? <Check className="h-5 w-5 text-foreground mx-auto" /> : <X className="h-4 w-4 text-border mx-auto" />) : <span className="text-sm font-medium">{item.enterprise}</span>}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Frequently asked questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { q: "Is there a free trial?", a: "Yes â€” 14 days, no credit card required, on any plan. You get full access to test every feature." },
              { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade anytime. Pro-rated billing kicks in automatically without penalty." },
              { q: "Do you offer non-profit pricing?", a: "Yes! We offer a 30% discount for registered non-profits. Reach out via the contact page and we'll set it up." },
              { q: "What happens to my data if I cancel?", a: "You have 30 days to export all your data in CSV/JSON formats before it is permanently deleted from our servers." },
              { q: "Are there setup fees?", a: "No setup fees for Starter or Growth. Enterprise plans may include a nominal fee for dedicated data migration assistance." },
              { q: "Do I pay for inactive users?", a: "No. You are only billed for active employee profiles. Suspended or offboarded employees do not count toward your bill." },
            ].map((f, i) => (
              <div key={f.q} className="uiverse-card group" style={{ animationDelay: `${i * 50}ms` }}>
                <div className="uiverse-card-content p-8 h-full bg-surface-elevated/30">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-foreground mb-3">{f.q}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
