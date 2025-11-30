
import React from 'react';

interface MenuIconProps {
  type: string;
  className?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ type, className = "" }) => {
  const t = type.toLowerCase();
  
  // -- Helper for Pastry/Nuts SVGs --
  const renderPastry = (itemType: string) => {
    if (itemType.includes('medialuna')) {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <path d="M20,70 Q50,20 80,70 Q85,80 75,85 Q50,45 25,85 Q15,80 20,70" fill="#E8AA42" stroke="#C98825" strokeWidth="2" />
        </svg>
      );
    }
    if (itemType.includes('croissant')) {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <path d="M15,65 C15,65 30,30 50,30 C70,30 85,65 85,65 C90,75 80,80 80,80 C65,60 35,60 20,80 C20,80 10,75 15,65" fill="#E8AA42" stroke="#C98825" strokeWidth="2" />
          <path d="M30,55 Q50,40 70,55" fill="none" stroke="#C98825" strokeWidth="2" />
          <path d="M35,50 Q50,35 65,50" fill="none" stroke="#C98825" strokeWidth="2" />
        </svg>
      );
    }
    if (itemType.includes('alfajor')) {
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
           {/* Bottom Cookie */}
           <ellipse cx="50" cy="65" rx="35" ry="12" fill="#8B4513" />
           {/* Filling */}
           <rect x="15" y="50" width="70" height="15" fill="#5D4037" />
           {/* Top Cookie */}
           <ellipse cx="50" cy="50" rx="35" ry="12" fill="#8B4513" />
           {/* Shine */}
           <ellipse cx="50" cy="50" rx="30" ry="10" fill="#A0522D" />
        </svg>
      );
    }
    // Logic for Nuts/Mixes - Updated to be more recognizable
    if (itemType.includes('mix') || itemType.includes('almendras') || itemType.includes('nueces') || itemType.includes('frutos') || itemType.includes('cookie')) {
       return (
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm overflow-visible">
          {/* Peanut (Maní) - Back/Left */}
          <g transform="translate(15, 45) rotate(-30)">
             <path d="M10,0 C10,-8 22,-8 22,0 C22,3 20,5 16,5 C20,5 22,7 22,10 C22,18 10,18 10,10 C10,7 12,5 16,5 C12,5 10,3 10,0 Z" fill="#F5DEB3" stroke="#CCA570" strokeWidth="1.5" />
          </g>
          
          {/* Walnut (Nuez) - Back/Right */}
          <g transform="translate(70, 35)">
             <circle cx="0" cy="0" r="16" fill="#A1887F" stroke="#5D4037" strokeWidth="1.5" />
             <path d="M-10,-5 Q0,5 10,-5" fill="none" stroke="#5D4037" strokeWidth="1" />
             <path d="M-8,5 Q0,12 8,5" fill="none" stroke="#5D4037" strokeWidth="1" />
             <path d="M0,-14 L0,14" fill="none" stroke="#5D4037" strokeWidth="1" />
          </g>

          {/* Almond (Almendra) - Front/Center - Detailed Teardrop */}
          <g transform="translate(50, 65) rotate(10)">
            <path d="M0,-35 C15,0 15,15 0,15 C-15,15 -15,0 0,-35 Z" fill="#D7CCC8" stroke="#8D6E63" strokeWidth="1.5" />
            <path d="M0,-25 Q5,0 0,10" fill="none" stroke="#A1887F" strokeWidth="0.8" opacity="0.6" />
            <path d="M-4,-15 Q-2,0 -4,8" fill="none" stroke="#A1887F" strokeWidth="0.8" opacity="0.6" />
          </g>
        </svg>
       );
    }
    
    return null;
  };

  // -- Helper for Coffee Layers --
  const getLayers = (coffeeType: string) => {
    // Espresso Doble - Fuller
    if (coffeeType.includes('doble')) {
      return [{ color: '#3C2A21', height: '65%' }];
    }
    // Espresso Simple
    if (coffeeType.includes('exprés') || coffeeType.includes('simple')) {
      return [{ color: '#3C2A21', height: '30%' }];
    }
    
    // Cortado
    if (coffeeType.includes('cortado')) {
      const isGrande = coffeeType.includes('grande');
      return [
        { color: '#3C2A21', height: isGrande ? '50%' : '40%' }, 
        { color: '#D4C4B5', height: isGrande ? '30%' : '20%' }
      ];
    }
    
    // Latte
    if (coffeeType.includes('latte') || coffeeType.includes('lágrima')) {
      return [{ color: '#3C2A21', height: '20%' }, { color: '#F5E6D3', height: '65%' }, { color: '#FFF8F0', height: '5%' }];
    }
    
    // Capuchino
    if (coffeeType.includes('cappuccino') || coffeeType.includes('capuchino')) {
      return [{ color: '#3C2A21', height: '30%' }, { color: '#F5E6D3', height: '30%' }, { color: '#FFF8F0', height: '30%' }];
    }
    
    // Moka
    if (coffeeType.includes('moka')) {
      return [{ color: '#4A3728', height: '15%' }, { color: '#3C2A21', height: '25%' }, { color: '#F5E6D3', height: '40%' }, { color: '#FFF8F0', height: '10%' }];
    }
    
    // Tea
    if (coffeeType.includes('té') || coffeeType.includes('te ')) {
       return [{ color: '#C26A3E', height: '70%' }];
    }
    
    // Default Coffee
    return [{ color: '#3C2A21', height: '60%' }];
  };

  // Render Logic
  
  // 1. Promos (Combo: Cup + Pastry)
  if (t.includes('+')) {
     const parts = t.split('+');
     const drink = parts[0];
     const food = parts[1];
     
     return (
        <div className={`flex items-end gap-1 ${className}`}>
           {/* Mini Cup */}
           <div className="relative w-8 h-10">
              <div className="absolute top-2 -right-1 w-3 h-4 border-2 border-gray-300 rounded-r-md"></div>
              <div className="relative w-full h-full bg-white border border-gray-200 rounded-b-lg overflow-hidden flex flex-col-reverse">
                 {getLayers(drink).map((l, i) => (
                    <div key={i} style={{ height: l.height, backgroundColor: l.color }} className="w-full"></div>
                 ))}
              </div>
           </div>
           {/* Mini Pastry */}
           <div className="w-10 h-10 -ml-2 mb-1 z-10">
              {renderPastry(food)}
           </div>
        </div>
     );
  }

  // 2. Just Pastry or Nuts
  if (t.includes('medialuna') || t.includes('croissant') || t.includes('alfajor') || t.includes('cookie') || t.includes('frutos') || t.includes('mix') || t.includes('almendras') || t.includes('nueces')) {
     return <div className={`w-14 h-14 ${className}`}>{renderPastry(t)}</div>;
  }

  // 3. Just Coffee (Visual Cup)
  const layers = getLayers(t);
  return (
    <div className={`relative w-12 h-16 mx-auto ${className}`}>
      <div className="absolute top-3 -right-2 w-4 h-6 border-2 border-gray-300 rounded-r-lg"></div>
      <div className="relative w-full h-full bg-white border border-gray-200 rounded-b-xl overflow-hidden flex flex-col-reverse shadow-inner">
        {layers.map((layer, index) => (
          <div 
            key={index}
            style={{ height: layer.height, backgroundColor: layer.color }}
            className="w-full"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MenuIcon;
