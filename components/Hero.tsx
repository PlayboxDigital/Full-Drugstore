
import React from 'react';
import { Clock, MapPin, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate?: (view: 'home' | 'menu', sectionId?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764381843/IMG_1216_t1upcr.jpg" 
          alt="Full Drugstore Local" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-yellow mb-8 animate-fade-in-down shadow-sm">
          <Clock className="w-4 h-4" />
          <span className="text-xs font-bold tracking-widest uppercase">Abierto las 24 Horas</span>
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
          Tu pausa necesaria <br />
          <span className="italic font-light text-brand-yellow">en cualquier momento</span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
          Café de especialidad, comida casera y todo lo que necesitas, siempre disponible para vos en el corazón de La Plata.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button 
            onClick={() => onNavigate?.('home', 'products')}
            className="group px-8 py-4 bg-brand-yellow text-brand-dark font-bold rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-[0_0_20px_rgba(244,183,15,0.4)] hover:shadow-xl flex items-center justify-center gap-2"
          >
            Ver Servicios
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="https://www.google.com/maps/place/Full+Drugstore/data=!4m2!3m1!1s0x0:0x69dc9ac45882ac3b?sa=X&ved=1t:2428&hl=es&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/30 text-white font-semibold rounded-full hover:bg-white/15 transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <MapPin className="w-5 h-5" />
            Cómo Llegar
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
