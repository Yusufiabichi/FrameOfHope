
import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Showreel from './components/Showreel';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import OutOfState from './components/OutOfState';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Showreel />
      <Services />
      {/* <Pricing /> */}
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <OutOfState />
      <Contact />
      <Footer />
    </div>
  );
}
