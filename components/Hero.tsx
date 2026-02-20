'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { MapPin, ChevronLeft, ChevronRight, CheckCircle, XCircle, Search } from 'lucide-react';

const IMAGES = [
  { src: 'https://ik.imagekit.io/v4mlqlybs/IMG_0493.png', alt: 'Lucky Services Centre AC Repair Service Mirpur Dhaka' },
  { src: 'https://ik.imagekit.io/v4mlqlybs/IMG_0492.png', alt: 'Home Appliance Repair Service Dhaka — Refrigerator Washing Machine Repair' },
  { src: 'https://ik.imagekit.io/v4mlqlybs/IMG_0494.png?updatedAt=1771305704469', alt: 'Professional Appliance Technician Mirpur Dhaka — Lucky Services Centre' },
];

const SUPPORTED_AREAS = [
  'dhaka','mirpur','uttara','banani','gulshan','dhanmondi',
  'mohammadpur','bashundhara','pallabi','cantonment','baridhara',
  'nikunja','khilkhet','badda','rampura','malibagh','mogbazar',
  'farmgate','tejgaon','shyamoli','adabor','kafrul',
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [areaInput, setAreaInput] = useState('');
  const [availabilityStatus, setAvailabilityStatus] = useState<'idle' | 'available' | 'unavailable'>('idle');

  const nextSlide = useCallback(() => setCurrentSlide((p) => (p + 1) % IMAGES.length), []);
  const prevSlide = useCallback(() => setCurrentSlide((p) => (p - 1 + IMAGES.length) % IMAGES.length), []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const checkAvailability = () => {
    if (!areaInput.trim()) return;
    const isAvailable = SUPPORTED_AREAS.some((a) => areaInput.toLowerCase().includes(a));
    setAvailabilityStatus(isAvailable ? 'available' : 'unavailable');
  };

  return (
    <div className="relative flex flex-col items-center bg-white">
      <h1 className="sr-only">Lucky Services Centre - Home Appliance Repair Service in Mirpur Dhaka - AC Repair, Refrigerator Repair, Washing Machine Repair, Microwave Oven Repair, Geyser Repair, Kitchen Hood Repair</h1>

      {/* Slider */}
      <div className="w-full h-[200px] md:h-[350px] lg:h-[500px] xl:h-[600px] relative group overflow-hidden bg-white">
        {IMAGES.map((img, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain object-center"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              sizes="100vw"
            />
          </div>
        ))}

        <button onClick={prevSlide}
          className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md p-2 md:p-3 rounded-full text-[#0B2A4A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105 shadow-sm border border-white/20"
          aria-label="Previous Slide">
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <button onClick={nextSlide}
          className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-md p-2 md:p-3 rounded-full text-[#0B2A4A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform hover:scale-105 shadow-sm border border-white/20"
          aria-label="Next Slide">
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>

        <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {IMAGES.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${idx === currentSlide ? 'bg-[#2EA9D6] w-8' : 'bg-[#2EA9D6]/30 w-2 hover:bg-[#2EA9D6]/50'}`}
              aria-label={`Go to slide ${idx + 1}`} />
          ))}
        </div>
      </div>

      {/* Area Checker */}
      <div className="w-full px-4 md:px-6 relative z-20 -mt-8 md:-mt-16 mb-12">
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-6 md:p-8 border border-gray-100 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-[#0B2A4A] mb-2">Service Availability</h2>
            <p className="text-gray-500 text-sm">Check if our experts are available in your area.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-3">
            <div className="relative flex-1 group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2EA9D6] transition-colors">
                <MapPin size={20} />
              </div>
              <input type="text" value={areaInput}
                onChange={(e) => { setAreaInput(e.target.value); setAvailabilityStatus('idle'); }}
                onKeyDown={(e) => e.key === 'Enter' && checkAvailability()}
                placeholder="Enter your location (e.g. Mirpur)"
                aria-label="Enter your location to check service availability"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2EA9D6]/20 focus:border-[#2EA9D6] outline-none text-base text-[#0B2A4A] placeholder-gray-400 transition-all"
              />
            </div>
            <button onClick={checkAvailability}
              className="bg-[#0B2A4A] text-white px-8 py-3.5 rounded-xl hover:bg-[#0f355c] transition-colors shadow-lg shadow-gray-200 font-semibold text-sm md:text-base flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap">
              <Search size={18} /> Check Now
            </button>
          </div>

          <div className={`overflow-hidden transition-all duration-300 ease-out ${availabilityStatus !== 'idle' ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}`}>
            {availabilityStatus === 'available' && (
              <div className="p-3 bg-green-50/50 border border-green-100 text-green-700 text-sm font-medium rounded-xl flex items-center justify-center gap-2">
                <CheckCircle size={16} className="text-green-600" />
                <span>Service is available in your area.</span>
              </div>
            )}
            {availabilityStatus === 'unavailable' && (
              <div className="p-3 bg-red-50/50 border border-red-100 text-red-700 text-sm font-medium rounded-xl flex items-center justify-center gap-2">
                <XCircle size={16} className="text-red-600" />
                <span>Currently unavailable in this area.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
