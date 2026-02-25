"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import IntegrationConcept from "@/components/IntegrationConcept";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";
import { useContent } from "@/lib/ContentContext";

export default function Home() {
  const whatsappUrl = 'https://wa.me/5511988281762?text=Ol%C3%A1,%20eu%20vim%20pelo%20an%C3%BAncio%20da%20Delavia%20Tecnologia,%20possuo%20interesse%20no%20servi%C3%A7o%20de%20voc%C3%AAs.';

  const { navbar, hero, integrationConcept, painPoints, methodology, services, footer } = useContent();

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-primary selection:text-white">
      {navbar.visible && <Navbar contactUrl={whatsappUrl} />}
      {hero.visible && <Hero contactUrl={whatsappUrl} />}
      {integrationConcept.visible && <IntegrationConcept />}
      {painPoints.visible && <PainPoints />}
      {methodology.visible && <Methodology />}
      {services.visible && <Services />}
      {footer.visible && <Footer contactUrl={whatsappUrl} />}
    </main>
  );
}
