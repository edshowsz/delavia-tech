import { Users, Target, ShieldCheck } from "lucide-react";

export default function Methodology() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Nossa Filosofia</span>
            </div>
            
            <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6">
              Não vendemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 decoration-line-through">bodyshop</span>.
              <br />
              <br />
              Não vendemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400 decoration-line-through">Software</span>.
              <br />
              <br />
              Vendemos <span className="text-primary">consultoria especializada</span>.
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                O modelo tradicional de consultoria foca em volume: muitos desenvolvedores, qualidade questionável e alta rotatividade não funciona mais.
                <br/><br/>
                Não vendemos horas, vendemos resultados. 
                <br/><br/>
                Entramos como parceiros estratégicos, entendendo profundamente seu negócio para entregar soluções que realmente impactam suas métricas-chave.
            </p>

          </div>

          {/* Visual Representation */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent blur-[100px] rounded-full" />
             
             <div className="relative p-8 border border-white/10 bg-black/50 backdrop-blur-sm rounded-2xl">
                <div className="flex flex-col gap-6">
                   {/* Card 1: Bodyshop */}
                   <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 opacity-50 grayscale">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold text-gray-400">
                        100+
                      </div>
                      <div className="flex-1">
                        <h4 className="text-gray-400 font-bold text-sm mb-1">Bodyshop Tradicional</h4>
                        <p className="text-[10px] text-gray-600">Alocação de volume</p>
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-red-500 font-bold border border-red-500/30 px-2 py-1 rounded">Volume</span>
                   </div>

                   {/* Card 2: Delavia */}
                   <div className="flex items-center gap-4 p-6 rounded-xl border border-primary bg-black shadow-[0_0_30px_rgba(255,107,0,0.15)] scale-105 transform origin-left">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        <Users />
                      </div>
                      <div className="flex-1">
                         <h4 className="text-white font-bold mb-1">Parceiro Dedicado</h4>
                         <p className="text-xs text-gray-400">Objetivos alinhados aos seus</p>
                      </div>
                      <span className="text-xs uppercase tracking-wider text-primary font-bold border border-primary/30 px-2 py-1 rounded bg-primary/10">Impacto</span>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
