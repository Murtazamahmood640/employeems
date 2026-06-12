import { createFileRoute, Link } from "@tanstack/react-router";
import { Calendar, ArrowRight, Users, BarChart3, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog - Employee Zen" },
      { name: "description", content: "Read articles, guides, and tips about HR management and workforce optimization." },
    ],
  }),
  component: Blog,
});

function Blog() {
  const articles = [
    {
      id: 1,
      title: "The Future of Remote Work: How to Manage Distributed Teams",
      excerpt: "Discover best practices for managing teams across multiple time zones and locations with Employee Zen.",
      category: "Remote Work",
      author: "Sarah Johnson",
      date: "June 8, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      id: 2,
      title: "Automating HR Workflows: Save 10+ Hours Per Week",
      excerpt: "Learn how automation can streamline approvals, onboarding, and administrative tasks for your HR team.",
      category: "Automation",
      author: "Mike Chen",
      date: "June 5, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 3,
      title: "Building a Strong Attendance Culture",
      excerpt: "Strategies and tools to improve employee attendance and engagement in your organization.",
      category: "Engagement",
      author: "Emma Wilson",
      date: "June 1, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80"
    },
    {
      id: 4,
      title: "Payroll Best Practices: Compliance and Efficiency",
      excerpt: "Navigate payroll compliance requirements and streamline your payment cycles with modern tools.",
      category: "Payroll",
      author: "James Rodriguez",
      date: "May 28, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
    },
    {
      id: 5,
      title: "Performance Management in the Modern Workplace",
      excerpt: "Move beyond annual reviews with continuous feedback and real-time performance tracking.",
      category: "Performance",
      author: "Lisa Anderson",
      date: "May 25, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      id: 6,
      title: "Employee Data Security: Protecting Sensitive Information",
      excerpt: "Essential security practices and compliance requirements for handling employee data.",
      category: "Security",
      author: "David Martinez",
      date: "May 20, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
    },
  ];

  const resources = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "HR Templates",
      description: "Pre-built templates for policies, contracts, and processes",
      color: "text-blue-600"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Reports & Analytics",
      description: "Data-driven insights for HR decision making",
      color: "text-primary"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Webinars",
      description: "Live sessions with HR experts and product demos",
      color: "text-green-600"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-white">
        <div className="container-x">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
            HR Tips, Insights & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mb-8">
            Stay updated with the latest HR trends, best practices, and strategies for managing your workforce effectively.
          </p>
          <div className="flex gap-4">
            <input
              type="search"
              placeholder="Search articles..."
              className="flex-1 max-w-md px-4 py-3 border border-border300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold hover:from-primary hover:to-accent transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {articles.length > 0 && (
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container-x">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Article</h2>
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-background backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:border-primary/20">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10 pointer-events-none" />
              
              <div className="grid lg:grid-cols-2 gap-8 relative z-20">
                <div className="h-96 overflow-hidden rounded-2xl">
                  <img
                    src={articles[0].image}
                    alt={articles[0].title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {articles[0].category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-4">{articles[0].title}</h3>
                  <p className="text-muted-foreground mb-6">{articles[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span>{articles[0].author}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {articles[0].date}
                    </div>
                    <span>•</span>
                    <span>{articles[0].readTime}</span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80">
                    Read article <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-foreground mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <article
                key={article.id}
                className="group relative overflow-hidden rounded-2xl border border-border bg-background backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 flex flex-col"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none z-10" />
                
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <div className="relative p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-primary bg-gradient-to-r from-primary/15 to-accent/10 px-3 py-1.5 rounded-full w-fit mb-4 border border-primary/20">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-3 flex-1 leading-snug group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/50 pt-4">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{article.author}</span>
                      <span className="text-border">•</span>
                      <span>{article.date}</span>
                    </div>
                    <span className="text-primary/70 font-medium">{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-foreground mb-12">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div key={resource.title} className="group relative overflow-hidden rounded-2xl bg-background border border-border backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 p-8 text-center">
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <div className="relative">
                  <div className={`h-14 w-14 rounded-xl flex items-center justify-center ${resource.color} bg-opacity-15 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <div className={resource.color}>{resource.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{resource.title}</h3>
                  <p className="text-muted-foreground mb-6">{resource.description}</p>
                  <button className="text-primary font-semibold hover:text-primary/80 inline-flex items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-1">
                    Explore <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-x max-w-2xl">
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 lg:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get HR Insights Delivered</h2>
            <p className="text-white/90 mb-6">
              Subscribe to our newsletter for weekly tips, industry trends, and updates.
            </p>
            <form className="flex gap-3 mb-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <button className="px-6 py-3 bg-background text-primary rounded-lg font-semibold hover:bg-gray-100 transition">
                Subscribe
              </button>
            </form>
            <p className="text-xs text-white/80">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
