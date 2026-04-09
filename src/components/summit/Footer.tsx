export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-semibold">The Indian Hair Economy Summit</h3>
            <p className="text-xs uppercase tracking-widest text-primary-foreground/50 mt-2">
              Workshop | Certification | Networking
            </p>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              A focused platform for professionals, businesses, and stakeholders shaping the future of India's hair industry.
            </p>
          </div>

          {/* Event Details */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">Event Details</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>📍 Bangalore | Delhi | Mumbai</p>
              <p>📅 September 2026</p>
              <p>🕒 10:00 AM – 6:00 PM</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-primary-foreground/50 mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>summit@emiliobeaufort.com</p>
              <p>www.emiliobeaufort.com</p>
              <p>8105511617</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © 2026 The Indian Hair Economy Summit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
