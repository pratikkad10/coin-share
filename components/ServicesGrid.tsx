import React from 'react';

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-lime mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
             Expanding on our capabilities to drive the future of finance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <div className="group relative bg-brand-dark p-8 rounded-3xl border border-white/5 hover:border-brand-lime/50 transition-all duration-500 overflow-hidden h-[400px]">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Hedge Fund Solutions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our actively managed funds are meticulously steered by an expert team of seasoned traders, who harness their extensive market experience and sophisticated insights.
              </p>
            </div>
            <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 opacity-40 group-hover:opacity-60 transition-opacity">
               <img src="https://picsum.photos/seed/poly1/400/400" className="w-full h-full object-cover rounded-full grayscale mix-blend-lighten" alt="abstract" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-brand-dark p-8 rounded-3xl border border-white/5 hover:border-brand-lime/50 transition-all duration-500 overflow-hidden h-[400px]">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Ventures</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We find, empower and grow the new category leaders of the world's emerging digital finance ecosystem. Our team invests in cutting-edge technology pioneers.
              </p>
            </div>
             <div className="absolute bottom-[-20px] right-[-20px] w-64 h-64 opacity-40 group-hover:opacity-60 transition-opacity">
               <img src="https://picsum.photos/seed/poly2/400/400" className="w-full h-full object-cover rounded-lg grayscale mix-blend-lighten" alt="abstract" />
            </div>
          </div>

          {/* Card 3 (Wide) */}
          <div className="md:col-span-2 group relative bg-brand-dark p-8 rounded-3xl border border-white/5 hover:border-brand-lime/50 transition-all duration-500 overflow-hidden min-h-[350px] flex flex-col md:flex-row md:items-center">
            <div className="relative z-10 md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-4">Capital Markets</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our experienced capital markets team provide a sophisticated foundation for Exchange Traded Products, blending high-performance hedging, Delta arbitrage, and yield enhancement strategies.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full opacity-30 group-hover:opacity-50 transition-opacity">
                 <img src="https://picsum.photos/seed/poly3/800/400" className="w-full h-full object-cover grayscale mix-blend-lighten mask-image-gradient" alt="abstract" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};