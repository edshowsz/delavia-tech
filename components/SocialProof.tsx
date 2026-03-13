"use client";

import { Clock, TrendingUp, Users, Zap } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "60%",
    label: "menos tempo em tarefas manuais",
    description: "Em média, nossos clientes reduzem retrabalho operacional"
  },
  {
    icon: TrendingUp,
    value: "3x",
    label: "mais velocidade em relatórios",
    description: "Dados consolidados em tempo real, sem esperar planilhas"
  },
  {
    icon: Zap,
    value: "100+",
    label: "integrações implementadas",
    description: "Conectando CRMs, ERPs, e-commerces e mais"
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-[#080808] border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-primary font-bold uppercase tracking-widest mb-3">
            Resultados Reais
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            O que nossos clientes conquistam
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon className="text-primary" size={24} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-primary font-semibold mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-gray-500">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
