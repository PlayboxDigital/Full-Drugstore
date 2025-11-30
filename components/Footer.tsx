
import React from 'react';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-[#FAFAF9] text-gray-800 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Desc */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
               {/* Logotype using the Display font */}
               <span className="font-display text-3xl text-gray-900 tracking-tight uppercase">
                 Full <span className="text-brand-yellow">Drugstore</span>
               </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-light max-w-xs">
              Tu pausa necesaria en el corazón de La Plata. <br/>
              Abiertos las 24 horas para brindarte la mejor atención y calidad.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="font-serif text-gray-900 font-bold text-lg">Ubicación & Horarios</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-white rounded-full shadow-sm text-brand-orange group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-gray-600 text-sm mt-1">Calle 9 y 44,<br/>La Plata, Buenos Aires</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-white rounded-full shadow-sm text-brand-orange group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-gray-600 text-sm">Abierto 24 Horas / 7 Días</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="h-56 bg-white rounded-2xl overflow-hidden relative group shadow-lg border border-gray-100">
            <img 
               src="https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764381843/IMG_1216_t1upcr.jpg" 
               alt="Fachada Full Drugstore" 
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                <a 
                  href="https://www.google.com/maps/place/Full+Drugstore/data=!4m2!3m1!1s0x0:0x69dc9ac45882ac3b?sa=X&ved=1t:2428&hl=es&ictx=111" 
                  target="_blank" 
                  rel="noreferrer"
                  className="group/btn relative px-6 py-3 bg-white/90 backdrop-blur-md text-gray-900 text-sm font-bold rounded-full shadow-lg hover:bg-brand-yellow transition-all flex items-center gap-2"
                >
                    Ver en Google Maps
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 font-light uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Full Drugstore.</p>
          <p>La Plata, Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;