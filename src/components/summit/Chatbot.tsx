import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const quickReplies = [
  { label: "Register for Summit", target: "register" },
  { label: "Sponsorship Details", target: "sponsorship" },
  { label: "Ticket Information", target: "tickets" },
  { label: "Contact Us", target: "contact" },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    // Small delay for closing animation
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      {/* Chat Window */}
      {open && (
        <div className="mb-4 w-80 bg-background border border-border rounded-lg shadow-2xl overflow-hidden animate-fade-up">
          {/* Header */}
          <div className="bg-foreground text-primary-foreground px-5 py-4 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Summit Assistant</p>
              <p className="text-[10px] text-primary-foreground/60">We're here to help</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              <X size={18} />
            </button>
          </div>

          {/* Body */}
          <div className="p-5">
            <div className="bg-surface rounded-lg p-3 mb-4">
              <p className="text-sm text-foreground">
                Hi, how can I help you with the Summit?
              </p>
            </div>

            <div className="space-y-2">
              {quickReplies.map((r) => (
                <button
                  key={r.target}
                  onClick={() => scrollTo(r.target)}
                  className="w-full text-left px-4 py-2.5 border border-border rounded-md text-xs text-foreground hover:border-accent/40 hover:bg-surface transition-all duration-200"
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 bg-foreground text-primary-foreground rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-300"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}
