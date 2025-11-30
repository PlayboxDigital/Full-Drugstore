
import React, { useEffect } from 'react';
import { Coffee, Tag, Croissant, ArrowLeft, Star, Leaf } from 'lucide-react';
import MenuIcon from './MenuIcon';

interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
  borderColor: string;
  textColor: string;
  bgColor: string;
  icon: React.ElementType;
}

interface MenuPageProps {
  onBack: () => void;
}

const menuData: MenuCategory[] = [
  {
    title: "Promos",
    borderColor: "border-brand-yellow",
    textColor: "text-brand-yellow",
    bgColor: "bg-yellow-50",
    icon: Tag,
    items: [
      { name: "Café Chico + Alfajor", price: "$3.500", description: "El clásico combo para el recreo." },
      { name: "Café Chico + Frutos Secos", price: "$5.200", description: "Energía saludable y café recién hecho." },
      { name: "Café Grande + Alfajor", price: "$4.800", description: "Para los que necesitan un extra de café." },
    ]
  },
  {
    title: "Bebidas Calientes",
    borderColor: "border-brand-orange",
    textColor: "text-brand-orange",
    bgColor: "bg-orange-50",
    icon: Coffee,
    items: [
      { name: "Espresso Simple", price: "$2.500", description: "Un shot de café intenso y puro." },
      { name: "Espresso Doble", price: "$3.000", description: "Doble carga de café para mayor intensidad." },
      { name: "Cortado Chico", price: "$3.500", description: "Espresso con un toque de leche vaporizada." },
      { name: "Cortado Grande", price: "$4.000", description: "La proporción perfecta en taza grande." },
      { name: "Latte Chico", price: "$3.500", description: "Espresso con abundante leche cremosa." },
      { name: "Latte Grande", price: "$4.000", description: "Suave y lácteo, ideal para disfrutar despacio." },
      { name: "Capuchino Chico", price: "$3.500", description: "Espresso, leche y mucha espuma de leche." },
      { name: "Capuchino Grande", price: "$4.000", description: "Más espuma, más sabor, tamaño grande." },
      { name: "Moka Grande", price: "$4.300", description: "La mezcla perfecta de espresso, leche y chocolate." },
      { name: "Café Grande", price: "$4.000", description: "Café estilo americano, suave y largo." },
      { name: "Té", price: "$2.000", description: "Selección de té negro o infusiones de hierbas." },
    ]
  },
  {
    title: "Acompañamientos",
    borderColor: "border-brand-blue",
    textColor: "text-brand-blue",
    bgColor: "bg-blue-50",
    icon: Croissant,
    items: [
      { name: "Medialuna", price: "$1.500", description: "Clásica de manteca, dulce y esponjosa." },
      { name: "Croissant", price: "$2.000", description: "Hojaldrado francés, crujiente y mantecoso." },
      { name: "Alfajor", price: "$1.000", description: "Dulce de leche y cobertura de chocolate." },
      { name: "Frutos Secos", price: "$2.400", description: "Mix energético de nueces y almendras." },
    ]
  },
  {
    title: "Frutos Secos",
    borderColor: "border-brand-green",
    textColor: "text-brand-green",
    bgColor: "bg-green-50",
    icon: Leaf,
    items: [
      { name: "Mix con maní", price: "$4.000", description: "Energía básica para tu día." },
      { name: "Mix con pasas", price: "$3.700", description: "El toque dulce natural de las pasas." },
      { name: "Mix energía", price: "$4.200", description: "Selección potente para recargar pilas." },
      { name: "Almendras", price: "$6.500", description: "Crocantes y llenas de nutrientes." },
      { name: "Nueces", price: "$5.000", description: "Mariposa, excelente calidad." },
      { name: "Mix tropical mediano", price: "$10.000", description: "Con frutas deshidratadas, tamaño para compartir." },
      { name: "Mix energía mediano", price: "$10.000", description: "Más cantidad para mayor rendimiento." },
      { name: "Mix con pasas mediano", price: "$10.000", description: "Paquete mediano, ideal para llevar." },
    ]
  }
];

const MenuPage: React.FC<MenuPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FAFAF9] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-gray-400 hover:text-brand-dark transition-colors group font-serif italic text-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Volver a inicio
        </button>

        <div className="text-center mb-16 animate-fade-in-down">
          <h2 className="font-serif text-5xl md:text-7xl font-medium text-gray-900 mb-6 tracking-tight">
            Nuestro <span className="italic text-brand-yellow">Menú</span>
          </h2>
          <p className="font-serif italic text-gray-500 max-w-lg mx-auto text-xl">
            "El detalle es lo que nos define."
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {menuData.map((category, index) => {
            const isPromo = category.title === "Promos";
            
            return (
              <div 
                key={index}
                className={isPromo 
                  ? "bg-gradient-to-br from-[#FFFBEB] to-white border border-brand-yellow/30 rounded-3xl p-6 md:p-8 shadow-[0_10px_40px_-10px_rgba(244,183,15,0.15)] relative overflow-hidden ring-1 ring-brand-yellow/10"
                  : "px-4 md:px-0"
                }
              >
                {/* Decorative Elements for Promo Section */}
                {isPromo && (
                  <>
                    <div className="absolute top-0 right-0 bg-brand-yellow text-brand-dark px-6 py-1.5 rounded-bl-2xl font-display text-xs uppercase tracking-widest flex items-center gap-1 shadow-sm z-10">
                      <Star size={12} fill="currentColor" /> Recomendado
                    </div>
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-yellow/5 rounded-full blur-3xl"></div>
                  </>
                )}

                <div className={`flex items-center ${isPromo ? 'justify-start mb-10' : 'justify-center gap-4 mb-10'}`}>
                   {!isPromo && <div className="h-px w-12 bg-gray-200"></div>}
                   <h3 className={`font-serif text-3xl tracking-wide ${isPromo ? 'text-brand-dark font-bold' : 'text-gray-800 text-center'}`}>
                     {category.title}
                   </h3>
                   {!isPromo && <div className="h-px w-12 bg-gray-200"></div>}
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 ${isPromo ? 'items-start' : ''}`}>
                  {category.items.map((item, idx) => (
                    <div key={idx} className="group flex items-start gap-5">
                      {/* Visual Icon */}
                      <div className={`shrink-0 transition-transform duration-500 group-hover:scale-110 mt-1 ${isPromo ? 'drop-shadow-md' : ''}`}>
                         <MenuIcon type={item.name} className="drop-shadow-sm" />
                      </div>
                      
                      {/* Text Info */}
                      <div className="flex-1 min-w-0 flex flex-col">
                        <div className={`flex items-start justify-between border-b ${isPromo ? 'border-brand-yellow/20' : 'border-gray-200'} pb-2 mb-2 border-dashed`}>
                           {/* Use flex-1 to allow text to take space and wrap, instead of truncating */}
                           <span className="font-serif text-lg text-gray-800 leading-tight pr-2 flex-1">{item.name}</span>
                           <span className={`font-sans font-bold text-lg ${category.textColor} whitespace-nowrap`}>{item.price}</span>
                        </div>
                        {item.description && (
                          <p className="text-sm text-gray-500 font-light leading-snug mb-1">
                            {item.description}
                          </p>
                        )}
                        <p className="text-[10px] text-gray-400 font-sans tracking-wide uppercase opacity-60">
                           {isPromo ? 'Mejor Valor' : (item.name.includes('Promos') ? 'Combo Especial' : '')}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
