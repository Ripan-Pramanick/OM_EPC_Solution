
import ProductHero from '@/components/products/ProductHero';
import ProductCatalog from '@/components/products/ProductCatalog';
import ProductDiscoveryCTA from '@/components/products/ProductDiscoveryCTA';
import ProductPerformance from '@/components/products/ProductPerformance';


export const metadata = {
    title: 'Products | OM EPC Solution — Computers, UPS, Printers, CCTV & Networking',
    description: 'Explore computers, laptops, printers, UPS, CCTV, networking equipment and technology products supported by OM EPC Solution.',
};

export default function ProductsPage() {
    return (
        <main className="flex flex-col w-full overflow-x-hidden">

            <ProductHero />
            <ProductCatalog />
            <ProductDiscoveryCTA />
            <ProductPerformance />


        </main>
    );
}