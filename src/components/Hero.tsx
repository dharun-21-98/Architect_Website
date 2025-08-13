import heroImg from "@/assets/hero-brandkit.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Premium abstract brand background with gold and sage accents"
        className="absolute inset-0 h-full w-full object-cover scale-105"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative z-10 container flex min-h-[70vh] flex-col items-center justify-center text-center">
       <h1 className="text-primary-foreground text-4xl md:text-6xl font-semibold max-w-3xl animate-fade-in leading-tight">
         Design should be
         <span className="block">AESTHETIC &amp; FUNCTIONAL</span>
      </h1>

        <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-2xl animate-fade-in">
          Experience & Creativity Meet Here
        </p>
        <div className="mt-8 flex gap-4 animate-fade-in">
          <Button asChild variant="hero" size="lg" className="hover-scale">
            <Link to="/projects">Learn More</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover-scale">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
