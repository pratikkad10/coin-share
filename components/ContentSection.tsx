import React from 'react';
import { ArrowRight, Bitcoin, Coins, Wallet, ArrowUpRight } from 'lucide-react';

export const ContentSection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black relative">
       {/* Top ambient glow */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-brand-lime/5 blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-brand-lime">Our view of the new</span> <span className="text-white">financial world</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: ETH */}
          <div className="bg-brand-dark rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="h-48 bg-brand-lime flex flex-col items-center justify-center p-6 text-brand-black">
              <span className="text-4xl font-bold mb-4">ETH</span>
              <div className="flex space-x-4">
                <Bitcoin className="w-6 h-6 bg-white rounded-full p-1" />
                <Coins className="w-6 h-6 bg-white rounded-full p-1" />
                <Wallet className="w-6 h-6 bg-white rounded-full p-1" />
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wide">
                <span>14th Aug 2024</span>
                <span>John Smith</span>
              </div>
              <h3 className="text-xl font-bold text-white">The Investment Case for Ethereum</h3>
            </div>
          </div>

          {/* Card 2: Fund Flows */}
          <div className="bg-brand-dark rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="h-48 bg-indigo-200 flex flex-col items-center justify-center p-6 text-black">
              <span className="text-5xl font-bold mb-2">175.6m</span>
              <span className="text-sm font-bold uppercase tracking-wide opacity-80">Fund Flows</span>
              <span className="text-xs opacity-60">Week 32 - Aug 2024</span>
            </div>
            <div className="p-8">
              <div className="flex justify-between text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wide">
                <span>14th Aug 2024</span>
                <span>John Deo</span>
              </div>
              <h3 className="text-xl font-bold text-white">Digital Asset Fund Flows | August 12th 24</h3>
            </div>
          </div>

          {/* Card 3: Market Update */}
          <div className="bg-brand-dark rounded-2xl overflow-hidden hover:transform hover:-translate-y-2 transition-transform duration-300">
            <div className="h-48 bg-orange-600 p-6 flex flex-col justify-between relative">
              <div className="absolute top-6 right-6">
                <ArrowUpRight className="text-white w-6 h-6" />
              </div>
              <span className="text-white font-medium">CoinShares</span>
              <span className="text-3xl font-bold text-white text-right">Market<br/>Update</span>
            </div>
            <div className="p-8">
               <div className="flex justify-between text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wide">
                <span>14th Aug 2024</span>
                <span>CoinShares</span>
              </div>
              <h3 className="text-xl font-bold text-white">Market Update - August 2nd 2024</h3>
            </div>
          </div>

        </div>

        <div className="flex justify-center">
          <button className="px-8 py-3 bg-brand-lime text-brand-black font-semibold rounded-lg flex items-center space-x-2 hover:bg-white transition-all shadow-glow-sm">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};