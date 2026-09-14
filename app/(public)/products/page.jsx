import ProductHero from '@/components/products/ProductHero';
import ProductCatalog from '@/components/products/ProductCatalog';
import ProductDiscoveryCTA from '@/components/products/ProductDiscoveryCTA';
import ProductPerformance from '@/components/products/ProductPerformance';

export const metadata = {
    title: "IT Products Catalog | Laptops, UPS, Printers & More | OM EPC",
    description: "Browse our wide range of premium IT products including desktop computers, laptops, UPS, CCTV cameras, and networking equipment.",
    alternates: {
        canonical: 'https://www.omepcsolution.com/products',
    },
    openGraph: {
        title: 'IT Products Catalog | OM EPC Solution',
        description: 'Browse our wide range of premium IT products including desktop computers, laptops, UPS, CCTV cameras, and networking equipment.',
        url: 'https://www.omepcsolution.com/products',
        siteName: 'OM EPC Solution',
        images: [
            {
                url: '/logo.webp',
                width: 1200,
                height: 630,
                alt: 'OM EPC Solution IT Products',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IT Products Catalog | OM EPC Solution',
        description: 'Browse our wide range of premium IT products including desktop computers, laptops, UPS, CCTV cameras, and networking equipment.',
        images: ['/logo.webp'],
    }
};

export default function ProductsPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://www.omepcsolution.com/products/#webpage",
                "name": "OM EPC IT Products Catalog",
                "description": "Catalog of premium IT products, computers, networking gear, and UPS solutions.",
                "url": "https://www.omepcsolution.com/products",
                "mainEntity": {
                    "@type": "ItemList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Computers & Laptops" },
                        { "@type": "ListItem", "position": 2, "name": "UPS & Power Backup" },
                        { "@type": "ListItem", "position": 3, "name": "CCTV & Security" },
                        { "@type": "ListItem", "position": 4, "name": "Networking Equipment" }
                    ]
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.omepcsolution.com/products/#breadcrumb",
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
                        "name": "Products",
                        "item": "https://www.omepcsolution.com/products"
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
                <ProductHero />
                <ProductCatalog />
                <ProductDiscoveryCTA />
                <ProductPerformance />
            </main>
        </>
    );
}