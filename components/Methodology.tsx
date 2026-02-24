import { Users, Target, ShieldCheck } from "lucide-react";

export default function Methodology() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            
            <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Não vendemos <span className="text-gray-600 decoration-line-through decoration-red-500/50">bodyshop</span>.
              <br />
              Não vendemos <span className="text-gray-600 decoration-line-through decoration-red-500/50">software</span>.
              <br />
              Vendemos <span className="text-primary">resultados</span>.
            </h2>
            
          </div>

          {/* Visual Representation */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-[80px] rounded-full pointer-events-none" />
             
             <div className="grid gap-6 relative z-10">
                
                <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors group">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-zinc-800 rounded-lg text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                            <Target size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">Conexão, não coleção</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Você não precisa de mais uma ferramenta, precisa fazer elas se comunicarem.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-primary/30 transition-colors group">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-zinc-800 rounded-lg text-gray-400 group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                            <Users size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">Parceria estratégica</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Você não precisa de mais devs, precisa de um parceiro que entenda seu negócio e gere valor.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-2xl bg-[#0F0F0F] border border-primary/20 shadow-[0_0_30px_rgba(255,107,0,0.1)] relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[40px] rounded-full" />
                    
                    <div className="flex items-start gap-4 relative z-10">
                        <div className="p-3 bg-primary/20 rounded-lg text-primary">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">Modelo "Skin in the game"</h3>
                             <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                Nosso modelo é baseado em resultados, não em horas ou licenças.
                            </p>
                            <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-xs font-bold tracking-wide">
                                COBRAMOS 10% DO ROI GERADO
                            </div>
                        </div>
                    </div>
                </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
