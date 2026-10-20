"use client";

import { useState } from "react";
import {
  TrendingUp,
  PieChart,
  CalendarDays,
  Gauge,
  Receipt,
  CheckCircle,
  FileSpreadsheet,
} from "lucide-react";

/**
 * Dados demonstrativos utilizados apenas para apresentação visual do projeto.
 */
export default function InteractiveTabDashboards() {
  const [activeTab, setActiveTab] = useState<
    "fluxo" | "despesas" | "receitas" | "indicadores" | "contas"
  >("fluxo");

  const tabs = [
    { id: "fluxo", label: "Fluxo Mensal", icon: TrendingUp },
    { id: "despesas", label: "Despesas por Categoria", icon: PieChart },
    { id: "receitas", label: "Receitas por Período", icon: CalendarDays },
    { id: "indicadores", label: "Indicadores-Chave", icon: Gauge },
    { id: "contas", label: "Contas & Conciliação", icon: Receipt },
  ] as const;

  return (
    <div className="w-full bg-white rounded-2xl border border-[#D3DDE2] shadow-sm overflow-hidden">
      {/* Tab Navigation Header */}
      <div className="border-b border-[#E2E8F0] bg-[#F8FAFB] px-4 pt-3 pb-0 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[#123B4A]">
              Ambientes de Navegação da FinPilot
            </h3>
            <p className="text-xs text-[#5B6E79]">
              Explore as visões analíticas desenhadas para clareza operacional diária.
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 self-start sm:self-auto px-2.5 py-1 rounded-md bg-[#EAF2F4] text-[#123B4A] text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#2CB6A3]"></span>
            Interface Interativa
          </span>
        </div>

        {/* Tab Buttons */}
        <div
          role="tablist"
          aria-label="Telas demonstrativas da FinPilot"
          className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-px no-scrollbar"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap rounded-t-lg transition-colors border-b-2 ${
                  isActive
                    ? "bg-white text-[#123B4A] border-[#2CB6A3] shadow-xs"
                    : "text-[#5B6E79] border-transparent hover:text-[#123B4A] hover:bg-white/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#2CB6A3]" : "text-[#5B6E79]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels */}
      <div className="p-4 sm:p-6 lg:p-8 bg-[#FAFDFD]">
        {/* TAB 1: FLUXO MENSAL */}
        {activeTab === "fluxo" && (
          <div
            id="panel-fluxo"
            role="tabpanel"
            aria-labelledby="tab-fluxo"
            className="space-y-6 animate-in fade-in duration-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-xs text-[#5B6E79]">Saldo Inicial do Mês</span>
                <div className="text-xl font-bold text-[#123B4A] mt-1">R$ 132.670,00</div>
                <div className="text-xs text-[#5B6E79] mt-1">1º de Outubro</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-xs text-[#5B6E79]">Saldo Projetado no Fim do Mês</span>
                <div className="text-xl font-bold text-[#209988] mt-1">R$ 184.250,80</div>
                <div className="text-xs text-[#209988] mt-1 font-semibold">+ R$ 51.580,80 líquido</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-xs text-[#5B6E79]">Menor Saldo Previsto</span>
                <div className="text-xl font-bold text-[#1E5A6A] mt-1">R$ 48.910,00</div>
                <div className="text-xs text-[#5B6E79] mt-1">No dia 12 (após folha e tributos)</div>
              </div>
            </div>

            {/* Visual SVG Timeline for Cash Inflow/Outflow */}
            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-[#123B4A]">
                  Linha do Tempo: Entradas vs. Saídas Diárias
                </h4>
                <span className="text-xs text-[#5B6E79]">Outubro 2026 (Semana 1 a 4)</span>
              </div>

              {/* Timeline bars */}
              <div className="space-y-3">
                {[
                  { period: "Semana 1 (01 a 07)", in: 48, out: 32, net: "+16.000", safe: true },
                  { period: "Semana 2 (08 a 14 - Folha/GPS)", in: 22, out: 54, net: "-32.000", safe: false },
                  { period: "Semana 3 (15 a 21 - Recebimentos B2B)", in: 64, out: 18, net: "+46.000", safe: true },
                  { period: "Semana 4 (22 a 31 - Fornecedores/MRR)", in: 52, out: 31, net: "+21.000", safe: true },
                ].map((row, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#F8FAFB] border border-[#EAF2F4]">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-2">
                      <span className="font-semibold text-[#1C252B]">{row.period}</span>
                      <span className={`font-bold ${row.safe ? "text-[#209988]" : "text-[#E57373]"}`}>
                        Resultado: {row.net}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 h-4">
                      {/* Inflow bar */}
                      <div
                        className="bg-[#123B4A] h-full rounded-sm flex items-center justify-end px-1.5 text-[10px] text-white font-mono"
                        style={{ width: `${(row.in / 80) * 100}%` }}
                        title={`Entradas: R$ ${row.in} mil`}
                      >
                        +{row.in}k
                      </div>
                      {/* Outflow bar */}
                      <div
                        className="bg-[#2CB6A3] h-full rounded-sm flex items-center justify-start px-1.5 text-[10px] text-white font-mono"
                        style={{ width: `${(row.out / 80) * 100}%` }}
                        title={`Saídas: R$ ${row.out} mil`}
                      >
                        -{row.out}k
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-[#F0F4F7] flex flex-wrap items-center justify-between gap-2 text-xs text-[#5B6E79]">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#123B4A]"></span> Entradas programadas
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#2CB6A3]"></span> Desembolsos programados
                  </span>
                </div>
                <span>Nenhum dia com saldo negativo identificado.</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DESPESAS POR CATEGORIA */}
        {activeTab === "despesas" && (
          <div
            id="panel-despesas"
            role="tabpanel"
            aria-labelledby="tab-despesas"
            className="space-y-6 animate-in fade-in duration-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Category Breakdown Bars */}
              <div className="lg:col-span-2 bg-white p-5 rounded-xl border border-[#E2E8F0]">
                <h4 className="text-sm font-bold text-[#123B4A] mb-1">
                  Distribuição de Despesas Operacionais
                </h4>
                <p className="text-xs text-[#5B6E79] mb-4">
                  Total apurado no período: R$ 96.840,00
                </p>

                <div className="space-y-4">
                  {[
                    { cat: "Folha & Encargos Trabalhistas", val: "R$ 48.200,00", pct: 49.8, color: "bg-[#123B4A]" },
                    { cat: "Tributos & Obrigações Fiscais", val: "R$ 18.400,00", pct: 19.0, color: "bg-[#1E5A6A]" },
                    { cat: "Infraestrutura Cloud & Softwares", val: "R$ 11.200,00", pct: 11.6, color: "bg-[#2CB6A3]" },
                    { cat: "Serviços Terceirizados & Jurídico", val: "R$ 9.840,00", pct: 10.1, color: "bg-[#4B8797]" },
                    { cat: "Administrativo & Operacional Geral", val: "R$ 9.200,00", pct: 9.5, color: "bg-[#82AFBC]" },
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#1C252B]">{item.cat}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#123B4A]">{item.val}</span>
                          <span className="text-[#5B6E79] font-mono text-[11px]">({item.pct}%)</span>
                        </div>
                      </div>
                      <div className="w-full bg-[#EAF2F4] h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${item.pct}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Analytical Insights */}
              <div className="bg-white p-5 rounded-xl border border-[#E2E8F0] flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#123B4A] mb-2">
                    Análise de Variação
                  </h4>
                  <p className="text-xs text-[#5B6E79] leading-relaxed mb-4">
                    Comparativo automático com a média dos últimos 3 meses para identificar desvios.
                  </p>

                  <div className="space-y-3 text-xs">
                    <div className="p-3 rounded-lg bg-[#EBF8F5] border border-[#2CB6A3]/20">
                      <span className="font-semibold text-[#1F9686] block">
                        Economia em Ferramentas
                      </span>
                      <span className="text-[#44545F] text-[11px] block mt-0.5">
                        -8% em softwares após revisão de licenças ociosas.
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-[#FAFDFD] border border-[#E2E8F0]">
                      <span className="font-semibold text-[#123B4A] block">
                        Estabilidade nos Custos Fixos
                      </span>
                      <span className="text-[#44545F] text-[11px] block mt-0.5">
                        Folha manteve 49,8% da despesa total (dentro da meta orçada de 52%).
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0F4F7] text-xs text-[#5B6E79] flex items-center justify-between">
                  <span>Classificação automática</span>
                  <span className="text-[#209988] font-semibold">100% categorizado</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: RECEITAS POR PERÍODO */}
        {activeTab === "receitas" && (
          <div
            id="panel-receitas"
            role="tabpanel"
            aria-labelledby="tab-receitas"
            className="space-y-6 animate-in fade-in duration-200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-xs text-[#5B6E79]">Receita Recorrente (MRR)</span>
                <div className="text-xl font-bold text-[#123B4A] mt-1">R$ 84.600,00</div>
                <div className="text-xs text-[#209988] mt-1 font-semibold">+6,8% neste mês</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-xs text-[#5B6E79]">Serviços Pontuais & Projetos</span>
                <div className="text-xl font-bold text-[#123B4A] mt-1">R$ 63.820,00</div>
                <div className="text-xs text-[#5B6E79] mt-1">14 contratos liquidados</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-xs text-[#5B6E79]">Ticket Médio por Cliente</span>
                <div className="text-xl font-bold text-[#1E5A6A] mt-1">R$ 3.820,00</div>
                <div className="text-xs text-[#5B6E79] mt-1">Base ativa: 39 empresas</div>
              </div>
            </div>

            {/* Invoicing Table */}
            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-[#123B4A]">
                  Últimos Faturamentos Registrados
                </h4>
                <span className="text-xs text-[#5B6E79]">Atualização em tempo real</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F8FAFB] text-[#5B6E79] border-b border-[#E2E8F0]">
                    <tr>
                      <th className="py-2.5 px-3 font-semibold">Cliente / Origem</th>
                      <th className="py-2.5 px-3 font-semibold">Modalidade</th>
                      <th className="py-2.5 px-3 font-semibold">Data Emissão</th>
                      <th className="py-2.5 px-3 font-semibold text-right">Valor</th>
                      <th className="py-2.5 px-3 font-semibold text-center">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0F4F7]">
                    {[
                      { client: "Atlas Consultoria e Gestão", type: "Recorrente (Mensal)", date: "18/10/2026", val: "R$ 8.900,00", st: "Compensado" },
                      { client: "Prime Logística Integrada", type: "Projeto Fechado", date: "16/10/2026", val: "R$ 15.400,00", st: "Compensado" },
                      { client: "Soluções Digitais Nexus", type: "Recorrente (Mensal)", date: "15/10/2026", val: "R$ 6.200,00", st: "Compensado" },
                      { client: "Vértice Engenharia Civil", type: "Consultoria Pontual", date: "12/10/2026", val: "R$ 11.800,00", st: "Compensado" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-[#FAFDFD]">
                        <td className="py-2.5 px-3 font-medium text-[#1C252B]">{row.client}</td>
                        <td className="py-2.5 px-3 text-[#5B6E79]">{row.type}</td>
                        <td className="py-2.5 px-3 text-[#5B6E79]">{row.date}</td>
                        <td className="py-2.5 px-3 font-bold text-[#123B4A] text-right">{row.val}</td>
                        <td className="py-2.5 px-3 text-center">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#EBF8F5] text-[#1F9686] font-semibold text-[10px]">
                            <CheckCircle className="w-3 h-3" />
                            {row.st}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: INDICADORES-CHAVE */}
        {activeTab === "indicadores" && (
          <div
            id="panel-indicadores"
            role="tabpanel"
            aria-labelledby="tab-indicadores"
            className="space-y-6 animate-in fade-in duration-200"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-xs text-[#5B6E79]">Margem Operacional</span>
                <div className="text-2xl font-bold text-[#123B4A] mt-1">34,7%</div>
                <div className="text-xs text-[#209988] mt-1 font-semibold">+2,4% vs. meta</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-xs text-[#5B6E79]">Ponto de Equilíbrio</span>
                <div className="text-2xl font-bold text-[#123B4A] mt-1">R$ 96.840</div>
                <div className="text-xs text-[#5B6E79] mt-1">Alcançado no dia 19</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-xs text-[#5B6E79]">Liquidez Corrente</span>
                <div className="text-2xl font-bold text-[#209988] mt-1">1,92x</div>
                <div className="text-xs text-[#209988] mt-1">Ativos &gt; Passivos</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <span className="text-xs text-[#5B6E79]">Inadimplência</span>
                <div className="text-2xl font-bold text-[#1E5A6A] mt-1">1,8%</div>
                <div className="text-xs text-[#209988] mt-1">Faixa de baixo risco</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0]">
              <h4 className="text-sm font-bold text-[#123B4A] mb-3">
                Resumo Executivo para Tomada de Decisão
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-[#F8FAFB] border border-[#E2E8F0] space-y-1">
                  <div className="font-semibold text-[#123B4A]">Ciclo Financeiro Saudável</div>
                  <p className="text-[#5B6E79] leading-relaxed">
                    A empresa recebe de seus clientes em média 8 dias antes do vencimento médio
                    de suas obrigações a fornecedores, mantendo o caixa sempre positivo.
                  </p>
                </div>
                <div className="p-3.5 rounded-lg bg-[#F8FAFB] border border-[#E2E8F0] space-y-1">
                  <div className="font-semibold text-[#123B4A]">Capacidade de Reinvestimento</div>
                  <p className="text-[#5B6E79] leading-relaxed">
                    O superávit operacional mensal contínuo permite a constituição de reserva
                    para 4 meses de custos fixos sem necessidade de linhas bancárias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: CONTAS & CONCILIAÇÃO */}
        {activeTab === "contas" && (
          <div
            id="panel-contas"
            role="tabpanel"
            aria-labelledby="tab-contas"
            className="space-y-6 animate-in fade-in duration-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[#123B4A]">Conta Operacional Itaú (Fictícia)</span>
                  <span className="text-[#209988] font-bold">100% Conciliada</span>
                </div>
                <div className="text-xl font-bold text-[#1C252B]">R$ 112.430,20</div>
                <div className="text-xs text-[#5B6E79] mt-1">Última checagem automática: hoje às 08:30</div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-semibold text-[#123B4A]">Conta Reserva Bradesco (Fictícia)</span>
                  <span className="text-[#209988] font-bold">100% Conciliada</span>
                </div>
                <div className="text-xl font-bold text-[#1C252B]">R$ 71.820,60</div>
                <div className="text-xs text-[#5B6E79] mt-1">Rendimento CDI automático ativado</div>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-[#E2E8F0]">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-[#123B4A]">
                  Conciliação de Extratos por Lote
                </h4>
                <div className="flex items-center gap-2 text-xs text-[#5B6E79]">
                  <FileSpreadsheet className="w-4 h-4 text-[#2CB6A3]" />
                  <span>Importação OFX / Extrato Bancário</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                {[
                  { desc: "Liquidação Boleto 9401 - Serv. Consultoria", ref: "Conta Operacional", val: "+ R$ 14.200,00", st: "Conciliado" },
                  { desc: "Débito Automático Enel Energia", ref: "Conta Operacional", val: "- R$ 840,20", st: "Conciliado" },
                  { desc: "TED Recebida - Contrato Suporte Trimestral", ref: "Conta Operacional", val: "+ R$ 9.400,00", st: "Conciliado" },
                  { desc: "Pagamento Folha Salarial Lote 10/26", ref: "Conta Operacional", val: "- R$ 42.100,00", st: "Conciliado" },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-[#F8FAFB] border border-[#EAF2F4]"
                  >
                    <div>
                      <div className="font-semibold text-[#1C252B]">{row.desc}</div>
                      <div className="text-[11px] text-[#5B6E79]">{row.ref}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-[#123B4A]">{row.val}</div>
                      <div className="text-[10px] text-[#209988] font-medium flex items-center gap-1 justify-end">
                        <CheckCircle className="w-3 h-3" />
                        {row.st}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Global Footer in Tab Container */}
        <div className="mt-4 pt-3 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2 text-xs text-[#5B6E79]">
          <span>Interface projetada para decisões rápidas e sem atrito.</span>
          <span className="font-mono text-[11px] text-[#82AFBC]">
            * Demonstração de interface com dados ilustrativos
          </span>
        </div>
      </div>
    </div>
  );
}
