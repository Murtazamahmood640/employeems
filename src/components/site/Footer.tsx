import { Link } from "react-router-dom";
import logo from '../../../public/logo-light.png';
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden pt-20 pb-10">
      {/* Background glowing effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-6 lg:gap-8 border-b border-white/10 pb-16">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block  rounded-xl p-2 mb-6">
              <img src={logo} width={150} alt="Ceedrs Logo" />
            </Link>
            <p className="max-w-xs text-base text-white/70 leading-relaxed font-medium">
              One workspace for your people, processes, and payroll. Built for modern teams that value efficiency.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider text-sm">Product</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li><Link to="/modules" className="hover:text-primary transition-colors">All Modules</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing & Plans</Link></li>
              <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link to="/modules" className="hover:text-primary transition-colors">Mobile App</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Sales</Link></li>
              <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog & News</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 text-sm font-medium text-white/60">
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="/security" className="hover:text-primary transition-colors">Security Overview</Link></li>
              <li><Link to="/status" className="hover:text-primary transition-colors">System Status</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h4 className="text-base font-bold text-white mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
            <p className="text-sm text-white/60 mb-4 leading-relaxed">Get the latest news and HR tips delivered weekly.</p>
            <form className="relative flex items-center">
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="w-full rounded-full border border-white/20 bg-white/5 py-3 pl-4 pr-12 text-sm text-white outline-none focus:border-primary focus:bg-white/10 transition-all placeholder:text-white/40" 
              />
              <button className="absolute right-1.5 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white hover:scale-105 transition-transform">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm font-medium text-white/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Ceedrs. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
