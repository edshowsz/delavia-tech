import { CalendarDays, Database, Package, Store, Users } from "lucide-react";

const connections = [
  "M280 110 H310 Q350 110 350 150 V210 Q350 250 390 250",
  "M280 390 H310 Q350 390 350 350 V290 Q350 250 390 250",
  "M720 110 H690 Q650 110 650 150 V210 Q650 250 610 250",
  "M720 390 H690 Q650 390 650 350 V290 Q650 250 610 250",
];

export default function SalesDataModel() {
  return (
    <figure className="technical-detail business-model" aria-label="Modelo de vendas conectado às tabelas de clientes, produtos, calendário e canais de venda.">
      <div className="sales-network">
        <svg className="sales-connections" viewBox="0 0 1000 500" preserveAspectRatio="none" fill="none" aria-hidden="true">
          {connections.map((path) => <path key={path} d={path} stroke="#a27046" strokeOpacity=".7" strokeWidth="1" vectorEffect="non-scaling-stroke" />)}
          {[{x:280,y:110},{x:280,y:390},{x:720,y:110},{x:720,y:390},{x:390,y:250},{x:610,y:250}].map(({x,y}) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#e6a575" />
          ))}
        </svg>
        <div className="sales-node sales-clients"><Users aria-hidden="true" /><span>Clientes</span></div>
        <div className="sales-node sales-products"><Package aria-hidden="true" /><span>Produtos</span></div>
        <div className="sales-node sales-calendar"><CalendarDays aria-hidden="true" /><span>Calendário</span></div>
        <div className="sales-node sales-channels"><Store aria-hidden="true" /><span>Canais</span></div>
        <div className="sales-node sales-center"><Database aria-hidden="true" /><span>Vendas</span></div>
      </div>
    </figure>
  );
}
