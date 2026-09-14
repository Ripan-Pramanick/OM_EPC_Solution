// layout.jsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata = {
  metadataBase: new URL('https://www.omepcsolution.com'),
  title: {
    default: 'OM EPC Solution | IT Infrastructure & Tech Support',
    template: '%s | OM EPC Solution',
  },
  description: 'Your trusted partner for enterprise IT infrastructure, networking solutions, computers, UPS, CCTV, and expert technical support in India.',
  keywords: ['IT Infrastructure', 'Networking Solutions', 'CCTV Installation', 'UPS', 'Computer Sales', 'AMC Services', 'Tech Support', 'OM EPC Solution'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.omepcsolution.com',
    siteName: 'OM EPC Solution',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}