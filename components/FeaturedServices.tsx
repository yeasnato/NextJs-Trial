'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SERVICES = [
  {
    id: 'ac',
    title: 'AC Service',
    subtitle: 'Installation & Repair',
    image: 'https://ik.imagekit.io/v4mlqlybs/Image/AC.png?updatedAt=1771331451317',
    alt: 'AC repair service Dhaka - Split AC and Window AC installation, servicing, gas refill by Lucky Services Centre',
    targetCategory: 'ac',
  },
  {
    id: 'fridge',
    title: 'Refrigerator',
    subtitle: 'Service & Repair',
    image: 'https://ik.imagekit.io/v4mlqlybs/IMG_0515-removebg-preview.jpg',
    alt: 'Refrigerator repair Dhaka - Fridge gas refill, cooling problem fix, all brands servicing',
    targetCategory: 'fridge',
  },
  {
    id: 'washing',
    title: 'Washing Machine',
    subtitle: 'Full Service',
    image: 'https://ik.imagekit.io/v4mlqlybs/IMG_0516-removebg-preview.jpg',
    alt: 'Washing machine repair Dhaka - Front load and top load washing machine servicing at home',
    targetCategory: 'washing',
  },
  {
    id: 'microwave',
    title: 'Microwave Oven',
    subtitle: 'Repair & Parts',
    image: 'https://ik.imagekit.io/v4mlqlybs/IMG_0517-removebg-preview.jpg',
    alt: 'Microwave oven repair Dhaka - Convection, grill, solo microwave repair service',
    targetCategory: 'microwave',
  },
  {
    id: 'geyser',
    title: 'Geyser',
    subtitle: 'Install & Fix',
    image: 'https://ik.imagekit.io/v4mlqlybs/Image/Gyser.jpg?updatedAt=1771331477846',
    alt: 'Geyser repair Dhaka - Gas geyser and electric water heater installation and repair service',
    targetCategory: 'geyser',
  },
  {
    id: 'hood',
    title: 'Kitchen Hood',
    subtitle: 'Deep Cleaning',
    image: 'https://ik.imagekit.io/v4mlqlybs/Image/Kitchen%20hood.png?updatedAt=1771331342113',
    alt: 'Kitchen hood repair Dhaka - Chimney cleaning, motor repair, exhaust fan servicing',
    targetCategory: 'hood',
  },
];

export const FeaturedServices: React.FC = () => {
  const router = useRouter();

  return (
    <section id="services-section" className="w-full scroll-mt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, idx) => (
          <div
            key={service.id}
            className={`
              flex flex-col items-center justify-center text-center
              py-12 px-6
              border-b border-white/10
              ${idx % 2 === 0 ? 'bg-[#67C3EA]' : 'bg-[#5BBCE5]'}
            `}
          >
            {/* Image Container */}
            <div className="
              bg-white rounded-[2rem] shadow-xl shadow-black/5
              w-64 h-64
              flex items-center justify-center p-6 mb-8
              transition-transform duration-300 hover:scale-105
            ">
              <Image
                src={service.image}
                alt={service.alt}
                width={220}
                height={220}
                className="w-full h-full object-contain drop-shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-extrabold text-[#0B2A4A] mb-2 tracking-tight">
              {service.title}
            </h3>

            {/* Subtitle */}
            <p className="text-[#0B2A4A]/80 font-bold text-sm uppercase tracking-widest mb-8">
              {service.subtitle}
            </p>

            <button
              onClick={() => router.push(`/services/${service.targetCategory}`)}
              className="
                bg-[#0B2A4A] text-white font-bold rounded-xl shadow-lg shadow-blue-900/20
                hover:shadow-xl hover:bg-[#154675] transition-all transform hover:-translate-y-1 active:translate-y-0
                px-10 py-3.5 text-sm uppercase tracking-wide
              "
              aria-label={`Book ${service.title} service`}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
