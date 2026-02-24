"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import IntegrationConcept from "@/components/IntegrationConcept";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { useContent } from "@/lib/ContentContext";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const { navbar, hero, integrationConcept, painPoints, methodology, services, footer, contactModal } = useContent();

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-primary selection:text-white">
      {navbar.visible && <Navbar onContactClick={openModal} />}
      {hero.visible && <Hero onContactClick={openModal} />}
      {integrationConcept.visible && <IntegrationConcept />}
      {painPoints.visible && <PainPoints />}
      {methodology.visible && <Methodology />}
      {services.visible && <Services />}
      {footer.visible && <Footer onContactClick={openModal} />}
      
      {contactModal.visible && <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </main>
  );
}
