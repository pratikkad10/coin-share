import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from '../types';

const links: NavLink[] = [
  { label: 'Products & Services', href: '#' },
  { label: 'How it works', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Testimonial', href: '#' },
  { label: 'Investor Relations', href: '#' },
  { label: 'Contact', href: '#' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Top Row: Logo & Mobile Toggle */}
        <div className="w-full flex justify-between items-center md:justify-center relative">
          <div className="text-2xl font-bold tracking-tight text-white cursor-pointer hover:text-brand-lime transition-colors">
            CoinShares
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-col items-center mt-4 space-y-4">
          <div className="flex space-x-8">
            {links.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Transparency Tag */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-black border border-gray-800 shadow-lg">
            <span className="text-[10px] uppercase tracking-wider font-bold text-white">100% Transparent</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark p-6 border-b border-gray-800">
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-lg text-gray-300 hover:text-brand-lime"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};