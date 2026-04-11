import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["About", "Attend", "Sponsorship", "Vision", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-foreground/60 backdrop-blur-lg"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <span
          className={`font-display text-lg font-semibold tracking-wide transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          IHES
        </span>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <span
            className={`text-xs transition-colors duration-300 ${
              scrolled ? "text-muted-foreground" : "text-primary-foreground/70"
            }`}
          >
            Sep 2026
          </span>
          <button
            onClick={() => scrollTo("register")}
            className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 ${
              scrolled
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
            }`}
          >
            Register
          </button>
        </div>

        <button
          className={`lg:hidden transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground text-left py-2"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
