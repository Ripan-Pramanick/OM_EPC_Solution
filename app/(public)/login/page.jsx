import AuthClient from "./AuthClient";

export const metadata = {
    title: "Login / Register | OM EPC Solution",
    description: "Log in or create an account at OM EPC Solution to manage your IT infrastructure services, support tickets, and quotes.",
    alternates: {
        canonical: 'https://www.omepcsolution.com/login',
    },
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'Login / Register | OM EPC Solution',
        description: 'Log in or create an account at OM EPC Solution to manage your IT infrastructure services, support tickets, and quotes.',
        url: 'https://www.omepcsolution.com/login',
        siteName: 'OM EPC Solution',
        images: [
            {
                url: '/logo.webp',
                width: 1200,
                height: 630,
                alt: 'OM EPC Solution Login',
            },
        ],
        locale: 'en_IN',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Login / Register | OM EPC Solution',
        description: 'Log in or create an account at OM EPC Solution to manage your IT infrastructure services, support tickets, and quotes.',
        images: ['/logo.webp'],
    }
};

export default function LoginPage() {
    const jsonLd = {
        "@context": "https://schema.org",
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
                "name": "Login",
                "item": "https://www.omepcsolution.com/login"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <AuthClient />
        </>
    );
}