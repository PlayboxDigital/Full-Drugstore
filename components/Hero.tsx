import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764381843/IMG_1216_t1upcr.jpg" 
          alt="Full Drugstore Local" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 text-brand-yellow mb-6 animate-fade-in-down">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide uppercase">Abierto las 24 Horas</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
          Tu pausa necesaria <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-orange-500">
            en cualquier momento
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Café premium recién molido, viandas caseras para llevar, snacks y todo lo que necesitas, cuando lo necesitas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#products"
            className="px-8 py-4 bg-brand-yellow text-brand-dark font-bold rounded-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 shadow-lg shadow-yellow-500/20"
          >
            Ver Productos
          </a>
          <a 
            href="https://www.google.com/maps/place/Full+Drugstore/data=!4m2!3m1!1s0x0:0x69dc9ac45882ac3b?sa=X&ved=1t:2428&hl=es&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5" />
            Cómo Llegar
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;