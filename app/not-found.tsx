import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-[#0B2A4A] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#0B2A4A] mb-3">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you are looking for does not exist.</p>
        <Link href="/" className="inline-block bg-[#2EA9D6] hover:bg-[#259ac5] text-white px-8 py-3 rounded-xl font-bold transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}
