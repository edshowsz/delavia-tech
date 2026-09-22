"use client";

import SalesDataModel from "./SalesDataModel";
import { useContent } from "@/lib/ContentContext";
import { Check, Database, GitBranch, ScanLine, Workflow } from "lucide-react";

function TechnicalDetail({ index }: { index: number }) {
  if(index === 0) return <div className="technical-detail" aria-hidden="true"><div className="scan-grid"><span className="scan-sweep"/><div/><div/><div/><div/><div/><div/></div><div className="space-y-2 font-mono text-[10px] text-zinc-500"><p className="text-zinc-300">MAPEAMENTO</p><p className="flex items-center gap-2"><Check size={11} className="text-primary"/>Fontes de dados</p><p className="flex items-center gap-2"><Check size={11} className="text-primary"/>Fluxos & dependências</p><p className="flex items-center gap-2"><Check size={11} className="text-primary"/>Prioridades</p></div></div>;
  if(index === 1) return <div className="technical-detail" aria-hidden="true"><div className="flow-mini"><span>Entrada</span><i/><span className="!border-primary/40 !text-orange-200"><GitBranch size={13}/>Processo</span><i/><span>Entrega</span></div></div>;
  if (index === 2) return <SalesDataModel />;
  return <div className="technical-detail" aria-hidden="true"><div className="automation-mini"><span><span className="h-1.5 w-1.5 rounded-full bg-primary"/>Evento</span><div className="automation-line"/><span><Workflow size={13}/>Fluxo</span><div className="automation-line"/><span><Check size={13} className="text-primary"/>Ação</span></div></div>;
}

export default function Services() {
  const { services } = useContent();
  const icons=[ScanLine,GitBranch,Database,Workflow];
  return (
    <section id="method" aria-labelledby="method-title" className="relative px-6 py-20 md:py-28">
      <div className="site-container">
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between md:gap-12">
          <div><p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">DA ESTRATÉGIA À IMPLEMENTAÇÃO</p><h2 id="method-title" className="font-space text-4xl font-medium tracking-[-0.04em] md:text-5xl">{services.title}<span className="text-primary">.</span></h2></div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-400">{services.description}</p>
        </div>
        <ol className="grid gap-4 md:grid-cols-2 md:gap-5">
          {services.items.map((service, index) => {
            const Icon=icons[index] || Database;
            return <li key={service.id} className="engineering-card group">
              <div className="flex items-center justify-between"><div className="flex items-center gap-3"><span className="engineering-icon"><Icon size={19} strokeWidth={1.5} aria-hidden="true"/></span><span className="font-mono text-[10px] tracking-widest text-zinc-500">0{index+1} / {service.shortDesc.toUpperCase()}</span></div><span className="h-1 w-1 rounded-full bg-primary/40" aria-hidden="true"/></div>
              <TechnicalDetail index={index}/>
              <h3 className="font-space text-2xl font-medium tracking-tight">{service.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-400">{service.description}</p>
            </li>;
          })}
        </ol>
      </div>
    </section>
  );
}
