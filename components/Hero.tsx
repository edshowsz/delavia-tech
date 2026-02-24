import { ArrowRight, Database, Bot, Zap } from "lucide-react";
import { SITE_CONTENT } from "@/lib/content";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const { hero } = SITE_CONTENT;
  
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
          <button 
            onClick={onContactClick}
            className="group relative bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)]"
          >
            {hero.cta.primary}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a href="#solutions" className="px-8 py-4 rounded-lg font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all text-sm uppercase tracking-wide">
            {hero.cta.secondary}
          </a>
        </div>




        {/* Tech Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-10 text-left">
          <div className="p-4">
            <Database className="text-primary mb-4" />
            <h3 className="text-white font-bold mb-1">{hero.features[0].title}</h3>
            <p className="text-sm text-gray-500">{hero.features[0].description}</p>
          </div>
          <div className="p-4">
            <Bot className="text-primary mb-4" />
            <h3 className="text-white font-bold mb-1">{hero.features[1].title}</h3>
            <p className="text-sm text-gray-500">{hero.features[1].description}</p>
          </div>
          <div className="p-4">
            <Zap className="text-primary mb-4" />
            <h3 className="text-white font-bold mb-1">{hero.features[2].title}</h3>
            <p className="text-sm text-gray-500">{hero.features[2].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
