
export default function Pricing() {
  const pricingPlans = [
    {
      title: 'Birthday Shoot',
      price: '₦40,000',
      features: [
        '2-3 hours coverage',
        'Highlight video (3-5 mins)',
        'Professional editing',
        'Background music',
        'Digital delivery'
      ]
    },
    {
      title: 'Lifestyle Video',
      price: '₦50,000',
      features: [
        'Half-day shoot',
        'Creative storytelling',
        'Color grading',
        'Social media formats',
        'Fast turnaround'
      ]
    },
    {
      title: 'Bridal Shoot',
      price: '₦60,000',
      features: [
        '3-4 hours session',
        'Multiple locations',
        'Cinematic editing',
        'Romantic music score',
        'HD quality delivery'
      ]
    },
    {
      title: 'Commercial Video',
      price: '₦80,000',
      features: [
        'Full-day production',
        'Script consultation',
        'Professional crew',
        'Brand-focused content',
        'Multiple revisions'
      ]
    },
    {
      title: 'Wedding Coverage',
      price: '₦150,000',
      features: [
        'Full event coverage',
        'Two videographers',
        'Highlight + full video',
        'Drone footage (optional)',
        'Premium editing'
      ]
    },
    {
      title: 'Custom Package',
      price: 'Contact Us',
      features: [
        'Tailored to your needs',
        'Flexible duration',
        'Special requirements',
        'Multi-day events',
        'Premium add-ons'
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="relative bg-black py-32 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0px, #D4AF37 1px, transparent 1px, transparent 20px)`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 relative inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
            Transparent Pricing
            <span className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4AF37]"></span>
          </h2>
          <p className="text-lg text-white/60 mt-8">
            Clear, honest pricing with no hidden fees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#141414] rounded-2xl p-8 border-t-4 border-[#D4AF37] hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
              <div className="mb-6">
                <p className="text-[#D4AF37] text-sm uppercase tracking-wider mb-2">
                  Starting From
                </p>
                <p className="text-4xl font-bold">{plan.price}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/70">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-lg mt-0.5 flex-shrink-0"></i>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full py-3 border-2 border-[#D4AF37] text-white rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all font-semibold whitespace-nowrap cursor-pointer"
              >
                Get Quote
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-[#141414] rounded-xl p-6 border-l-4 border-[#D4AF37]">
          <p className="text-white/70 text-center italic">
            <i className="ri-information-line text-[#D4AF37] mr-2"></i>
            Kano base rates shown. Final pricing varies by duration, location, and requirements. Out-of-state projects include travel logistics.
          </p>
        </div>
      </div>
    </section>
  );
}
