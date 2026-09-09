
import ContactHero from '@/components/contact/ContactHero';
import ContactConversation from '@/components/contact/ContactConversation';
import ServiceArea from '@/components/contact/ServiceArea';
import ContactMap from '@/components/contact/ContactMap';
import ContactCTA from '@/components/contact/ContactCTA';

export const metadata = {
  title: 'Contact OM EPC Solution | IT Infrastructure & Technical Support',
  description: 'Contact OM EPC Solution for computers, UPS, printers, CCTV, networking, AMC and professional IT technical support.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
 
      <ContactHero />
      <ContactConversation />
      <ServiceArea />
      <ContactCTA />
      <ContactMap />
      
     
    </main>
  );
}