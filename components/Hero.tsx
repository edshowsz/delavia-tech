"use client";

import { ArrowUpRight, ArrowDown, Database, Workflow, BarChart3 } from "lucide-react";
import { useContent } from "@/lib/ContentContext";
import DataArchitecture from "./DataArchitecture";

export default function Hero({ contactUrl }: { contactUrl: string }) {
  const { hero } = useContent();
  return (
    <section id="solutions" aria-labelledby="hero-title" className="hero-engineering relative isolate overflow-hidden px-6 pb-0 pt-36 md:pt-40">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="site-container relative">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/[0.04] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-orange-200/80 sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-primary" />Engenharia de dados & consultoria</p>
          <h1 id="hero-title" className="font-space text-[clamp(2.5rem,6.2vw,5.7rem)] font-medium leading-[1.04] tracking-[-0.055em]">
            <span className="block">{hero.title.part1}</span>
            <span className="hero-title-accent block">{hero.title.highlight}<span className="text-primary">.</span></span>
          </h1>
          <p className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">{hero.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="contact-button">{hero.cta.primary}<ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href="#method" className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white">{hero.cta.secondary}<ArrowDown size={15} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="relative mt-16 md:mt-20"><DataArchitecture /></div>
        <div className="grid grid-cols-1 gap-5 border-b border-white/10 py-8 sm:grid-cols-3 sm:gap-6 md:py-10">
          {[{icon:Workflow,title:'Processos bem definidos',text:'Uma operação que faz sentido.'},{icon:Database,title:'Dados bem estruturados',text:'Uma base em que você pode confiar.'},{icon:BarChart3,title:'Análises que orientam',text:'Clareza para o próximo passo.'}].map(({icon:Icon,title,text})=><div key={title} className="flex items-center gap-4 sm:justify-center"><Icon size={19} className="shrink-0 text-zinc-500" strokeWidth={1.4} aria-hidden="true"/><div><h2 className="text-sm font-medium text-zinc-200">{title}</h2><p className="mt-1 text-xs text-zinc-500">{text}</p></div></div>)}
        </div>
      </div>
    </section>
  );
}
