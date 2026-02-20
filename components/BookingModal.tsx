'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Phone, User, Clock, MessageCircle, FileText, ChevronDown } from 'lucide-react';
import { BookingDetails, ServiceItem } from '@/types';

// ─── Order ID Generator ──────────────────────────────────────────────────────
const generateOrderId = (): string => {
  const now = new Date();
  const year  = String(now.getFullYear()).slice(2);
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day   = String(now.getDate()).padStart(2, '0');
  const rand  = Math.random().toString(36).toUpperCase().slice(2, 6);
  return `LSC-${year}${month}${day}-${rand}`;
};

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: BookingDetails) => void;
  selectedService: ServiceItem | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onSubmit, selectedService }) => {
  const [formData, setFormData] = useState<BookingDetails>({ name: '', phone: '', address: '', date: '', time: '', notes: '' });
  const [orderId, setOrderId] = useState<string>('');

  useEffect(() => {
    if (isOpen) setOrderId(generateOrderId());
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => { if (e.key === 'Escape' && isOpen) onClose(); };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceName = selectedService?.title ?? 'General Inquiry';
    const servicePrice = selectedService
      ? selectedService.price === 'On Inspection' ? 'On Inspection' : `BDT ${selectedService.price}`
      : '';

    const lines: string[] = [
      `*BOOKING REQUEST*`,
      `Order: #${orderId}`,
      ``,
      `*SERVICE*`,
      `Name     : ${serviceName}`,
      ...(servicePrice ? [`Price    : ${servicePrice}`] : []),
      ``,
      `*CUSTOMER*`,
      `Name     : ${formData.name}`,
      `Phone    : ${formData.phone}`,
      `Address  : ${formData.address}`,
      ``,
      `*SCHEDULE*`,
      `Date     : ${formData.date}`,
      `Time     : ${formData.time}`,
      ...(formData.notes.trim() ? [``, `*NOTE*`, formData.notes.trim()] : []),
    ];

    window.open(`https://wa.me/8801605564270?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
      <div className="absolute inset-0 bg-[#0B2A4A]/60 backdrop-blur-sm transition-opacity duration-300" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fade-in-up">

        {/* Header */}
        <div className="bg-[#0B2A4A] px-6 py-5 flex items-center justify-between shrink-0">
          <div>
            <h2 id="booking-modal-title" className="text-xl font-extrabold text-white tracking-tight">
              {selectedService ? 'Book Service' : 'Request Service'}
            </h2>
            <p className="text-[#2EA9D6] text-xs font-bold uppercase tracking-widest mt-1">Lucky Services Centre</p>
          </div>
          {/* Order ID badge */}
          <div className="flex flex-col items-center gap-1 mx-4">
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-widest">Order ID</span>
            <span className="text-xs font-extrabold text-[#2EA9D6] bg-white/10 px-3 py-1 rounded-lg tracking-wider">#{orderId}</span>
          </div>
          <button onClick={onClose} className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors shrink-0" aria-label="Close">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {selectedService && (
            <div className="bg-[#F0F9FC] border border-[#2EA9D6]/20 rounded-2xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Selected Service</p>
                <h3 className="font-bold text-[#0B2A4A]">{selectedService.title}</h3>
              </div>
              <span className="block text-lg font-extrabold text-[#2EA9D6]">
                {typeof selectedService.price === 'number' ? `৳${selectedService.price}` : selectedService.price}
              </span>
            </div>
          )}

          <form id="booking-form" onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-4">
              <label className="block text-sm font-bold text-gray-700">Contact Information</label>

              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2EA9D6] transition-colors"><User size={18} /></div>
                <input required name="name" value={formData.name} onChange={handleChange} placeholder="Your Full Name"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2EA9D6]/20 focus:border-[#2EA9D6] outline-none transition-all font-medium text-[#0B2A4A] placeholder-gray-400" />
              </div>

              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2EA9D6] transition-colors"><Phone size={18} /></div>
                <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Phone Number (e.g. 017...)"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2EA9D6]/20 focus:border-[#2EA9D6] outline-none transition-all font-medium text-[#0B2A4A] placeholder-gray-400" />
              </div>

              <div className="relative group">
                <div className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#2EA9D6] transition-colors"><MapPin size={18} /></div>
                <textarea required name="address" rows={2} value={formData.address} onChange={handleChange} placeholder="House No, Road No, Area..."
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2EA9D6]/20 focus:border-[#2EA9D6] outline-none transition-all resize-none font-medium text-[#0B2A4A] placeholder-gray-400" />
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <label className="block text-sm font-bold text-gray-700">Preferred Schedule</label>
              <div className="flex flex-row gap-3">
                <div className="relative group flex-1 min-w-0">
                  <input required name="date" type="date" min={today} value={formData.date} onChange={handleChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" />
                  <div className={`w-full pl-10 pr-2 py-3.5 bg-gray-50 border border-gray-200 rounded-xl transition-all font-medium text-sm flex items-center min-h-[50px] group-focus-within:bg-white group-focus-within:ring-2 group-focus-within:ring-[#2EA9D6]/20 group-focus-within:border-[#2EA9D6] ${formData.date ? 'text-[#0B2A4A]' : 'text-gray-400'}`}>
                    {formData.date || 'Select Date'}
                  </div>
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2EA9D6] transition-colors pointer-events-none z-10"><Calendar size={18} /></div>
                </div>

                <div className="relative group flex-1 min-w-0">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2EA9D6] transition-colors pointer-events-none z-10"><Clock size={18} /></div>
                  <select required name="time" value={formData.time} onChange={handleChange}
                    className={`w-full pl-10 pr-8 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2EA9D6]/20 focus:border-[#2EA9D6] outline-none transition-all font-medium appearance-none text-sm truncate min-h-[50px] ${!formData.time ? 'text-gray-400' : 'text-[#0B2A4A]'}`}>
                    <option value="" disabled>Time</option>
                    <option value="Morning (9AM - 12PM)">Morning (9-12)</option>
                    <option value="Afternoon (12PM - 4PM)">Afternoon (12-4)</option>
                    <option value="Evening (4PM - 8PM)">Evening (4-8)</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <div className="relative group">
                <div className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-[#2EA9D6] transition-colors"><FileText size={18} /></div>
                <textarea name="notes" rows={2} value={formData.notes} onChange={handleChange} placeholder="Any specific issues or instructions? (Optional)"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#2EA9D6]/20 focus:border-[#2EA9D6] outline-none transition-all resize-none font-medium text-[#0B2A4A] placeholder-gray-400" />
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0">
          <button type="submit" form="booking-form"
            className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl font-bold shadow-lg shadow-green-200 transform active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-base">
            <MessageCircle size={20} className="fill-white" />
            Confirm via WhatsApp
          </button>
          <p className="text-center text-[10px] text-gray-400 mt-3 font-medium">
            No payment required now. You pay after service completion.
          </p>
        </div>
      </div>
    </div>
  );
};
