import { useState } from 'react';
import { X, Mail, Sparkles } from 'lucide-react';
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
      {/* Animated Background - Same as home page */}
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
        className="fixed top-6 right-6 z-30 p-3 text-gray-400/80 hover:text-[#FFD166] transition-all rounded-full
                   backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,200,60,0.3)] hover:scale-110"
      >
        <X className="w-6 h-6" />
      </Link>

      {/* Logo */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-20">
        <img
          src="/logosolar.png"
          alt="Solar Music Group Logo"
          className="w-28 sm:w-32 md:w-36 mx-auto drop-shadow-[0_0_20px_rgba(255,140,0,0.5)]"
        />
      </div>

      {/* Form Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-xl">
          {/* Glassmorphic Container */}
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-[#FFD166]/30 via-transparent to-[#FFD166]/30 rounded-3xl blur-sm"></div>

            {/* Main glass container */}
            <div className="relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-8 md:p-10
                          shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
                          border border-white/10">

              {/* Inner glow */}
              <div className="absolute inset-0 rounded-3xl shadow-[inset_0_0_60px_rgba(255,200,60,0.05)]"></div>

              {isSubmitted ? (
                <div className="relative text-center py-12 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full
                                bg-gradient-to-br from-[#FFD166] to-orange-500 mb-6
                                shadow-[0_0_40px_rgba(255,200,60,0.6)] animate-pulse-slow">
                    <Mail className="w-10 h-10 text-gray-900" />
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] to-[#FFE29A] mb-3
                               drop-shadow-[0_0_20px_rgba(255,200,60,0.5)]">
                    Thanks for submitting!
                  </h3>
                  <p className="text-gray-300/90">We'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="text-center mb-8 relative">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-[#FFD166]/60" />
                      <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text
                                   bg-gradient-to-r from-[#FFD166] via-[#FFE29A] to-[#FFD166]
                                   drop-shadow-[0_0_30px_rgba(255,200,60,0.6)]">
                        Submit Your Music
                      </h1>
                      <Sparkles className="w-4 h-4 text-[#FFD166]/60" />
                    </div>
                    <p className="text-gray-300/70 text-xs font-light tracking-wide">
                      Share your best work with Solar Music Group
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6 relative">
                    {/* Name Field */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder=" "
                        className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-white/10
                                 text-white placeholder-transparent font-light
                                 focus:outline-none focus:border-[#FFD166]/60
                                 transition-all duration-500 focus:shadow-[0_4px_12px_rgba(255,200,60,0.15)]"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-5 text-gray-400/80 text-xs font-light tracking-wide transition-all duration-300
                                 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500/60
                                 peer-focus:-top-5 peer-focus:text-[#FFD166]/90 peer-focus:text-xs"
                      >
                        NAME / STAGE NAME
                      </label>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFD166] to-orange-500
                                    transition-all duration-500 group-focus-within:w-full shadow-[0_0_8px_rgba(255,200,60,0.6)]"></div>
                    </div>

                    {/* Email Field */}
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder=" "
                        className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-white/10
                                 text-white placeholder-transparent font-light
                                 focus:outline-none focus:border-[#FFD166]/60
                                 transition-all duration-500 focus:shadow-[0_4px_12px_rgba(255,200,60,0.15)]"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-5 text-gray-400/80 text-xs font-light tracking-wide transition-all duration-300
                                 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500/60
                                 peer-focus:-top-5 peer-focus:text-[#FFD166]/90 peer-focus:text-xs"
                      >
                        EMAIL ADDRESS
                      </label>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFD166] to-orange-500
                                    transition-all duration-500 group-focus-within:w-full shadow-[0_0_8px_rgba(255,200,60,0.6)]"></div>
                    </div>

                    {/* Music Links Field */}
                    <div className="relative group">
                      <textarea
                        id="musicLinks"
                        name="musicLinks"
                        required
                        rows={2}
                        placeholder=" "
                        className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-white/10
                                 text-white placeholder-transparent font-light resize-none
                                 focus:outline-none focus:border-[#FFD166]/60
                                 transition-all duration-500 focus:shadow-[0_4px_12px_rgba(255,200,60,0.15)]"
                      />
                      <label
                        htmlFor="musicLinks"
                        className="absolute left-0 -top-5 text-gray-400/80 text-xs font-light tracking-wide transition-all duration-300
                                 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500/60
                                 peer-focus:-top-5 peer-focus:text-[#FFD166]/90 peer-focus:text-xs"
                      >
                        MUSIC LINKS (SPOTIFY, SOUNDCLOUD, ETC.)
                      </label>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFD166] to-orange-500
                                    transition-all duration-500 group-focus-within:w-full shadow-[0_0_8px_rgba(255,200,60,0.6)]"></div>
                    </div>

                    {/* Message Field */}
                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        placeholder=" "
                        className="peer w-full px-0 py-3 bg-transparent border-0 border-b-2 border-white/10
                                 text-white placeholder-transparent font-light resize-none
                                 focus:outline-none focus:border-[#FFD166]/60
                                 transition-all duration-500 focus:shadow-[0_4px_12px_rgba(255,200,60,0.15)]"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-0 -top-5 text-gray-400/80 text-xs font-light tracking-wide transition-all duration-300
                                 peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500/60
                                 peer-focus:-top-5 peer-focus:text-[#FFD166]/90 peer-focus:text-xs"
                      >
                        MESSAGE / BIO (OPTIONAL)
                      </label>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#FFD166] to-orange-500
                                    transition-all duration-500 group-focus-within:w-full shadow-[0_0_8px_rgba(255,200,60,0.6)]"></div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="relative w-full mt-8 py-4 font-semibold text-gray-900
                               bg-gradient-to-r from-[#FFD166] via-[#FFE29A] to-[#FFD166]
                               rounded-2xl overflow-hidden
                               shadow-[0_0_30px_rgba(255,200,60,0.4),0_0_60px_rgba(255,200,60,0.2)]
                               hover:shadow-[0_0_40px_rgba(255,200,60,0.6),0_0_80px_rgba(255,200,60,0.3)]
                               hover:scale-[1.02] transition-all duration-500 group/btn"
                    >
                      {/* Glass overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-50
                                    group-hover/btn:opacity-70 transition-opacity duration-500"></div>

                      {/* Animated shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
                                      translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000"></div>
                      </div>

                      <span className="relative z-10 tracking-wide">Submit Your Music</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
