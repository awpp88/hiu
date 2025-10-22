import { useState, useEffect } from 'react';
import { Mail, X } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
        form.reset();
      }, 2500);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Sun/Central Orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-gradient-radial from-orange-400/30 via-orange-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        {/* Orbiting Planets */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {/* Orbit paths */}
          <div className="w-96 h-96 border border-white/5 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 w-[500px] h-[500px] -m-[52px] border border-white/5 rounded-full animate-spin-slower"></div>
          <div className="absolute inset-0 w-[600px] h-[600px] -m-[102px] border border-white/5 rounded-full animate-spin-slowest"></div>

          {/* Planets */}
          <div
            className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400/60 rounded-full animate-spin-slow"
            style={{ transformOrigin: '0 192px' }}
          ></div>
          <div
            className="absolute top-1/2 left-0 w-2 h-2 bg-orange-400/60 rounded-full animate-spin-slower"
            style={{ transformOrigin: '250px 0' }}
          ></div>
          <div
            className="absolute bottom-0 right-1/2 w-2.5 h-2.5 bg-purple-400/60 rounded-full animate-spin-slowest"
            style={{ transformOrigin: '0 -300px' }}
          ></div>
        </div>

        {/* Twinkling stars scattered across */}
        <div className="absolute inset-0">
          <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-white/40 rounded-full animate-twinkle"></div>
          <div className="absolute top-[25%] right-[25%] w-1 h-1 bg-white/30 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute bottom-[30%] left-[15%] w-1 h-1 bg-white/35 rounded-full animate-twinkle"></div>
          <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-white/40 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute bottom-[20%] right-[35%] w-1 h-1 bg-white/30 rounded-full animate-twinkle"></div>
          <div className="absolute top-[40%] left-[10%] w-1 h-1 bg-white/35 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute bottom-[50%] right-[10%] w-1 h-1 bg-white/40 rounded-full animate-twinkle"></div>
          <div className="absolute top-[70%] left-[40%] w-1 h-1 bg-white/30 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute top-[10%] right-[40%] w-0.5 h-0.5 bg-white/25 rounded-full animate-twinkle"></div>
          <div className="absolute bottom-[60%] left-[60%] w-0.5 h-0.5 bg-white/30 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute top-[80%] right-[50%] w-0.5 h-0.5 bg-white/25 rounded-full animate-twinkle"></div>
          <div className="absolute bottom-[10%] left-[45%] w-0.5 h-0.5 bg-white/30 rounded-full animate-twinkle-delayed"></div>
        </div>
      </div>

      {/* Logo - Top Center */}
<div className="absolute top10 left-1/2 -translate-x-1/2 z-20">
  <div
    className={`transition-all duration-1000 ease-out transform ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
    }`}
  >
    {/* Replace with your actual logo image */}
    <img
      src="/logosolar.png"
      alt="Solar Music Group Logo"
      className="w-48 sm:w-56 md:w-64 mx-auto drop-shadow-[0_0_15px_rgba(255,140,0,0.4)]"
    />
    {/* Optional text below the logo */}
    <h2 className="mt-2 text-xl sm:text-2xl font-bold text-white tracking-tight text-center">
      
    </h2>
  </div>
</div>


      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div
          className={`transition-all duration-1500 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight max-w-4xl">
            Independent record label &<br />
            distributor.
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Solar Music Group uncovers hidden potential in music, turning legal
            <br className="hidden md:block" />
            challenges into opportunities for both artists and brands. Join our
            team
            <br className="hidden md:block" />
            of 30+ talented artists today!
          </p>

          {/* Established */}
          <p className="text-sm text-gray-500 mb-10 tracking-wide">
            Established 2024 · London
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-gray-900 bg-white rounded-full transition-all duration-300 hover:bg-gray-100 hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Footer */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm text-gray-600">© 2025 Solar Music Group LLC.</p>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-gray-900 rounded-2xl shadow-2xl border border-gray-800 animate-scale-in max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-white">
                Submit Your Music
              </h2>
              <p className="text-gray-400 mb-6">We'd love to hear from you</p>

              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-4">
                    <Mail className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thanks for submitting!
                  </h3>
                  <p className="text-gray-400">
                    We'll review your music and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Name / Stage Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                      placeholder="Your name or artist name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Music Links */}
                  <div>
                    <label
                      htmlFor="musicLinks"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Music Links *
                    </label>
                    <textarea
                      id="musicLinks"
                      name="musicLinks"
                      required
                      rows={2}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                      placeholder="Spotify, SoundCloud, YouTube, etc."
                    />
                  </div>

                  {/* Social Media */}
                  <div>
                    <label
                      htmlFor="socialMedia"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Social Media Links
                    </label>
                    <textarea
                      id="socialMedia"
                      name="socialMedia"
                      rows={2}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                      placeholder="Instagram, TikTok, Twitter, etc."
                    />
                  </div>

                  {/* Message/Bio */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message / Bio (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                      placeholder="Tell us about yourself and your music..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
