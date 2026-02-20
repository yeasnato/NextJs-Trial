import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ServiceLists } from '@/components/ServiceLists';

const CATEGORY_META: Record<string, { title: string; description: string }> = {
  ac: {
    title: 'AC Repair & Service Mirpur Dhaka',
    description: 'AC repair, servicing, gas refill and installation in Mirpur and all Dhaka from ৳399. Same-day service. 45-day warranty. Call 01605564270.',
  },
  fridge: {
    title: 'Refrigerator Repair Service Mirpur Dhaka',
    description: 'Fridge repair, gas charge, thermostat, gasket and circuit repair in Mirpur from ৳350. All brands. Same-day doorstep service. Call 01605564270.',
  },
  washing: {
    title: 'Washing Machine Repair Mirpur Dhaka',
    description: 'Front load and top load washing machine repair and servicing in Mirpur from ৳450. All brands. Same-day service. Call 01605564270.',
  },
  microwave: {
    title: 'Microwave Oven Repair Mirpur Dhaka',
    description: 'Microwave oven repair for all types and brands in Mirpur from ৳350. Same-day doorstep service. 45-day warranty. Call 01605564270.',
  },
  geyser: {
    title: 'Geyser Repair & Installation Mirpur Dhaka',
    description: 'Geyser installation and repair in Mirpur from ৳350. Electric and gas water heater. Same-day service. Call 01605564270.',
  },
  hood: {
    title: 'Kitchen Hood Cleaning & Repair Mirpur Dhaka',
    description: 'Kitchen hood deep cleaning and repair in Mirpur from ৳350. Full motor and filter service. Same-day service. Call 01605564270.',
  },
};

const VALID_CATEGORIES = ['ac', 'fridge', 'washing', 'microwave', 'geyser', 'hood'];

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const meta = CATEGORY_META[params.category];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://www.luckyservicescentre.com/services/${params.category}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://www.luckyservicescentre.com/services/${params.category}`,
    },
  };
}

export default function ServicePage({ params }: { params: { category: string } }) {
  if (!VALID_CATEGORIES.includes(params.category)) notFound();
  return <ServiceLists activeCategory={params.category} />;
}
