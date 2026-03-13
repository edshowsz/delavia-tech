"use client";

import { ArrowRight, MessageCircle } from "lucide-react";

interface EcommCTAProps {
  contactUrl: string;
}

export default function EcommCTA({ contactUrl }: EcommCTAProps) {
  return (
    <section className="py-20 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="w-4 h-4 text-primary" />
              <span className="text-gray-300 text-sm">Conversa sem compromisso</span>
            </div>
            
            <h2 className="font-space text-3xl md:text-4xl font-bold text-white mb-4">
              Quer parar de perder tempo com trabalho manual?
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Me conta como funciona seu e-commerce hoje. Vou te mostrar o que dá pra organizar e automatizar.
            </p>
            
            <a 
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:shadow-[0_0_50px_rgba(255,107,0,0.6)]"
            >
              Falar no WhatsApp
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
