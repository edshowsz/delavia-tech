"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import IntegrationConcept from "@/components/IntegrationConcept";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";
import { useContent } from "@/lib/ContentContext";

export default function DataEngineeringPage() {
  const whatsappUrl = 'https://wa.me/5511988281762?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20tenho%20interesse%20em%20consultoria%20de%20dados.';

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
