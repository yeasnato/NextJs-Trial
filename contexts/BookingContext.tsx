'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { ServiceItem, BookingDetails } from '@/types';

interface BookingContextType {
  isOpen: boolean;
  selectedService: ServiceItem | null;
  openBooking: (service?: ServiceItem) => void;
  closeBooking: () => void;
  handleBookingSubmit: (details: BookingDetails) => void;
}

const BookingContext = createContext<BookingContextType | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const openBooking = useCallback((service?: ServiceItem) => {
    setSelectedService(service ?? null);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => {
    setIsOpen(false);
    setSelectedService(null);
  }, []);

  const handleBookingSubmit = useCallback((_details: BookingDetails) => {
    setIsOpen(false);
    setSelectedService(null);
  }, []);

  return (
    <BookingContext.Provider value={{ isOpen, selectedService, openBooking, closeBooking, handleBookingSubmit }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
}
