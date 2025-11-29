import React from 'react';
import { MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="location" className="bg-black text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Desc */}
          <div>
            <div className="flex items-center gap-2 mb-4">
               <img src="https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764380593/4_ih5opd.png" alt="Full Drugstore" className="h-10 w-auto" />
               <span className="text-2xl font-bold text-white tracking-tight">Full <span className="text-brand-yellow">Drugstore</span></span>
            </div>
            <p className="mt-2 text-sm leading-relaxed">
              Somos tu lugar en La Plata. Abiertos todo el día, todos los días, para brindarte lo que necesitas.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">Ubicación</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-yellow shrink-0" />
                <span>Calle 9 y 44,<br/>La Plata, Buenos Aires</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-yellow shrink-0" />
                <span>Abierto 24 Horas / 7 Días</span>
              </li>
            </ul>
          </div>

          {/* Map Placeholder */}
          <div className="h-48 bg-slate-800 rounded-lg overflow-hidden relative group">
            <img 
               src="https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764381843/IMG_1216_t1upcr.jpg" 
               alt="Fachada Full Drugstore" 
               className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://www.google.com/maps/place/Full+Drugstore/data=!4m2!3m1!1s0x0:0x69dc9ac45882ac3b?sa=X&ved=1t:2428&hl=es&ictx=111" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-brand-yellow text-brand-dark px-4 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition-colors shadow-lg z-10"
                >
                    Ver en Google Maps
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} Full Drugstore. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;