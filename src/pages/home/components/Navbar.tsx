
import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="https://public.readdy.ai/ai/img_res/95f0f47a-9a06-4719-98b0-bea1b396d412.png" 
              alt="Frame of Hope Logo" 
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Frame of Hope
              </h1>
              <p className="text-xs text-[#D4AF37]">Cinematic Stories</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap cursor-pointer">
              Pricing
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap cursor-pointer">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#D4AF37] transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#D4AF37] text-black px-6 py-2.5 rounded-full font-semibold hover:brightness-110 transition-all whitespace-nowrap cursor-pointer"
            >
              Book a Shoot
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#D4AF37] w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-[#D4AF37] transition-colors text-left whitespace-nowrap cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-white hover:text-[#D4AF37] transition-colors text-left whitespace-nowrap cursor-pointer">
              Pricing
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-[#D4AF37] transition-colors text-left whitespace-nowrap cursor-pointer">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#D4AF37] transition-colors text-left whitespace-nowrap cursor-pointer">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#D4AF37] text-black px-6 py-2.5 rounded-full font-semibold hover:brightness-110 transition-all text-center whitespace-nowrap cursor-pointer"
            >
              Book a Shoot
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
