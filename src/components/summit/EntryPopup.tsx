import { useEffect, useState } from "react";
import { X } from "lucide-react";
import heroImg from "@/assets/hero-portrait.jpg";

export default function EntryPopup() {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup-dismissed");
    if (dismissed) return;
    const t = setTimeout(() => {
      setShow(true);
      requestAnimationFrame(() => setVisible(true));
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setVisible(false);
    setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("popup-dismissed", "1");
    }, 350);
  };

  const handleCTA = () => {
    close();
    setTimeout(
      () =>
        document
          .getElementById("register")
          ?.scrollIntoView({ behavior: "smooth" }),
      400
    );
  };

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-350 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={close}
    >
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md overflow-hidden bg-background transition-all duration-350 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-foreground/20 flex items-center justify-center hover:bg-foreground/30 transition-colors"
        >
          <X size={16} className="text-primary-foreground" />
        </button>

        <div className="relative h-52 sm:h-60 overflow-hidden">
          <img
            src={heroImg}
            alt="The Indian Hair Economy Summit"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </div>

        <div className="px-6 pb-7 pt-5 text-center">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground leading-tight">
            The Indian Hair
            <br />
            Economy Summit
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Registrations Now Open
          </p>

          <button
            onClick={handleCTA}
            className="mt-5 w-full bg-foreground text-background py-3.5 text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all duration-300"
          >
            Register Interest
          </button>

          <p className="mt-3 text-[10px] text-muted-foreground">
            Bangalore · Delhi · Mumbai &nbsp;·&nbsp; September 2026
          </p>
        </div>
      </div>
    </div>
  );
}
