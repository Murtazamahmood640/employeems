import { createFileRoute } from "@tanstack/react-router";
import {
  Shield, Lock, Server, FileCheck, CheckCircle2, AlertTriangle,
  Eye, Fingerprint, Globe, ShieldCheck, Database, Key
} from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security and Compliance — ByThawkHR" },
      { name: "description", content: "Enterprise-grade security, data isolation, and compliance built into every layer of ByThawkHR." },
    ],
  }),
  component: SecurityPage,
});

const pillars = [
  {
    icon: Lock,
    title: "Data Encryption",
    desc: "All data at rest is encrypted using AES-256. All data in transit is protected with TLS 1.3. Your information is cryptographically protected at every layer of the stack.",
    badge: "AES-256 / TLS 1.3"
  },
  {
    icon: Database,
    title: "Multi-Tenant Isolation",
    desc: "Every database record carries a strict organization ID enforced at the query level. Cross-tenant data leakage is structurally impossible — it's an architectural guarantee, not a configuration.",
    badge: "Row-Level Security"
  },
  {
    icon: FileCheck,
    title: "Compliance and Privacy",
    desc: "Fully compliant with GDPR, CCPA, and SOC 2 Type II standards. You maintain complete data ownership with granular export and deletion tools available to authorized admins.",
    badge: "GDPR · SOC 2 · CCPA"
  },
  {
    icon: Eye,
    title: "Immutable Audit Logs",
    desc: "Every action in the platform is logged with a timestamp, user identity, and IP address. Logs are tamper-proof and retained for 12 months by default with search and export.",
    badge: "12 Month Retention"
  },
  {
    icon: Fingerprint,
    title: "Identity and Access",
    desc: "Role-Based Access Control (RBAC), Two-Factor Authentication enforcement, and Single Sign-On via SAML 2.0 and OAuth 2.0 are all supported and enforceable per organization policy.",
    badge: "SAML · OAuth · 2FA"
  },
  {
    icon: AlertTriangle,
    title: "Threat Detection",
    desc: "Automated monitoring for brute force attacks, anomalous login patterns, and API abuse. Suspicious activity triggers instant admin alerts and automatic session termination.",
    badge: "Real-time Monitoring"
  },
];

const infraItems = [
  { icon: Server, text: "Hosted on AWS with a 99.9% uptime SLA" },
  { icon: Database, text: "Daily automated backups with 30-day retention" },
  { icon: Key, text: "Role-based access control (RBAC) for all modules" },
  { icon: ShieldCheck, text: "Two-factor authentication (2FA) enforcement" },
  { icon: Globe, text: "Single Sign-On (SSO) via SAML 2.0 and OAuth 2.0" },
  { icon: Eye, text: "Comprehensive audit logs for all user actions" },
  { icon: AlertTriangle, text: "Regular penetration testing and vulnerability assessments" },
  { icon: Lock, text: "Automated threat detection and instant mitigation" },
  { icon: Fingerprint, text: "IP whitelisting for administrative access" },
  { icon: Shield, text: "Dedicated VPCs and isolated network environments" },
  { icon: CheckCircle2, text: "24/7 security monitoring by our operations team" },
  { icon: Server, text: "Disaster recovery with under 4 hour RTO" },
];

const certifications = [
  { name: "GDPR", region: "European Union", detail: "Full data subject rights: access, erasure, portability. DPA available upon request." },
  { name: "SOC 2 Type II", region: "United States", detail: "Annual third-party audit of security, availability, and confidentiality controls." },
  { name: "CCPA", region: "California, USA", detail: "Consumer data rights management with opt-out and deletion request workflows." },
  { name: "ISO 27001", region: "International", detail: "Information security management system certified to the international standard." },
];

function SecurityPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border hero-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse-slow bg-primary/40 pointer-events-none" />

        <div className="container-x py-24 lg:py-32 relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shadow-lg">
              <Shield className="h-7 w-7" />
            </div>
            <span className="eyebrow text-primary bg-primary/10 border-primary/20">Trust and Security</span>
          </div>
          <h1 className="max-w-5xl text-5xl font-extrabold tracking-tight sm:text-7xl animate-fade-in-up leading-tight">
            Enterprise security,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              by design.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-muted-foreground animate-fade-in-up-delay leading-relaxed">
            Your workforce data is your most sensitive asset. ByThawkHR is built from the ground up
            with strict data isolation, end-to-end encryption, and global compliance standards so you
            can focus on your people — not your security posture.
          </p>
        </div>
      </section>

      {/* CORE SECURITY PILLARS */}
      <section className="container-x py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow bg-primary/10 border-primary/20 text-primary inline-flex items-center gap-2 mb-4">
            <ShieldCheck className="h-4 w-4" /> Core Security
          </span>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Security built into every layer
          </h2>
          <p className="text-lg text-muted-foreground">
            Not bolted on as an afterthought — security is a core architectural concern from day one.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, i) => (
            <div key={i} className="uiverse-card group h-full">
              <div className="uiverse-card-content p-8 flex flex-col h-full bg-surface-elevated/30">
                <div className="flex items-start justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg shrink-0">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <span className="ml-3 text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full shrink-0">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed flex-1 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="container-x py-24 border-t border-border/50">
        <div className="uiverse-card">
          <div className="uiverse-card-content bg-surface-elevated/30 p-10 lg:p-16 relative overflow-hidden rounded-3xl">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg">
                  <Globe className="h-7 w-7" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">Infrastructure and Operations</h2>
                  <p className="text-muted-foreground mt-1">Built for reliability, speed, and global scale.</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {infraItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 group cursor-default hover:bg-primary/5 p-4 rounded-2xl transition-colors border border-transparent hover:border-primary/10"
                  >
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-foreground font-medium leading-snug text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE CERTS */}
      <section className="container-x py-24 border-t border-border/50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">Certifications and Compliance</h2>
          <p className="text-lg text-muted-foreground">
            Independently audited and certified to the standards your legal team requires.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, i) => (
            <div key={i} className="uiverse-card group text-center h-full">
              <div className="uiverse-card-content p-8 bg-surface-elevated/30 flex flex-col items-center h-full">
                <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-2xl font-extrabold mb-1 text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
                  {cert.name}
                </h3>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                  {cert.region}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
