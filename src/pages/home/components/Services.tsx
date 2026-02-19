
export default function Services() {
  const services = [
    {
      icon: 'ri-building-line',
      title: 'Commercial Video',
      description: 'Elevate your brand with professional commercial videos that captivate audiences and drive results.',
      price: '₦80,000'
    },
    {
      icon: 'ri-heart-line',
      title: 'Wedding Coverage',
      description: 'Capture every precious moment of your special day with cinematic storytelling that lasts forever.',
      price: '₦150,000'
    },
    {
      icon: 'ri-user-smile-line',
      title: 'Lifestyle Video',
      description: 'Showcase your personality and story through beautifully crafted lifestyle content.',
      price: '₦50,000'
    },
    {
      icon: 'ri-cake-3-line',
      title: 'Birthday Shoot',
      description: 'Make birthdays unforgettable with vibrant, joyful videos that celebrate life\'s milestones.',
      price: '₦40,000'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Bridal Shoot',
      description: 'Elegant pre-wedding shoots that capture the beauty and excitement of your journey to forever.',
      price: '₦60,000'
    }
  ];

  return (
    <section id="services" className="bg-[#1A1A1A] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            What We Create
          </h2>
          <p className="text-lg text-white/60">
            Cinematic storytelling tailored to your vision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          {services.slice(0, 2).map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0F0F0F] to-[#1C1C1C] rounded-3xl p-12 hover:scale-[1.02] hover:shadow-2xl hover:border-2 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/70 leading-relaxed mb-6 text-base">
                {service.description}
              </p>
              <p className="text-[#D4AF37] text-xl font-semibold">
                Starting from {service.price}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.slice(2).map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0F0F0F] to-[#1C1C1C] rounded-3xl p-12 hover:scale-[1.02] hover:shadow-2xl hover:border-2 hover:border-[#D4AF37] transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center mb-6">
                <i className={`${service.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/70 leading-relaxed mb-6 text-base">
                {service.description}
              </p>
              <p className="text-[#D4AF37] text-xl font-semibold">
                Starting from {service.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
