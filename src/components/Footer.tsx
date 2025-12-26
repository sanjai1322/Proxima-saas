import { Hexagon, Twitter, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const footerLinks = {
  product: [
    { name: "Ecosystem", href: "#use-cases" },
    { name: "Developers", href: "#features" },
    { name: "Pricing", href: "#pricing" },
  ],
  company: [
    { name: "Careers", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative py-20 lg:py-24 border-t border-white/5 overflow-hidden bg-background">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <a href="#home" className="flex items-center gap-2 mb-6 group w-fit">
              <div className="relative">
                <Hexagon className="w-10 h-10 text-primary shadow-primary/50 transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse" />
                </div>
              </div>
              <span className="font-heading font-bold text-2xl text-foreground tracking-tight">
                Proxima
              </span>
            </a>
            <p className="text-muted-foreground text-lg max-w-sm leading-relaxed mb-8">
              Building the next generation of secure, scalable, and ultra-fast Web3 infrastructure.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-foreground mb-6">Product</h4>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group">
                    <span className="w-0 group-hover:w-2 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-foreground mb-6">Connect</h4>
            <Button variant="outline" size="sm" className="w-full mb-4 group h-11 border-white/10 hover:border-primary/50 rounded-xl bg-white/5">
              <Mail className="w-4 h-4 mr-2 group-hover:text-primary" />
              Email Us
            </Button>
            <p className="text-[10px] text-muted-foreground uppercase tracking-tighter text-center">
              Response within 24 hours
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2024 Proxima Protocol. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Mainnet Active
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
