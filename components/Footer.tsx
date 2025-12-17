import React from 'react';
import { Send, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black relative pt-24 pb-12 overflow-hidden border-t border-white/5">
      
      {/* Background Grid Effect for Footer */}
      <div className="absolute inset-x-0 bottom-0 h-[400px] bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 mask-image-gradient-b pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Newsletter CTA */}
        <div className="flex flex-col items-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
            <span className="text-brand-lime">Let's Connect with</span> <span className="text-white">CoinShares</span>
          </h2>
          
          <div className="w-full max-w-xl flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white/5 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-lime focus:ring-1 focus:ring-brand-lime transition-all"
            />
            <button className="px-8 py-4 bg-brand-lime text-brand-black font-bold rounded-lg flex items-center justify-center space-x-2 hover:bg-white transition-colors">
              <span>Submit</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold text-white mb-4">CoinShares</h3>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              Join us to shape the future of open source software together.
            </p>
            <p className="text-gray-600 text-xs">
              All Copyright @coinshares
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2 md:col-start-7">
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-lime uppercase tracking-wider font-medium">Contact Us</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-lime uppercase tracking-wider font-medium">Careers</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
           <div className="md:col-span-2">
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-lime uppercase tracking-wider font-medium">Risk Policy</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-lime uppercase tracking-wider font-medium">Privacy Policy</a></li>
            </ul>
          </div>

           {/* Links Column 3 */}
           <div className="md:col-span-2">
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-lime uppercase tracking-wider font-medium">Disclaimer</a></li>
              <li><a href="#" className="text-sm text-gray-400 hover:text-brand-lime uppercase tracking-wider font-medium">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Social Icons */}
        <div className="flex justify-end mt-12 space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
        </div>

      </div>
    </footer>
  );
};