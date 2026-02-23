import { Link2, Layers, Cpu, Zap } from "lucide-react";

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
          <br /> mas conexão de menos.
        </h2>
        
        <p className="max-w-3xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
          CRM, ERP, Planilhas, Ads, E-mail Marketing... Você contratou o melhor software para cada função, 
          mas criou ilhas isoladas de informação. 
        </p>

        <div className="bg-white/5 border border-primary/20 rounded-xl p-6 mx-auto max-w-2xl mb-16">
          <p className="text-xl text-white font-medium">
            <span className="text-primary font-bold">Não somos "mais uma ferramenta" na sua stack.</span><br/>
            Somos o parceiro estratégico que conecta e orquestra as ferramentas que você já possui.
          </p>
        </div>

        {/* Chaos vs Order Visual */}
        <div className="grid md:grid-cols-2 gap-8 items-start mt-12">
            
            {/* Left: Chaos */}
            <div className="bg-[#111] p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-red-500/20 transition-all h-[400px] flex flex-col justify-between">
                <div className="absolute top-4 left-4 text-xs font-bold text-red-500 uppercase tracking-widest bg-red-500/10 px-2 py-1 rounded">Caos (Silos)</div>
                
                <div className="flex-1 relative w-full h-full">
                    {/* Floating Icons simulating disconnect - using absolute naming to avoid import issues */}
                    <div className="absolute top-[20%] left-[10%] p-3 bg-white/5 rounded-lg border border-white/10 text-gray-500 text-xs animate-pulse">CRM Salesforce</div>
                    <div className="absolute bottom-[30%] right-[10%] p-3 bg-white/5 rounded-lg border border-white/10 text-gray-500 text-xs animate-bounce" style={{ animationDuration: '3s' }}>Excel Antigo</div>
                    <div className="absolute top-[50%] left-[40%] text-red-500/20">
                       <Link2 size={48} className="rotate-45" />
                    </div>
                    <div className="absolute top-[15%] right-[20%] p-3 bg-white/5 rounded-lg border border-white/10 text-gray-500 text-xs">Google Ads</div>
                    <div className="absolute bottom-[20%] left-[20%] p-3 bg-white/5 rounded-lg border border-white/10 text-gray-500 text-xs">Mailchimp</div>
                    
                    {/* Red X marks or broken lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                       <path d="M100 100 L 200 200" stroke="red" strokeWidth="1" strokeDasharray="4 4" />
                       <path d="M300 100 L 200 200" stroke="red" strokeWidth="1" strokeDasharray="4 4" />
                       <circle cx="200" cy="200" r="10" stroke="red" fill="none" />
                    </svg>

                    <div className="absolute bottom-4 w-full text-center">
                       <p className="text-red-400 font-bold text-sm">Dados Isolados & Processos Manuais</p>
                    </div>
                </div>
            </div>

            {/* Right: Order (Solution) */}
            <div className="bg-[#111] p-8 rounded-3xl border border-primary/20 relative overflow-hidden group transition-all shadow-[0_0_50px_rgba(255,107,0,0.05)] h-[400px] flex flex-col justify-between">
                 <div className="absolute top-4 left-4 text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded">Ecossistema Conectado</div>
                
                <div className="flex-1 relative w-full h-full flex items-center justify-center">
                    {/* Central Brain */}
                    <div className="relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,107,0,0.4)] animate-pulse-slow">
                            <Cpu className="text-white w-12 h-12" />
                        </div>
                        <div className="absolute -inset-4 border border-primary/30 rounded-full animate-spin-slow opacity-50" />
                    </div>

                    {/* Connected Nodes in Orbit */}
                    <div className="absolute w-[280px] h-[280px] border border-white/5 rounded-full animate-spin-slow duration-[20s]" />
                    
                    <div className="absolute top-[20%] left-[20%] p-2 bg-[#1A1A1A] rounded border border-primary/30 text-[10px] text-gray-300 shadow-lg translate-x-4">CRM Integrado</div>
                    <div className="absolute bottom-[25%] right-[20%] p-2 bg-[#1A1A1A] rounded border border-primary/30 text-[10px] text-gray-300 shadow-lg -translate-x-4">BI em Tempo Real</div>
                    <div className="absolute top-[25%] right-[15%] p-2 bg-[#1A1A1A] rounded border border-primary/30 text-[10px] text-gray-300 shadow-lg translate-y-2">IA Generativa</div>
                    <div className="absolute bottom-[20%] left-[15%] p-2 bg-[#1A1A1A] rounded border border-primary/30 text-[10px] text-gray-300 shadow-lg -translate-y-2">Automação</div>

                    {/* Glowing Connections */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <line x1="50%" y1="50%" x2="30%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
                        <line x1="50%" y1="50%" x2="25%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
                        
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
                            <stop offset="50%" stopColor="#FF6B00" stopOpacity="1" />
                            <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                    </svg>
                    
                     <div className="absolute bottom-4 w-full text-center">
                       <p className="text-primary font-bold text-sm">Fluxo Unificado & Inteligente</p>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
}
