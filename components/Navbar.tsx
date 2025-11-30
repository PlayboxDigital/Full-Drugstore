
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'menu';
  onNavigate: (view: 'home' | 'menu', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: 'home' | 'menu', sectionId?: string) => {
    setIsOpen(false);
    onNavigate(view, sectionId);
  };

  const navLinks = [
    { name: 'Inicio', view: 'home', section: 'hero' },
    { name: 'Menú', view: 'menu', section: null },
    { name: 'Servicios', view: 'home', section: 'products' },
    { name: 'Ubicación', view: 'home', section: 'location' },
    { name: 'Contacto', view: 'home', section: 'contact' },
  ] as const;

  // Determine navbar style based on view and scroll state
  const isDarkText = scrolled || currentView === 'menu';
  const navBackground = isDarkText ? 'bg-[#FAFAF9]/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent';
  const textColor = isDarkText ? 'text-gray-800' : 'text-white';
  const logoText = isDarkText ? 'text-gray-900' : 'text-white';
  const logoHighlight = 'text-brand-yellow';
  const buttonHover = isDarkText ? 'hover:bg-gray-200/50' : 'hover:bg-white/10';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${navBackground}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleNavClick('home', 'hero')}
          >
            {/* Text Logotype */}
            <span className={`font-display font-normal text-2xl md:text-3xl tracking-tight ${logoText} transition-colors uppercase`}>
              Full <span className={logoHighlight}>Drugstore</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.view, link.section || undefined)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${textColor} ${buttonHover} ${
                    currentView === link.view && (!link.section || link.section === 'hero') && link.view !== 'home' 
                      ? 'font-bold underline decoration-2 decoration-brand-yellow underline-offset-8' 
                      : ''
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColor} hover:bg-gray-700/10 focus:outline-none transition-colors`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FAFAF9] shadow-xl border-t border-gray-100 absolute w-full h-screen">
          <div className="px-6 pt-8 pb-6 space-y-4 flex flex-col items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.view, link.section || undefined)}
                className="w-full text-center text-gray-800 hover:text-brand-orange hover:bg-gray-100 block px-4 py-4 rounded-xl text-xl font-serif font-medium transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
