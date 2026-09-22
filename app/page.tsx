"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import { useContent } from "@/lib/ContentContext";

export default function Home() {
  const whatsappUrl = "https://wa.me/5511988281762?text=Ol%C3%A1,%20vim%20pelo%20site%20e%20tenho%20interesse%20em%20consultoria%20de%20dados.";
  const { navbar, hero, services, footer } = useContent();

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary selection:text-black">
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-5 focus:py-3 focus:text-black">Pular para o conteúdo</a>
      {navbar.visible && <Navbar contactUrl={whatsappUrl} />}
      <main id="conteudo" tabIndex={-1}>
        {hero.visible && <Hero contactUrl={whatsappUrl} />}
        {services.visible && <Services />}
      </main>
      {footer.visible && <Footer contactUrl={whatsappUrl} />}
    </div>
  );
}
