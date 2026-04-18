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
          ? "bg-background/90 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-white/5 backdrop-blur-xl border-b border-white/10"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <img
            src="/Indian hair economy logo.png"
            alt="Indian Hair Economy Summit Logo"
            className="h-20 md:h-24 w-auto object-contain -my-6 md:-my-8"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-xs tracking-widest uppercase transition-colors duration-300 ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="https://in.bookmyshow.com/events/indian-hair-economy-summit-2026-2nd-editio/ET00495939"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] ${
              scrolled
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "glass-btn text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            }`}
          >
            Register
          </a>
        </div>

        <button
          className={`lg:hidden transition-colors duration-300 ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
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
            <a
              href="https://in.bookmyshow.com/events/indian-hair-economy-summit-2026-2nd-editio/ET00495939"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full text-center bg-foreground text-background py-3 text-xs uppercase tracking-widest"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
