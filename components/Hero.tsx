import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Texture & Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900 via-brand-black to-brand-black opacity-80"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
        {/* Top Center Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-lime/10 blur-[120px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-8">
          <span className="text-white">Building the future of</span><br />
          <span className="text-brand-lime drop-shadow-lg">investing with CoinShares</span>
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 font-light">
          We provide a secure, feature-rich platform that simplifies the investment process and opens the door to new possibilities in the crypto market.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="group relative px-8 py-4 bg-brand-lime text-brand-black font-semibold rounded-lg flex items-center space-x-2 hover:bg-white transition-all duration-300 shadow-glow hover:shadow-glow-sm">
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            <span>Get Started</span>
          </button>

          <button className="group px-8 py-4 bg-brand-dark border border-brand-lime/30 text-white font-semibold rounded-lg flex items-center space-x-2 hover:border-brand-lime hover:bg-brand-gray transition-all duration-300">
            <BookOpen className="w-5 h-5 text-brand-lime" />
            <span>Our Story</span>
          </button>
        </div>
      </div>
    </section>
  );
};