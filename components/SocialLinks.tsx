import React from 'react';
import { Instagram, Facebook, Phone, MessageCircle } from 'lucide-react';
import { SocialLink } from '../types';

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/fulldrugstore.ar/',
    icon: Instagram,
    color: 'bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600',
    label: 'Síguenos para promos'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61584048223132',
    icon: Facebook,
    color: 'bg-blue-600',
    label: 'Nuestra comunidad'
  },
  {
    name: 'WhatsApp',
    url: 'https://whatsapp.com',
    icon: MessageCircle,
    color: 'bg-green-600',
    label: 'Haz tu pedido'
  },
  {
    name: 'Llamar',
    url: '#',
    icon: Phone,
    color: 'bg-slate-700',
    label: 'Atención 24hs'
  }
];

const SocialLinks: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decoration Circles */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Conéctate con Nosotros</h2>
            <p className="text-gray-300">
              ¡Entérate de las ofertas flash y visítanos en La Plata!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-slate-600 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className={`p-4 rounded-full mb-4 text-white shadow-lg transition-transform group-hover:scale-110 ${link.color}`}>
                  <link.icon size={28} />
                </div>
                <h3 className="text-lg font-semibold text-white">{link.name}</h3>
                <span className="text-xs text-gray-500 uppercase tracking-wider mt-1">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;