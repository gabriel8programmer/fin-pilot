export interface SolutionFeature {
  title: string;
  description: string;
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  headline: string;
  tagline: string;
  description: string;
  targetAudience: string;
  accentColor: string;
  features: SolutionFeature[];
  benefits: string[];
  mockupData: {
    label: string;
    primaryMetric: string;
    secondaryMetric: string;
    details: { name: string; value: string; status?: "positive" | "negative" | "neutral" }[];
  };
}

export const SOLUTIONS: Solution[] = [
  {
    id: "gestao-financeira",
    slug: "gestao-financeira",
    title: "Gestão Financeira",
    shortTitle: "Gestão",
    headline: "Controle financeiro sem complicação.",
    tagline: "Organização estruturada de receitas, despesas e centros de custo em um único ambiente.",
    description:
      "A solução de Gestão Financeira da FinPilot reúne as movimentações diárias da empresa com categorização padronizada, histórico transparente e visão consolidada de contas bancárias e formas de liquidação.",
    targetAudience:
      "Empresas que precisam substituir planilhas fragmentadas por um registro confiável e acessível por toda a equipe financeira.",
    accentColor: "#123B4A",
    features: [
      {
        title: "Cadastro e conciliação de receitas e despesas",
        description:
          "Registro simplificado de entradas e saídas com vinculação a clientes, fornecedores e comprovantes fiscais.",
      },
      {
        title: "Categorização inteligente e centros de custo",
        description:
          "Separação por departamentos, projetos ou filiais para identificar exatamente a origem e o destino de cada real.",
      },
      {
        title: "Acompanhamento de movimentações em tempo real",
        description:
          "Extrato consolidado com filtros avançados por período, status de liquidação e tipo de operação.",
      },
      {
        title: "Organização periódica e fechamento ágil",
        description:
          "Rotinas de fechamento mensal simplificadas com relatórios prontos para compartilhamento com a contabilidade.",
      },
    ],
    benefits: [
      "Fim das inconsistências de dados entre departamentos",
      "Redução drástica do tempo gasto em conferências manuais",
      "Histórico auditável de lançamentos e alterações",
      "Facilidade na prestação de contas com sócios e contadores",
    ],
    mockupData: {
      label: "Movimentações do Mês",
      primaryMetric: "R$ 148.420,00",
      secondaryMetric: "+12,4% vs. mês anterior",
      details: [
        { name: "Prestação de Serviços B2B", value: "R$ 94.200,00", status: "positive" },
        { name: "Contratos Recorrentes (MRR)", value: "R$ 54.220,00", status: "positive" },
        { name: "Folha e Encargos", value: "-R$ 52.100,00", status: "negative" },
        { name: "Infraestrutura & Licenças", value: "-R$ 8.940,00", status: "neutral" },
      ],
    },
  },
  {
    id: "fluxo-de-caixa",
    slug: "fluxo-de-caixa",
    title: "Fluxo de Caixa",
    shortTitle: "Fluxo",
    headline: "Veja o caixa antes que ele vire um problema.",
    tagline: "Acompanhamento diário e projeção de entradas e saídas para antecipar períodos críticos.",
    description:
      "Mantenha clareza sobre o saldo real e previsto da empresa. A ferramenta de Fluxo de Caixa da FinPilot cruza recebíveis programados e despesas provisionadas para indicar gargalos antes que afetem as operações.",
    targetAudience:
      "Gestores e diretores que buscam previsibilidade orçamentária e tranquilidade no cumprimento dos compromissos financeiros.",
    accentColor: "#1E5A6A",
    features: [
      {
        title: "Visão diária, semanal e mensal de saldo",
        description:
          "Calendário financeiro com marcação de vencimentos concentrados e dias de saldo mínimo projetado.",
      },
      {
        title: "Projeções baseadas em compromissos reais",
        description:
          "Cálculo automático de saldo futuro a partir de títulos a pagar e a receber já contratados.",
      },
      {
        title: "Identificação prévia de gargalos e descompassos",
        description:
          "Alertas de descasamento entre datas de recebimento de clientes e pagamento de fornecedores.",
      },
      {
        title: "Comparação entre previsto e realizado",
        description:
          "Análise de variações entre o orçamento planejado e a execução efetiva do caixa.",
      },
    ],
    benefits: [
      "Evite surpresas com pagamentos de boletos sem saldo suficiente",
      "Melhor negociação de prazos com clientes e fornecedores",
      "Decisão embasada sobre momentos seguros para investimentos",
      "Menor dependência de linhas de crédito emergenciais",
    ],
    mockupData: {
      label: "Saldo Projetado em 30 Dias",
      primaryMetric: "R$ 68.310,00",
      secondaryMetric: "Ponto mínimo: R$ 24.150 no dia 15",
      details: [
        { name: "Recebíveis confirmados", value: "+ R$ 86.400,00", status: "positive" },
        { name: "Fornecedores e tributos", value: "- R$ 42.290,00", status: "negative" },
        { name: "Despesas operacionais fixas", value: "- R$ 21.800,00", status: "negative" },
        { name: "Saldo operacional livre", value: "R$ 22.310,00", status: "positive" },
      ],
    },
  },
  {
    id: "indicadores",
    slug: "indicadores",
    title: "Indicadores Financeiros",
    shortTitle: "Indicadores",
    headline: "Visão de métricas para apoiar decisões.",
    tagline: "Dashboards analíticos que transformam números brutos em direcionamentos claros de negócio.",
    description:
      "Acompanhe a saúde financeira da sua operação através de métricas consolidadas: margem de contribuição, ponto de equilíbrio, inadimplência, liquidez e evolução de custos ao longo dos meses.",
    targetAudience:
      "Equipes de gestão e proprietários de PMEs que precisam fundamentar decisões estratégicas em indicadores consistentes.",
    accentColor: "#2CB6A3",
    features: [
      {
        title: "Margem operacional e lucratividade líquida",
        description:
          "Compreensão imediata de quanto cada linha de serviço ou produto realmente contribui para o resultado.",
      },
      {
        title: "Controle de inadimplência e atrasos",
        description:
          "Painel de cobranças em aberto com classificação por faixas de atraso (aging de recebíveis).",
      },
      {
        title: "Evolução comparativa histórica",
        description:
          "Gráficos de evolução ano contra ano (YoY) e mês a mês (MoM) para identificar tendências sazonais.",
      },
      {
        title: "Ponto de equilíbrio operacional",
        description:
          "Cálculo claro do volume de faturamento necessário para cobrir os custos fixos da empresa.",
      },
    ],
    benefits: [
      "Identificação rápida de aumentos fora do padrão em despesas",
      "Acompanhamento da eficiência operacional sem complexidade",
      "Redução do índice de atraso no recebimento de clientes",
      "Apresentações profissionais para conselhos, sócios e bancos",
    ],
    mockupData: {
      label: "Indicador-Chave: Margem Operacional",
      primaryMetric: "24,8%",
      secondaryMetric: "+2,1 p.p. vs. trimestre anterior",
      details: [
        { name: "Índice de Liquidez Corrente", value: "1,85x", status: "positive" },
        { name: "Taxa de Inadimplência", value: "2,3%", status: "positive" },
        { name: "Prazo Médio de Recebimento", value: "28 dias", status: "neutral" },
        { name: "Prazo Médio de Pagamento", value: "35 dias", status: "positive" },
      ],
    },
  },
];
