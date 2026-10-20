/**
 * Dados demonstrativos utilizados apenas para apresentação visual do projeto.
 * Todos os valores, percentuais e gráficos exibidos na FinPilot são fictícios
 * e têm propósito puramente ilustrativo para portfólio.
 */

export interface ProductMetric {
  number: string;
  label: string;
  description: string;
}

export const PRODUCT_METRICS: ProductMetric[] = [
  {
    number: "1 visão",
    label: "Operação Centralizada",
    description: "Acompanhe receitas, despesas e saldo em uma única interface integrada.",
  },
  {
    number: "3 pilares",
    label: "Estrutura Completa",
    description: "Gestão diária, acompanhamento de fluxo de caixa e inteligência de indicadores.",
  },
  {
    number: "24/7",
    label: "Acesso em Nuvem",
    description: "Plataforma web sempre disponível com dados sincronizados e protegidos.",
  },
  {
    number: "100%",
    label: "Foco em PMEs",
    description: "Linguagem objetiva desenhada para gestores, administradores e contadores.",
  },
];

export interface DashboardSummaryData {
  disponibleBalance: string;
  monthlyRevenue: string;
  revenueChange: string;
  monthlyExpense: string;
  expenseChange: string;
  projectedFlow: string;
  operationalMargin: string;
  currentRatio: string;
  recentTransactions: {
    id: string;
    description: string;
    category: string;
    date: string;
    value: string;
    type: "inflow" | "outflow";
    status: "Liquidado" | "Agendado";
  }[];
  payableToday: {
    id: string;
    title: string;
    beneficiary: string;
    value: string;
    dueTime: string;
  }[];
  receivableThisWeek: {
    id: string;
    title: string;
    client: string;
    value: string;
    dueDate: string;
  }[];
}

export const DEMO_DASHBOARD_DATA: DashboardSummaryData = {
  disponibleBalance: "R$ 184.250,80",
  monthlyRevenue: "R$ 148.420,00",
  revenueChange: "+12,4%",
  monthlyExpense: "R$ 96.840,00",
  expenseChange: "-3,2%",
  projectedFlow: "+ R$ 51.580,00",
  operationalMargin: "34,7%",
  currentRatio: "1,92x",
  recentTransactions: [
    {
      id: "tx-1",
      description: "Consultoria Estratégica Mensal",
      category: "Serviços B2B",
      date: "Hoje, 14:22",
      value: "R$ 18.500,00",
      type: "inflow",
      status: "Liquidado",
    },
    {
      id: "tx-2",
      description: "Locação de Infraestrutura Cloud",
      category: "Tecnologia",
      date: "Hoje, 11:05",
      value: "R$ 4.290,00",
      type: "outflow",
      status: "Liquidado",
    },
    {
      id: "tx-3",
      description: "Licenças de Software Contábil",
      category: "Administrativo",
      date: "Ontem, 17:40",
      value: "R$ 1.850,00",
      type: "outflow",
      status: "Liquidado",
    },
    {
      id: "tx-4",
      description: "Contrato Recorrente - Cliente Delta",
      category: "Receita Recorrente",
      date: "Ontem, 10:15",
      value: "R$ 12.300,00",
      type: "inflow",
      status: "Liquidado",
    },
  ],
  payableToday: [
    {
      id: "pay-1",
      title: "Fornecedor de Suprimentos Corporativos",
      beneficiary: "Suprinet Logística Ltda",
      value: "R$ 3.420,00",
      dueTime: "Hoje até 17:00",
    },
    {
      id: "pay-2",
      title: "Hospedagem & Conectividade Segura",
      beneficiary: "CloudServer Brasil",
      value: "R$ 1.680,00",
      dueTime: "Hoje até 20:00",
    },
  ],
  receivableThisWeek: [
    {
      id: "rec-1",
      title: "Fatura 089/26 - Projeto de Diagnóstico",
      client: "Horizonte Engenharia S.A.",
      value: "R$ 22.400,00",
      dueDate: "Quarta-feira",
    },
    {
      id: "rec-2",
      title: "Mensalidade Gestão Empresarial",
      client: "Vanguard Comércio & Varejo",
      value: "R$ 14.800,00",
      dueDate: "Sexta-feira",
    },
  ],
};
