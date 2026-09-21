"use client";

import { ArrowRight, ArrowDown, Database, Workflow, BarChart3 } from "lucide-react";
import { useContent } from "@/lib/ContentContext";

const icons = { Database, Workflow, BarChart: BarChart3 };

export default function Hero({ contactUrl }: { contactUrl: string }) {
  const { hero } = useContent();

  return (
    <section id="solutions" aria-labelledby="hero-title" className="px-6 pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="site-container grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div>
          <p className="mb-6 flex items-center gap-3 text-sm font-medium text-zinc-300">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            {hero.badge}
          </p>
          <h1 id="hero-title" className="font-space text-[clamp(2.5rem,5.2vw,4.5rem)] font-medium leading-[1.08] tracking-tight text-balance">
            {hero.title.part1}{" "}
            <span className="text-primary">{hero.title.highlight}</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-relaxed text-zinc-300 md:text-lg">
            {hero.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-5">
            <a href={contactUrl} target="_blank" rel="noopener noreferrer" className="contact-button">
              {hero.cta.primary}<ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#method" className="inline-flex min-h-11 items-center gap-2 text-sm text-zinc-300 transition-colors hover:text-white">
              {hero.cta.secondary}<ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0e0e0e] p-6 sm:p-8">
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">Processos / Dados / Análise</p>
          <ol>
            {hero.features.map((feature, index) => {
              const Icon = icons[feature.icon as keyof typeof icons] || Database;
              return (
                <li key={feature.title}>
                  {index > 0 && <div className="ml-[21px] h-6 w-px bg-white/15" aria-hidden="true" />}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#161616]">
                      <Icon size={20} className="text-primary" aria-hidden="true" />
                    </div>
                    <div className="py-1">
                      <h2 className="font-space text-lg font-medium text-white">{feature.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-zinc-400">{feature.description}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
