"use client";

import { Users, Zap, RefreshCw } from "lucide-react";

export default function EcommSolutions() {
  return (
    <section className="py-20 bg-[#050505]">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="font-space text-3xl md:text-4xl font-bold text-white mb-4">
            O que fazemos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="text-primary w-7 h-7" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Organizamos seus clientes</h3>
            <p className="text-gray-400 text-sm">Implementamos um CRM onde você tem visão completa de quem compra, quem abandonou, quem precisa de atenção.</p>
          </div>
          
          <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="text-primary w-7 h-7" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Automatizamos processos</h3>
            <p className="text-gray-400 text-sm">Criamos automações pras tarefas repetitivas: mensagens, alertas, atualizações. Acontece sozinho.</p>
          </div>
          
          <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-6 text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="text-primary w-7 h-7" />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">Conectamos ferramentas</h3>
            <p className="text-gray-400 text-sm">Integramos as ferramentas que você já usa pra elas conversarem entre si. Sem mais copiar e colar.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
