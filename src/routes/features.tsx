import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight, Zap, Shield, BarChart3, Users, Clock, Smartphone } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features - Employee Zen" },
      { name: "description", content: "Discover all the powerful features of Employee Zen HR platform." },
    ],
  }),
  component: Features,
});

function Features() {
  const coreFeatures = [
    {
      icon: Users,
      title: "Employee Management",
      description: "Centralized directory with detailed profiles, org charts, and document management."
    },
    {
      icon: Clock,
      title: "Attendance Tracking",
      description: "Clock-in/out with geofencing, overtime calculation, and offline-first mobile app."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Real-time dashboards, drill-down reports, and exportable data in Excel/CSV."
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Automated approvals, multi-level workflows, and real-time notifications."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Role-based access control, data encryption, and complete audit trails."
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Native mobile app with offline support for all critical functions."
    },
  ];

  const benefits = [
    "Reduce HR overhead by 40%",
    "Increase employee satisfaction scores",
    "Streamline payroll processing",
    "Real-time compliance tracking",
    "Unified communication platform",
    "Customizable workflows",
    "Multi-language support",
    "SSO & SCIM integration",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything you need to manage your workforce
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Employee Zen brings together all your HR tools into one unified platform with powerful features designed for modern teams.
            </p>
            <Link to="/login" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:from-primary hover:to-accent transition">
              Start free trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-x">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Core Features</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl">
            Powerful capabilities built-in from day one, with no additional plugins required.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="group relative overflow-hidden rounded-2xl border border-border bg-background backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 p-8">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:from-primary/25">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-x">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">Why Teams Love Employee Zen</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.slice(0, 4).map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">More Capabilities</h3>
              <div className="space-y-4">
                {benefits.slice(4).map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-background border border-border200 rounded-xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Integration Ready</h3>
            <p className="text-muted-foreground mb-6">
              Employee Zen integrates seamlessly with your existing tools. Connect payroll systems, HRIS platforms, and custom applications through our REST API and webhooks.
            </p>
            <Link to="/contact" className="text-primary font-semibold hover:text-primary/80 inline-flex items-center gap-2">
              Learn about integrations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-x">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 lg:p-16 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to streamline your HR?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Get started with a free 14-day trial. No credit card required. All features included.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/login" className="inline-flex items-center gap-2 bg-background text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
                Start free trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-background/10 transition">
                Schedule a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
