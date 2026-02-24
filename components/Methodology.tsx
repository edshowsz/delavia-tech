import { SITE_CONTENT } from "@/lib/content";
import { Handshake } from "lucide-react";

export default function Methodology() {
  const { methodology } = SITE_CONTENT;
  
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div>
            
            <h2 className="font-space text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {methodology.title.line1} <span className="text-gray-600 decoration-line-through decoration-red-500/50">{methodology.title.highlight1}</span>.
              <br />
              {methodology.title.line2} <span className="text-gray-600 decoration-line-through decoration-red-500/50">{methodology.title.highlight2}</span>.
              <br />
              {methodology.title.line3} <span className="text-primary">{methodology.title.highlight3}</span>.
            </h2>
            
          </div>

          {/* Visual Representation */}
          <div className="relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-[60px] md:blur-[80px] rounded-full pointer-events-none" />
             
             <div className="grid gap-6 relative z-10">
                
                {methodology.cards.map((card, index) => {
                  const Icon = card.icon;
                  const isHighlighted = card.badge !== undefined;
                  
                  return (
                    <div 
                      key={index}
                      className={`p-6 rounded-2xl border transition-colors group relative overflow-hidden ${
                        isHighlighted 
                          ? "bg-[#0F0F0F] border-primary/20 shadow-[0_0_30px_rgba(255,107,0,0.1)]" 
                          : "bg-zinc-900 border-white/5 hover:border-primary/30"
                      }`}
                    >
                        {isHighlighted && <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-[40px] rounded-full" />}
                        
                        <div className="flex items-start gap-4 relative z-10">
                            <div className={`p-3 rounded-lg transition-colors ${
                              isHighlighted 
                                ? "bg-primary/20 text-primary" 
                                : "bg-zinc-800 text-gray-400 group-hover:text-primary group-hover:bg-primary/10"
                            }`}>
                                <Icon size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-2">
                                    {card.description}
                                </p>
                                {card.badge && (
                                  <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded text-primary text-xs font-bold tracking-wide mt-2">
                                      {card.badge}
                                  </div>
                                )}
                            </div>
                        </div>
                    </div>
                  );
                })}

             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
