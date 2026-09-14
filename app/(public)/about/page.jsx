
import AboutHero from '@/components/about/AboutHero';
import Foundation from '@/components/about/Foundation';
import Principles from '@/components/about/Principles';
import WhyChooseUs from '@/components/about/WhyChooseUs';
import Milestones from '@/components/about/Milestones';
import TechnicalExpertise from '@/components/about/TechnicalExpertise';
import AboutCTA from '@/components/about/AboutCTA';
import Stats from '@/components/home/Stats';

export const metadata = {
    title: 'About OM EPC Solution | IT Infrastructure & Technology Support',
    description: 'Learn about OM EPC Solution, a professional IT infrastructure and technology support company providing computer, printer, UPS, CCTV, networking and AMC solutions.',
    alternates: {
        canonical: 'https://www.omepcsolution.com/about',
    },
    openGraph: {
        title: 'About OM EPC Solution | IT Infrastructure & Technology Support',
        description: 'Learn about OM EPC Solution, a professional IT infrastructure and technology support company providing computer, printer, UPS, CCTV, networking and AMC solutions.',
        url: 'https://www.omepcsolution.com/about',
        siteName: 'OM EPC Solution',
        images: [
            {
                url: '/logo.webp',
                width: 1200,
                height: 630,
                alt: 'OM EPC Solution Team and Office',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About OM EPC Solution | IT Experts',
        description: 'Professional IT infrastructure, networking, and technology support company.',
    }
};

export default function AboutPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.omepcsolution.com/about"
        },
        "name": "About OM EPC Solution",
        "description": "Learn about OM EPC Solution, a professional IT infrastructure and technology support company providing computer, printer, UPS, CCTV, networking and AMC solutions.",
        "publisher": {
            "@type": "Organization",
            "name": "OM EPC Solution",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.omepcsolution.com/logo.webp"
            }
        },
        "breadcrumb": {
            "@type": "BreadcrumbList",
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
                    "name": "About Us",
                    "item": "https://www.omepcsolution.com/about"
                }
            ]
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <main className="flex flex-col w-full">
                <AboutHero />
                <Foundation />
                <Principles />
                <WhyChooseUs />
                <Milestones />
                <Stats />
                <TechnicalExpertise />
                <AboutCTA />
            </main>
        </>
    );
}