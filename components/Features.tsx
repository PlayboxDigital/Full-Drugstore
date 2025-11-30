
import React from 'react';
import { Coffee, Utensils, ShoppingBag, BatteryCharging, ArrowRight } from 'lucide-react';
import { ProductFeature } from '../types';

interface FeaturesProps {
  onNavigate?: (view: 'home' | 'menu', sectionId?: string) => void;
}

const features: ProductFeature[] = [
  {
    title: "Café de Especialidad",
    description: "Granos seleccionados. Hacé click para ver nuestro menú de cafetería.",
    icon: Coffee,
    image: "https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764382620/10c00753-e8f9-4f40-b618-599f6962e5e4_fszxwm.png"
  },
  {
    title: "Viandas Caseras",
    description: "Comida real, lista para llevar. Opciones frescas y saludables todos los días.",
    icon: Utensils,
    image: "https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764382232/361632239_307695254939603_3188921581203593523_n_qi4dku.jpg"
  },
  {
    title: "Kiosco Full",
    description: "Golosinas, bebidas y artículos esenciales. Todo en un solo lugar.",
    icon: ShoppingBag,
    image: "https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764382707/edited-adjusted-1763599175999_e2j8vv.png"
  },
  {
    title: "Servicios Extra",
    description: "Carga virtual, pagos y más. Soluciones rápidas al paso.",
    icon: BatteryCharging,
    image: "https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764382273/unnamed_yrhxdn.png",
    imageClassName: "scale-125 group-hover:scale-135"
  }
];

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-3 block">Nuestra Propuesta</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Calidad & Conveniencia</h2>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto mb-6"></div>
          <p className="font-serif italic text-gray-500 max-w-2xl mx-auto text-xl leading-relaxed">
            "Diseñamos cada servicio pensando en tu comodidad, elevando lo cotidiano a una experiencia excepcional."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => {
            const isCoffee = feature.title === "Café de Especialidad";
            
            return (
              <div 
                key={index} 
                onClick={() => isCoffee && onNavigate?.('menu')}
                className={`group relative bg-white rounded-none overflow-hidden hover:-translate-y-2 transition-all duration-700 shadow-sm hover:shadow-2xl ${isCoffee ? 'cursor-pointer ring-1 ring-brand-orange/20' : ''}`}
              >
                <div className="h-64 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors z-10"></div>
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={`w-full h-full object-cover transform transition-transform duration-1000 ${feature.imageClassName || 'group-hover:scale-110'}`}
                  />
                  {isCoffee && (
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                        <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-serif font-bold text-sm flex items-center gap-2">
                          Ver Menú <ArrowRight size={14} />
                        </span>
                    </div>
                  )}
                </div>
                <div className="p-8 text-center bg-white relative z-20">
                  <div className="-mt-12 mb-4 relative inline-block">
                    <div className="bg-white p-4 rounded-full shadow-lg">
                        <feature.icon size={24} className={isCoffee ? "text-brand-orange" : "text-gray-800"} />
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-orange transition-colors">{feature.title}</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
