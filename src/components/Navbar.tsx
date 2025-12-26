import { Button } from "@/components/ui/button";
import { Hexagon, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#features" },
  { name: "Ecosystem", href: "#use-cases" },
  { name: "Pricing", href: "#pricing" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "About", href: "#mission" },
];

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetId = href.replace("#", "");
  const element = document.getElementById(targetId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Hexagon className="w-8 h-8 text-primary icon-glow transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full" />
              </div>
            </div>
            <span className="font-heading font-bold text-xl text-foreground">
              Proxima
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="nav" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={(e) => {
                    scrollToSection(e, link.href);
                    setMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="nav" size="sm" className="w-full mt-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
