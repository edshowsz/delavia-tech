"use client";

import EcommNavbar from "@/components/ecomm/EcommNavbar";
import EcommHero from "@/components/ecomm/EcommHero";
import EcommProblems from "@/components/ecomm/EcommProblems";
import EcommSolutions from "@/components/ecomm/EcommSolutions";
import EcommHowItWorks from "@/components/ecomm/EcommHowItWorks";
import EcommCTA from "@/components/ecomm/EcommCTA";
import EcommFooter from "@/components/ecomm/EcommFooter";

export default function EcommPage() {
  const whatsappUrl = 'https://wa.me/5511988281762?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20tenho%20interesse%20em%20organizar%20meu%20e-commerce.';

  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-primary selection:text-white">
      <EcommNavbar contactUrl={whatsappUrl} />
      <EcommHero contactUrl={whatsappUrl} />
      <EcommProblems />
      <EcommSolutions />
      <EcommHowItWorks />
      <EcommCTA contactUrl={whatsappUrl} />
      <EcommFooter />
    </main>
  );
}
