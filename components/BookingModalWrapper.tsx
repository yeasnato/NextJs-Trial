'use client';

import { useBooking } from '@/contexts/BookingContext';
import { BookingModal } from './BookingModal';

export function BookingModalWrapper() {
  const { isOpen, selectedService, closeBooking, handleBookingSubmit } = useBooking();
  return (
    <BookingModal
      isOpen={isOpen}
      onClose={closeBooking}
      onSubmit={handleBookingSubmit}
      selectedService={selectedService}
    />
  );
}
