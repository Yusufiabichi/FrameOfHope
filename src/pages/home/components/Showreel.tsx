
import { useState, useEffect, useCallback } from 'react';

const videos = [
  {
    id: 1,
    title: 'Wedding Highlights',
    subtitle: 'Amina & Ibrahim',
    image: 'https://readdy.ai/api/search-image?query=cinematic%20wedding%20videography%20showreel%20thumbnail%20with%20elegant%20bride%20and%20groom%20in%20dramatic%20golden%20hour%20lighting%20professional%20film%20production%20quality%20romantic%20atmosphere%20bokeh%20background%20luxury%20wedding%20venue%20emotional%20moment%20captured%20beautifully%20warm%20tones&width=1400&height=788&seq=showreel-thumb-001&orientation=landscape',
  },
  {
    id: 2,
    title: 'Commercial Campaign',
    subtitle: 'Brand Storytelling',
    image: 'https://readdy.ai/api/search-image?query=professional%20commercial%20video%20production%20behind%20the%20scenes%20with%20camera%20equipment%20and%20dramatic%20studio%20lighting%20modern%20brand%20advertisement%20cinematic%20quality%20sleek%20dark%20moody%20atmosphere%20product%20showcase%20elegant%20setup&width=1400&height=788&seq=showreel-thumb-002&orientation=landscape',
  },
  {
    id: 3,
    title: 'Lifestyle Session',
    subtitle: 'Creative Portraits',
    image: 'https://readdy.ai/api/search-image?query=lifestyle%20portrait%20video%20session%20with%20confident%20young%20woman%20in%20stylish%20outfit%20against%20warm%20golden%20sunset%20backdrop%20cinematic%20storytelling%20natural%20light%20beautiful%20outdoor%20location%20artistic%20composition%20vibrant%20colors&width=1400&height=788&seq=showreel-thumb-003&orientation=landscape',
  },
  {
    id: 4,
    title: 'Event Coverage',
    subtitle: 'Corporate Gala Night',
    image: 'https://readdy.ai/api/search-image?query=elegant%20corporate%20gala%20event%20with%20dramatic%20stage%20lighting%20and%20sophisticated%20venue%20decoration%20luxury%20celebration%20captured%20cinematically%20with%20warm%20golden%20ambient%20light%20professional%20event%20videography%20atmosphere&width=1400&height=788&seq=showreel-thumb-004&orientation=landscape',
  },
  {
    id: 5,
    title: 'Birthday Celebration',
    subtitle: 'Joyful Moments',
    image: 'https://readdy.ai/api/search-image?query=vibrant%20birthday%20celebration%20party%20with%20beautiful%20decorations%20and%20warm%20ambient%20lighting%20joyful%20festive%20atmosphere%20captured%20cinematically%20with%20golden%20tones%20elegant%20venue%20setup%20colorful%20balloons%20and%20cake&width=1400&height=788&seq=showreel-thumb-005&orientation=landscape',
  },
];

const AUTO_PLAY_INTERVAL = 4000;

export default function Showreel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 600);
    }, 50);
  }, [isTransitioning, activeIndex]);

  const goNext = useCallback(() => {
    const next = (activeIndex + 1) % videos.length;
    goToSlide(next);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  return (
    <section id="showreel" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-semibold mb-4">
            Our Work Speaks
          </p>
          <h2 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            Watch Our Showreel
          </h2>
        </div>

        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Display */}
          <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-[#D4AF37] shadow-2xl">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                style={{ opacity: activeIndex === index ? 1 : 0, zIndex: activeIndex === index ? 2 : 1 }}
              >
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <button className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-[#D4AF37] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer bg-black/30 backdrop-blur-sm">
                <i className="ri-play-fill text-white text-4xl md:text-5xl ml-1"></i>
              </button>
            </div>

            {/* Video Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20">
              <div className="flex items-end justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#D4AF37] text-black text-xs font-semibold rounded-full mb-3">
                    {videos[activeIndex].subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {videos[activeIndex].title}
                  </h3>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={() => goToSlide((activeIndex - 1 + videos.length) % videos.length)}
                    className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    <i className="ri-arrow-left-s-line text-lg"></i>
                  </button>
                  <button
                    onClick={() => goToSlide((activeIndex + 1) % videos.length)}
                    className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer"
                  >
                    <i className="ri-arrow-right-s-line text-lg"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 z-30 flex gap-1 px-6 md:px-8 pb-2">
              {videos.map((_, index) => (
                <div key={index} className="flex-1 h-[3px] bg-white/20 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-[#D4AF37] rounded-full ${
                      activeIndex === index && !isPaused ? 'animate-progress' : ''
                    }`}
                    style={{
                      width: activeIndex === index ? '100%' : index < activeIndex ? '100%' : '0%',
                      transition: activeIndex === index ? 'none' : 'width 0.3s ease',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-6 grid grid-cols-5 gap-3">
            {videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => goToSlide(index)}
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  activeIndex === index
                    ? 'ring-2 ring-[#D4AF37] scale-[1.02]'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <div className="w-full h-16 md:h-20">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <i className="ri-play-mini-fill text-white text-lg"></i>
                </div>
                {activeIndex === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37]" />
                )}
              </button>
            ))}
          </div>

          <p className="text-center text-white/60 mt-6 text-sm italic">
            Experience the emotion, quality, and artistry that defines Frame of Hope
          </p>
        </div>
      </div>

      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progressFill ${AUTO_PLAY_INTERVAL}ms linear forwards;
        }
      `}</style>
    </section>
  );
}
