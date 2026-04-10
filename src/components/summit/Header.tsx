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

  const shellClass = scrolled
    ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
    : "bg-foreground/70 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]";

  const brandClass = scrolled
    ? "text-foreground"
    : "text-primary-foreground drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]";

  const navClass = scrolled
    ? "text-muted-foreground hover:text-foreground"
    : "text-primary-foreground/90 hover:text-primary-foreground";

  const infoClass = scrolled ? "text-muted-foreground" : "text-primary-foreground/80";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${shellClass}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex-shrink-0">
          <span className={`font-display text-lg font-semibold tracking-wide transition-colors duration-300 ${brandClass}`}>
            The Indian Hair Economy Summit
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 ${navClass}`}
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <div className={`text-xs space-x-3 transition-colors duration-300 ${infoClass}`}>
            <span>📍 Bangalore | Delhi | Mumbai</span>
            <span>📅 Sep 2026</span>
          </div>
          <button
            onClick={() => scrollTo("register")}
            className="bg-primary-foreground text-foreground px-5 py-2.5 text-xs uppercase tracking-widest hover:bg-primary-foreground/90 transition-all duration-300 hover:shadow-lg"
          >
            Register Interest
          </button>
        </div>

        <button
          className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
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
            <div className="text-xs text-muted-foreground pt-2 border-t border-border">
              📍 Bangalore | Delhi | Mumbai &nbsp;·&nbsp; 📅 Sep 2026
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
