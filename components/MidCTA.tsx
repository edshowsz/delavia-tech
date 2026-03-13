"use client";

import { ArrowRight } from "lucide-react";

interface MidCTAProps {
  contactUrl: string;
  title?: string;
  buttonText?: string;
}

export default function MidCTA({ 
  contactUrl, 
  title = "Quer ver como isso funciona na prática?",
  buttonText = "Agendar conversa"
}: MidCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-y border-white/5">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-xl md:text-2xl font-bold text-white text-center md:text-left">
          {title}
        </h3>
        <a 
          href={contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group shrink-0 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
        >
          {buttonText}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}
