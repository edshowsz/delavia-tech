"use client";

import { X } from "lucide-react";

export default function EcommProblems() {
  return (
    <section className="py-20 bg-[#080808]">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="font-space text-3xl md:text-4xl font-bold text-white mb-4">
            Isso parece com o seu dia a dia?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <div className="space-y-4">
            <div className="bg-zinc-900/50 border border-red-500/10 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <X className="text-red-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium mb-1">Informações espalhadas</p>
                  <p className="text-gray-500 text-sm">Dados de clientes em vários lugares, sem conseguir ter uma visão clara de quem compra</p>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900/50 border border-red-500/10 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <X className="text-red-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium mb-1">Trabalho manual demais</p>
                  <p className="text-gray-500 text-sm">Horas copiando dados, mandando mensagens uma por uma, atualizando planilhas</p>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-900/50 border border-red-500/10 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <X className="text-red-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium mb-1">Oportunidades perdidas</p>
                  <p className="text-gray-500 text-sm">Carrinhos abandonados, clientes que sumiram, sem tempo pra cuidar de tudo</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution */}
          <div className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 flex flex-col justify-center">
            <h3 className="text-white font-semibold text-lg mb-4">Como fica com a gente:</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-gray-300">Todos os clientes em um lugar só</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-gray-300">Ações acontecendo no automático</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-gray-300">Nenhuma oportunidade perdida</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-gray-300">Você focando em vender</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
