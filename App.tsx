
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MenuPage from './components/MenuPage';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

type ViewState = 'home' | 'menu';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const handleNavigate = (view: ViewState, sectionId?: string) => {
    setCurrentView(view);
    
    // If navigating to a section on the home page
    if (view === 'home' && sectionId) {
      // Need a small timeout if we are switching views to allow render
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else if (view === 'home' && !sectionId) {
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans selection:bg-brand-yellow/30 selection:text-brand-dark">
      <Navbar currentView={currentView} onNavigate={handleNavigate} />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <Features onNavigate={handleNavigate} />
            <SocialLinks />
          </>
        ) : (
          <MenuPage onBack={() => handleNavigate('home')} />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;