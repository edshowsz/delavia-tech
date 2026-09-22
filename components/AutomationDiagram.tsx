import { Database, Search, ShoppingBag, UserPlus, RefreshCw } from "lucide-react";

const paths = [
  { name: "lookup", d: "M280 105 H360" },
  { name: "existing", d: "M640 105 H720" },
  { name: "new", d: "M500 175 V315" },
  { name: "updated", d: "M860 175 V315" },
  { name: "created", d: "M640 385 H720" },
];

export default function AutomationDiagram() {
  return (
    <figure className="technical-detail automation-detail" aria-label="Automação ilustrativa de pedidos pagos: consultar cliente, atualizar o cadastro se já existir ou criar um novo, e registrar a venda. A animação alterna entre os dois caminhos.">
      <div className="automation-scene" aria-hidden="true">
        <svg viewBox="0 0 1000 500" preserveAspectRatio="none" className="workflow-lines" fill="none">
          {paths.map(({name,d}) => <path key={name} d={d} stroke="#76573f" strokeWidth="1" vectorEffect="non-scaling-stroke"/>)}
          {paths.map(({name,d}) => <path key={name} d={d} pathLength="100" stroke="#ffc398" strokeWidth="2" strokeDasharray="12 100" vectorEffect="non-scaling-stroke" className={`automation-packet packet-${name}`}/>)}
          {[{x:280,y:105},{x:640,y:105},{x:500,y:175},{x:860,y:175},{x:640,y:385}].map(({x,y})=><circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#bc875c"/>)}
        </svg>
        <div className="automation-node automation-order"><span className="automation-node-icon"><ShoppingBag/></span><span>Pedido<br/>pago</span></div>
        <div className="automation-node automation-lookup"><span className="automation-node-icon"><Search/></span><span>Consultar<br/>cliente</span></div>
        <div className="automation-node automation-update"><span className="automation-node-icon"><RefreshCw/></span><span>Atualizar<br/>CRM</span></div>
        <div className="automation-node automation-create"><span className="automation-node-icon"><UserPlus/></span><span>Criar<br/>cadastro</span></div>
        <div className="automation-node automation-record"><span className="automation-node-icon"><Database/></span><span>Registrar<br/>venda</span></div>
        <span className="automation-condition condition-existing">Já existe</span>
        <span className="automation-condition condition-new">Novo cliente</span>
      </div>
    </figure>
  );
}
