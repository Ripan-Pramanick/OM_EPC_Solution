import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
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
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
    
      <AboutHero />
      <Foundation />
      <Principles />
      <WhyChooseUs />
      <Milestones />
      <Stats />
      <TechnicalExpertise />
      <AboutCTA />
    
    </main>
  );
}