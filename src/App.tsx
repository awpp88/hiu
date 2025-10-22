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
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
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
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#FFD166] drop-shadow-[0_0_18px_rgba(255,200,60,0.7)] leading-tight max-w-4xl">
      Independent record label &<br />
      distributor.
    </h1>

    {/* Description */}
    <p className="text-lg md:text-xl text-[#FFE29A] drop-shadow-[0_0_10px_rgba(255,200,60,0.5)] mb-8 max-w-3xl mx-auto font-light leading-relaxed">
      Solar Music Group uncovers hidden potential in music, turning legal
      <br className="hidden md:block" />
      challenges into opportunities for both artists and brands. Join our team
      <br className="hidden md:block" />
      of 30+ talented artists today!
    </p>

    {/* Established */}
    <p className="text-sm text-[#FFD166] drop-shadow-[0_0_8px_rgba(255,200,60,0.6)] mb-10 tracking-wide">
      Established 2024 · London
    </p>

    {/* Contact Info */}
<p className="mt-10 text-lg text-[#FFE29A] font-light">
  For inquiries:&nbsp;
  <a
    href="mailto:contact@solarmusicgroup.com"
    className="text-[#FFD166] font-medium drop-shadow-[0_0_10px_rgba(255,200,60,0.7)] 
               hover:text-[#FFE29A] transition-all duration-300"
  >
    contact@solarmusicgroup.com
  </a>
</p>



  </div>

  {/* Footer */}
  <div
    className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-300 ease-out ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    }`}
  >
    <p className="text-sm text-[#FFD166] drop-shadow-[0_0_8px_rgba(255,200,60,0.6)]">
      © 2025 Solar Music Group LTD.
      <h1 className="text-[#FFD166] animate-[solarGlow_3s_ease-in-out_infinite]"></h1>
    </p>
  </div>
</div>




      {/* Modal */}
{isModalOpen && (
  <div
    onClick={() => setIsModalOpen(false)} // Click anywhere outside to close
    className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md animate-fade-in"
  >
    <div
      onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
      className="relative w-full max-w-lg bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-[0_0_35px_rgba(255,200,60,0.15)] animate-scale-in max-h-[90vh] overflow-y-auto"
    >
      {/* Close Button */}
      <button
        onClick={() => setIsModalOpen(false)}
        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-[#FFD166] transition-all rounded-full hover:bg-[#FFD166]/10 hover:scale-110"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="p-8">
        <h2 className="text-3xl font-extrabold text-[#FFD166] mb-3 drop-shadow-[0_0_12px_rgba(255,200,60,0.7)]">
          Submit Your Music
        </h2>
        <p className="text-gray-400 mb-8 text-sm">
          Share your best tracks with Solar Music Group. We review every submission carefully.
        </p>

        {isSubmitted ? (
          <div className="text-center py-10 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FFD166] mb-4 shadow-[0_0_25px_rgba(255,200,60,0.6)]">
              <Mail className="w-8 h-8 text-gray-900" />
            </div>
            <h3 className="text-2xl font-bold text-[#FFD166] mb-2">
              Thanks for submitting!
            </h3>
            <p className="text-gray-400">We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: "name", label: "Name / Stage Name *", type: "text", placeholder: "Your artist name" },
              { id: "email", label: "Email Address *", type: "email", placeholder: "your@email.com" },
            ].map((field) => (
              <div key={field.id} className="relative group">
                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  required
                  placeholder=" "
                  className="peer w-full px-4 py-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-transparent 
                             focus:outline-none focus:border-[#FFD166] focus:ring-1 focus:ring-[#FFD166] transition-all duration-300"
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-4 top-3.5 text-gray-400 text-sm transition-all duration-300 
                             peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 
                             peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#FFD166] peer-focus:text-sm"
                >
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative group">
              <textarea
                id="musicLinks"
                name="musicLinks"
                required
                rows={2}
                placeholder=" "
                className="peer w-full px-4 py-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-transparent 
                           focus:outline-none focus:border-[#FFD166] focus:ring-1 focus:ring-[#FFD166] transition-all duration-300 resize-none"
              />
              <label
                htmlFor="musicLinks"
                className="absolute left-4 top-3.5 text-gray-400 text-sm transition-all duration-300 
                           peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 
                           peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#FFD166] peer-focus:text-sm"
              >
                Music Links *
              </label>
            </div>

            <div className="relative group">
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder=" "
                className="peer w-full px-4 py-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-transparent 
                           focus:outline-none focus:border-[#FFD166] focus:ring-1 focus:ring-[#FFD166] transition-all duration-300 resize-none"
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-3.5 text-gray-400 text-sm transition-all duration-300 
                           peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 
                           peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#FFD166] peer-focus:text-sm"
              >
                Message / Bio (Optional)
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 font-semibold text-gray-900 bg-[#FFD166] rounded-lg 
                         shadow-[0_0_20px_rgba(255,200,60,0.8)] hover:shadow-[0_0_35px_rgba(255,200,60,1)] 
                         hover:scale-[1.03] transition-all duration-300 animate-[solarPulse_3s_ease-in-out_infinite]"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
)}

<style>
  {`
    @keyframes solarPulse {
      0%, 100% { filter: drop-shadow(0 0 10px rgba(255,200,60,0.5)); }
      50% { filter: drop-shadow(0 0 25px rgba(255,200,60,1)); }
    }
  `}
</style>

  
    </div>
  );
}

export default App;
