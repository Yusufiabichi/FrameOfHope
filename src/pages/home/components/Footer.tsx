
export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://public.readdy.ai/ai/img_res/95f0f47a-9a06-4719-98b0-bea1b396d412.png" 
                alt="Frame of Hope Logo" 
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                Frame of Hope
              </h3>
            </div>
            <p className="text-[#D4AF37] font-semibold mb-3">
              Cinematic Stories, Timeless Memories
            </p>
            <p className="text-white/60 text-sm">
              <i className="ri-map-pin-line text-[#D4AF37] mr-2"></i>
              Based in Kano, Nigeria
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-[#D4AF37] uppercase text-sm font-bold tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-white/70 hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="text-white/70 hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-white/70 hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-white/70 hover:text-[#D4AF37] transition-colors text-left cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h4 className="text-[#D4AF37] uppercase text-sm font-bold tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://instagram.com/frameofhope"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://facebook.com/frameofhope"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer"
              >
                <i className="ri-facebook-line"></i>
              </a>
              <a
                href="https://youtube.com/@frameofhope"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer"
              >
                <i className="ri-youtube-line"></i>
              </a>
            </div>
            <a href="#" className="text-white/70 hover:text-[#D4AF37] transition-colors text-sm cursor-pointer">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D4AF37]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © 2025 Frame of Hope. All rights reserved.
            </p>
            <a 
              href="https://readdy.ai/?ref=logo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#D4AF37] text-sm transition-colors cursor-pointer"
            >
              Powered by Readdy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
