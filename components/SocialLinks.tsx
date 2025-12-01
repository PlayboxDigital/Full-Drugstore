
import React from 'react';
import { Instagram, Facebook, MessageCircle, Bike, ShoppingBag, Star } from 'lucide-react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/fulldrugstore.ar/',
    icon: Instagram,
    color: 'text-pink-600',
    label: 'Síguenos'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61584048223132',
    icon: Facebook,
    color: 'text-blue-700',
    label: 'Comunidad'
  },
  {
    name: 'Pedidos Ya',
    url: 'https://www.pedidosya.com.ar', // Placeholder URL
    icon: ShoppingBag,
    color: 'text-red-500',
    label: 'Delivery'
  },
  {
    name: 'Rappi',
    url: 'https://www.rappi.com.ar', // Placeholder URL
    icon: Bike,
    color: 'text-orange-500',
    label: 'Delivery'
  },
  {
    name: 'WhatsApp',
    url: 'https://whatsapp.com',
    icon: MessageCircle,
    color: 'text-green-600',
    label: 'Consultas'
  },
  {
    name: 'Calificanos',
    url: 'https://docs.google.com/forms/d/e/1FAIpQLScqnCVf3vd1XWko43JhhBVMwNP3FbPccmQJTTy2Y-OrhZjz2A/viewform?usp=dialog',
    icon: Star,
    color: 'text-yellow-500',
    label: 'Tu Opinión'
  }
];

const SocialLinks: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Estamos Conectados</h2>
          <p className="text-gray-500 font-light text-lg">
            Hacé tu pedido online, seguinos en redes o dejanos tu opinión.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`p-4 rounded-full mb-3 bg-gray-50 group-hover:bg-gray-100 transition-colors ${link.color}`}>
                <link.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-base font-bold text-gray-900 mb-1">{link.name}</h3>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
