export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4">
      <button
        onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
        className="w-full bg-foreground text-background py-3.5 text-xs uppercase tracking-widest hover:bg-foreground/90 transition-all duration-300"
      >
        Register Interest
      </button>
    </div>
  );
}
