import { createFileRoute } from "react-router-dom";
import {
  Users, KanbanSquare, LifeBuoy, Wallet, Laptop, Target, ArrowRight,
  CheckCircle2, Shield, Activity, RefreshCw, Lock, Globe, Zap
} from "lucide-react";



const categories = [
  {
    title: "Core HR and Workforce",
    desc: "Manage the complete employee lifecycle from hire to exit with a single source of truth for all people data.",
    icon: Users,
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-600",
    features: [
      { icon: Users, name: "Smart Employee Directory", detail: "Searchable database with detailed profiles, org charts, photo IDs, and reporting structures all in one place." },
      { icon: CheckCircle2, name: "Automated Leave and Attendance", detail: "Multi-level approval workflows, auto-calculated quotas, real-time clock-ins with geolocation, and overtime alerts." },
      { icon: Shield, name: "Compliance and Documents", detail: "Secure digital vault for contracts, IDs, and NDA forms with automatic expiration alerts and renewal workflows." },
      { icon: Zap, name: "Shift Scheduling", detail: "Drag-and-drop roster builder with live gap warnings, overtime tracking, and automated employee notifications on change." }
    ]
  },
  {
    title: "Productivity and Operations",
    desc: "Give your team the tools they need to execute projects, manage daily tasks, and track company assets.",
    icon: KanbanSquare,
    color: "from-violet-500/20 to-purple-500/10",
    iconColor: "text-violet-600",
    features: [
      { icon: KanbanSquare, name: "Project Workspaces", detail: "Dedicated collaboration hubs with Kanban boards, task assignments, file sharing, and progress tracking." },
      { icon: LifeBuoy, name: "Internal Helpdesk", detail: "Ticketing system for IT, HR, and facility requests with SLA timers, priority levels, and agent inboxes." },
      { icon: Laptop, name: "Asset Management", detail: "Track laptops, phones, and equipment with condition logs, depreciation schedules, and handover workflows." },
      { icon: CheckCircle2, name: "Approvals Inbox", detail: "One unified dashboard for managers to review every pending request across all modules in real time." }
    ]
  },
  {
    title: "Finance and Payroll",
    desc: "Seamless financial operations connected directly to your live employee and attendance data.",
    icon: Wallet,
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-600",
    features: [
      { icon: Wallet, name: "Automated Payroll", detail: "One-click generation of branded PDF payslips with automatic tax calculations, deductions, and allowances." },
      { icon: Activity, name: "Expense Claims", detail: "Mobile receipt uploads, multi-category claims, manager approval chains, and automatic payroll inclusion." },
      { icon: Globe, name: "Travel Management", detail: "End-to-end business trip management, per diem calculations, policy enforcement, and expense linking." },
      { icon: RefreshCw, name: "Deduction Tracking", detail: "Unpaid absences and advance payments automatically reflect in the employee's final monthly settlement." }
    ]
  },
  {
    title: "Talent and Development",
    desc: "Attract top talent and foster continuous growth within your organization through structured development.",
    icon: Target,
    color: "from-rose-500/20 to-pink-500/10",
    iconColor: "text-rose-600",
    features: [
      { icon: Users, name: "Applicant Tracking System", detail: "Publish branded job listings, build candidate pipelines, schedule interviews, and generate offer letters instantly." },
      { icon: Target, name: "Performance Reviews", detail: "Run structured 360-degree feedback cycles, track KPIs over time, and manage annual appraisals cleanly." },
      { icon: CheckCircle2, name: "In-house LMS", detail: "Build training courses with video modules, track completion rates per employee, and issue branded certificates." },
      { icon: Activity, name: "Goals and OKRs", detail: "Align individual and team targets with high-level company objectives using the proven OKR framework." }
    ]
  }
];

export default function FeaturesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse-slow bg-primary/40 pointer-events-none" />

        <div className="container-x py-20 lg:py-28 relative">
          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl animate-fade-in-up leading-tight">
            Everything you need.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Nothing you don't.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl text-muted-foreground animate-fade-in-up-delay leading-relaxed">
            Ceedrs replaces dozens of disconnected tools with a single, deeply integrated platform.
            Explore feature sets designed for modern, agile teams of every size.
          </p>
        </div>
      </section>

      {/* FEATURE CATEGORIES */}
      <section className="container-x py-24 space-y-28">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-10">
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${cat.color} border border-border/60 flex items-center justify-center shadow-lg shrink-0`}>
                <cat.icon className={`h-8 w-8 ${cat.iconColor}`} />
              </div>
              <div>
                <h2 className="text-3xl font-extrabold text-foreground">{cat.title}</h2>
                <p className="text-muted-foreground mt-1 text-lg">{cat.desc}</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.features.map((feat, i) => (
                <div key={i} className="uiverse-card h-full group">
                  <div className="uiverse-card-content p-7 flex flex-col h-full bg-surface-elevated/30">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-md">
                      <feat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feat.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{feat.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ENTERPRISE CAPABILITIES */}
      <section className="container-x py-24 border-t border-border/50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Enterprise Capabilities Built-In</h2>
          <p className="text-muted-foreground text-lg">
            Beyond features, our platform provides robust technical capabilities to support large-scale operations.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Role-Based Access Control",
              desc: "Create custom roles with microscopic precision over who can view, edit, or delete specific data points across every module."
            },
            {
              icon: Activity,
              title: "Comprehensive Audit Logs",
              desc: "Immutable records of every action taken in the system, ensuring complete accountability, compliance, and traceability."
            },
            {
              icon: Lock,
              title: "Real-Time Synchronization",
              desc: "Push-based updates via WebSockets ensure dashboards, chat, and ticket statuses update instantly without any page refresh."
            }
          ].map((item, i) => (
            <div key={i} className="uiverse-card group h-full">
              <div className="uiverse-card-content p-10 text-center flex flex-col items-center bg-surface-elevated/30 h-full">
                <div className="h-20 w-20 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
