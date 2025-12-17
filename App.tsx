import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vision } from './components/Vision';
import { CryptoETPs } from './components/CryptoETPs';
import { Services } from './components/Services';
import { ServicesGrid } from './components/ServicesGrid';
import { TrustedBy } from './components/TrustedBy';
import { ContentSection } from './components/ContentSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-lime selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <CryptoETPs />
        <Services />
        <ServicesGrid />
        <TrustedBy />
        <ContentSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;