import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans selection:bg-brand-yellow selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
};

export default App;