'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Phone, Facebook, Instagram, Linkedin, Twitter, ChevronRight, ShieldCheck } from 'lucide-react';

const SERVICE_LINKS = [
  { label: 'AC Service',       id: 'ac'        },
  { label: 'Refrigerator',     id: 'fridge'    },
  { label: 'Washing Machine',  id: 'washing'   },
  { label: 'Microwave Oven',   id: 'microwave' },
  { label: 'Geyser Repair',    id: 'geyser'    },
  { label: 'Kitchen Hood',     id: 'hood'      },
];

export const Footer: React.FC = () => {
  const router = useRouter();

  return (
    <footer className="bg-[#0B2A4A] text-white border-t-4 border-[#2EA9D6] font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
              <div className="w-11 h-11 bg-gradient-to-br from-[#2EA9D6] to-[#154675] rounded-xl flex items-center justify-center shadow-lg shadow-black/20">
                <span className="font-bold text-white text-2xl">L</span>
              </div>
              <div>
                <h2 className="text-xl font-extrabold leading-none tracking-tight">LUCKY</h2>
                <p className="text-[10px] font-bold text-[#2EA9D6] uppercase tracking-[0.25em] mt-1">Services Centre</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dhaka's most trusted home appliance repair service. Professional expertise right to your doorstep with guaranteed satisfaction.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#2EA9D6] border border-white/10 hover:border-[#2EA9D6] flex items-center justify-center transition-all duration-300 text-gray-300 hover:text-white hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              Our Services <span className="h-1 w-8 bg-[#2EA9D6] rounded-full" />
            </h3>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.id}>
                  <button onClick={() => router.push(`/services/${link.id}`)}
                    className="group flex items-center gap-2 text-gray-400 hover:text-[#2EA9D6] transition-colors text-sm font-medium w-full text-left">
                    <ChevronRight size={14} className="text-[#2EA9D6] opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                    <span className="transform group-hover:translate-x-1 transition-transform">{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              Company <span className="h-1 w-8 bg-[#2EA9D6] rounded-full" />
            </h3>
            <ul className="space-y-3">
              <li><button onClick={() => router.push('/')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About Us</button></li>
              <li><button onClick={() => router.push('/services/ac')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">All Services</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Terms & Conditions</button></li>
              <li><button className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Privacy Policy</button></li>
            </ul>
          </div>

          {/* Contact Card */}
          <div>
            <div className="bg-[#153859] rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Phone size={80} />
              </div>
              <h4 className="text-white font-bold mb-1 relative z-10">Need Urgent Help?</h4>
              <p className="text-[#2EA9D6] text-xs font-medium mb-4 uppercase tracking-wider relative z-10">24/7 Support Available</p>
              <a href="tel:+8801605564270"
                className="block text-2xl font-extrabold text-white mb-4 hover:text-[#2EA9D6] transition-colors relative z-10">
                01605564270
              </a>
              <div className="space-y-3 relative z-10">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#2EA9D6] mt-1 shrink-0" />
                  <p className="text-gray-300 text-xs leading-relaxed">Mirpur, Dhaka, Bangladesh</p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck size={16} className="text-[#25D366] mt-1 shrink-0" />
                  <p className="text-gray-300 text-xs leading-relaxed">Working Hours: Mon–Sat, 9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p className="text-gray-500 text-xs text-center md:text-left">
              &copy; {new Date().getFullYear()} Lucky Services Centre. All rights reserved.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#153859] rounded-full border border-[#2EA9D6]/30 shadow-sm">
              <ShieldCheck size={14} className="text-[#25D366]" />
              <span className="text-[10px] font-bold text-gray-200 tracking-widest uppercase">Verified Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
