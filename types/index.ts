export interface ServiceItem {
  id: string;
  title: string;
  price: number | 'On Inspection';
  type: 'service' | 'repair';
  category: string;
  popular?: boolean;
  description?: string;
}

export interface BookingDetails {
  name: string;
  phone: string;
  address: string;
  date: string;
  time: string;
  notes: string;
}
