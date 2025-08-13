import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Decide if header should have light or dark text based on scroll or route
  const isLightText = !scrolled && location.pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-label text-lg">
          <span
            className={`font-semibold tracking-wide transition-colors ${
              isLightText ? "text-white" : "text-black"
            }`}
          >
            Lavanya & Shankar Architects
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isLightText
                    ? isActive
                      ? "text-white border-b border-white"
                      : "text-white/80 hover:text-white"
                    : isActive
                    ? "text-black border-b border-black"
                    : "text-gray-600 hover:text-black"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button
            asChild
            size="sm"
            className={isLightText ? "bg-white text-black" : "bg-black text-white"}
          >
            <Link to="/contact">Start a Project</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open Menu"
                className={isLightText ? "text-white" : "text-black"}
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col gap-6 pt-12">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-lg ${isActive ? "text-black" : "text-gray-600"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <Button asChild variant="hero">
                <Link to="/contact">Contact US</Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}