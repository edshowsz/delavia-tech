import { Database } from "lucide-react";

type Field = { name: string; key?: "PK" | "FK"; measure?: boolean };

function ModelTable({ name, fields, className = "" }: {
  name: string;
  fields: Field[];
  className?: string;
}) {
  return (
    <div className={`model-table ${className}`}>
      <h4><Database size={12} aria-hidden="true" />{name}</h4>
      <dl>
        {fields.map((field) => (
          <div key={field.name} className={field.measure ? "model-measure" : undefined}>
            <dt>{field.name}</dt>
            <dd>{field.key && <abbr title={field.key === "PK" ? "Chave primária" : "Chave estrangeira"}>{field.key}</abbr>}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function SalesDataModel() {
  return (
    <figure className="technical-detail business-model" aria-label="Modelo analítico de vendas por item. Clientes, produtos e calendário se relacionam com vários itens de venda. Cada item registra quantidade, valor bruto, desconto e valor líquido.">
      <div className="sales-model">
        <ModelTable name="clientes" className="model-customers" fields={[
          { name: "cliente_id", key: "PK" }, { name: "segmento" }, { name: "uf" },
        ]} />
        <ModelTable name="produtos" className="model-products" fields={[
          { name: "produto_id", key: "PK" }, { name: "categoria" }, { name: "marca" },
        ]} />
        <ModelTable name="calendário" className="model-calendar" fields={[
          { name: "data_id", key: "PK" }, { name: "mês" }, { name: "ano" },
        ]} />
        {["customers", "products", "calendar"].map((relation) => (
          <div key={relation} className={`model-relation relation-${relation}`} aria-hidden="true"><span>1</span><i /><span>N</span></div>
        ))}
        <ModelTable name="itens_venda" className="model-fact" fields={[
          { name: "item_id", key: "PK" },
          { name: "pedido_id" },
          { name: "cliente_id", key: "FK" },
          { name: "produto_id", key: "FK" },
          { name: "data_id", key: "FK" },
          { name: "status" },
          { name: "quantidade", measure: true },
          { name: "valor_bruto", measure: true },
          { name: "desconto", measure: true },
          { name: "valor_líquido", measure: true },
        ]} />
      </div>
    </figure>
  );
}
