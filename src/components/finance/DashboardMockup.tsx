import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Calendar,
  Building2,
  CheckCircle2,
  Clock,
  Sparkles,
} from "lucide-react";
import { DEMO_DASHBOARD_DATA } from "@/data/metrics";

/**
 * Dados demonstrativos utilizados apenas para apresentação visual do projeto.
 * Não refletem dados reais de nenhuma organização.
 */
export default function DashboardMockup() {
  const data = DEMO_DASHBOARD_DATA;

  // Demonstrative bar chart data for 6 months (Receitas vs Despesas)
  const chartMonths = [
    { name: "Mai", rev: 110, exp: 82, heightRev: "62%", heightExp: "46%" },
    { name: "Jun", rev: 124, exp: 88, heightRev: "70%", heightExp: "50%" },
    { name: "Jul", rev: 118, exp: 92, heightRev: "66%", heightExp: "52%" },
    { name: "Ago", rev: 135, exp: 90, heightRev: "76%", heightExp: "51%" },
    { name: "Set", rev: 142, exp: 94, heightRev: "80%", heightExp: "53%" },
    { name: "Out", rev: 168, exp: 98, heightRev: "95%", heightExp: "55%" },
  ];

  return (
    <div className="w-full rounded-2xl bg-white border border-[#D3DDE2] shadow-xl overflow-hidden text-[#1C252B]">
      {/* Top Application Bar */}
      <div className="bg-[#123B4A] px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-white border-b border-[#1E5A6A]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFD54F]/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]/80"></span>
          </div>
          <span className="text-xs font-mono text-[#BDD8E0] pl-2 border-l border-[#1E5A6A] hidden sm:inline">
            app.finpilot.com.br/dashboard
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#194D60] text-[#EAF2F4]">
            <Building2 className="w-3.5 h-3.5 text-[#2CB6A3]" />
            <span className="font-medium">Empresa Piloto Ltda</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#194D60]/70 text-[#BDD8E0]">
            <Calendar className="w-3.5 h-3.5 text-[#2CB6A3]" />
            <span>Mês Vigente (Outubro)</span>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#2CB6A3]/20 text-[#2CB6A3] font-semibold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2CB6A3] animate-pulse"></span>
            Online
          </span>
        </div>
      </div>

      {/* Main Mockup Content */}
      <div className="p-4 sm:p-6 lg:p-7 space-y-6 bg-[#FAFDFD]">
        {/* Top Notice Pill */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 rounded-lg bg-[#EAF2F4] border border-[#BDD8E0] text-xs text-[#123B4A]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#2CB6A3]" />
            <span className="font-semibold">Painel Executivo Consolidado</span>
            <span className="hidden sm:inline text-[#5B6E79]">| Visão diária de tesouraria e conciliação</span>
          </div>
          <span className="text-[11px] font-mono text-[#5B6E79] bg-white px-2 py-0.5 rounded-sm border border-[#D3DDE2]">
            Dados demonstrativos
          </span>
        </div>

        {/* 4 Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Saldo Disponível */}
          <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
            <div className="flex items-center justify-between text-xs font-medium text-[#5B6E79] mb-1">
              <span>Saldo Disponível</span>
              <div className="p-1.5 rounded-md bg-[#EAF2F4] text-[#123B4A]">
                <Wallet className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-xl lg:text-2xl font-bold text-[#123B4A] tracking-tight">
              {data.disponibleBalance}
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-[#209988]">
              <span className="font-semibold">3 contas conciliadas</span>
              <span className="text-[#5B6E79]">• 100% atualizado</span>
            </div>
          </div>

          {/* Card 2: Receitas do Mês */}
          <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
            <div className="flex items-center justify-between text-xs font-medium text-[#5B6E79] mb-1">
              <span>Receitas do Mês</span>
              <span className="inline-flex items-center text-xs font-semibold text-[#1F9686] bg-[#EBF8F5] px-1.5 py-0.5 rounded-sm">
                <ArrowUpRight className="w-3 h-3 mr-0.5" />
                {data.revenueChange}
              </span>
            </div>
            <div className="text-xl lg:text-2xl font-bold text-[#1C252B] tracking-tight">
              {data.monthlyRevenue}
            </div>
            <div className="mt-2 text-xs text-[#5B6E79]">
              Meta mensal batida em 104%
            </div>
          </div>

          {/* Card 3: Despesas Operacionais */}
          <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
            <div className="flex items-center justify-between text-xs font-medium text-[#5B6E79] mb-1">
              <span>Despesas do Mês</span>
              <span className="inline-flex items-center text-xs font-semibold text-[#1F9686] bg-[#EBF8F5] px-1.5 py-0.5 rounded-sm">
                <ArrowDownRight className="w-3 h-3 mr-0.5" />
                {data.expenseChange}
              </span>
            </div>
            <div className="text-xl lg:text-2xl font-bold text-[#1C252B] tracking-tight">
              {data.monthlyExpense}
            </div>
            <div className="mt-2 text-xs text-[#5B6E79]">
              Controle dentro do teto orçado
            </div>
          </div>

          {/* Card 4: Projeção de Fluxo */}
          <div className="bg-white p-4 rounded-xl border border-[#E2E8F0] shadow-xs">
            <div className="flex items-center justify-between text-xs font-medium text-[#5B6E79] mb-1">
              <span>Fluxo Projetado (30d)</span>
              <span className="text-xs font-semibold text-[#123B4A]">Superávit</span>
            </div>
            <div className="text-xl lg:text-2xl font-bold text-[#2CB6A3] tracking-tight">
              {data.projectedFlow}
            </div>
            <div className="mt-2 text-xs text-[#5B6E79]">
              Margem operacional: <strong className="text-[#123B4A]">{data.operationalMargin}</strong>
            </div>
          </div>
        </div>

        {/* Middle Section: Chart & Quick Indicators */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart: Comparativo Mensal */}
          <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-xs">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-sm font-bold text-[#123B4A]">
                  Evolução Mensal: Receitas vs. Despesas
                </h3>
                <p className="text-xs text-[#5B6E79]">
                  Acompanhamento semestral em milhares de reais (R$ mil)
                </p>
              </div>
              <div className="flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-[#123B4A]"></span>
                  <span className="text-[#44545F]">Receitas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-[#2CB6A3]"></span>
                  <span className="text-[#44545F]">Despesas</span>
                </div>
              </div>
            </div>

            {/* Demonstrative Bar Chart (CSS/HTML) */}
            <div className="h-48 pt-4 flex items-end justify-between gap-2 border-b border-[#E2E8F0]">
              {chartMonths.map((item) => (
                <div
                  key={item.name}
                  className="flex-1 flex flex-col items-center h-full justify-end group cursor-default"
                >
                  <div className="w-full flex items-end justify-center gap-1 sm:gap-2 h-full">
                    {/* Receita bar */}
                    <div
                      className="w-1/2 max-w-[20px] rounded-t-sm bg-[#123B4A] group-hover:bg-[#1E5A6A] transition-all relative"
                      style={{ height: item.heightRev }}
                      title={`Receita: R$ ${item.rev} mil`}
                    ></div>
                    {/* Despesa bar */}
                    <div
                      className="w-1/2 max-w-[20px] rounded-t-sm bg-[#2CB6A3] group-hover:bg-[#239D8C] transition-all relative"
                      style={{ height: item.heightExp }}
                      title={`Despesa: R$ ${item.exp} mil`}
                    ></div>
                  </div>
                  <span className="text-[11px] font-semibold text-[#5B6E79] mt-2 group-hover:text-[#123B4A]">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-[#5B6E79]">
              <span>Média mensal de sobra de caixa: R$ 42.600,00</span>
              <span className="font-semibold text-[#209988]">Tendência de alta (+14%)</span>
            </div>
          </div>

          {/* Side Indicators Column */}
          <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-[#123B4A] mb-1">
                Indicadores de Saúde
              </h3>
              <p className="text-xs text-[#5B6E79] mb-4">
                Métricas chave de sustentabilidade
              </p>

              <div className="space-y-3.5">
                <div className="p-3 rounded-lg bg-[#F8FAFB] border border-[#E2E8F0]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#5B6E79]">Índice de Liquidez Corrente</span>
                    <span className="font-bold text-[#123B4A]">{data.currentRatio}</span>
                  </div>
                  <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#2CB6A3] h-full w-[85%] rounded-full"></div>
                  </div>
                  <span className="text-[10px] text-[#209988] mt-1 block font-medium">
                    Excelente cobertura de obrigações
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#F8FAFB] border border-[#E2E8F0]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#5B6E79]">Inadimplência de Clientes</span>
                    <span className="font-bold text-[#123B4A]">1,8%</span>
                  </div>
                  <div className="w-full bg-[#E2E8F0] h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-[#123B4A] h-full w-[18%] rounded-full"></div>
                  </div>
                  <span className="text-[10px] text-[#209988] mt-1 block font-medium">
                    Abaixo da média setorial (4,2%)
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-[#F8FAFB] border border-[#E2E8F0]">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#5B6E79]">Prazo Médio de Recebimento</span>
                    <span className="font-bold text-[#123B4A]">24 dias</span>
                  </div>
                  <span className="text-[10px] text-[#5B6E79] mt-1 block">
                    Prazo de Pagamento: 32 dias (Ciclo favorável)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#F0F4F7] flex items-center justify-between text-xs">
              <span className="text-[#5B6E79]">Diagnóstico geral</span>
              <span className="font-bold text-[#123B4A] inline-flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2CB6A3]" />
                Equilibrado
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Split: Contas a Pagar Hoje & Contas a Receber da Semana */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contas a Pagar Hoje */}
          <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E57373]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B4A]">
                  Contas a Pagar Hoje
                </h4>
              </div>
              <span className="text-xs font-semibold text-[#5B6E79]">2 títulos</span>
            </div>
            <div className="space-y-2">
              {data.payableToday.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFDFD] border border-[#EAF2F4] text-xs hover:border-[#BDD8E0] transition-colors"
                >
                  <div>
                    <div className="font-semibold text-[#1C252B]">{item.title}</div>
                    <div className="text-[11px] text-[#5B6E79]">{item.beneficiary}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#123B4A]">{item.value}</div>
                    <div className="text-[10px] text-[#5B6E79]">{item.dueTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contas a Receber da Semana */}
          <div className="bg-white p-4 rounded-xl border border-[#E2E8F0]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2CB6A3]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#123B4A]">
                  Recebíveis Programados
                </h4>
              </div>
              <span className="text-xs font-semibold text-[#209988]">R$ 37.200,00</span>
            </div>
            <div className="space-y-2">
              {data.receivableThisWeek.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2.5 rounded-lg bg-[#FAFDFD] border border-[#EAF2F4] text-xs hover:border-[#BDD8E0] transition-colors"
                >
                  <div>
                    <div className="font-semibold text-[#1C252B]">{item.title}</div>
                    <div className="text-[11px] text-[#5B6E79]">{item.client}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-[#209988]">{item.value}</div>
                    <div className="text-[10px] text-[#5B6E79]">{item.dueDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
