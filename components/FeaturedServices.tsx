'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Snowflake, Thermometer, Waves, Zap, Flame, Fan, ChevronRight } from 'lucide-react';
import { useBooking } from '@/contexts/BookingContext';

const FEATURED_SERVICES = [
  { id: 'ac',        title: 'AC Service',        subtitle: 'Repair, Gas & Install', icon: Snowflake,   from: 399,  color: 'from-sky-500 to-cyan-400',      light: 'bg-sky-50',   ring: 'ring-sky-200'   },
  { id: 'fridge',    title: 'Refrigerator',       subtitle: 'Repair & Servicing',   icon: Thermometer, from: 350,  color: 'from-blue-500 to-indigo-400',    light: 'bg-blue-50',  ring: 'ring-blue-200'  },
  { id: 'washing',   title: 'Washing Machine',    subtitle: 'Repair & Full Service', icon: Waves,       from: 450,  color: 'from-teal-500 to-emerald-400',   light: 'bg-teal-50',  ring: 'ring-teal-200'  },
  { id: 'microwave', title: 'Microwave Oven',     subtitle: 'All Types & Brands',    icon: Zap,         from: 350,  color: 'from-violet-500 to-purple-400',  light: 'bg-violet-50',ring: 'ring-violet-200'},
  { id: 'geyser',    title: 'Geyser',             subtitle: 'Install & Repair',      icon: Flame,       from: 350,  color: 'from-orange-500 to-amber-400',   light: 'bg-orange-50',ring: 'ring-orange-200'},
  { id: 'hood',      title: 'Kitchen Hood',       subtitle: 'Deep Clean & Repair',   icon: Fan,         from: 350,  color: 'from-rose-500 to-pink-400',      light: 'bg-rose-50',  ring: 'ring-rose-200'  },
];

export const FeaturedServices: React.FC = () => {
  const router = useRouter();
  const { openBooking } = useBooking();

  return (
    <section id="services-section" className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#F0F9FC] text-[#2EA9D6] text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-4 border border-[#2EA9D6]/20">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0B2A4A] mb-4 tracking-tight leading-tight">
            Expert Repair for Every<br className="hidden md:block" /> Home Appliance
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Certified technicians. Genuine parts. 45-day warranty. All Dhaka.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {FEATURED_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id}
                className={`group relative bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-1 ring-0 hover:${service.ring}`}
                onClick={() => router.push(`/services/${service.id}`)}>

                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`w-12 h-12 md:w-14 md:h-14 ${service.light} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-[#2EA9D6]" size={24} />
                </div>

                {/* Text */}
                <h3 className="font-extrabold text-[#0B2A4A] text-sm md:text-base leading-tight mb-1 group-hover:text-[#2EA9D6] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3 font-medium">{service.subtitle}</p>
                <p className="text-[#2EA9D6] font-extrabold text-sm md:text-base">From ৳{service.from}</p>

                {/* Book Now button */}
                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                  <button
                    onClick={(e) => { e.stopPropagation(); openBooking(); }}
                    className="text-xs font-bold text-white bg-[#0B2A4A] group-hover:bg-[#2EA9D6] transition-colors px-4 py-2 rounded-xl shadow-sm active:scale-95">
                    Book Now
                  </button>
                  <ChevronRight size={16} className="text-gray-300 group-hover:text-[#2EA9D6] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => router.push('/services/ac')}
            className="inline-flex items-center gap-2 bg-[#0B2A4A] hover:bg-[#154675] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-gray-200 transition-all transform hover:-translate-y-0.5 active:translate-y-0">
            View All Services
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
