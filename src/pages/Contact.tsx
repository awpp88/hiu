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
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Enhanced Cosmic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] bg-gradient-radial from-amber-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        {/* Orbiting rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[400px] h-[400px] border border-white/5 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 w-[550px] h-[550px] -m-[75px] border border-amber-500/10 rounded-full animate-spin-slower"></div>
          <div className="absolute inset-0 w-[700px] h-[700px] -m-[150px] border border-white/5 rounded-full animate-spin-slowest"></div>
        </div>

        {/* Glowing particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Close Button */}
      <Link
        to="/"
        className="fixed top-8 right-8 z-30 p-3 text-gray-400/80 hover:text-amber-400 transition-all rounded-full
                   backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:scale-110"
      >
        <X className="w-6 h-6" />
      </Link>

      {/* Logo */}
      <div className="fixed top-10 left-1/2 -translate-x-1/2 z-20">
        <img
          src="/logosolar.png"
          alt="Solar Music Group Logo"
          className="w-32 sm:w-40 md:w-44 mx-auto drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]"
        />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400/30 rounded-full blur-sm animate-float"></div>
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-orange-400/20 rounded-full blur-sm animate-float-delayed"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-yellow-400/25 rounded-full blur-sm animate-float"></div>

      {/* Form Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-40 pb-20">
        <div className="w-full max-w-xl">
          {/* Glassmorphic Container */}
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-amber-500/30 via-transparent to-amber-500/30 rounded-[32px] blur-sm"></div>

            {/* Main glass container */}
            <div className="relative bg-white/[0.03] backdrop-blur-2xl rounded-[32px] p-10 md:p-14
                          shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
                          border border-white/10">

              {/* Inner glow */}
              <div className="absolute inset-0 rounded-[32px] shadow-[inset_0_0_60px_rgba(251,191,36,0.05)]"></div>

              {isSubmitted ? (
                <div className="relative text-center py-16 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full
                                bg-gradient-to-br from-amber-400 to-orange-500 mb-8
                                shadow-[0_0_40px_rgba(251,191,36,0.6)] animate-pulse-slow">
                    <Mail className="w-12 h-12 text-gray-900" />
                  </div>
                  <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-400 mb-4
                               drop-shadow-[0_0_20px_rgba(251,191,36,0.5)]">
                    Thanks for submitting!
                  </h3>
                  <p className="text-gray-300/90 text-lg">We'll get back to you soon.</p>
                </div>
              ) : (
                <>
                  {/* Header */}
                  <div className="text-center mb-12 relative">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <Sparkles className="w-5 h-5 text-amber-400/60" />
                      <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text
                                   bg-gradient-to-r from-amber-200 via-amber-300 to-amber-200
                                   drop-shadow-[0_0_30px_rgba(251,191,36,0.6)]">
                        Submit Your Music
                      </h1>
                      <Sparkles className="w-5 h-5 text-amber-400/60" />
                    </div>
                    <p className="text-gray-300/70 text-sm font-light tracking-wide">
                      Share your best work with Solar Music Group
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-8 relative">
                    {/* Name Field */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder=" "
                        className="peer w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/10
                                 text-white placeholder-transparent font-light text-lg
                                 focus:outline-none focus:border-amber-400/60
                                 transition-all duration-500 focus:shadow-[0_4px_12px_rgba(251,191,36,0.15)]"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-6 text-gray-400/80 text-xs font-light tracking-wide transition-all duration-300
                                 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500/60
                                 peer-focus:-top-6 peer-focus:text-amber-400/90 peer-focus:text-xs"
                      >
                        NAME / STAGE NAME
                      </label>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-orange-500
                                    transition-all duration-500 group-focus-within:w-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
                    </div>

                    {/* Email Field */}
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder=" "
                        className="peer w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/10
                                 text-white placeholder-transparent font-light text-lg
                                 focus:outline-none focus:border-amber-400/60
                                 transition-all duration-500 focus:shadow-[0_4px_12px_rgba(251,191,36,0.15)]"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-6 text-gray-400/80 text-xs font-light tracking-wide transition-all duration-300
                                 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500/60
                                 peer-focus:-top-6 peer-focus:text-amber-400/90 peer-focus:text-xs"
                      >
                        EMAIL ADDRESS
                      </label>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-orange-500
                                    transition-all duration-500 group-focus-within:w-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
                    </div>

                    {/* Music Links Field */}
                    <div className="relative group">
                      <textarea
                        id="musicLinks"
                        name="musicLinks"
                        required
                        rows={3}
                        placeholder=" "
                        className="peer w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/10
                                 text-white placeholder-transparent font-light text-lg resize-none
                                 focus:outline-none focus:border-amber-400/60
                                 transition-all duration-500 focus:shadow-[0_4px_12px_rgba(251,191,36,0.15)]"
                      />
                      <label
                        htmlFor="musicLinks"
                        className="absolute left-0 -top-6 text-gray-400/80 text-xs font-light tracking-wide transition-all duration-300
                                 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500/60
                                 peer-focus:-top-6 peer-focus:text-amber-400/90 peer-focus:text-xs"
                      >
                        MUSIC LINKS (SPOTIFY, SOUNDCLOUD, ETC.)
                      </label>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-orange-500
                                    transition-all duration-500 group-focus-within:w-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
                    </div>

                    {/* Message Field */}
                    <div className="relative group">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder=" "
                        className="peer w-full px-0 py-4 bg-transparent border-0 border-b-2 border-white/10
                                 text-white placeholder-transparent font-light text-lg resize-none
                                 focus:outline-none focus:border-amber-400/60
                                 transition-all duration-500 focus:shadow-[0_4px_12px_rgba(251,191,36,0.15)]"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-0 -top-6 text-gray-400/80 text-xs font-light tracking-wide transition-all duration-300
                                 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500/60
                                 peer-focus:-top-6 peer-focus:text-amber-400/90 peer-focus:text-xs"
                      >
                        MESSAGE / BIO (OPTIONAL)
                      </label>
                      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-amber-400 to-orange-500
                                    transition-all duration-500 group-focus-within:w-full shadow-[0_0_8px_rgba(251,191,36,0.6)]"></div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="relative w-full mt-12 py-5 font-semibold text-lg text-gray-900
                               bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300
                               rounded-2xl overflow-hidden
                               shadow-[0_0_30px_rgba(251,191,36,0.4),0_0_60px_rgba(251,191,36,0.2)]
                               hover:shadow-[0_0_40px_rgba(251,191,36,0.6),0_0_80px_rgba(251,191,36,0.3)]
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
