import ServicesHero from '@/components/services/ServicesHero';
import SolutionFinder from '@/components/services/SolutionFinder';
import ServicesCrafted from '@/components/services/ServicesCrafted';
import DiscoverDifference from '@/components/services/DiscoverDifference';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata = {
    title: "IT Services & Solutions | Computers, Networking & CCTV | OM EPC",
    description: "Explore our professional IT services including power backup solutions, network setup, CCTV installation, and AMC technical support.",
    alternates: {
        canonical: 'https://www.omepcsolution.com/services',
    },
    openGraph: {
        title: 'IT Services & Solutions | OM EPC Solution',
        description: 'Explore our professional IT services including power backup, networking, and CCTV solutions.',
        url: 'https://www.omepcsolution.com/services',
        siteName: 'OM EPC Solution',
        images: [
            {
                url: '/logo.webp',
                width: 1200,
                height: 630,
                alt: 'OM EPC Solution IT Services',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IT Services & Solutions | OM EPC Solution',
        description: 'Explore our professional IT services including power backup, networking, and CCTV solutions.',
        images: ['/logo.webp'],
    }
};

export default function ServicesPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://www.omepcsolution.com/services/#service",
                "serviceType": "IT Infrastructure & Technical Support",
                "provider": {
                    "@type": "Organization",
                    "name": "OM EPC Solution",
                    "url": "https://www.omepcsolution.com",
                    "logo": "https://www.omepcsolution.com/logo.webp"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "India"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "IT Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer & Laptop Repair" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Networking Solutions" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "CCTV & Surveillance" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Annual Maintenance Contract (AMC)" } }
                    ]
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.omepcsolution.com/services/#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.omepcsolution.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Services",
                        "item": "https://www.omepcsolution.com/services"
                    }
                ]
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="flex flex-col w-full overflow-x-hidden">
                <ServicesHero />
                <SolutionFinder />
                <ServicesCrafted />
                <DiscoverDifference />
                <ServicesCTA />
            </main>
        </>
    );
}