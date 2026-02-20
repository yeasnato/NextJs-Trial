'use client';

import React, { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft, Snowflake, Thermometer, Waves, Zap, Flame, Fan,
  Droplets, Wind, Wrench, Settings, Disc, Power,
  ShieldCheck, Clock, CheckCircle, Award, Star, Quote, ChevronRight
} from 'lucide-react';
import { ServiceItem } from '@/types';
import { ALL_SERVICES } from '@/data/services';
import { useBooking } from '@/contexts/BookingContext';

const TRUST_FEATURES = [
  { icon: ShieldCheck, title: 'Verified Experts',  desc: 'Background checked & certified technicians.' },
  { icon: Clock,       title: 'Same-Day Fix',      desc: '2-4 hour arrival window for urgent repairs.' },
  { icon: CheckCircle, title: 'Genuine Parts',     desc: '100% original spare parts with warranty.'    },
  { icon: Award,       title: '45 Days Warranty',  desc: 'Free rework if issues persist within 45 days.'},
];

const STATS = [
  { value: '500+', label: 'Happy Customers' },
  { value: '8+',   label: 'Years Experience' },
  { value: '45 Days', label: 'Warranty'       },
];

const REVIEWS = [
  { name: 'Fatema Khatun', role: 'Fridge Repair • Dhanmondi', initial: 'F',
    text: 'আমার ফ্রিজ ঠান্ডা হচ্ছিল না। Lucky Services এর টেকনিশিয়ান এসে একদিনেই ঠিক করে দিলেন। অসাধারণ সার্ভিস!' },
  { name: 'Kamal Hassan',  role: 'Washing Machine • Uttara',  initial: 'K',
    text: 'Very professional service. They fixed my washing machine the same day. Highly recommended!' },
  { name: 'Razia Begum',   role: 'AC Service • Banani',       initial: 'R',
    text: 'Excellent AC servicing. Technician was on time and very skilled. Fair pricing too.' },
];

interface ServiceListsProps { activeCategory: string; }

export const ServiceLists: React.FC<ServiceListsProps> = ({ activeCategory }) => {
  const router = useRouter();
  const { openBooking } = useBooking();

  const filteredServices = useMemo(
    () => ALL_SERVICES.filter(s => activeCategory === 'all' || s.category === activeCategory),
    [activeCategory]
  );

  const getCategoryTitle = () => {
    const map: Record<string, string> = { ac: 'AC Services', fridge: 'Refrigerator Services', washing: 'Washing Machine', microwave: 'Microwave Oven', geyser: 'Geyser', hood: 'Kitchen Hood' };
    return map[activeCategory] ?? 'All Services';
  };

  const getServiceIcon = (service: ServiceItem) => {
    const t = service.title.toLowerCase();
    if (t.includes('jet wash') || t.includes('water')) return <Droplets size={24} />;
    if (t.includes('gas'))        return <Wind size={24} />;
    if (t.includes('circuit') || t.includes('magnetron') || t.includes('capacitor')) return <Zap size={24} />;
    if (t.includes('install') || t.includes('shifting') || t.includes('leak') || t.includes('hanging')) return <Wrench size={24} />;
    if (t.includes('compressor') || t.includes('motor')) return <Disc size={24} />;
    if (t.includes('checkup') || t.includes('service')) return <Settings size={24} />;
    const cat: Record<string, React.ReactNode> = { ac: <Snowflake size={24} />, fridge: <Thermometer size={24} />, washing: <Waves size={24} />, microwave: <Zap size={24} />, geyser: <Flame size={24} />, hood: <Fan size={24} /> };
    return cat[service.category] ?? <Power size={24} />;
  };

  return (
    <div className="w-full bg-gray-50 pb-24 pt-8 min-h-screen">
      <div className="max-w-3xl mx-auto px-4">

        {/* Back + Title */}
        <div className="mb-8 flex items-center gap-4">
          <button onClick={() => router.push('/')}
            className="p-3 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-[#0B2A4A] hover:border-[#2EA9D6] transition-all shadow-sm group"
            aria-label="Go Back">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h1 className="text-2xl font-extrabold text-[#0B2A4A] tracking-tight">{getCategoryTitle()}</h1>
            <p className="text-gray-500 text-sm font-medium">Professional repair & maintenance</p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="space-y-4">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-gray-400 font-medium">No services available in this category.</p>
            </div>
          ) : filteredServices.map((service) => (
            <div key={service.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#2EA9D6]/30 transition-all duration-300 group cursor-pointer"
              onClick={() => openBooking(service)}
              role="button" tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openBooking(service)}>
              <div className="flex gap-5 items-start">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300
                  ${service.popular ? 'bg-[#2EA9D6] text-white shadow-lg shadow-blue-200' : 'bg-[#F0F9FC] text-[#2EA9D6] group-hover:bg-[#2EA9D6] group-hover:text-white'}`}>
                  {getServiceIcon(service)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h2 className="font-bold text-[#0B2A4A] text-base md:text-lg leading-tight group-hover:text-[#2EA9D6] transition-colors">
                        {service.title}
                      </h2>
                      {service.popular && (
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-orange-100 text-orange-600 uppercase tracking-wider mt-1.5">Popular</span>
                      )}
                      <p className="text-gray-500 text-xs md:text-sm mt-1.5 leading-relaxed">{service.description || 'Professional service with warranty.'}</p>
                    </div>
                    <div className="flex flex-col items-end shrink-0">
                      <span className="block text-lg font-extrabold text-[#0B2A4A]">
                        {typeof service.price === 'number' ? `৳${service.price}` : service.price}
                      </span>
                      {typeof service.price === 'number' && (
                        <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Starting from</span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-50 flex justify-end">
                    <button className="flex items-center gap-2 text-xs font-bold text-white bg-[#0B2A4A] group-hover:bg-[#2EA9D6] transition-colors px-5 py-2.5 rounded-xl shadow-md active:scale-95">
                      Book Now <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2A4A] mb-3 leading-tight">
              Why Dhaka Residents <br /><span className="text-[#2EA9D6]">Trust Our Service</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
              We don't just fix appliances; we respect your time and trust. Our certified technicians arrive prepared.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TRUST_FEATURES.map((f, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="p-3 bg-[#F0F9FC] rounded-xl shrink-0"><f.icon size={24} className="text-[#2EA9D6]" /></div>
                <div>
                  <h3 className="font-bold text-[#0B2A4A] text-base mb-1">{f.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 md:gap-6">
            {STATS.map((s, i) => (
              <div key={i} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:border-[#2EA9D6]/30 transition-colors">
                <span className="block text-2xl md:text-3xl font-extrabold text-[#0B2A4A] mb-1">{s.value}</span>
                <span className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-20 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2A4A] mb-2">Client Stories</h2>
            <p className="text-gray-500 text-sm">See why homeowners across Dhaka recommend us.</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {REVIEWS.map((r, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm relative group hover:shadow-lg transition-all duration-300">
                <Quote className="absolute top-6 right-6 text-gray-100 w-8 h-8 md:w-10 md:h-10 fill-current group-hover:text-[#2EA9D6]/10 transition-colors" />
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#F59E0B] text-[#F59E0B]" />)}</div>
                <p className="text-gray-600 italic text-base md:text-lg mb-6 leading-relaxed">"{r.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F0F9FC] flex items-center justify-center text-[#2EA9D6] font-bold text-lg border-2 border-white shadow-sm">{r.initial}</div>
                  <div>
                    <h4 className="font-bold text-[#0B2A4A] text-sm md:text-base">{r.name}</h4>
                    <p className="text-xs text-gray-400 font-medium">{r.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
