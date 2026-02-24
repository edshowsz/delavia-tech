"use client";

import { useState, useEffect } from "react";
import { Bot, Network, Workflow, ShieldCheck, ArrowRight, Database, BrainCircuit, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "consulting",
    title: "Consultoria",
    icon: LineChart,
    shortDesc: "Estratégia",
    description: "O direcionamento. Diagnosticamos o cenário e desenhamos este pipeline de transformação.",
    features: [
      "Diagnóstico técnico da operação",
      "Mapeamento de gargalos",
      "Definição da arquitetura (To-Be)",
      "Roadmap de transformação"
    ]
  },
  {
    id: "data",
    title: "Engenharia de dados",
    icon: Database,
    shortDesc: "Fundação",
    description: "A base de tudo. Coletamos, limpamos e estruturamos seus dados para que sejam confiáveis.",
    features: [
      "Data Lakes e Warehouses",
      "Pipelines ETL/ELT robustos",
      "Modelagem para Analytics",
    ]
  },
  {
    id: "automation",
    title: "Automações Inteligentes",
    icon: Workflow,
    shortDesc: "Eficiência",
    description: "Eliminamos o retrabalho manual. Criamos ecossistemas onde suas ferramentas (CRM, ERP, Marketing) conversam em tempo real.",
    features: [
      "Orquestração de workflows complexos",
      "Sincronização bidirecional de sistemas",
      "Alertas em tempo real"
    ]
  },
  {
    id: "ai",
    title: "Agentes de IA",
    icon: BrainCircuit,
    shortDesc: "Inteligência",
    description: "A inteligência em ação. Agentes autônomos consomem os dados para tomar decisões e agir.",
    features: [
      "Atendimento e Vendas via IA",
      "RAG (Chat com seus dados)",
      "Modelos Personalizados",
      "Assistentes de Produtividade"
    ]
  }
];

export default function Services() {
  const [activeStep, setActiveStep] = useState(0);
  
  // No auto-play, interaction based

  return (
    <section id="solutions" className="py-24 bg-black relative overflow-hidden min-h-[800px] flex flex-col justify-center">
       {/* Background Elements */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50 pointer-events-none" />
       
       <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block"
          >
            Nosso Pipeline de Valor
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-space text-4xl md:text-5xl font-bold text-white mb-6"
          >
            O Fluxo da Inteligência
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Não entregamos soluções isoladas. Construímos um pipeline contínuo onde dados brutos se transformam em ações inteligentes, gerando valor real e mensurável para seu negócio.
          </motion.p>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative mt-8">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-white/10 z-0">
             <motion.div 
               className="h-full bg-gradient-to-r from-primary to-orange-400"
               animate={{ width: `${(activeStep / (services.length - 1)) * 100}%` }}
               transition={{ duration: 1, ease: "easeInOut" }}
             />
          </div>

          {/* Connecting Line (Mobile) - Vertical Timeline */}
          <div className="lg:hidden absolute top-[40px] left-1/2 -translate-x-1/2 w-[2px] h-[calc(100%-80px)] bg-white/10 z-0 pointer-events-none">
             <motion.div 
               className="w-full bg-gradient-to-b from-primary to-orange-400 origin-top"
               animate={{ height: `${(activeStep / (services.length - 1)) * 100}%` }}
               transition={{ duration: 1, ease: "easeInOut" }}
             />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const isActive = index === activeStep;
              const isPast = index < activeStep;
              const Icon = service.icon;

              return (
                <div 
                  key={service.id}
                  className="relative flex flex-col items-center group cursor-pointer z-10"
                  onClick={() => setActiveStep(index)} // Mobile click
                  onMouseEnter={() => setActiveStep(index)} // Desktop hover
                >
                  {/* Step Marker/Icon */}
                  <motion.div 
                    className={cn(
                      "w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-500 relative bg-black",
                      isActive ? "border-primary shadow-[0_0_30px_rgba(255,107,0,0.5)] scale-110" : 
                      isPast ? "border-primary text-white" : "border-white/10 text-gray-600"
                    )}
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      borderColor: isActive || isPast ? "#FF6B00" : "rgba(255,255,255,0.1)"
                    }}
                  >
                    <Icon size={32} className={cn(
                      "transition-all duration-300",
                      isActive ? "text-primary" : isPast ? "text-white" : "text-gray-600"
                    )} />
                  </motion.div>

                  {/* Label */}
                  <div className="mt-4 text-center">
                    <h3 className={cn(
                      "text-lg font-bold transition-colors duration-300",
                      isActive ? "text-white" : "text-gray-500"
                    )}>
                      {service.title}
                    </h3>
                    <span className="text-xs text-primary uppercase tracking-wider font-semibold opacity-80 block mt-1">
                      {service.shortDesc}
                    </span>
                  </div>

                  {/* Active Card Details - DESKTOP ONLY */}
                  <div className="absolute top-[200px] w-full min-w-[280px] left-1/2 -translate-x-1/2 hidden lg:block z-30">
                     <AnimatePresence mode="wait">
                       {isActive && (
                         <motion.div
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -20 }}
                           className="bg-zinc-900/80 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow-2xl relative"
                         >
                            {/* Little triangle pointing up */}
                            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-900 border-t border-l border-white/10 rotate-45" />
                            
                            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                              {service.description}
                            </p>
                            <ul className="space-y-2">
                              {service.features.map((feature, fIdx) => (
                                <motion.li 
                                  key={fIdx} 
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: fIdx * 0.1 }}
                                  className="flex items-center gap-2 text-xs text-gray-400"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                  {feature}
                                </motion.li>
                              ))}
                            </ul>
                         </motion.div>
                       )}
                     </AnimatePresence>
                  </div>

                  {/* Mobile View Card (Always visible if active, inline) */}
                  <div className={cn(
                    "lg:hidden mt-4 bg-zinc-900/90 p-6 rounded-xl border border-white/10 w-full transition-all duration-300 relative z-20",
                    isActive ? "opacity-100 block" : "opacity-50 hidden"
                  )}>
                      <p className="text-sm text-gray-300 mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                  </div>

                </div>
              );
            })}
          </div>
          
          {/* Spacer for the absolute positioned cards on desktop */}
          <div className="hidden lg:block h-[320px]"></div>
        </div>

      </div>
    </section>
  );
}
