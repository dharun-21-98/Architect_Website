import { Link } from "react-router-dom";
import { Instagram, Twitter, RectangleGoggles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 bg-foreground text-primary-foreground">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Link to="/" className="font-label text-lg">Lavanya & Shankar Architects</Link>
          <p className="mt-3 text-sm text-muted-foreground/80">
            Crafting elegant brands, packaging, and digital experiences.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-4 text-sm">
          <Link to="/projects" className="hover:text-accent-foreground transition-colors">Projects</Link>
          <Link to="/about" className="hover:text-accent-foreground transition-colors">About</Link>
          <Link to="/services" className="hover:text-accent-foreground transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-accent-foreground transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="text-primary hover:text-accent transition-colors"><Instagram /></a>
          <a href="#" aria-label="Twitter" className="text-primary hover:text-accent transition-colors"><Twitter /></a>
          <a href="#" aria-label="RectangleGoggles" className="text-primary hover:text-accent transition-colors"><RectangleGoggles /></a>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="container py-6 text-xs text-muted-foreground/80 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Lavanya & Shankar Architects</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
