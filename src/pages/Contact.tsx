import { useState } from 'react';
import { X, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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
        setIsSubmitted(false);
        form.reset();
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background - Same as landing page */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-gradient-radial from-orange-400/30 via-orange-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-white/5 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 w-[500px] h-[500px] -m-[52px] border border-white/5 rounded-full animate-spin-slower"></div>
          <div className="absolute inset-0 w-[600px] h-[600px] -m-[102px] border border-white/5 rounded-full animate-spin-slowest"></div>

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

      {/* Close Button */}
      <Link
        to="/"
        className="absolute top-6 right-6 z-20 p-3 text-gray-400 hover:text-[#FFD166] transition-all rounded-full hover:bg-[#FFD166]/10 hover:scale-110"
      >
        <X className="w-6 h-6" />
      </Link>

      {/* Logo */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20">
        <img
          src="/logosolar.png"
          alt="Solar Music Group Logo"
          className="w-40 sm:w-48 md:w-56 mx-auto drop-shadow-[0_0_15px_rgba(255,140,0,0.4)]"
        />
      </div>

      {/* Form Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-32 pb-16">
        <div className="w-full max-w-2xl">
          <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-[0_0_35px_rgba(255,200,60,0.15)] p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#FFD166] mb-4 drop-shadow-[0_0_12px_rgba(255,200,60,0.7)] text-center">
              Submit Your Music
            </h1>
            <p className="text-gray-400 mb-10 text-center">
              Share your best tracks with Solar Music Group. We review every submission carefully.
            </p>

            {isSubmitted ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FFD166] mb-6 shadow-[0_0_25px_rgba(255,200,60,0.6)]">
                  <Mail className="w-10 h-10 text-gray-900" />
                </div>
                <h3 className="text-3xl font-bold text-[#FFD166] mb-3">
                  Thanks for submitting!
                </h3>
                <p className="text-gray-400 text-lg">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder=" "
                    className="peer w-full px-5 py-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-transparent
                               focus:outline-none focus:border-[#FFD166] focus:ring-2 focus:ring-[#FFD166]/50 transition-all duration-300"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-5 top-4 text-gray-400 text-sm transition-all duration-300
                               peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500
                               peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#FFD166] peer-focus:text-xs"
                  >
                    Name / Stage Name *
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder=" "
                    className="peer w-full px-5 py-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-transparent
                               focus:outline-none focus:border-[#FFD166] focus:ring-2 focus:ring-[#FFD166]/50 transition-all duration-300"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-5 top-4 text-gray-400 text-sm transition-all duration-300
                               peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500
                               peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#FFD166] peer-focus:text-xs"
                  >
                    Email Address *
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    id="musicLinks"
                    name="musicLinks"
                    required
                    rows={3}
                    placeholder=" "
                    className="peer w-full px-5 py-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-transparent
                               focus:outline-none focus:border-[#FFD166] focus:ring-2 focus:ring-[#FFD166]/50 transition-all duration-300 resize-none"
                  />
                  <label
                    htmlFor="musicLinks"
                    className="absolute left-5 top-4 text-gray-400 text-sm transition-all duration-300
                               peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500
                               peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#FFD166] peer-focus:text-xs"
                  >
                    Music Links (Spotify, SoundCloud, etc.) *
                  </label>
                </div>

                <div className="relative group">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder=" "
                    className="peer w-full px-5 py-4 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-transparent
                               focus:outline-none focus:border-[#FFD166] focus:ring-2 focus:ring-[#FFD166]/50 transition-all duration-300 resize-none"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-5 top-4 text-gray-400 text-sm transition-all duration-300
                               peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500
                               peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#FFD166] peer-focus:text-xs"
                  >
                    Message / Bio (Optional)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 font-semibold text-lg text-gray-900 bg-[#FFD166] rounded-lg
                             shadow-[0_0_20px_rgba(255,200,60,0.8)] hover:shadow-[0_0_35px_rgba(255,200,60,1)]
                             hover:scale-[1.02] transition-all duration-300"
                >
                  Submit Your Music
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
