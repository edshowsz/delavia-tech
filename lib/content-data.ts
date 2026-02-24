import { LineChart, Database, Workflow, BrainCircuit, ScanSearch, Handshake, Users, ShieldCheck } from "lucide-react";

export const PT_CONTENT = {
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
      { name: "Vendas (CRM)", x: "20%", y: "20%", delay: "0.1s", duration: "3s", reverseDelay: "1.5s" },
      { name: "Financeiro (ERP)", x: "80%", y: "80%", delay: "0.8s", duration: "4s", reverseDelay: "2.2s" },
      { name: "Marketing & Ads", x: "80%", y: "20%", delay: "1.3s", duration: "2.8s", reverseDelay: "0.5s" },
      { name: "Suporte & CS", x: "20%", y: "80%", delay: "0.4s", duration: "3.5s", reverseDelay: "2.8s" },
      { name: "E-commerce", x: "50%", y: "15%", delay: "1.9s", duration: "3.2s", reverseDelay: "1.0s" },
      { name: "RH & Pessoas", x: "50%", y: "85%", delay: "2.5s", duration: "4.2s", reverseDelay: "3.1s" },
      { name: "Operações & Projetos", x: "15%", y: "50%", delay: "0.6s", duration: "2.9s", reverseDelay: "1.8s" },
      { name: "Pagamentos & Cobrança", x: "85%", y: "50%", delay: "1.1s", duration: "3.8s", reverseDelay: "2.5s" },
    ]
  },
  painPoints: {
    visible: true,
    title: {
      part1: "Onde sua operação",
      highlight: "trava?"
    },
    description: "",
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
        badge: "",
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
    copyright: "© Todos os direitos reservados.",
    social: {
      linkedin: "https://www.linkedin.com/company/delavia-tech/"
    }
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

export const EN_CONTENT = {
  navbar: {
    visible: true,
    logo: {
      text: "DELAVIA",
      highlight: ".TECH"
    },
    links: {
      solutions: "Solutions",
      method: "Method",
      contact: "Contact"
    }
  },
  hero: {
    visible: false,
    badge: "Data & AI Consulting",
    title: {
      part1: "Turn data into",
      highlight: "strategic intelligence"
    },
    description: "We help companies structure their data and implement AI processes that eliminate bottlenecks and ensure predictability.",
    cta: {
      primary: "Schedule Diagnosis",
      secondary: "Our Consulting"
    },
    features: [
      {
        title: "Data Engineering",
        description: "Scalable pipelines and structured warehouse.",
        icon: "Database"
      },
      {
        title: "AI Agents",
        description: "24/7 digital workforce.",
        icon: "Bot"
      },
      {
        title: "End-to-End Automation",
        description: "Eliminate repetitive tasks.",
        icon: "Zap"
      }
    ]
  },
  integrationConcept: {
    visible: true,
    title: {
      part1: "Does your company have",
      highlight: "too many tools",
      part2: "but too little connection?"
    },
    description: "CRM, ERP, spreadsheets, ads, email marketing... You hired the best software for each function, creating isolated islands of information.",
    alertBox: {
      title: "Your operation needs architecture, not more subscriptions.",
      highlight: "architecture",
      description: "Instead of selling you another software for your stack, we design the intelligence that connects the tools you already use in a unified and profitable flow."
    },
    chaos: {
      title: "Current Scenario (Silos)",
      centerNode: {
        title: "Manual Transfer",
        subtitle: "(Copy & Paste)"
      },
      points: [
        { title: "Fragmented data", description: "CRM says one thing, ERP says another, in the end you go to the spreadsheet and still aren't sure of the real number." },
        { title: "High human cost", description: "Your team spends 30% of their time updating spreadsheets instead of selling." },
        { title: "Operational errors", description: "Manual copy-paste generates typos, wrong invoices, and churn." }
      ]
    },
    order: {
      title: "Our Proposal",
      points: [
        { title: "Bidirectional Sync", description: "Invoiced in ERP? Update CRM. Lead converted? Notify Slack. Everything automatic." },
        { title: "Real-time Decisions", description: "Dashboards showing business health now, not last month's report." }
      ]
    },
    dataSources: [
      { name: "Sales (CRM)", x: "20%", y: "20%", delay: "0.1s", duration: "3s", reverseDelay: "1.5s" },
      { name: "Finance (ERP)", x: "80%", y: "80%", delay: "0.8s", duration: "4s", reverseDelay: "2.2s" },
      { name: "Marketing & Ads", x: "80%", y: "20%", delay: "1.3s", duration: "2.8s", reverseDelay: "0.5s" },
      { name: "Support & CS", x: "20%", y: "80%", delay: "0.4s", duration: "3.5s", reverseDelay: "2.8s" },
      { name: "E-commerce", x: "50%", y: "15%", delay: "1.9s", duration: "3.2s", reverseDelay: "1.0s" },
      { name: "HR & People", x: "50%", y: "85%", delay: "2.5s", duration: "4.2s", reverseDelay: "3.1s" },
      { name: "Ops & Projects", x: "15%", y: "50%", delay: "0.6s", duration: "2.9s", reverseDelay: "1.8s" },
      { name: "Payments & Billing", x: "85%", y: "50%", delay: "1.1s", duration: "3.8s", reverseDelay: "2.5s" },
    ]
  },
  painPoints: {
    visible: true,
    title: {
      part1: "Where does your operation",
      highlight: "stall?"
    },
    description: "",
    cards: [
      {
        title: "Disconnected Data",
        description: "Information scattered across spreadsheets and systems that don't talk, generating strategic blindness and inaccurate manual reports.",
        icon: "SearchX"
      },
      {
        title: "Slow Processes",
        description: "Talented teams wasting hours on repetitive copy-paste tasks that could be resolved in seconds by automation.",
        icon: "Clock"
      },
      {
        title: "Lost Opportunities",
        description: "While competitors implement AI to predict trends and optimize costs, your company reacts to the past instead of anticipating the future.",
        icon: "AlertTriangle"
      }
    ]
  },
  methodology: {
    visible: true,
    title: {
      line1: "We don't sell",
      highlight1: "bodyshop",
      line2: "We don't sell",
      highlight2: "software",
      line3: "We sell",
      highlight3: "results"
    },
    cards: [
      {
        title: "Strategic Partnership",
        description: "You don't need more devs, you need a partner who understands your business and generates value.",
        badge: "",
        icon: Users
      },
      {
        title: "Value-based Model",
        description: "Our model is based on results, not hours or licenses.",
        badge: "",
        icon: ShieldCheck
      },
      {
        title: "Shared Growth",
        description: "Partners who expand our impact are rewarded in the same proportion as we help grow.",
        badge: "10% COMMISSION",
        icon: Handshake
      }
    ]
  },
  services: {
    visible: true,
    badge: "Our Value Pipeline",
    title: "The Intelligence Flow",
    description: "We don't deliver isolated solutions. We build a continuous pipeline where raw data transforms into intelligent actions, generating real and measurable value for your business.",
    items: [
      {
        id: "consulting",
        title: "Consulting",
        icon: LineChart,
        shortDesc: "Strategy",
        description: "The direction. We diagnose the scenario and design this transformation pipeline.",
        features: [
          "Technical operation diagnosis",
          "Bottleneck mapping",
          "Architecture definition (To-Be)",
          "Transformation roadmap"
        ]
      },
      {
        id: "architecture",
        title: "Process Architecture",
        icon: ScanSearch,
        shortDesc: "Organization",
        description: "Before automating, we organize. We design optimized and scalable flows, ensuring technology accelerates efficient processes, not chaos.",
        features: [
          "Current flow design (As-Is)",
          "Identification of bottlenecks and redundancies",
          "Ideal flow design (To-Be)"
        ]
      },
      {
        id: "data",
        title: "Data Engineering",
        icon: Database,
        shortDesc: "Foundation",
        description: "The base of everything. We implement modern tools and structure your data to be reliable and accessible.",
        features: [
            "Infrastructure for pipeline orchestration",
            "Data Lakes and Warehouses",
            "Robust ETL/ELT pipelines",
            "BI tools and personalized dashboards",
            "Data modeling"
        ]
      },
      {
        id: "automation",
        title: "Intelligent Automations",
        icon: Workflow,
        shortDesc: "Efficiency",
        description: "We eliminate manual rework. We create ecosystems where your tools (CRM, ERP, Marketing) talk in real-time.",
        features: [
          "Complex workflow orchestration",
          "Bidirectional system synchronization",
          "Real-time alerts"
        ]
      },
      {
        id: "ai",
        title: "AI Agents",
        icon: BrainCircuit,
        shortDesc: "Intelligence",
        description: "Intelligence in action. Autonomous agents consume data to make decisions and act.",
        features: [
          "AI Sales and Support",
          "RAG (Chat with your data)",
          "Productivity Assistants"
        ]
      }
    ]
  },
  cta: {
    visible: true,
    title: "Ready to scale your operation?",
    description: "Schedule a free diagnosis and discover where your operation's bottlenecks are.",
    button: "I'M READY"
  },
  footer: {
    visible: true,
    company: "Delavia Tech",
    copyright: "© All rights reserved.",
    social: {
      linkedin: "https://www.linkedin.com/company/delavia-tech/"
    }
  },
  contactModal: {
    visible: true,
    title: "Contact Us",
    // Keep the same form URL for now, or use a different one if needed
    formUrl: "https://forms.monday.com/forms/embed/687517e4625fde922a488ee5e3a470bd?r=use1"
  },
  config: {
    googleAnalyticsId: "G-7R9R4GG2P2"
  }
};
