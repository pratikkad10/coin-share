import React from 'react';

export const Services: React.FC = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      {/* Light Effect */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-lime/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left: Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-brand-lime mb-4">Our Services</h2>
          <p className="text-gray-400 mb-12 max-w-md">
            Our Capital Markets service offers expert guidance and execution in navigating the complexities of global financial markets.
          </p>

          <div className="space-y-6">
            {/* Highlighted Service */}
            <div className="p-8 border border-brand-lime/60 rounded-xl bg-brand-lime/5 shadow-glow-sm relative overflow-hidden group transition-all hover:bg-brand-lime/10">
              <div className="absolute top-0 left-0 w-1 h-full bg-brand-lime"></div>
              <h3 className="text-2xl font-bold text-brand-lime mb-4">Hedge Fund Solutions</h3>
              <p className="text-gray-300 font-light leading-relaxed">
                Our actively managed funds are meticulously steered by an expert team of seasoned traders, who harness their extensive market experience and sophisticated insights to implement a variety of dynamic strategies.
              </p>
            </div>

            {/* Other Services */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 p-6 border border-white/10 rounded-xl hover:border-white/30 text-left text-xl font-medium text-white transition-colors bg-white/5">
                Ventures
              </button>
              <button className="flex-1 p-6 border border-white/10 rounded-xl hover:border-white/30 text-left text-xl font-medium text-white transition-colors bg-white/5">
                Capital Markets
              </button>
            </div>
          </div>
        </div>

        {/* Right: Abstract 3D Cube */}
        <div className="flex items-center justify-center relative">
          <div className="relative w-full aspect-square max-w-[500px]">
             {/* Use a placeholder that looks like glass/crystal */}
             <img 
              src="https://picsum.photos/seed/glasscube/800/800" 
              alt="Abstract Glass Cube" 
              className="w-full h-full object-cover rounded-3xl opacity-90 shadow-2xl grayscale contrast-125 brightness-110"
             />
             <div className="absolute inset-0 bg-brand-lime/10 mix-blend-overlay rounded-3xl ring-1 ring-white/10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};