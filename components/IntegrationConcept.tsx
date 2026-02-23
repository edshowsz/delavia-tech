import { Link2, Layers, Cpu, Zap, XCircle, CheckCircle2, AlertTriangle, ArrowRightLeft } from "lucide-react";

export default function IntegrationConcept() {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden border-t border-white/5">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
           <span className="text-xs font-medium text-primary tracking-wide uppercase">O Paradoxo da Tecnologia</span>
        </div>

        <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6">
          Sua empresa tem <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">ferramentas demais</span>,
          <br /> mas conexão de menos?
        </h2>
        
        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
          CRM, ERP, planilhas, ads, e-mail marketing... Você contratou o melhor software para cada função
          e não pode deixar ilhas isoladas de informação.
        </p>

        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 mx-auto max-w-3xl mb-16 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="bg-primary/10 p-4 rounded-full text-primary shrink-0 animate-pulse">
               <AlertTriangle size={32} />
            </div>
            <div className="text-left">
              <h3 className="text-xl text-white font-bold mb-2">
                Sua operação precisa de <span className="text-primary">arquitetura</span>, não de mais assinaturas.
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Ao invés de vender mais um software para sua stack, nós projetamos a inteligência que conecta as ferramentas que você já usa em um fluxo unificado e rentável.
              </p>
            </div>
          </div>
        </div>

        {/* Chaos vs Order Visual */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mt-12">
            
            {/* Left: Chaos */}
            <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-red-900/30 transition-all flex flex-col">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-500/20" />
                
                <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-2 text-red-400">
                        <XCircle size={20} />
                        <span className="text-sm font-bold uppercase tracking-widest">Cenário Atual (Silos)</span>
                     </div>
                </div>
                
                <div className="flex-1 relative min-h-[300px] bg-[#111] rounded-2xl border border-white/5 p-6 mb-6">
                    {/* Disconnected Elements */}
                    <div className="absolute top-4 left-4 p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-xs text-gray-400 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        CRM Vendas
                    </div>
                    <div className="absolute bottom-12 right-4 p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-xs text-gray-400 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Financeiro (ERP)
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-[#080808] border border-white/10 rounded-xl shadow-xl z-10 text-center w-40">
                       <AlertTriangle className="mx-auto text-yellow-500 mb-2" size={24} />
                       <span className="text-[10px] text-gray-500 leading-tight block">Transferência Manual <br/> (Copy & Paste)</span>
                    </div>

                    <div className="absolute top-8 right-8 p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-xs text-gray-400 opacity-50">
                        Marketing
                    </div>
                    <div className="absolute bottom-8 left-8 p-3 bg-red-500/5 border border-red-500/10 rounded-lg text-xs text-gray-400 opacity-50">
                        Planilhas Support
                    </div>

                    {/* Broken Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                       <path d="M80 50 L 150 130" stroke="red" strokeWidth="1" strokeDasharray="5 5" />
                       <path d="M250 250 L 190 180" stroke="red" strokeWidth="1" strokeDasharray="5 5" />
                    </svg>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                        <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                        <p className="text-xs text-gray-400 text-left"><strong className="text-red-400 block mb-1">Dados Fragmentados</strong>Você nunca sabe qual o número real de vendas ou churn porque cada sistema diz uma coisa.</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10">
                        <XCircle size={16} className="text-red-500 mt-0.5 shrink-0" />
                        <p className="text-xs text-gray-400 text-left"><strong className="text-red-400 block mb-1">Custo Humano Alto</strong>Sua equipe gasta 30% do tempo atualizando planilhas em vez de vender ou criar.</p>
                    </div>
                </div>
            </div>

            {/* Right: Order (Solution) */}
            <div className="bg-[#0A0A0A] p-8 rounded-3xl border border-primary/20 relative overflow-hidden group shadow-[0_0_50px_rgba(255,107,0,0.05)] flex flex-col">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-500" />

                 <div className="flex items-center justify-between mb-8">
                     <div className="flex items-center gap-2 text-primary">
                        <CheckCircle2 size={20} />
                        <span className="text-sm font-bold uppercase tracking-widest">Nossa proposta</span>
                     </div>
                </div>
                
                <div className="flex-1 relative min-h-[300px] bg-[#111] rounded-2xl border border-white/5 p-6 mb-6 flex items-center justify-center overflow-hidden">
                    {/* Central Brain */}
                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,107,0,0.3)]">
                            <Cpu className="text-white w-10 h-10" />
                        </div>
                        {/* Orbiting particles */}
                        <div className="absolute -inset-10 border border-primary/20 rounded-full animate-spin-slow duration-[10s]" />
                        <div className="absolute -inset-16 border border-primary/10 rounded-full animate-spin-slow duration-[15s] reverse" />
                    </div>

                    {/* Connected Nodes */}
                    <div className="absolute top-[15%] left-[10%] px-3 py-1.5 bg-[#1A1A1A] rounded border border-primary/30 text-[10px] text-gray-300 shadow-lg flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" /> CRM
                    </div>
                    <div className="absolute bottom-[20%] right-[10%] px-3 py-1.5 bg-[#1A1A1A] rounded border border-primary/30 text-[10px] text-gray-300 shadow-lg flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" /> ERP
                    </div>
                     <div className="absolute top-[20%] right-[15%] px-3 py-1.5 bg-[#1A1A1A] rounded border border-primary/30 text-[10px] text-gray-300 shadow-lg flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" /> Mkt
                    </div>
                    <div className="absolute bottom-[25%] left-[15%] px-3 py-1.5 bg-[#1A1A1A] rounded border border-primary/30 text-[10px] text-gray-300 shadow-lg flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" /> BI
                    </div>

                    {/* Glowing Connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="url(#lineGradient)" strokeWidth="1" className="opacity-50" />
                        <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="url(#lineGradient)" strokeWidth="1" className="opacity-50" />
                        <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="url(#lineGradient)" strokeWidth="1" className="opacity-50" />
                        <line x1="50%" y1="50%" x2="25%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" className="opacity-50" />
                        
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.8" />
                          </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <ArrowRightLeft size={16} className="text-primary mt-0.5 shrink-0" />
                        <p className="text-xs text-gray-400 text-left"><strong className="text-primary block mb-1">Sincronia Bidirecional</strong>Faturou no ERP? Atualiza o CRM. Lead converteu? Notifica o Slack. Tudo automático.</p>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                        <p className="text-xs text-gray-400 text-left"><strong className="text-primary block mb-1">Decisões em Tempo Real</strong>Dashboards que mostram a saúde do negócio agora, não o relatório do mês passado.</p>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}
