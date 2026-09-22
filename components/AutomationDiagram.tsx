"use client";

import { useState } from "react";
import { Check, Cog, Pause, Play, Zap } from "lucide-react";

export default function AutomationDiagram() {
  const [paused, setPaused] = useState(false);

  return (
    <figure className={`technical-detail automation-detail${paused ? " is-paused" : ""}`} aria-label="Fluxo ilustrativo de automação: um evento inicia a execução e gera uma ação concluída.">
      <button type="button" className="automation-toggle" onClick={() => setPaused(!paused)} aria-label={paused ? "Reproduzir animação" : "Pausar animação"} title={paused ? "Reproduzir animação" : "Pausar animação"}>
        {paused ? <Play size={12} aria-hidden="true"/> : <Pause size={12} aria-hidden="true"/>}
      </button>
      <div className="automation-scene" aria-hidden="true">
        <div className="automation-step automation-trigger"><div className="automation-symbol"><Zap/></div><span>Evento</span></div>
        <div className="automation-wire automation-wire-first"><i/></div>
        <div className="automation-step automation-execute"><div className="automation-symbol"><Cog className="automation-cog"/></div><span>Execução</span></div>
        <div className="automation-wire automation-wire-second"><i/></div>
        <div className="automation-step automation-complete"><div className="automation-symbol"><Check/></div><span>Conclusão</span></div>
      </div>
    </figure>
  );
}
