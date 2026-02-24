"use client";

import { AlertTriangle, Clock, SearchX } from "lucide-react";
import { useContent } from "@/lib/ContentContext";

export default function PainPoints() {
  const { painPoints } = useContent();
  
  return (
    <section id="pain-points" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[80px] md:blur-[100px] -z-10 translate-x-1/3 md:translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex justify-between items-end">
          <div className="max-w-xl">
            <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-4">
              {painPoints.title.part1} <span className="text-primary">{painPoints.title.highlight}</span>
            </h2>
            <p className="text-gray-400 leading-relaxed">
              {painPoints.description}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <SearchX />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{painPoints.cards[0].title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {painPoints.cards[0].description}
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Clock />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{painPoints.cards[1].title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {painPoints.cards[1].description}
            </p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <AlertTriangle />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{painPoints.cards[2].title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {painPoints.cards[2].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
