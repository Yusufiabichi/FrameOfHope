
export default function WhyUs() {
  const features = [
    {
      number: '01',
      title: 'Cinematic Storytelling',
      description: 'We don\'t just record events—we craft emotional narratives that resonate for a lifetime.'
    },
    {
      number: '02',
      title: 'Professional Equipment & Team',
      description: 'State-of-the-art cameras, drones, and lighting paired with experienced cinematographers.'
    },
    {
      number: '03',
      title: 'Attention to Every Detail',
      description: 'From pre-production planning to final color grading, we perfect every frame.'
    },
    {
      number: '04',
      title: 'Client-Centered Approach',
      description: 'Your vision guides our creativity. We listen, collaborate, and deliver beyond expectations.'
    }
  ];

  return (
    <section className="bg-black py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left Image */}
          <div className="lg:col-span-2 relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img
                src="https://readdy.ai/api/search-image?query=professional%20videographer%20behind%20the%20scenes%20holding%20cinema%20camera%20with%20gimbal%20stabilizer%20in%20elegant%20studio%20setup%20with%20professional%20lighting%20equipment%20and%20golden%20warm%20atmosphere%20cinematic%20production%20quality%20focused%20filmmaker%20at%20work&width=800&height=1200&seq=whyus-img-001&orientation=portrait"
                alt="Behind the scenes"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#D4AF37]/20"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-3">
            <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-4">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              More Than Just Videography
            </h2>
            <p className="text-xl text-white/60 mb-12">
              We craft emotional narratives that last forever
            </p>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#D4AF37] flex items-center justify-center">
                    <span className="text-black font-bold text-xl">{feature.number}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
