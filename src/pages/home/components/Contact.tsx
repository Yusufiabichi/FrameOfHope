
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    eventDate: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d63klktsi3r5mpi9v0d0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          serviceType: '',
          eventDate: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = '2348012345678';
  const whatsappMessage = encodeURIComponent('Hi Frame of Hope! I would like to book a shoot.');

  return (
    <section id="contact" className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Let's Create Together
            </h2>
            <p className="text-lg text-white/60 mb-12">
              Book your shoot or ask us anything
            </p>

            <div className="space-y-6 mb-12">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366] rounded-xl hover:brightness-110 transition-all cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="ri-whatsapp-line text-white text-3xl"></i>
                </div>
                <div>
                  <p className="text-white font-semibold">Chat on WhatsApp</p>
                  <p className="text-white/80 text-sm">Quick response guaranteed</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+2348012345678"
                className="flex items-center gap-4 p-4 bg-[#1A1A1A] rounded-xl hover:bg-[#252525] transition-all cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="ri-phone-line text-[#D4AF37] text-3xl"></i>
                </div>
                <div>
                  <p className="text-white font-semibold">+234 801 234 5678</p>
                  <p className="text-white/60 text-sm">Call us directly</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@frameofhope.ng"
                className="flex items-center gap-4 p-4 bg-[#1A1A1A] rounded-xl hover:bg-[#252525] transition-all cursor-pointer"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <i className="ri-mail-line text-[#D4AF37] text-3xl"></i>
                </div>
                <div>
                  <p className="text-white font-semibold">info@frameofhope.ng</p>
                  <p className="text-white/60 text-sm">Send us an email</p>
                </div>
              </a>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-white/60 mb-4 text-sm uppercase tracking-wider">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/frameofhope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer"
                >
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a
                  href="https://facebook.com/frameofhope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer"
                >
                  <i className="ri-facebook-line text-xl"></i>
                </a>
                <a
                  href="https://youtube.com/@frameofhope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all cursor-pointer"
                >
                  <i className="ri-youtube-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#1A1A1A] rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6">Send Booking Request</h3>
              
              <form id="booking-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold mb-2 text-white/80">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white text-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white/80">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white text-sm"
                      placeholder="+234 800 000 0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white/80">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-semibold mb-2 text-white/80">
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white text-sm cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="Commercial Video">Commercial Video</option>
                      <option value="Wedding Coverage">Wedding Coverage</option>
                      <option value="Lifestyle Video">Lifestyle Video</option>
                      <option value="Birthday Shoot">Birthday Shoot</option>
                      <option value="Bridal Shoot">Bridal Shoot</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-semibold mb-2 text-white/80">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white text-sm cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-[#D4AF37] focus:outline-none text-white text-sm resize-none"
                    placeholder="Tell us about your project... (max 500 characters)"
                  ></textarea>
                  <p className="text-xs text-white/40 mt-1">{formData.message.length}/500 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] text-black py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send Booking Request'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded-lg text-sm">
                    <i className="ri-checkbox-circle-line mr-2"></i>
                    Thank you! We'll respond within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded-lg text-sm">
                    <i className="ri-error-warning-line mr-2"></i>
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <p className="text-xs text-white/40 text-center">
                  <i className="ri-lock-line mr-1"></i>
                  We respect your privacy and respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
