import React from 'react';
import { Phone } from 'lucide-react';

export const FloatingCall: React.FC = () => (
  <a href="tel:+8801605564270"
    className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl bg-[#2EA9D6] text-white hover:bg-[#259ac5] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
    aria-label="Call Lucky Services Centre at 01605564270 for home appliance repair in Dhaka">
    <div className="absolute -top-12 right-0 bg-[#0B2A4A] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Call Expert
    </div>
    <span className="absolute inline-flex h-full w-full rounded-full bg-[#2EA9D6] opacity-30 animate-ping" />
    <Phone size={28} className="relative z-10 fill-current" />
  </a>
);
