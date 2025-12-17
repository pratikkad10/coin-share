import React from 'react';
import { ArrowRight, Activity, BarChart2, ShieldCheck } from 'lucide-react';

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-2">
             <h2 className="text-4xl md:text-5xl font-bold text-brand-lime mb-6">Trusted Today and Tomorrow</h2>
             <p className="text-lg text-gray-400 font-light max-w-2xl">
              We're a trusted partner to institutions, family offices and high net worth investors worldwide, enabling them to access and navigate the digital asset market.
             </p>
             <button className="mt-8 px-6 py-3 bg-brand-lime text-brand-black font-semibold rounded-lg flex items-center space-x-2 hover:bg-white transition-all">
                <span>More on Capital Markets</span>
                <ArrowRight className="w-4 h-4" />
             </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-brand-dark border border-white/5 rounded-xl p-8 h-80 flex flex-col relative group hover:border-brand-lime/30 transition-all">
            <div className="flex justify-center mb-8 opacity-60 group-hover:opacity-100 transition-opacity text-brand-lime">
              <ShieldCheck size={64} strokeWidth={1} />
            </div>
            <div className="mt-auto">
              <div className="flex justify-between items-end mb-2">
                <span className="text-white font-bold text-lg">Seamless Support</span>
                <span className="text-gray-600 font-mono">01/03</span>
              </div>
              <p className="text-gray-400 text-sm">Our trading, engineering and compliance specialists offer complete support, advice and solutions.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-brand-dark border border-white/5 rounded-xl p-8 h-80 flex flex-col relative group hover:border-brand-lime/30 transition-all">
            <div className="flex justify-center mb-8 opacity-60 group-hover:opacity-100 transition-opacity text-white">
               <BarChart2 size={64} strokeWidth={1} />
            </div>
            <div className="mt-auto">
               <div className="flex justify-between items-end mb-2">
                <span className="text-white font-bold text-lg">On-time Execution</span>
                <span className="text-gray-600 font-mono">02/03</span>
              </div>
              <p className="text-gray-400 text-sm">We can tailor programmatic execution to meet the most specific and exacting timeframes.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-brand-dark border border-white/5 rounded-xl p-8 h-80 flex flex-col relative group hover:border-brand-lime/30 transition-all">
            <div className="flex justify-center mb-8 opacity-60 group-hover:opacity-100 transition-opacity text-gray-300">
              <Activity size={64} strokeWidth={1} />
            </div>
            <div className="mt-auto">
               <div className="flex justify-between items-end mb-2">
                <span className="text-white font-bold text-lg">Liquidity Delivered</span>
                <span className="text-gray-600 font-mono">03/03</span>
              </div>
              <p className="text-gray-400 text-sm">Our liquidity provisioning services cover a variety of secondary electronic markets.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};