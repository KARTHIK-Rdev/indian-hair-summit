import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Success() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface px-6">
      <div
        className={`glass-card max-w-md w-full p-10 rounded-2xl text-center transition-all duration-700 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-accent" />
        </div>
        <h1 className="font-display text-3xl font-semibold text-foreground">
          Payment Successful
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Your registration is confirmed. Please check your email for ticket details.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block bg-foreground text-background px-8 py-3 text-xs uppercase tracking-widest rounded-lg hover:bg-foreground/90 hover:scale-[1.02] transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
