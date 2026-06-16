import { createFileRoute, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Users, Clock, FileText } from "lucide-react";
import { modules } from "@/lib/modules";



export default function ModuleDetail() {
  const { slug } = useParams({ from: "/module-detail/$slug" });
  const module = modules.find(m => m.slug === slug);

  if (!module) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">Module not found</h1>
          <p className="text-muted-foreground mb-8">The module you're looking for doesn't exist.</p>
          <Link to="/modules" className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
            Back to modules <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="container-x">
          <Link to="/modules" className="text-primary hover:text-primary/80 font-semibold mb-6 inline-flex items-center gap-1">
            â† Back to modules
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2 mb-6">
                <div className="h-10 w-10 rounded-lg" style={{ backgroundColor: module.accentHex + "20" }}>
                  <module.icon className="h-full w-full p-2" style={{ color: module.accentHex }} />
                </div>
                <span className="text-sm font-semibold text-muted-foreground">{module.category}</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">{module.name}</h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{module.longDescription}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:from-primary hover:to-accent transition"
                >
                  Get started <ArrowRight className="h-4 w-4" />
                </Link>
                <button className="inline-flex items-center gap-2 border-2 border-border300 text-foreground font-semibold py-3 px-8 rounded-lg hover:border-purple-300 hover:bg-primary/5 transition">
                  Schedule demo
                </button>
              </div>

              <div className="space-y-3">
                {module.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    {highlight}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl blur-2xl opacity-20" style={{ backgroundColor: module.accentHex }} />
              <img
                src={module.image}
                alt={module.name}
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-x">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">Key Features</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {module.features.map((feature, idx) => (
              <div key={idx} className="bg-background rounded-xl p-8 border border-border200">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: module.accentHex + "20" }}>
                  <Check className="h-6 w-6" style={{ color: module.accentHex }} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-x">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12">Use Cases</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "For HR Teams",
                description: "Streamline operations and reduce manual work by automating routine HR processes and approvals.",
                icon: <Users className="h-8 w-8" />
              },
              {
                title: "For Managers",
                description: "Get real-time visibility into team performance, approvals, and engage with your direct reports effectively.",
                icon: <Clock className="h-8 w-8" />
              },
              {
                title: "For Employees",
                description: "Easy self-service access to manage time, leaves, expenses, and track career growth in one place.",
                icon: <FileText className="h-8 w-8" />
              },
            ].map((useCase, idx) => (
              <div key={idx} className="border border-border200 rounded-xl p-8 hover:shadow-lg transition">
                <div className="h-12 w-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: module.accentHex + "20", color: module.accentHex }}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-x">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Built for Integration</h2>
            <p className="text-xl text-muted-foreground mb-8">
              {module.name} integrates seamlessly with your existing tools. Our REST API and webhooks make it easy to connect with any system or build custom integrations.
            </p>
            
            <div className="bg-background rounded-xl border border-border200 p-8">
              <h3 className="text-lg font-bold text-foreground mb-4">Integration Options</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  REST API for custom integrations
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  Webhooks for real-time events
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  Pre-built connectors for popular platforms
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  Detailed API documentation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-x">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 lg:p-16 text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to implement {module.name}?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. All features included. No credit card required.
            </p>
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-background text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
            >
              Start free trial <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
