import { ServiceItem } from '@/types';

export const ALL_SERVICES: ServiceItem[] = [
  // --- AC Services ---
  { 
    id: 'ac-checkup', 
    title: 'AC Basic Servicing (1-1.5 Ton)', 
    price: 399, 
    type: 'service', 
    category: 'ac', 
    description: 'Basic cleaning and health checkup.' 
  },
  { 
    id: 'ac-jet', 
    title: 'AC Jet Wash (1-1.5 Ton)', 
    price: 950, 
    type: 'service', 
    category: 'ac', 
    popular: true, 
    description: 'Deep cleaning with high pressure jet.' 
  },
  { 
    id: 'ac-master', 
    title: 'AC Master Wash (1-1.5 Ton)', 
    price: 1600, 
    type: 'service', 
    category: 'ac', 
    description: 'Complete dismantling and cleaning of indoor/outdoor units.' 
  },
  { 
    id: 'ac-water', 
    title: 'Water Drop Solution (1-1.5 Ton)', 
    price: 900, 
    type: 'repair', 
    category: 'ac', 
    description: 'Fixing water leakage from indoor unit.' 
  },
  { 
    id: 'ac-hanging', 
    title: 'Hanging Charge', 
    price: 300, 
    type: 'service', 
    category: 'ac', 
    description: 'Up to 8th floor.' 
  },
  { 
    id: 'ac-shifting', 
    title: 'AC Shifting (1-1.5 Ton)', 
    price: 4000, 
    type: 'service', 
    category: 'ac', 
    description: 'Professional shifting (Dismantle + Installation).' 
  },
  { 
    id: 'ac-install', 
    title: 'AC Installation (1-1.5 Ton)', 
    price: 2200, 
    type: 'service', 
    category: 'ac', 
    description: 'Installation of Split AC unit.' 
  },
  { 
    id: 'ac-uninstall', 
    title: 'AC Uninstallation (1-1.5 Ton)', 
    price: 1800, 
    type: 'service', 
    category: 'ac', 
    description: 'Safe removal of AC unit.' 
  },
  { 
    id: 'ac-nitrogen', 
    title: 'Nitrogen Wash (1-1.5 Ton)', 
    price: 1200, 
    type: 'service', 
    category: 'ac', 
    description: 'Condenser coil cleaning with nitrogen.' 
  },
  { 
    id: 'ac-leak', 
    title: 'Leak Repair (1-1.5 Ton)', 
    price: 1900, 
    type: 'repair', 
    category: 'ac', 
    description: 'Welding and fixing leakage in pipes.' 
  },
  { 
    id: 'ac-circuit', 
    title: 'Circuit Repair (1-1.5 Ton)', 
    price: 3500, 
    type: 'repair', 
    category: 'ac', 
    description: 'PCB board repair (Price varies 3500-7000).' 
  },
  { 
    id: 'ac-cap', 
    title: 'Capacitor Replacement (1-1.5 Ton)', 
    price: 750, 
    type: 'repair', 
    category: 'ac', 
    description: 'Replacing faulty capacitor.' 
  },
  { 
    id: 'ac-r410-half', 
    title: 'R410 Gas Half (1-1.5 Ton)', 
    price: 1700, 
    type: 'repair', 
    category: 'ac', 
    description: 'Top-up R410 refrigerant.' 
  },
  { 
    id: 'ac-r410-full', 
    title: 'R410 Gas Full (1-1.5 Ton)', 
    price: 3500, 
    type: 'repair', 
    category: 'ac', 
    description: 'Full charge R410 refrigerant.' 
  },
  { 
    id: 'ac-r22-half', 
    title: 'R22 Gas Half (1-1.5 Ton)', 
    price: 2400, 
    type: 'repair', 
    category: 'ac', 
    description: 'Top-up R22 refrigerant.' 
  },
  { 
    id: 'ac-r22-full', 
    title: 'R22 Gas Full (1-1.5 Ton)', 
    price: 5000, 
    type: 'repair', 
    category: 'ac', 
    description: 'Full charge R22 refrigerant.' 
  },
  { 
    id: 'ac-r32-half', 
    title: 'R32 Gas Half (1-1.5 Ton)', 
    price: 1800, 
    type: 'repair', 
    category: 'ac', 
    description: 'Top-up R32 refrigerant.' 
  },
  { 
    id: 'ac-r32-full', 
    title: 'R32 Gas Full (1-1.5 Ton)', 
    price: 3200, 
    type: 'repair', 
    category: 'ac', 
    description: 'Full charge R32 refrigerant.' 
  },

  // --- Refrigerator ---
  { 
    id: 'fridge-checkup', 
    title: 'Fridge Checkup', 
    price: 350, 
    type: 'service', 
    category: 'fridge', 
    description: 'Diagnosis of refrigerator problems.' 
  },
  { 
    id: 'fridge-master', 
    title: 'Master Servicing', 
    price: 1500, 
    type: 'service', 
    category: 'fridge', 
    description: 'Deep cleaning and maintenance.' 
  },
  { 
    id: 'fridge-water', 
    title: 'Water Lining', 
    price: 1100, 
    type: 'repair', 
    category: 'fridge', 
    description: 'Clearing blocked water drain lines.' 
  },
  { 
    id: 'fridge-thermostat', 
    title: 'Thermostat Change', 
    price: 1700, 
    type: 'repair', 
    category: 'fridge', 
    description: 'Replacing faulty thermostat.' 
  },
  { 
    id: 'fridge-gasket', 
    title: 'Gasket Change', 
    price: 3500, 
    type: 'repair', 
    category: 'fridge', 
    description: 'Door rubber replacement (Price varies 3500-5000).' 
  },
  { 
    id: 'fridge-gas', 
    title: 'Gas Charge', 
    price: 1800, 
    type: 'repair', 
    category: 'fridge', 
    description: 'Refrigerant refill (Price varies 1800-3500).' 
  },
  { 
    id: 'fridge-circuit', 
    title: 'Circuit Repair', 
    price: 4000, 
    type: 'repair', 
    category: 'fridge', 
    description: 'PCB/Kit repair (Price varies 4000-8000).' 
  },

  // --- Washing Machine ---
  { 
    id: 'wm-checkup', 
    title: 'Washing Machine Checkup', 
    price: 450, 
    type: 'service', 
    category: 'washing', 
    description: 'Diagnosis of issues.' 
  },
  { 
    id: 'wm-service', 
    title: 'Washing Machine Servicing', 
    price: 1200, 
    type: 'service', 
    category: 'washing', 
    description: 'Complete cleaning and servicing.' 
  },

  // --- Microwave ---
  { 
    id: 'mw-checkup', 
    title: 'Microwave Checkup', 
    price: 350, 
    type: 'service', 
    category: 'microwave', 
    description: 'Diagnosis of problems.' 
  },
  { 
    id: 'mw-service', 
    title: 'Microwave Servicing', 
    price: 500, 
    type: 'service', 
    category: 'microwave', 
    description: 'General cleaning and servicing.' 
  },
  { 
    id: 'mw-circuit', 
    title: 'Circuit Repair', 
    price: 3000, 
    type: 'repair', 
    category: 'microwave', 
    description: 'Main board repair.' 
  },
  { 
    id: 'mw-magnetron', 
    title: 'Magnetron Replace', 
    price: 7000, 
    type: 'repair', 
    category: 'microwave', 
    description: 'Replacing the heating element.' 
  },

  // --- Kitchen Hood ---
  { 
    id: 'hood-checkup', 
    title: 'Kitchen Hood Checkup', 
    price: 350, 
    type: 'service', 
    category: 'hood', 
    description: 'Diagnosis of issues.' 
  },
  { 
    id: 'hood-service', 
    title: 'Kitchen Hood Servicing', 
    price: 1000, 
    type: 'service', 
    category: 'hood', 
    description: 'General cleaning.' 
  },
  { 
    id: 'hood-master', 
    title: 'Master Servicing', 
    price: 1500, 
    type: 'service', 
    category: 'hood', 
    description: 'Deep cleaning of filters and motor.' 
  },

  // --- Geyser ---
  { 
    id: 'geyser-checkup', 
    title: 'Geyser Checkup', 
    price: 350, 
    type: 'service', 
    category: 'geyser', 
    description: 'Diagnosis of water heater.' 
  },
  { 
    id: 'geyser-master', 
    title: 'Master Servicing', 
    price: 1300, 
    type: 'service', 
    category: 'geyser', 
    description: 'Descaling and cleaning.' 
  },
  { 
    id: 'geyser-install', 
    title: 'Geyser Installation', 
    price: 950, 
    type: 'service', 
    category: 'geyser', 
    description: 'Wall mounting and connection.' 
  },
  { 
    id: 'geyser-uninstall', 
    title: 'Geyser Uninstallation', 
    price: 650, 
    type: 'service', 
    category: 'geyser', 
    description: 'Safe removal.' 
  },
  { 
    id: 'geyser-shifting', 
    title: 'Geyser Shifting', 
    price: 1500, 
    type: 'service', 
    category: 'geyser', 
    description: 'Remove and install at new location.' 
  },
];