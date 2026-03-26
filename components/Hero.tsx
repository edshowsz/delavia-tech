"use client";

import { ArrowRight, Database, Workflow, BarChart3 } from "lucide-react";
import { useContent } from "@/lib/ContentContext";

interface HeroProps {
  contactUrl: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Workflow,
  BarChart: BarChart3,
};

export default function Hero({ contactUrl }: HeroProps) {
  const { hero } = useContent();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[1000px] h-[300px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[120px] -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        
        <h1 className="font-space text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
          {hero.title.part1} <br />
          <span className="text-primary">{hero.title.highlight}</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-10 leading-relaxed">
          {hero.description}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href={contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]"
          >
            {hero.cta.primary}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>

        </div>

        {/* Tech Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-white/10 pt-10 max-w-4xl mx-auto">
          {hero.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Database;
            return (
              <div key={index} className="group relative bg-zinc-900 border border-white/5 hover:border-primary/30 rounded-xl p-6 text-center transition-all duration-300 overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 right-4 text-xs font-mono text-white/10 group-hover:text-white/20 transition-colors">0{index + 1}</span>
                <div className="bg-primary/10 p-3 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary w-5 h-5" />
                </div>
                <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
