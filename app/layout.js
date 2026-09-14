import "./globals.css";

export const metadata = {
  metadataBase: new URL('https://www.omepcsolution.com'),
  title: {
    default: 'OM EPC Solution | IT Infrastructure & Tech Support',
    template: '%s | OM EPC Solution',
  },
  description: 'Your trusted partner for enterprise IT infrastructure, networking solutions, computers, UPS, CCTV, and expert technical support in India.',
  keywords: [
    'IT Infrastructure', 
    'Networking Solutions', 
    'CCTV Installation', 
    'UPS', 
    'Computer Sales', 
    'AMC Services', 
    'Tech Support', 
    'OM EPC Solution'
  ],
  authors: [{ name: 'OM EPC Solution' }],
  creator: 'OM EPC Solution',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.omepcsolution.com',
    siteName: 'OM EPC Solution',
    title: 'OM EPC Solution | Premium IT Infrastructure',
    description: 'Empower your business with top-tier technology products and professional IT services from OM EPC Solution.',
    images: [
      {
        url: '/logo.webp',
        width: 1200,
        height: 630,
        alt: 'OM EPC Solution IT Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OM EPC Solution | Premium IT Infrastructure',
    description: 'Empower your business with top-tier technology products and professional IT services from OM EPC Solution.',
    images: ['/logo.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-emerald-50 text-emerald-950 font-sans">
        {children}
      </body>
    </html>
  );
}