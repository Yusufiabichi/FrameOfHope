
export default function OutOfState() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="bg-[#0A0A0A]/80 backdrop-blur-sm rounded-3xl p-12 md:p-16 border-l-8 border-[#D4AF37] shadow-2xl">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center">
              <i className="ri-flight-takeoff-line text-[#D4AF37] text-6xl"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              We Travel Across Nigeria
            </h2>
            <div className="text-lg text-white/80 leading-relaxed space-y-4 mb-10">
              <p>
                Based in Kano, but your location is never a barrier. We bring our cinematic expertise to every corner of Nigeria—from Lagos to Port Harcourt, Abuja to Calabar.
              </p>
              <p>
                Our out-of-state packages include seamless travel logistics, accommodation arrangements, and the same premium quality you'd expect from a local shoot. Distance doesn't compromise excellence.
              </p>
              <p>
                Whether it's a destination wedding, a corporate event in another city, or a special celebration far from home, we're ready to capture your story wherever it unfolds.
              </p>
            </div>
            <button
              onClick={scrollToContact}
              className="bg-[#D4AF37] text-black px-10 py-4 rounded-full text-lg font-bold hover:scale-105 hover:brightness-110 transition-all shadow-xl whitespace-nowrap cursor-pointer"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
