import { Check, ClipboardList, GitBranch, RotateCcw } from "lucide-react";

export default function ProcessDiagram() {
  return (
    <figure className="technical-detail process-detail" aria-label="Fluxo de processo: uma entrada passa por validação, seguindo para aprovação ou revisão. A revisão retorna à validação.">
      <div className="process-scene">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="workflow-lines" fill="none" aria-hidden="true">
          <path d="M270 250 H430 M570 250 H610 Q650 250 650 210 V145 Q650 125 690 125 H730" stroke="#b88354" vectorEffect="non-scaling-stroke" />
          <path d="M570 250 H610 Q650 250 650 290 V355 Q650 375 690 375 H730" stroke="#6c625b" vectorEffect="non-scaling-stroke" />
          <path d="M865 435 V465 Q865 480 840 480 H510 Q490 480 490 450 V350" stroke="#756150" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" />
          <path d="M480 367 L490 350 L500 367" stroke="#a47b59" vectorEffect="non-scaling-stroke" />
          <circle cx="270" cy="250" r="4" fill="#d6a175"/><circle cx="730" cy="125" r="4" fill="#d6a175"/><circle cx="730" cy="375" r="4" fill="#8a7a70"/>
        </svg>
        <div className="process-node process-entry"><ClipboardList aria-hidden="true"/><span>Entrada</span></div>
        <div className="process-decision"><div><GitBranch aria-hidden="true"/></div><span>Validar</span></div>
        <div className="process-node process-approved"><Check aria-hidden="true"/><span>Aprovar</span></div>
        <div className="process-node process-review"><RotateCcw aria-hidden="true"/><span>Revisar</span></div>
      </div>
    </figure>
  );
}
