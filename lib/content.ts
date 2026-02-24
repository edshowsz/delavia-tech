import { LineChart, Database, Workflow, BrainCircuit, ScanSearch, Handshake, Users, ShieldCheck } from "lucide-react";

export const SITE_CONTENT = {
  navbar: {
    visible: true,
    logo: {
      text: "DELAVIA",
      highlight: ".TECH"
    },
    links: {
      solutions: "Soluções",
      method: "Método",
      contact: "Contato"
    }
  },
  hero: {
    visible: false,
    badge: "Consultoria de Dados & IA",
    title: {
      part1: "Transforme dados em",
      highlight: "inteligência estratégica"
    },
    description: "Ajudamos empresas a estruturar seus dados e implementar processos de IA que eliminam gargalos e garantem previsibilidade.",
    cta: {
      primary: "Agendar Diagnóstico",
      secondary: "Conheça nossa Consultoria"
    },
    features: [
      {
        title: "Engenharia de Dados",
        description: "Pipelines escaláveis e warehouse estruturado.",
        icon: "Database"
      },
      {
        title: "Agentes de IA",
        description: "Força de trabalho digital 24/7.",
        icon: "Bot"
      },
      {
        title: "Automação End-to-End",
        description: "Elimine tarefas repetitivas.",
        icon: "Zap"
      }
    ]
  },
  integrationConcept: {
    visible: true,
    title: {
      part1: "Sua empresa tem",
      highlight: "ferramentas demais",
      part2: "mas conexão de menos?"
    },
    description: "CRM, ERP, planilhas, ads, e-mail marketing... Você contratou o melhor software para cada função e isso acabou criando ilhas isoladas de informação.",
    alertBox: {
      title: "Sua operação precisa de arquitetura, não de mais assinaturas.",
      highlight: "arquitetura",
      description: "Ao invés de vender mais um software para sua stack, nós projetamos a inteligência que conecta as ferramentas que você já usa em um fluxo unificado e rentável."
    },
    chaos: {
      title: "Cenário Atual (Silos)",
      centerNode: {
        title: "Transferência Manual",
        subtitle: "(Copy & Paste)"
      },
      points: [
        { title: "Dados fragmentados", description: "CRM diz uma coisa, ERP diz outra, no final você vai para a planilha e mesmo assim não tem certeza do número real." },
        { title: "Custo humano alto", description: "Sua equipe gasta 30% do tempo atualizando planilhas em vez de vender." },
        { title: "Erros operacionais", description: "Copy-paste manual gera erros de digitação, notas fiscais erradas e churn." }
      ]
    },
    order: {
      title: "Nossa proposta",
      points: [
        { title: "Sincronia bidirecional", description: "Faturou no ERP? Atualiza o CRM. Lead converteu? Notifica o Slack. Tudo automático." },
        { title: "Decisões em tempo real", description: "Dashboards que mostram a saúde do negócio agora, não o relatório do mês passado." }
      ]
    },
    dataSources: [
      { name: "Vendas (CRM)", x: "15%", y: "15%", delay: "0.1s", duration: "3s", reverseDelay: "1.5s" },
      { name: "Financeiro (ERP)", x: "85%", y: "85%", delay: "0.8s", duration: "4s", reverseDelay: "2.2s" },
      { name: "Marketing & Ads", x: "85%", y: "15%", delay: "1.3s", duration: "2.8s", reverseDelay: "0.5s" },
      { name: "Suporte & CS", x: "15%", y: "85%", delay: "0.4s", duration: "3.5s", reverseDelay: "2.8s" },
      { name: "E-commerce", x: "50%", y: "10%", delay: "1.9s", duration: "3.2s", reverseDelay: "1.0s" },
      { name: "RH & Pessoas", x: "50%", y: "90%", delay: "2.5s", duration: "4.2s", reverseDelay: "3.1s" },
      { name: "Operações & Projetos", x: "10%", y: "50%", delay: "0.6s", duration: "2.9s", reverseDelay: "1.8s" },
      { name: "Pagamentos & Cobrança", x: "90%", y: "50%", delay: "1.1s", duration: "3.8s", reverseDelay: "2.5s" },
    ]
  },
  painPoints: {
    visible: true,
    title: {
      part1: "Onde sua operação",
      highlight: "trava?"
    },
    description: "Muitas empresas acumulam dados mas não geram valor.",
    cards: [
      {
        title: "Dados Desconectados",
        description: "Informações espalhadas em planilhas e sistemas que não conversam, gerando cegueira estratégica e relatórios manuais imprecisos.",
        icon: "SearchX"
      },
      {
        title: "Processos Lentos",
        description: "Equipes talentosas perdendo horas em tarefas repetitivas de \"copy-paste\" que poderiam ser resolvidas em segundos por automação.",
        icon: "Clock"
      },
      {
        title: "Oportunidades Perdidas",
        description: "Enquanto concorrentes implementam IA para prever tendências e otimizar custos, sua empresa reage ao passado em vez de antecipar o futuro.",
        icon: "AlertTriangle"
      }
    ]
  },
  methodology: {
    visible: true,
    title: {
      line1: "Não vendemos",
      highlight1: "bodyshop",
      line2: "Não vendemos",
      highlight2: "software",
      line3: "Vendemos",
      highlight3: "resultados"
    },
    cards: [
      {
        title: "Parceria estratégica",
        description: "Você não precisa de mais devs, precisa de um parceiro que entenda seu negócio e gere valor.",
        badge: "CONEXÃO",
        icon: Users
      },
      {
        title: "Modelo baseado em valor",
        description: "Nosso modelo é baseado em resultados, não em horas ou licenças.",
        badge: "",
        icon: ShieldCheck
      },
      {
        title: "Crescimento compartilhado",
        description: "Parceiros que expandem nosso impacto são recompensados na mesma proporção que ajudamos a crescer.",
        badge: "10% DE COMISSÃO",
        icon: Handshake
      }
    ]
  },
  services: {
    visible: true,
    badge: "Nosso Pipeline de Valor",
    title: "O Fluxo da Inteligência",
    description: "Não entregamos soluções isoladas. Construímos um pipeline contínuo onde dados brutos se transformam em ações inteligentes, gerando valor real e mensurável para seu negócio.",
    items: [
      {
        id: "consulting",
        title: "Consultoria",
        icon: LineChart,
        shortDesc: "Estratégia",
        description: "O direcionamento. Diagnosticamos o cenário e desenhamos este pipeline de transformação.",
        features: [
          "Diagnóstico técnico da operação",
          "Mapeamento de gargalos",
          "Definição da arquitetura (To-Be)",
          "Roadmap de transformação"
        ]
      },
      {
        id: "architecture",
        title: "Arquitetura de Processos",
        icon: ScanSearch,
        shortDesc: "Organização",
        description: "Antes de automatizar, organizamos. Desenhamos fluxos otimizados e escaláveis, garantindo que a tecnologia acelere processos eficientes, não o caos.",
        features: [
          "Desenho do fluxo atual (As-Is)",
          "Identificação de gargalos e redundâncias",
          "Desenho do fluxo ideal (To-Be)"
        ]
      },
      {
        id: "data",
        title: "Engenharia de dados",
        icon: Database,
        shortDesc: "Fundação",
        description: "A base de tudo. Implementamos ferramentas modernas e estruturamos seus dados para que sejam confiáveis e acessíveis.",
        features: [
            "Infraestrutura para orquestração de pipelines",
            "Data Lakes e Warehouses",
            "Pipelines ETL/ELT robustos",
            "Ferramentas de BI e dashboards personalizados",
            "Modelagem de dados"
        ]
      },
      {
        id: "automation",
        title: "Automações Inteligentes",
        icon: Workflow,
        shortDesc: "Eficiência",
        description: "Eliminamos o retrabalho manual. Criamos ecossistemas onde suas ferramentas (CRM, ERP, Marketing) conversam em tempo real.",
        features: [
          "Orquestração de workflows complexos",
          "Sincronização bidirecional de sistemas",
          "Alertas em tempo real"
        ]
      },
      {
        id: "ai",
        title: "Agentes de IA",
        icon: BrainCircuit,
        shortDesc: "Inteligência",
        description: "A inteligência em ação. Agentes autônomos consomem os dados para tomar decisões e agir.",
        features: [
          "Atendimento e Vendas via IA",
          "RAG (Chat com seus dados)",
          "Assistentes de Produtividade"
        ]
      }
    ]
  },
  cta: {
    visible: true,
    title: "Pronto para escalar sua operação?",
    description: "Agende um diagnóstico gratuito e descubra onde estão os gargalos da sua operação.",
    button: "ESTOU PRONTO"
  },
  footer: {
    visible: true,
    company: "Delavia Tech",
    description: "Transformando dados em vantagem competitiva através de automação e inteligência artificial.",
    copyright: "© 2024 Delavia Tech. Todos os direitos reservados."
  },
  contactModal: {
    visible: true,
    title: "Fale conosco",
    formUrl: "https://forms.monday.com/forms/embed/687517e4625fde922a488ee5e3a470bd?r=use1"
  },
  config: {
    googleAnalyticsId: "G-7R9R4GG2P2"
  }
};
