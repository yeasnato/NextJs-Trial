import type { Metadata } from 'next';
import './globals.css';
import { BookingProvider } from '@/contexts/BookingContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingCall } from '@/components/FloatingCall';
import { BookingModalWrapper } from '@/components/BookingModalWrapper';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.luckyservicescentre.com'),
  title: {
    default: 'AC Repair Mirpur | Home Appliance Service Dhaka — Lucky Services Centre',
    template: '%s | Lucky Services Centre',
  },
  description:
    'AC repair Mirpur from ৳399. Refrigerator, washing machine, microwave, geyser & kitchen hood repair at your doorstep. Same-day service all Dhaka. Call 01605564270.',
  keywords: [
    'AC repair Mirpur','AC servicing Mirpur','AC repair Dhaka',
    'refrigerator repair Mirpur','fridge repair Mirpur',
    'washing machine repair Mirpur','microwave oven repair Mirpur',
    'geyser repair Mirpur','kitchen hood repair Mirpur',
    'home appliance repair Mirpur','home appliance repair Dhaka',
    'Lucky Services Centre','AC gas refill Mirpur',
    'split AC installation Mirpur','appliance repair Pallabi',
    'appliance repair Kafrul',
  ],
  authors: [{ name: 'Lucky Services Centre' }],
  creator: 'Lucky Services Centre',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.luckyservicescentre.com',
    siteName: 'Lucky Services Centre',
    title: 'AC Repair Mirpur | Home Appliance Service — Lucky Services Centre',
    description: 'AC repair from ৳399, fridge, washing machine, microwave, geyser & kitchen hood repair. Same-day doorstep service all Dhaka. Call 01605564270.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Lucky Services Centre' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AC Repair Mirpur | Home Appliance Service — Lucky Services Centre',
    description: 'AC repair from ৳399 in Mirpur. Same-day doorstep service. 45-day warranty. Call 01605564270.',
    images: ['/og-image.jpg'],
  },
  alternates: { canonical: 'https://www.luckyservicescentre.com' },
  verification: {
    // google: 'PASTE_YOUR_SEARCH_CONSOLE_CODE_HERE',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'Lucky Services Centre',
  alternateName: 'Lucky Services',
  description: 'Lucky Services Centre is Mirpur and Dhaka\'s trusted home appliance repair company. AC, refrigerator, washing machine, microwave, geyser and kitchen hood repair with same-day service and 45-day warranty.',
  url: 'https://www.luckyservicescentre.com',
  telephone: '+8801605564270',
  foundingDate: '2016',
  image: 'https://www.luckyservicescentre.com/og-image.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mirpur',
    addressLocality: 'Mirpur',
    addressRegion: 'Dhaka',
    postalCode: '1216',
    addressCountry: 'BD',
  },
  geo: { '@type': 'GeoCoordinates', latitude: '23.8103', longitude: '90.3654' },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    opens: '09:00',
    closes: '21:00',
  }],
  areaServed: [
    'Mirpur','Pallabi','Kafrul','Uttara','Gulshan','Banani',
    'Dhanmondi','Mohammadpur','Bashundhara','Baridhara',
    'Badda','Rampura','Shyamoli','Tejgaon','Farmgate','Dhaka',
  ],
  priceRange: '৳৳',
  currenciesAccepted: 'BDT',
  paymentAccepted: 'Cash, bKash, Nagad',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '150',
    bestRating: '5',
  },
  sameAs: ['https://www.facebook.com/luckyservicescentre'],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'AC repair cost in Mirpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AC basic servicing in Mirpur starts from ৳399. AC jet wash ৳950. AC gas refill R410 ৳3,500. AC installation ৳2,200. Lucky Services Centre provides same-day AC repair in Mirpur-1, Mirpur-10, Mirpur-11, Mirpur-12, Pallabi and Kafrul.',
      },
    },
    {
      '@type': 'Question',
      name: 'Refrigerator repair service in Mirpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Refrigerator repair in Mirpur starts from ৳350. Fridge gas charge from ৳1,800. We service all brands including Samsung, LG, Walton, Vision and Sharp with 45-day warranty.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly does a technician arrive in Mirpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our technicians arrive within 2-4 hours of booking in Mirpur. Same-day service available for AC, fridge, washing machine, microwave, geyser and kitchen hood repair.',
      },
    },
    {
      '@type': 'Question',
      name: 'How to book home appliance repair in Mirpur?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call or WhatsApp 01605564270. Tell us your service and address. A technician arrives within 2-4 hours. No advance payment required.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the service warranty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lucky Services Centre provides 45-day warranty on all repairs. Same issue within 45 days is fixed completely free.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#2EA9D6" />
        <meta name="geo.region" content="BD-C" />
        <meta name="geo.placename" content="Mirpur, Dhaka, Bangladesh" />
        <meta name="geo.position" content="23.8103;90.3654" />
        <meta name="ICBM" content="23.8103, 90.3654" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://ik.imagekit.io" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="bg-[#FAFAFA] text-[#0B2A4A] antialiased min-h-screen flex flex-col font-sans selection:bg-[#2EA9D6] selection:text-white">
        <BookingProvider>
          <Header />
          <main className="flex-1 relative">
            {children}
          </main>
          <FloatingCall />
          <Footer />
          <BookingModalWrapper />

          {/* SEO static content — visible to Google, hidden from users */}
          <div className="seo-content" aria-hidden="true">
            <h1>Lucky Services Centre — AC Repair & Home Appliance Service in Mirpur Dhaka</h1>
            <section>
              <h2>AC Repair Service in Mirpur</h2>
              <p>AC basic servicing from ৳399. AC jet wash ৳950. Gas refill R410 ৳3,500. Installation ৳2,200. Same-day service Mirpur-1, Mirpur-10, Mirpur-11, Pallabi, Kafrul.</p>
            </section>
            <section>
              <h2>Refrigerator Repair in Mirpur</h2>
              <p>Fridge repair from ৳350. Gas charge from ৳1,800. All brands Samsung, LG, Walton. 45-day warranty. Home service Mirpur.</p>
            </section>
            <section>
              <h2>Washing Machine Repair Mirpur</h2>
              <p>Front load and top load. Servicing from ৳1,200. All brands. Doorstep service.</p>
            </section>
            <section>
              <h2>Microwave Oven Repair Mirpur</h2>
              <p>Solo, grill, convection. From ৳350. Samsung, LG, Sharp. Home service.</p>
            </section>
            <section>
              <h2>Geyser Repair & Installation Mirpur</h2>
              <p>Electric and gas. Installation ৳950. Repair from ৳350. Leak-free guarantee.</p>
            </section>
            <section>
              <h2>Kitchen Hood Cleaning Mirpur</h2>
              <p>Deep cleaning ৳1,500. Repair from ৳350. All brands. Mirpur doorstep service.</p>
            </section>
            <p>Call Lucky Services Centre: 01605564270. Serving Mirpur, Pallabi, Kafrul, Uttara, Gulshan, Banani, Dhanmondi and all Dhaka.</p>
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
