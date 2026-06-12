import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ByThawkHR" },
      { name: "description", content: "Book a demo, talk to sales, or get support from the ByThawkHR team." },
      { property: "og:title", content: "Contact ByThawkHR" },
      { property: "og:description", content: "We're here to help — book a demo or send us a note." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="hero-bg border-b border-border">
        <div className="container-x py-20">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
            Let's get your team on <span className="text-gradient">one platform</span>.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tell us a bit about your company and we'll get back within one business day.
          </p>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="card-soft p-8"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-accent">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-bold">Thanks — we'll be in touch.</h3>
                <p className="mt-2 text-muted-foreground">A real person will reply within one business day.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" />
                  <Field label="Work email" name="email" type="email" />
                  <Field label="Company" name="company" />
                  <Field label="Team size" name="size" placeholder="e.g. 50–100" />
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium">How can we help?</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us what you're looking for..."
                    className="mt-1.5 w-full rounded-2xl border border-border bg-surface-elevated px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring/40"
                  />
                </div>
                <button className="btn-primary mt-6 w-full sm:w-auto">Send message</button>
              </>
            )}
          </form>
          <div className="space-y-4">
            {[
              { icon: Mail, title: "Email", val: "hello@bythawkhr.com" },
              { icon: Phone, title: "Phone", val: "+1 (555) 028-3344" },
              { icon: MapPin, title: "Office", val: "Remote-first — HQ in Bengaluru, India" },
            ].map((c) => (
              <div key={c.title} className="card-soft flex items-start gap-4 p-5">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{c.title}</p>
                  <p className="text-sm text-muted-foreground">{c.val}</p>
                </div>
              </div>
            ))}
            <div className="card-soft overflow-hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80" alt="Office" className="h-48 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-full border border-border bg-surface-elevated px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
