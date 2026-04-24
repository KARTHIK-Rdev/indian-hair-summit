export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="font-display text-lg font-semibold">The Indian Hair Economy Summit</h3>
            <p className="text-xs uppercase tracking-widest text-white/40 mt-2">
              Workshop · Certification · Networking
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Location</h4>
            <p className="text-sm text-white/70">Bangalore · Delhi · Mumbai</p>
            <p className="text-sm text-white/70 mt-1">2026</p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">Contact</h4>
            <p className="text-sm text-white/70">summit@indianhairecomy.com</p>
            <p className="text-sm text-white/70">partnership@indianhaireconomy.com</p>
            <p className="text-sm text-white/70">executive@indianhaireconomy.com</p>
            <p className="text-sm text-white/70">sales@indianhaireconomy.com</p>
            <p className="text-sm text-white/70 mt-1">8105511617</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-xs text-white/30">
            © 2026 The Indian Hair Economy Summit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
