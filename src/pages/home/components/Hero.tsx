
export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <img
          src="https://readdy.ai/api/search-image?query=cinematic%20videographer%20filming%20wedding%20ceremony%20with%20professional%20camera%20equipment%20in%20elegant%20venue%20with%20dramatic%20lighting%20and%20bokeh%20background%20shallow%20depth%20of%20field%20professional%20photography%20setup%20dark%20moody%20atmosphere%20golden%20hour%20lighting%20high%20end%20production%20quality&width=1920&height=1080&seq=hero-bg-001&orientation=landscape"
          alt="Cinematic videography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            Turning Moments Into<br />
            <span className="relative inline-block">
              Timeless Stories
              <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37]"></span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 font-light">
            Premium Cinematography &amp; Videography in Kano, Nigeria
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#D4AF37] text-black px-12 py-5 rounded-full text-lg font-bold uppercase hover:scale-105 hover:brightness-110 transition-all shadow-2xl inline-flex items-center gap-3 whitespace-nowrap cursor-pointer"
          >
            Book a Shoot
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-sm uppercase tracking-wider">Scroll to Explore</span>
        <i className="ri-arrow-down-line text-[#D4AF37] text-2xl"></i>
      </div>
    </section>
  );
}
