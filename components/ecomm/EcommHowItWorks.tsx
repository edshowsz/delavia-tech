"use client";

import { MessageCircle, Settings, Rocket } from "lucide-react";

export default function EcommHowItWorks() {
  const steps = [
    {
      number: "01",
      icon: MessageCircle,
      title: "Conversa",
      description: "Você conta como funciona hoje e o que mais te atrapalha."
    },
    {
      number: "02",
      icon: Settings,
      title: "Implementação",
      description: "A gente organiza, configura e integra tudo."
    },
    {
      number: "03",
      icon: Rocket,
      title: "Funcionando",
      description: "Seu e-commerce rodando de forma organizada e automática."
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#080808]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-space text-3xl md:text-4xl font-bold text-white mb-4">
            Como funciona?
          </h2>
          <p className="text-gray-400 text-lg">
            Processo simples, resultado rápido.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative text-center">
                  {/* Number badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-zinc-900 border border-primary/30 rounded-2xl mb-6 relative">
                    <Icon className="text-primary w-7 h-7" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
