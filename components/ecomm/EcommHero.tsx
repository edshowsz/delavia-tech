"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

interface EcommHeroProps {
  contactUrl: string;
}

export default function EcommHero({ contactUrl }: EcommHeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-[#050505] to-[#050505]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-sm font-medium">Para donos de e-commerce</span>
            </div>
            
            <h1 className="font-space text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Organize seus
              <span className="text-primary"> clientes </span>
              e
              <span className="text-primary"> automatize </span>
              o trabalho repetitivo
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Implementamos CRM e automações pra você parar de perder tempo <br className="hidden md:block" />
              com tarefas manuais e focar em vender.
            </p>

            <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>Todos os clientes organizados em um só lugar</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>Tarefas que você faz todo dia no automático</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                  <span>Suas ferramentas conversando entre si</span>
                </li>
              </ul>
            </div>
            
            <a 
              href={contactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center gap-2 shadow-[0_0_30px_rgba(255,107,0,0.3)] hover:shadow-[0_0_40px_rgba(255,107,0,0.5)]"
            >
              Quero organizar meu e-commerce
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Visual */}
          <div className="hidden lg:block relative">
            <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="text-white font-semibold">Seu e-commerce organizado</span>
                <span className="text-xs text-gray-500">Tudo automático</span>
              </div>
              
              {/* Automation Activity */}
              <div className="space-y-3">
                <div className="bg-zinc-800/50 rounded-lg p-4 border-l-2 border-green-400">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white font-medium text-sm">Novo pedido recebido</p>
                    <span className="text-xs text-gray-500">agora</span>
                  </div>
                  <p className="text-gray-500 text-xs">→ Cliente adicionado ao CRM automaticamente</p>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 border-l-2 border-blue-400">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white font-medium text-sm">Carrinho abandonado detectado</p>
                    <span className="text-xs text-gray-500">2min</span>
                  </div>
                  <p className="text-gray-500 text-xs">→ Mensagem de recuperação enviada</p>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 border-l-2 border-yellow-400">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white font-medium text-sm">Cliente sem comprar há 30 dias</p>
                    <span className="text-xs text-gray-500">5min</span>
                  </div>
                  <p className="text-gray-500 text-xs">→ Cupom de reativação enviado</p>
                </div>
                
                <div className="bg-zinc-800/50 rounded-lg p-4 border-l-2 border-purple-400">
                  <div className="flex justify-between items-start mb-1">
                    <p className="text-white font-medium text-sm">Pedido entregue</p>
                    <span className="text-xs text-gray-500">10min</span>
                  </div>
                  <p className="text-gray-500 text-xs">→ Pesquisa de satisfação disparada</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                <p className="text-gray-500 text-sm">Tudo isso acontecendo enquanto você foca em vender</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
