import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Background */}
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

      {/* Logo */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-[#FFD166] drop-shadow-[0_0_18px_rgba(255,200,60,0.7)] leading-tight max-w-4xl">
            Independent record label &<br />
            distributor.
          </h1>

          <p className="text-lg md:text-xl text-[#FFE29A] drop-shadow-[0_0_10px_rgba(255,200,60,0.5)] mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Solar Music Group uncovers hidden potential in music, turning legal
            <br className="hidden md:block" />
            challenges into opportunities for both artists and brands. Join our team
            <br className="hidden md:block" />
            of 30+ talented artists today!
          </p>

          <p className="text-sm text-[#FFD166] drop-shadow-[0_0_8px_rgba(255,200,60,0.6)] mb-10 tracking-wide">
            Established 2024 · London
          </p>

          <Link
            to="/contact"
            className="inline-block px-8 py-4 text-lg font-semibold text-gray-900 bg-[#FFD166] rounded-lg
                       shadow-[0_0_20px_rgba(255,200,60,0.8)] hover:shadow-[0_0_35px_rgba(255,200,60,1)]
                       hover:scale-105 transition-all duration-300"
          >
            Submit Your Music
          </Link>
        </div>

        {/* Footer */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-300 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p className="text-sm text-[#FFD166] drop-shadow-[0_0_8px_rgba(255,200,60,0.6)]">
            © 2025 Solar Music Group LTD.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
