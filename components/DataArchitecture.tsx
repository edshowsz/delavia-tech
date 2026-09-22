import { Database, Workflow, BarChart3, Layers3, ArrowDown } from "lucide-react";

export default function DataArchitecture() {
  return (
    <figure className="architecture-panel" aria-label="Fluxo ilustrativo: sistemas e planilhas passam por ingestão e transformação, formando uma base de dados para análises e automações.">
      <div className="flex items-center justify-between gap-4 border-b border-white/[0.07] px-5 py-4 sm:px-7">
        <span className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400 sm:text-xs"><Layers3 size={15} className="text-primary" aria-hidden="true" />Arquitetura de dados</span>
      </div>
      <div className="architecture-grid hidden px-5 py-6 md:block">
        <svg viewBox="0 0 1040 320" className="w-full" aria-hidden="true">
          <defs>
            <linearGradient id="node-surface" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#222329"/><stop offset="1" stopColor="#101114"/></linearGradient>
            <linearGradient id="core-surface" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#31241b"/><stop offset="1" stopColor="#151311"/></linearGradient>
            <linearGradient id="flow-stroke"><stop stopColor="#ff7a00" stopOpacity=".15"/><stop offset=".5" stopColor="#ff9d50"/><stop offset="1" stopColor="#ff7a00" stopOpacity=".15"/></linearGradient>
          </defs>
          <g fill="#92929d" fontFamily="monospace" fontSize="10" letterSpacing="2">
            <text x="38" y="29">01 / FONTES</text><text x="299" y="29">02 / PROCESSAMENTO</text><text x="582" y="29">03 / BASE DE DADOS</text><text x="856" y="29">04 / APLICAÇÕES</text>
          </g>
          <g fill="none" stroke="#39322c" strokeWidth="1.2">
            <path d="M207 92 H236 Q253 92 253 109 V144 Q253 160 270 160 H299"/><path d="M207 160 H299"/><path d="M207 228 H236 Q253 228 253 211 V176 Q253 160 270 160 H299"/>
            <path d="M488 160 H582"/><path d="M760 160 H796 Q815 160 815 141 V111 Q815 94 832 94 H856"/><path d="M760 160 H796 Q815 160 815 179 V209 Q815 226 832 226 H856"/>
          </g>
          <g fill="none" stroke="url(#flow-stroke)" strokeWidth="2" strokeDasharray="6 100" className="data-flow">
            <path d="M207 92 H236 Q253 92 253 109 V144 Q253 160 270 160 H299"/><path d="M207 228 H236 Q253 228 253 211 V176 Q253 160 270 160 H299"/><path d="M488 160 H582"/><path d="M760 160 H796 Q815 160 815 141 V111 Q815 94 832 94 H856"/><path d="M760 160 H796 Q815 160 815 179 V209 Q815 226 832 226 H856"/>
          </g>
          {[{y:65,title:'CRM / ERP',label:'Sistemas de negócio'},{y:133,title:'APIs',label:'Serviços e integrações'},{y:201,title:'Planilhas',label:'Arquivos e bases locais'}].map(({y,title,label})=><g key={title}>
            <rect x="38" y={y} width="169" height="54" rx="9" fill="url(#node-surface)" stroke="#34343a"/>
            <rect x="51" y={y+17} width="18" height="20" rx="4" fill="#25262c" stroke="#46464e"/>
            <path d={`M56 ${y+23} h8 M56 ${y+28} h8 M56 ${y+33} h4`} stroke="#b1b1ba"/>
            <text x="81" y={y+24} fill="#e4e4e9" fontSize="13">{title}</text><text x="81" y={y+41} fill="#8b8b98" fontSize="9">{label}</text>
          </g>)}
          <rect x="299" y="94" width="189" height="132" rx="12" fill="url(#node-surface)" stroke="#414149"/>
          <text x="393.5" y="154" textAnchor="middle" fill="#ededf0" fontSize="14">Ingestão &amp;</text>
          <text x="393.5" y="175" textAnchor="middle" fill="#ededf0" fontSize="14">transformação</text>
          <rect x="571" y="77" width="200" height="166" rx="19" fill="none" stroke="#ff7a00" strokeOpacity=".1"/>
          <rect x="582" y="88" width="178" height="144" rx="12" fill="url(#core-surface)" stroke="#9b5a2b"/>
          <g fill="none" stroke="#ffac70" strokeWidth="1.4"><ellipse cx="671" cy="120" rx="15" ry="5"/><path d="M656 120 v20 c0 7 30 7 30 0 v-20 M656 130 c0 7 30 7 30 0"/></g>
          <text x="671" y="171" textAnchor="middle" fill="#ffdbc1" fontSize="16">Base de dados</text>
          <text x="671" y="191" textAnchor="middle" fill="#b49b8a" fontSize="10"><tspan x="671">Informações organizadas</tspan><tspan x="671" dy="15">em um só lugar</tspan></text>
          {[{y:62,title:'Analytics',label:'Indicadores & dashboards'},{y:194,title:'Automação',label:'Fluxos & integrações'}].map(({y,title,label},i)=><g key={title}>
            <rect x="856" y={y} width="156" height="64" rx="9" fill="url(#node-surface)" stroke="#34343a"/>
            <text x="873" y={y+26} fill="#e4e4e9" fontSize="13">{title}</text><text x="873" y={y+46} fill="#92929f" fontSize="9">{label}</text>
            {i===0 ? <path d={`M971 ${y+26} v-7 m7 7 v-12 m7 12 v-17`} stroke="#ff9b50" strokeWidth="2"/> : <path d={`M974 ${y+10} l-5 9 h9 l-5 9`} fill="none" stroke="#ff9b50" strokeWidth="1.5"/>}
          </g>)}
          <path d="M38 286 H1012" stroke="#27272c" strokeDasharray="3 6"/>
          <text x="1012" y="309" textAnchor="end" fill="#9a8e83" fontFamily="monospace" fontSize="10">Uma arquitetura que conecta sua operação.</text>
        </svg>
      </div>
      <div className="architecture-grid px-5 py-7 md:hidden">
        <div className="flex justify-center gap-2 font-mono text-[11px] text-zinc-300">{['CRM / ERP','APIs','Planilhas'].map(x=><span key={x} className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">{x}</span>)}</div>
        <ArrowDown className="mx-auto my-4 text-primary/60" size={18} aria-hidden="true" />
        <div className="architecture-mobile-node"><Workflow size={19} aria-hidden="true"/><div><p>Ingestão &amp; transformação</p></div></div>
        <ArrowDown className="mx-auto my-4 text-primary/60" size={18} aria-hidden="true" />
        <div className="architecture-mobile-node !border-primary/40 !bg-primary/[0.06]"><Database size={21} className="text-primary" aria-hidden="true"/><div><p>Base de dados</p><span>Informações organizadas em um só lugar</span></div></div>
        <ArrowDown className="mx-auto my-4 text-primary/60" size={18} aria-hidden="true" />
        <div className="flex justify-center gap-3 text-xs text-zinc-300"><span className="flex items-center gap-2"><BarChart3 size={15} aria-hidden="true"/>Analytics</span><span className="text-zinc-600">/</span><span className="flex items-center gap-2"><Workflow size={15} aria-hidden="true"/>Automação</span></div>
      </div>
    </figure>
  );
}
