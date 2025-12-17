import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Vision: React.FC = () => {
  return (
    <section className="relative py-24 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-lime mb-8">
            What is CoinShares Vision?
          </h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed mb-10">
            We are CoinShares, the leading European alternative asset manager specializing in digital assets. We pioneer innovative financial products and services that provide investors with trust and transparency. Together, we're building the future of investing.
          </p>
          <button className="group px-6 py-3 bg-brand-lime text-brand-black font-semibold rounded-lg flex items-center space-x-2 hover:bg-white transition-all shadow-glow-sm">
            <span>Investor Relations</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Right Column: Abstract 3D Object */}
        <div className="relative h-[500px] flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-brand-lime/20 blur-[100px] rounded-full"></div>
          
          {/* Abstract Image Placeholder simulating 3D object */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <img 
              src="https://picsum.photos/seed/abstract8/800/800" 
              alt="Abstract 3D Form" 
              className="w-full h-full object-cover opacity-80 mix-blend-screen grayscale contrast-125 brightness-75 hover:scale-105 transition-transform duration-1000"
            />
            {/* Overlay to give it the green tint */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-transparent to-brand-lime/10 mix-blend-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};