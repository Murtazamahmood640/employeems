import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Plug, ArrowRight, Zap, RefreshCw, Layers, CheckCircle2,
  Shield, Clock, Globe, Code2, Webhook, GitBranch, Users, Bell
} from "lucide-react";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Integrations — ByThawkHR" },
      { name: "description", content: "Connect ByThawkHR with your favorite tools. Seamless integrations for Google Workspace, Microsoft 365, Slack, and more." },
    ],
  }),
  component: IntegrationsPage,
});

const integrations = [
  { name: "Google Workspace", cat: "Identity & SSO", logo: "G", color: "#4285F4", desc: "Sync your Google directory, calendar, and user accounts. Enable one-click Google SSO for your entire team." },
  { name: "Microsoft 365", cat: "Identity & SSO", logo: "M", color: "#00a4ef", desc: "Sync employees from Azure AD, connect Outlook calendars, and provide Microsoft single sign-on instantly." },
  { name: "Slack", cat: "Communication", logo: "S", color: "#E01E5A", desc: "Receive real-time approval requests, leave notifications, and HR updates directly in your Slack channels." },
  { name: "Microsoft Teams", cat: "Communication", logo: "T", color: "#6264A7", desc: "Push leave approvals, ticket updates, and onboarding tasks directly into Teams channels and DMs." },
  { name: "Jira", cat: "Productivity", logo: "J", color: "#0052CC", desc: "Create Jira issues from HR desk tickets automatically and sync project assignments to employee profiles." },
  { name: "GitHub", cat: "Developer Tools", logo: "GH", color: "#24292e", desc: "Track developer activity, link pull requests to project tasks, and manage developer onboarding checklists." },
  { name: "QuickBooks", cat: "Accounting", logo: "QB", color: "#2CA01C", desc: "Push finalized payroll data and approved expense claims directly to QuickBooks for seamless bookkeeping." },
  { name: "Xero", cat: "Accounting", logo: "X", color: "#13B5EA", desc: "Automate payroll journal entries and expense reconciliation in Xero without any manual data entry." },
  { name: "Salesforce", cat: "CRM", logo: "SF", color: "#00A1E0", desc: "Sync HR data with Salesforce to align sales headcount planning, onboarding, and commissions." },
  { name: "Zapier", cat: "Automation", logo: "Z", color: "#FF4A00", desc: "Connect ByThawkHR to 5,000+ apps via Zapier. Build powerful no-code automation workflows in minutes." },
  { name: "BambooHR", cat: "Data Migration", logo: "B", color: "#7DB820", desc: "Migrate your existing employee data from BambooHR with a guided, zero-data-loss import wizard." },
  { name: "Workday", cat: "Data Migration", logo: "W", color: "#F96302", desc: "Bulk import headcount, org structure, and HR history from Workday with our enterprise migration toolkit." },
];

function IntegrationsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-15 blur-3xl animate-pulse-slow bg-primary/40 pointer-events-none" />
        
        <div className="container-x py-24 lg:py-32 relative text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Plug className="h-4 w-4" />
            <span>Seamless Connections</span>
          </div>
          <h1 className="max-w-5xl mx-auto text-5xl font-extrabold tracking-tight sm:text-7xl animate-fade-in-up leading-tight">
            Works with the tools <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">you already love.</span>
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-xl text-muted-foreground animate-fade-in-up-delay leading-relaxed">
            ByThawkHR is the central nervous system of your HR stack. Native integrations sync data bi-directionally with your existing identity providers, communication tools, and accounting software — no duplicate entry, ever.
          </p>
        </div>
      </section>

      {/* INTEGRATION GRID */}
      <section className="container-x py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Native Integrations</h2>
          <p className="text-lg text-muted-foreground">Deep, purpose-built connections — not just an API handshake.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {integrations.map((app, i) => (
            <div
              key={i}
              className="uiverse-card group"
              style={{ animationDelay: `${(i % 8) * 60}ms` }}
            >
              <div className="uiverse-card-content p-6 flex flex-col gap-4 h-full bg-surface-elevated/30">
                <div className="flex items-center gap-4">
                  <div
                    className="h-14 w-14 rounded-2xl text-white font-bold text-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg"
                    style={{ backgroundColor: app.color }}
                  >
                    {app.logo}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-0.5">{app.cat}</p>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{app.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{app.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-accent transition-colors">
                  <CheckCircle2 className="h-4 w-4" /> Native Integration
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API / DEVELOPER SECTION */}
      <section className="container-x py-24 border-t border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Build anything with our API</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">Don't see your tool listed? Our comprehensive REST API and webhook system means you can connect to virtually any system in your stack.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { icon: Webhook, title: "Webhooks", desc: "Push real-time event notifications to any endpoint the moment an employee record is created, updated, or deactivated. Perfect for syncing to custom internal tools.", badge: "Real-time" },
            { icon: Code2, title: "REST API", desc: "Full programmatic access to your entire organization's data. Build custom reports, dashboards, and integrations with our well-documented, versioned API.", badge: "v2.0" },
            { icon: Zap, title: "Zapier Workflows", desc: "Connect ByThawkHR to over 5,000 apps without a single line of code. Build triggers like 'When employee is hired → Add to HubSpot'.", badge: "No-code" },
          ].map((feat, i) => (
            <div key={i} className="uiverse-card group">
              <div className="uiverse-card-content p-8 h-full bg-surface-elevated/30 flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg">
                    <feat.icon className="h-7 w-7" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">{feat.badge}</span>
                </div>
                <h4 className="font-extrabold text-2xl mb-4 group-hover:text-primary transition-colors">{feat.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Code snippet preview */}
        <div className="uiverse-card">
          <div className="uiverse-card-content bg-surface-elevated/30 rounded-3xl overflow-hidden border border-border/60">
            <div className="flex items-center gap-2 px-6 py-4 bg-muted/50 border-b border-border/60">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="ml-4 text-sm text-muted-foreground font-mono">GET /api/v2/employees</span>
            </div>
            <pre className="p-6 overflow-x-auto text-sm font-mono leading-relaxed text-foreground bg-background/50">
              <span className="text-muted-foreground">// Fetch all active employees in the "Engineering" department</span>{"\n"}
              <span className="text-primary">const</span> response = <span className="text-primary">await</span> fetch(<span className="text-accent">{`'https://api.bythawkhr.com/v2/employees?department=Engineering&status=active'`}</span>, {"{"}
              {"\n"}  headers: {"{"} <span className="text-accent">'Authorization'</span>: <span className="text-accent">{"`Bearer ${YOUR_API_KEY}`"}</span> {"}"}
              {"\n"}{"}"}){"\n\n"}
              <span className="text-primary">const</span> {"{"} employees, total {"}"} = <span className="text-primary">await</span> response.json(){"\n\n"}
              <span className="text-muted-foreground">// Output: {"{"} employees: [...], total: 47 {"}"}</span>
            </pre>
          </div>
        </div>
      </section>

      {/* HOW SYNC WORKS */}
      <section className="container-x py-24 border-t border-border/50">
        <div className="rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent border border-primary/20 p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight mb-6 leading-tight">
                Your data stays <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">in sync, always.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                ByThawkHR uses bi-directional syncing wherever possible. When you hire someone in ByThawkHR, they're automatically provisioned in Google Workspace, added to Slack, and created in QuickBooks — all within seconds.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Clock, text: "Sync events trigger in under 5 seconds on average" },
                  { icon: Shield, text: "Encrypted data transfer over TLS 1.3 at all times" },
                  { icon: RefreshCw, text: "Automatic retry and reconciliation for failed syncs" },
                  { icon: Bell, text: "Admin alerts for any sync errors or mismatches" },
                  { icon: Globe, text: "Global CDN edge nodes for sub-100ms API responses" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-foreground leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { from: "ByThawkHR", to: "Google Workspace", event: "Employee hired", time: "2s" },
                { from: "Slack", to: "ByThawkHR", event: "Leave request approved", time: "1s" },
                { from: "ByThawkHR", to: "QuickBooks", event: "Payroll finalized", time: "4s" },
                { from: "ByThawkHR", to: "Jira", event: "Helpdesk ticket raised", time: "1s" },
              ].map((sync, i) => (
                <div key={i} className="uiverse-card group animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="uiverse-card-content flex items-center gap-4 p-5 bg-surface-elevated/30">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div className="bg-primary/10 text-primary text-xs font-bold rounded-lg px-3 py-2 shrink-0 max-w-[120px] truncate">{sync.from}</div>
                      <div className="flex-1 flex items-center gap-1">
                        <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-accent/40 relative">
                          <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-primary to-transparent animate-pulse" />
                        </div>
                        <Layers className="h-4 w-4 text-accent shrink-0 mx-1" />
                        <div className="flex-1 h-px bg-gradient-to-l from-accent/40 to-primary/40" />
                      </div>
                      <div className="bg-accent/10 text-accent text-xs font-bold rounded-lg px-3 py-2 shrink-0 max-w-[120px] truncate">{sync.to}</div>
                    </div>
                    <div className="ml-4 text-right shrink-0">
                      <p className="text-xs text-muted-foreground">{sync.event}</p>
                      <p className="text-sm font-bold text-primary">{sync.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24 border-t border-border/50">
        <div className="text-center card-soft p-12 lg:p-20 border-2 border-primary/20 bg-primary/5 rounded-3xl">
          <h2 className="text-4xl font-extrabold tracking-tight mb-4">Don't see your tool?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">We are constantly shipping new native integrations. Our open API means your engineering team can connect ByThawkHR to virtually anything in minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary group text-base px-8 py-4">
              Request an Integration <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#" className="btn-ghost text-base px-8 py-4">View Full API Docs</a>
          </div>
        </div>
      </section>
    </div>
  );
}
