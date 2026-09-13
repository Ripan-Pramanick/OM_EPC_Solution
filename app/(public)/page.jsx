import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import InteractiveDark from '@/components/home/InteractiveDark';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Products from '@/components/home/Products';
import Industries from '@/components/home/Industries';
import Projects from '@/components/home/Projects';
import AmcCTA from '@/components/home/AmcCTA';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';
import Contact from '@/components/home/Contact';
import OurClients from '@/components/ui/OurClients';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <About />
      
      <Services />
      
      <InteractiveDark />
      <WhyChooseUs />
      <Products />
      
      <Industries />
      <Projects />
      <OurClients />
      
      <Testimonials />
      <Contact />
      <FAQ />
      
    </div>
  );
}