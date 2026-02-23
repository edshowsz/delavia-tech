import { AlertTriangle, Clock, SearchX } from "lucide-react";

export default function PainPoints() {
  return (
    <section id="pain-points" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Dores do Negócio</span>
            <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-4">
              Onde sua operação <span className="text-primary">trava?</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Muitas empresas acumulam dados mas não geram valor. Identificamos os gargalos que impedem seu crescimento exponencial.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <SearchX />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Dados Desconectados</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Informações espalhadas em planilhas e sistemas que não conversam, gerando cegueira estratégica e relatórios manuais imprecisos.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Clock />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Processos Lentos</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Equipes talentosas perdendo horas em tarefas repetitivas de "copy-paste" que poderiam ser resolvidas em segundos por automação.
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <AlertTriangle />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Oportunidades Perdidas</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enquanto concorrentes implementam IA para prever tendências e otimizar custos, sua empresa reage ao passado em vez de antecipar o futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
