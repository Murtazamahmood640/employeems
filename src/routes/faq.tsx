import { createFileRoute, Link } from "react-router-dom";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useState } from "react";



export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqs = [
    {
      id: "1",
      question: "What is Employee Zen?",
      answer: "Employee Zen is a comprehensive HR management platform that consolidates multiple HR functionsâ€”from attendance and leave management to payroll and performance reviewsâ€”into a single, unified workspace. It&apos;s designed for modern organizations of all sizes."
    },
    {
      id: "2",
      question: "How much does Employee Zen cost?",
      answer: "We offer flexible pricing based on the number of employees and modules you need. Most plans start at $5-10 per employee per month. All plans include a 14-day free trial with full feature access. Contact our sales team for custom enterprise pricing."
    },
    {
      id: "3",
      question: "Can I integrate Employee Zen with my existing tools?",
      answer: "Yes! Employee Zen offers a comprehensive REST API and webhooks for integrations. We also have pre-built connectors for popular payroll, accounting, and communication platforms. Contact our integration team for specific requirements."
    },
    {
      id: "4",
      question: "Is my data secure?",
      answer: "Absolutely. Employee Zen uses enterprise-grade encryption (AES-256), two-factor authentication, and follows industry best practices. We&apos;re SOC 2 Type II certified and regularly undergo third-party security audits."
    },
    {
      id: "5",
      question: "Do you offer mobile apps?",
      answer: "Yes, we have native iOS and Android apps. All critical functionsâ€”clock-in, leave requests, approvalsâ€”work offline and sync automatically when you reconnect. The mobile experience mirrors the web platform seamlessly."
    },
    {
      id: "6",
      question: "What support do you provide?",
      answer: "We offer 24/7 email support and dedicated Slack channels for all plans. Premium customers get a dedicated account manager and priority phone support. We also maintain comprehensive documentation and video tutorials."
    },
    {
      id: "7",
      question: "Can I import my existing HR data?",
      answer: "Yes! Our onboarding team helps you migrate data from your current system. We support CSV imports, direct database connections, and custom API mappings. The process is usually completed within 1-2 weeks."
    },
    {
      id: "8",
      question: "What if I only need specific modules?",
      answer: "Perfect! Employee Zen is modular. You pay only for the modules you activate. If you need People and Attendance today, you can add Payroll and Performance later without switching systems."
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-white">
        <div className="container-x text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Employee Zen. Can&apos;t find what you&apos;re looking for?{" "}
            <Link to="/contact" className="text-primary font-semibold hover:text-primary/80">
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container-x max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-border200 rounded-lg overflow-hidden hover:shadow-md transition">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-6 bg-background hover:bg-gray-50 transition text-left"
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      openItems.includes(faq.id) ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {openItems.includes(faq.id) && (
                  <div className="border-t border-border200 px-6 py-4 bg-gray-50">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-x text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
          <p className="text-xl text-muted-foreground mb-8">Our team is here to help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white font-semibold py-3 px-8 rounded-lg hover:from-primary hover:to-accent transition"
            >
              Contact support <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:support@employeezen.com"
              className="inline-flex items-center gap-2 border border-border300 text-foreground font-semibold py-3 px-8 rounded-lg hover:bg-background transition"
            >
              Email us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
