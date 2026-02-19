
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Frame of Hope captured our wedding day so beautifully. Every emotion, every tear, every smile—it's all there. We watch our video and relive the magic every time.",
      name: "Aisha & Musa",
      type: "Wedding Clients, Kano",
      image: "https://readdy.ai/api/search-image?query=happy%20nigerian%20couple%20smiling%20portrait%20in%20elegant%20wedding%20attire%20joyful%20bride%20and%20groom%20professional%20headshot%20with%20warm%20lighting%20and%20simple%20clean%20background&width=160&height=160&seq=testimonial-001&orientation=squarish"
    },
    {
      quote: "Professional, creative, and incredibly talented. They turned our brand story into a compelling video that tripled our engagement. Highly recommend!",
      name: "Chinedu Okafor",
      type: "Business Owner, Lagos",
      image: "https://readdy.ai/api/search-image?query=confident%20nigerian%20businessman%20professional%20portrait%20in%20business%20attire%20smiling%20headshot%20with%20clean%20simple%20background%20and%20professional%20lighting&width=160&height=160&seq=testimonial-002&orientation=squarish"
    },
    {
      quote: "My daughter's birthday video was absolutely stunning. They captured the joy and excitement perfectly. It's a treasure we'll keep forever.",
      name: "Halima Ibrahim",
      type: "Birthday Client, Kano",
      image: "https://readdy.ai/api/search-image?query=warm%20smiling%20nigerian%20woman%20portrait%20in%20elegant%20casual%20attire%20friendly%20professional%20headshot%20with%20simple%20clean%20background%20and%20natural%20lighting&width=160&height=160&seq=testimonial-003&orientation=squarish"
    },
    {
      quote: "The team was punctual, professional, and delivered beyond our expectations. Our corporate event video showcased our brand perfectly.",
      name: "Adebayo Enterprises",
      type: "Corporate Client, Abuja",
      image: "https://readdy.ai/api/search-image?query=professional%20nigerian%20executive%20portrait%20in%20formal%20business%20suit%20confident%20corporate%20headshot%20with%20clean%20simple%20background%20and%20studio%20lighting&width=160&height=160&seq=testimonial-004&orientation=squarish"
    },
    {
      quote: "Our pre-wedding shoot was like a dream. They made us feel comfortable and the final video was cinematic perfection. Thank you, Frame of Hope!",
      name: "Zainab & Ahmed",
      type: "Bridal Shoot Clients, Kaduna",
      image: "https://readdy.ai/api/search-image?query=romantic%20nigerian%20couple%20portrait%20smiling%20together%20in%20elegant%20attire%20happy%20engaged%20couple%20headshot%20with%20warm%20lighting%20and%20simple%20background&width=160&height=160&seq=testimonial-005&orientation=squarish"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-[#F8F6F0] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <i className="ri-double-quotes-l text-[#D4AF37] text-8xl opacity-30"></i>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mt-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Client Stories
          </h2>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-8 object-cover border-4 border-[#D4AF37]"
                />
                <p className="text-2xl md:text-3xl text-gray-800 italic leading-relaxed mb-8 font-serif">
                  "{testimonial.quote}"
                </p>
                <h4 className="text-xl font-bold text-black mb-2">
                  {testimonial.name}
                </h4>
                <p className="text-[#D4AF37] font-semibold">
                  {testimonial.type}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentIndex ? 'bg-[#D4AF37] w-8' : 'bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
