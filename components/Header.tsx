'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Phone, Menu, X, MapPin, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';

export const Header: React.FC = () => {
  const router = useRouter();
  const { openBooking } = useBooking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navigateHome = () => { router.push('/'); setIsMobileMenuOpen(false); };
  const navigateServices = () => {
    router.push('/');
    setTimeout(() => {
      document.getElementById('services-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setIsMobileMenuOpen(false);
  };
  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const NAV_ITEMS = [
    { label: 'Home',     onClick: navigateHome },
    { label: 'Services', onClick: navigateServices },
    { label: 'Contact',  onClick: scrollToContact },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#0B2A4A] text-white py-2.5 hidden lg:block relative z-50">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={14} className="text-[#2EA9D6]" />
              <span>Section-11, Pallabi, Mirpur, Dhaka</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Clock size={14} className="text-[#2EA9D6]" />
              <span>9:00 AM - 10:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">Trusted by 1000+ Families</span>
            <div className="h-3 w-px bg-gray-700" />
            <a href="tel:01605564270" className="hover:text-[#2EA9D6] transition-colors flex items-center gap-1.5">
              <Phone size={14} className="text-[#2EA9D6]" />
              01605564270
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-gray-200/50 py-3' : 'bg-white border-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={navigateHome}>
            <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-[#0B2A4A] to-[#154675] rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-transform duration-300">
              <span className="font-bold text-white text-xl md:text-2xl">L</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold text-[#0B2A4A] leading-none tracking-tight">LUCKY</span>
              <span className="text-[10px] font-bold text-[#2EA9D6] uppercase tracking-[0.25em] leading-none mt-1">Engineering</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button key={item.label} onClick={item.onClick}
                className="text-sm font-bold text-gray-600 hover:text-[#2EA9D6] transition-colors py-2 relative group">
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#2EA9D6] -translate-x-1/2 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </button>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end border-r border-gray-100 pr-6">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Emergency Call</span>
              <a href="tel:01605564270" className="text-sm font-extrabold text-[#0B2A4A] hover:text-[#2EA9D6] transition-colors">01605564270</a>
            </div>
            <button onClick={() => openBooking()}
              className="bg-[#2EA9D6] hover:bg-[#259ac5] text-white px-7 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2">
              Book Service <ArrowRight size={16} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2.5 text-[#0B2A4A] bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible delay-300'}`}>
        <div className={`absolute inset-0 bg-[#0B2A4A]/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute top-0 right-0 w-[85%] max-w-[320px] h-full bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
            <h2 className="font-extrabold text-[#0B2A4A] text-lg">Menu</h2>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white rounded-full text-gray-400 hover:text-red-500 shadow-sm border border-gray-100 transition-colors">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button key={item.label} onClick={item.onClick}
                className="w-full flex items-center justify-between p-4 rounded-xl text-left font-bold text-[#0B2A4A] hover:bg-blue-50 hover:text-[#2EA9D6] transition-all group">
                {item.label}
                <ChevronRight size={18} className="text-gray-300 group-hover:text-[#2EA9D6]" />
              </button>
            ))}
          </div>
          <div className="p-6 border-t border-gray-100 bg-gray-50/30 space-y-4">
            <button onClick={() => { openBooking(); setIsMobileMenuOpen(false); }}
              className="w-full bg-[#2EA9D6] text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 active:scale-95 transition-transform flex items-center justify-center gap-2">
              Book Service Now
            </button>
            <div className="text-center">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Customer Support</p>
              <a href="tel:01605564270" className="text-xl font-extrabold text-[#0B2A4A]">01605564270</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
