
import ServicesHero from '@/components/services/ServicesHero';
import SolutionFinder from '@/components/services/SolutionFinder';
import ServicesCrafted from '@/components/services/ServicesCrafted';
import DiscoverDifference from '@/components/services/DiscoverDifference';
import ServicesCTA from '@/components/services/ServicesCTA';

export const metadata = {
    title: 'Services | OM EPC Solution — IT Infrastructure & Technical Support',
    description: 'Explore OM EPC Solution\'s computer, UPS, printer, CCTV, networking and AMC services for reliable business technology infrastructure and technical support.',
};

export default function ServicesPage() {
    return (
        <main className="flex flex-col w-full overflow-x-hidden">

            <ServicesHero />
            <SolutionFinder />
            <ServicesCrafted />
            <DiscoverDifference />
            <ServicesCTA />

        </main>
    );
}