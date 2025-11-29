import React from 'react';
import { Coffee, Utensils, ShoppingBag, BatteryCharging } from 'lucide-react';
import { ProductFeature } from '../types';

const features: ProductFeature[] = [
  {
    title: "Café de Especialidad",
    description: "Granos seleccionados y molidos al momento. Disfruta de un espresso perfecto o un latte cremoso a las 3 AM.",
    icon: Coffee,
    image: "https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764382620/10c00753-e8f9-4f40-b618-599f6962e5e4_fszxwm.png"
  },
  {
    title: "Viandas Caseras",
    description: "Comida real, lista para llevar. Opciones vegetarianas, tartas, ensaladas y platos del día frescos.",
    icon: Utensils,
    image: "https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764382232/361632239_307695254939603_3188921581203593523_n_qi4dku.jpg"
  },
  {
    title: "Kiosco Full",
    description: "Golosinas, bebidas frías, cigarrillos y artículos de primera necesidad. Todo en un solo lugar.",
    icon: ShoppingBag,
    image: "https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764382707/edited-adjusted-1763599175999_e2j8vv.png"
  },
  {
    title: "Servicios Extra",
    description: "Carga de celular, SUBE y pagos de servicios. Soluciones rápidas al paso.",
    icon: BatteryCharging,
    image: "https://res.cloudinary.com/ddbqqeh8x/image/upload/v1764382273/unnamed_yrhxdn.png",
    imageClassName: "scale-125 group-hover:scale-135"
  }
];

const Features: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Qué se te antoja hoy?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desde el desayuno hasta la cena de medianoche, tenemos cubiertas todas tus necesidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative bg-slate-800 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-slate-700">
              <div className="h-48 overflow-hidden relative">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className={`w-full h-full object-cover transform transition-transform duration-500 ${feature.imageClassName || 'group-hover:scale-110'}`}
                />
                <div className="absolute top-4 right-4 z-20 bg-brand-yellow p-2 rounded-full text-brand-dark">
                  <feature.icon size={20} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;