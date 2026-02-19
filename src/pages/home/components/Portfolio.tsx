
import { useState, useRef, useEffect } from 'react';

const portfolioItems = [
  {
    category: 'Weddings',
    title: 'Amina & Ibrahim Wedding',
    video: 'https://videos.pexels.com/video-files/3327513/3327513-uhd_2560_1440_30fps.mp4',
    poster: 'https://readdy.ai/api/search-image?query=elegant%20nigerian%20wedding%20ceremony%20with%20bride%20in%20beautiful%20traditional%20attire%20and%20groom%20in%20elegant%20suit%20romantic%20moment%20captured%20with%20golden%20lighting%20luxury%20venue%20decoration%20cinematic%20wedding%20photography%20emotional%20celebration&width=600&height=400&seq=port-wed-v1&orientation=landscape',
  },
  {
    category: 'Commercial',
    title: 'Brand Campaign Video',
    video: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
    poster: 'https://readdy.ai/api/search-image?query=professional%20commercial%20video%20production%20setup%20with%20product%20display%20and%20elegant%20lighting%20modern%20brand%20advertisement%20shoot%20clean%20minimalist%20background%20high%20end%20marketing%20content%20cinematic%20quality&width=600&height=400&seq=port-com-v1&orientation=landscape',
  },
  {
    category: 'Lifestyle',
    title: 'Personal Brand Story',
    video: 'https://videos.pexels.com/video-files/4065924/4065924-uhd_2560_1440_24fps.mp4',
    poster: 'https://readdy.ai/api/search-image?query=lifestyle%20portrait%20video%20shoot%20of%20confident%20young%20professional%20in%20modern%20urban%20setting%20with%20natural%20golden%20hour%20lighting%20authentic%20moment%20captured%20beautifully%20cinematic%20storytelling%20style&width=600&height=400&seq=port-life-v1&orientation=landscape',
  },
  {
    category: 'Events',
    title: 'Corporate Gala Night',
    video: 'https://videos.pexels.com/video-files/3205918/3205918-uhd_2560_1440_25fps.mp4',
    poster: 'https://readdy.ai/api/search-image?query=elegant%20corporate%20event%20with%20professional%20stage%20lighting%20and%20audience%20in%20luxury%20venue%20formal%20gala%20celebration%20captured%20cinematically%20with%20dramatic%20lighting%20and%20sophisticated%20atmosphere&width=600&height=400&seq=port-evt-v1&orientation=landscape',
  },
  {
    category: 'Weddings',
    title: 'Fatima & Yusuf Love Story',
    video: 'https://videos.pexels.com/video-files/3296610/3296610-uhd_2560_1440_25fps.mp4',
    poster: 'https://readdy.ai/api/search-image?query=romantic%20nigerian%20couple%20pre%20wedding%20shoot%20in%20beautiful%20outdoor%20location%20with%20sunset%20golden%20hour%20lighting%20bride%20and%20groom%20sharing%20intimate%20moment%20cinematic%20love%20story%20photography&width=600&height=400&seq=port-wed-v2&orientation=landscape',
  },
  {
    category: 'Lifestyle',
    title: 'Fashion Content Creation',
    video: 'https://videos.pexels.com/video-files/4434242/4434242-uhd_2560_1440_24fps.mp4',
    poster: 'https://readdy.ai/api/search-image?query=stylish%20fashion%20video%20shoot%20with%20model%20in%20trendy%20outfit%20against%20modern%20urban%20backdrop%20creative%20lifestyle%20content%20with%20vibrant%20colors%20and%20dynamic%20composition%20cinematic%20fashion%20photography&width=600&height=400&seq=port-life-v2&orientation=landscape',
  },
  {
    category: 'Events',
    title: 'Birthday Celebration',
    video: 'https://videos.pexels.com/video-files/3249925/3249925-uhd_2560_1440_25fps.mp4',
    poster: 'https://readdy.ai/api/search-image?query=joyful%20birthday%20party%20celebration%20with%20colorful%20decorations%20and%20happy%20guests%20captured%20in%20vibrant%20cinematic%20style%20festive%20atmosphere%20with%20balloons%20and%20elegant%20venue%20setup&width=600&height=400&seq=port-evt-v2&orientation=landscape',
  },
  {
    category: 'Commercial',
    title: 'Restaurant Promo',
    video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
    poster: 'https://readdy.ai/api/search-image?query=professional%20restaurant%20commercial%20video%20with%20delicious%20food%20presentation%20and%20elegant%20dining%20setup%20appetizing%20culinary%20content%20with%20warm%20lighting%20and%20sophisticated%20ambiance&width=600&height=400&seq=port-com-v2&orientation=landscape',
  },
  {
    category: 'Weddings',
    title: 'Traditional Ceremony',
    video: 'https://videos.pexels.com/video-files/4111893/4111893-uhd_2560_1440_24fps.mp4',
    poster: 'https://readdy.ai/api/search-image?query=beautiful%20nigerian%20traditional%20wedding%20ceremony%20with%20colorful%20cultural%20attire%20and%20decorations%20bride%20and%20groom%20in%20traditional%20outfits%20vibrant%20celebration%20captured%20cinematically&width=600&height=400&seq=port-wed-v3&orientation=landscape',
  },
];

function PortfolioCard({
  item,
  height,
}: {
  item: typeof portfolioItems[0];
  height: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video
        .play()
        .catch((err) => {
          // Silently ignore autoplay errors (e.g., when muted autoplay is blocked)
          console.warn('Video playback failed:', err);
        });
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={item.video}
        poster={item.poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Play icon overlay */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
          isHovered ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#D4AF37]/80 backdrop-blur-sm">
          <i className="ri-play-fill text-black text-2xl"></i>
        </div>
      </div>

      {/* Info overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-block px-3 py-1 bg-[#D4AF37] text-black text-xs font-semibold rounded-full mb-3">
            {item.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <span className="text-sm font-semibold">Watch Project</span>
            <i className="ri-play-circle-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Weddings', 'Events', 'Lifestyle', 'Commercial'];

  const filteredItems =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="bg-[#0D0D0D] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-5xl md:text-6xl font-bold mb-8"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Portfolio
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === category
                    ? 'bg-[#D4AF37] text-black'
                    : 'bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <PortfolioCard
              key={`${item.title}-${index}`}
              item={item}
              height={index % 3 === 0 ? '400px' : '320px'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
