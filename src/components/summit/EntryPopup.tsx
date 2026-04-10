import { useEffect, useState } from "react";
import { X } from "lucide-react";
import popupImg from "@/assets/popup-portrait.jpg";

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
      {/* Overlay — liquid glass blur */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      />

      {/* Modal — liquid glass card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-md overflow-hidden transition-all duration-350 ${
          visible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{
          borderRadius: "20px",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.65) 100%)",
          backdropFilter: "blur(40px) saturate(200%)",
          WebkitBackdropFilter: "blur(40px) saturate(200%)",
          border: "1px solid rgba(255,255,255,0.45)",
          boxShadow:
            "0 24px 80px -12px rgba(0,0,0,0.25), 0 0 0 0.5px rgba(255,255,255,0.3) inset, 0 1px 3px rgba(255,255,255,0.2) inset",
        }}
      >
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          style={{
            background: "rgba(0,0,0,0.15)",
            backdropFilter: "blur(10px)",
          }}
        >
          <X size={16} className="text-foreground/70" />
        </button>

        {/* Image */}
        <div className="relative h-52 sm:h-60 overflow-hidden">
          <img
            src={popupImg}
            alt="The Indian Hair Economy Summit"
            className="w-full h-full object-cover object-top"
          />
          {/* Glass edge fade */}
          <div
            className="absolute inset-x-0 bottom-0 h-16"
            style={{
              background:
                "linear-gradient(to top, rgba(255,255,255,0.85), transparent)",
            }}
          />
        </div>

        {/* Content */}
        <div className="px-6 pb-7 pt-2 text-center">
          <h2 className="font-display text-xl sm:text-2xl font-semibold text-foreground leading-tight">
            The Indian Hair
            <br />
            Economy Summit
          </h2>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Workshop &nbsp;|&nbsp; Certification &nbsp;|&nbsp; Networking
          </p>
          <p className="mt-3 text-sm text-foreground/70 font-body">
            Registrations Now Open
          </p>

          <button
            onClick={handleCTA}
            className="mt-5 w-full bg-foreground text-background py-3.5 text-xs uppercase tracking-widest hover:bg-foreground/90 hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
            style={{ borderRadius: "10px" }}
          >
            Register Interest
          </button>

          <p className="mt-3 text-[10px] text-muted-foreground">
            📍 Bangalore | Delhi | Mumbai &nbsp;·&nbsp; 📅 September 2026
          </p>
        </div>
      </div>
    </div>
  );
}
