import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  "Salon Owner",
  "Stylist / Technician",
  "Educator / Academy",
  "Brand / Product Company",
  "Distributor / Dealer",
  "Investor",
  "Media / Influencer",
  "Other",
];

const interestTypes = [
  "Attend the Summit",
  "Sponsorship / Partnership",
  "Speaking Opportunity",
  "Exhibition / Booth",
  "General Inquiry",
];

interface FormData {
  fullName: string;
  company: string;
  designation: string;
  phone: string;
  email: string;
  city: string;
  category: string;
  interest: string;
  message: string;
}

export default function RegistrationForm() {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    company: "",
    designation: "",
    phone: "",
    email: "",
    city: "",
    category: "",
    interest: "",
    message: "",
  });

  const update = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Paste your Google Apps Script Web App URL here
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxnqshfnUjlRkv4VZBG2cC6ha4OJrVBDa7UuDJaFcvssu79RcPO3-hoXDgWb-NEVkKurg/exec";

    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => {
        formData.append(key, form[key as keyof FormData]);
      });

      // Send to Google Sheets (using no-cors prevents CORS blocking from the browser)
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again or contact support.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="register" className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-lg text-center animate-fade-up">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-accent flex items-center justify-center">
            <span className="text-accent text-2xl">✓</span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-foreground">Thank You</h3>
          <p className="mt-4 text-muted-foreground">
            Your interest has been registered. Our team will be in touch shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-24 md:py-32">
      <div ref={ref} className="container mx-auto px-6 max-w-2xl">
        <div className="text-center mb-12">
          <p
            className={`text-xs uppercase tracking-[0.3em] text-accent mb-4 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
              }`}
          >
            Register
          </p>
          <h2
            className={`font-display text-3xl md:text-4xl font-semibold text-foreground transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
          >
            Register Your Interest
          </h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`space-y-5 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <FloatingInput label="Full Name" value={form.fullName} onChange={(v) => update("fullName", v)} required />
            <FloatingInput label="Company / Salon Name" value={form.company} onChange={(v) => update("company", v)} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <FloatingInput label="Designation" value={form.designation} onChange={(v) => update("designation", v)} />
            <FloatingInput label="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} type="tel" required />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <FloatingInput label="Email Address" value={form.email} onChange={(v) => update("email", v)} type="email" required />
            <FloatingInput label="City" value={form.city} onChange={(v) => update("city", v)} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <FloatingSelect label="Category" value={form.category} options={categories} onChange={(v) => update("category", v)} />
            <FloatingSelect label="Interest Type" value={form.interest} options={interestTypes} onChange={(v) => update("interest", v)} />
          </div>
          <FloatingTextarea label="Message (optional)" value={form.message} onChange={(v) => update("message", v)} />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-foreground text-background py-3.5 text-xs uppercase tracking-widest hover:bg-foreground/90 hover:scale-[1.01] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100"
          >
            {isSubmitting ? "Registering..." : "Submit Registration"}
          </button>
        </form>
      </div>
    </section>
  );
}

function FloatingInput({
  label,
  value,
  onChange,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        placeholder=" "
        className="peer w-full border border-border bg-transparent px-4 pt-5 pb-2 text-sm text-foreground rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300"
      />
      <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground transition-all duration-300 pointer-events-none peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px]">
        {label}
      </label>
    </div>
  );
}

function FloatingSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="peer w-full border border-border bg-transparent px-4 pt-5 pb-2 text-sm text-foreground rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300 appearance-none"
      >
        <option value="" disabled />
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <label className="absolute left-4 top-2.5 text-[10px] text-muted-foreground pointer-events-none">
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        rows={3}
        className="peer w-full border border-border bg-transparent px-4 pt-5 pb-2 text-sm text-foreground rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
      />
      <label className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground transition-all duration-300 pointer-events-none peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-[10px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[10px]">
        {label}
      </label>
    </div>
  );
}
