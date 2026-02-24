import { Link2, Layers, Cpu, Zap, XCircle, CheckCircle2, AlertTriangle, ArrowRightLeft } from "lucide-react";

const DATA_SOURCES = [
  { name: "Vendas (CRM)", x: "15%", y: "15%", delay: "0.1s", duration: "3s", reverseDelay: "1.5s" },
  { name: "Financeiro (ERP)", x: "85%", y: "85%", delay: "0.8s", duration: "4s", reverseDelay: "2.2s" },
  { name: "Marketing & Ads", x: "85%", y: "15%", delay: "1.3s", duration: "2.8s", reverseDelay: "0.5s" },
  { name: "Suporte & CS", x: "15%", y: "85%", delay: "0.4s", duration: "3.5s", reverseDelay: "2.8s" },
  { name: "E-commerce", x: "50%", y: "10%", delay: "1.9s", duration: "3.2s", reverseDelay: "1.0s" },
  { name: "RH & Pessoas", x: "50%", y: "90%", delay: "2.5s", duration: "4.2s", reverseDelay: "3.1s" },
  { name: "Operações & Projetos", x: "10%", y: "50%", delay: "0.6s", duration: "2.9s", reverseDelay: "1.8s" },
  { name: "Pagamentos & Cobrança", x: "90%", y: "50%", delay: "1.1s", duration: "3.8s", reverseDelay: "2.5s" },
];

export default function IntegrationConcept() {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden border-t border-white/5">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

        <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6">
          Sua empresa tem <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">ferramentas demais</span>,
          <br /> mas conexão de menos?
        </h2>
        
        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
          CRM, ERP, planilhas, ads, e-mail marketing... Você contratou o melhor software para cada função
          e isso acabou criando ilhas isoladas de informação.
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
                
                <div className="flex-1 relative min-h-[400px] bg-[#111] rounded-2xl border border-white/5 p-6 mb-6 overflow-hidden">
                    {/* Disconnected Elements */}
                    
                    {DATA_SOURCES.map((source, index) => (
                      <div 
                        key={`chaos-${index}`}
                        className="absolute -translate-x-1/2 -translate-y-1/2 p-2 bg-red-500/5 border border-red-500/10 rounded text-[10px] text-gray-400 flex items-center gap-1.5 z-10 min-w-max"
                        style={{ top: source.y, left: source.x }}
                      >
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                          {source.name}
                      </div>
                    ))}

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 bg-[#080808] border border-white/10 rounded-xl shadow-xl z-20 text-center w-40">
                       <AlertTriangle className="mx-auto text-yellow-500 mb-2" size={24} />
                       <span className="text-[10px] text-gray-500 leading-tight block">Transferência Manual <br/> (Copy & Paste)</span>
                    </div>

                    {/* Broken Lines connecting everything to Center (Manual Process) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 z-0">
                       {DATA_SOURCES.map((source, index) => (
                         <line 
                           key={`chaos-line-${index}`}
                           x1={source.x} 
                           y1={source.y} 
                           x2="50%" 
                           y2="50%" 
                           stroke="red" 
                           strokeWidth="1" 
                           strokeDasharray="4 4" 
                           className="animate-pulse"
                           style={{ animationDelay: source.delay }}
                         />
                       ))}
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
                
                <div className="flex-1 relative min-h-[400px] bg-[#111] rounded-2xl border border-white/5 p-6 mb-6 flex items-center justify-center overflow-hidden">
                    {/* Central Brain */}
                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-orange-600 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(255,107,0,0.3)]">
                            <Cpu className="text-white w-10 h-10" />
                        </div>
                        {/* Orbiting particles */}
                        <div className="absolute -inset-10 border border-primary/20 rounded-full animate-spin-slow duration-[10s]" />
                        <div className="absolute -inset-16 border border-primary/10 rounded-full animate-spin-slow duration-[15s] reverse" />
                    </div>

                    {/* Connected Nodes - Organized with Percentages to match SVG lines */}
                    {DATA_SOURCES.map((source, index) => (
                      <div 
                        key={`order-${index}`}
                        className="absolute -translate-x-1/2 -translate-y-1/2 px-2 py-1 bg-[#1A1A1A] rounded border border-primary/30 text-[10px] text-gray-300 shadow-lg flex items-center gap-1.5 transition-all hover:scale-110 hover:border-primary/60 hover:z-20 min-w-max"
                        style={{ top: source.y, left: source.x }}
                      >
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]" /> 
                          {source.name}
                      </div>
                    ))}

                    {/* Glowing Connections - Matching Percentage Coordinates */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        {DATA_SOURCES.map((source, index) => (
                          <g key={`order-line-group-${index}`}>
                            {/* Line to center */}
                            <line 
                              x1={source.x} 
                              y1={source.y} 
                              x2="50%" 
                              y2="50%" 
                              stroke="#FF6B00" 
                              strokeOpacity="0.2"
                              strokeWidth="1" 
                            />
                            
                            {/* 1. Dot moving Source -> Center (Inbound) */}
                            <circle cx={source.x} cy={source.y} r="2" fill="#FF6B00">
                              <animate 
                                attributeName="cx" 
                                from={source.x} 
                                to="50%" 
                                dur={source.duration} 
                                begin={source.delay} 
                                repeatCount="indefinite" 
                              />
                              <animate 
                                attributeName="cy" 
                                from={source.y} 
                                to="50%" 
                                dur={source.duration} 
                                begin={source.delay} 
                                repeatCount="indefinite" 
                              />
                              <animate 
                                attributeName="opacity" 
                                values="0;1;1;0" 
                                keyTimes="0;0.1;0.9;1" 
                                dur={source.duration} 
                                begin={source.delay} 
                                repeatCount="indefinite" 
                              />
                            </circle>

                            {/* 2. Dot moving Center -> Source (Outbound/Response) */}
                            <circle cx="50%" cy="50%" r="2" fill="#22c55e" opacity="0.8">
                              <animate 
                                attributeName="cx" 
                                from="50%" 
                                to={source.x} 
                                dur={source.duration} 
                                begin={source.reverseDelay} 
                                repeatCount="indefinite" 
                              />
                              <animate 
                                attributeName="cy" 
                                from="50%" 
                                to={source.y} 
                                dur={source.duration} 
                                begin={source.reverseDelay} 
                                repeatCount="indefinite" 
                              />
                              <animate 
                                attributeName="opacity" 
                                values="0;1;1;0" 
                                keyTimes="0;0.1;0.8;1" 
                                dur={source.duration}
                                begin={source.reverseDelay} 
                                repeatCount="indefinite" 
                              />
                            </circle>

                            {/* Static Pulse Effect on Node (Replacing animate-ping to avoid offset issues) */}
                            <circle cx={source.x} cy={source.y} r="2" fill="#FF6B00" opacity="0.5">
                                <animate 
                                    attributeName="r" 
                                    values="2;6;2" 
                                    dur="3s" 
                                    begin={source.delay} 
                                    repeatCount="indefinite" 
                                />
                                <animate 
                                    attributeName="opacity" 
                                    values="0.5;0;0.5" 
                                    dur="3s" 
                                    begin={source.delay} 
                                    repeatCount="indefinite" 
                                />
                            </circle>
                          </g>
                        ))}
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
