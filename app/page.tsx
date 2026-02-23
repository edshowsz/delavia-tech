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

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-primary selection:text-white">
      <Navbar onContactClick={openModal} />
      <PainPoints />
      <IntegrationConcept />
      <Methodology />
      <Services />
      <Footer onContactClick={openModal} />
      
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
