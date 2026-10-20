import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  ArrowRight,
  TrendingUp,
  Percent,
  AlertCircle,
  Scale,
  Sparkles,
} from "lucide-react";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Indicadores Financeiros para Empresas | FinPilot",
  description:
    "Acompanhe margem operacional, inadimplência, liquidez e ponto de equilíbrio com dashboards analíticos descomplicados da FinPilot.",
  openGraph: {
    title: "Indicadores Financeiros para Empresas | FinPilot",
    description:
      "Transforme números brutos em direcionamentos claros de negócio. Visão completa de métricas para pequenas e médias empresas.",
  },
};

export default function IndicadoresPage() {
  const indicatorsList = [
    {
      title: "Receitas vs. Despesas Mensais",
      description:
        "Visão consolidada da evolução do faturamento bruto e dos desembolsos com cálculo imediato do resultado líquido gerado.",
      icon: TrendingUp,
    },
    {
      title: "Margem de Contribuição e Lucratividade",
      description:
        "Entenda quanto cada real faturado realmente contribui para o pagamento das despesas fixas da operação.",
      icon: Percent,
    },
    {
      title: "Índice de Inadimplência e Aging",
      description:
        "Classificação por faixas de atraso (1-15 dias, 16-30 dias, +30 dias) para direcionar esforços de cobrança preventiva.",
      icon: AlertCircle,
    },
    {
      title: "Ponto de Equilíbrio (Break-even)",
      description:
        "Identificação automática da data exata do mês em que a empresa cobre todos os seus custos e começa a gerar lucro.",
      icon: Scale,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F0F5F7] to-[#F8FAFB] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2F4] border border-[#BDD8E0] text-[#123B4A] text-xs font-semibold">
              <BarChart3 className="w-3.5 h-3.5 text-[#2CB6A3]" />
              <span>Soluções FinPilot • Módulo de Indicadores</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#123B4A] tracking-tight leading-[1.15]">
              Visão de métricas para apoiar decisões.
            </h1>

            <p className="text-lg text-[#5B6E79] leading-relaxed">
              Transforme pilhas de extratos em relatórios analíticos limpos.
              Saiba exatamente como está a saúde financeira do seu negócio sem
              depender de cálculos manuais ou consultorias demoradas.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#123B4A] text-white hover:bg-[#1E5A6A] transition-colors shadow-xs"
              >
                <span>Solicitar demonstração de Indicadores</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solucoes"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white text-[#123B4A] border border-[#D3DDE2] hover:bg-[#F0F5F7] transition-colors"
              >
                Ver todas as soluções
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conteúdo Analítico & Dashboard Visual de Indicadores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Texto */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#209988]">
                  Inteligência Estratégica
                </span>
                <h2 className="text-3xl font-extrabold text-[#123B4A] mt-1 tracking-tight">
                  Métricas essenciais sem excesso de complexidade.
                </h2>
                <p className="text-[#5B6E79] mt-3 text-sm sm:text-base leading-relaxed">
                  Não criamos painéis com dezenas de números que ninguém compreende.
                  A FinPilot prioriza as métricas que realmente indicam se a empresa pode
                  investir, contratar ou necessita conter despesas.
                </p>
              </div>

              <div className="space-y-4">
                {indicatorsList.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8FAFB] border border-[#E2E8F0]"
                    >
                      <div className="p-2 rounded-lg bg-[#EAF2F4] text-[#123B4A] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-[#2CB6A3]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1C252B]">{item.title}</h3>
                        <p className="text-xs text-[#5B6E79] mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Demonstrative Charts UI */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#FAFDFD] border border-[#D3DDE2] p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#2CB6A3]" />
                    <span className="text-xs font-bold text-[#123B4A]">
                      Painel de Métricas do Mês
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#5B6E79] bg-white px-2 py-0.5 rounded-sm border border-[#E2E8F0]">
                    Dados demonstrativos
                  </span>
                </div>

                {/* 4 Indicadores Rápidos */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="text-xs text-[#5B6E79]">Margem Operacional</span>
                    <div className="text-xl font-bold text-[#123B4A] mt-1">34,7%</div>
                    <span className="text-[10px] text-[#209988] font-semibold">+3,1 p.p. vs meta</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="text-xs text-[#5B6E79]">Índice de Liquidez</span>
                    <div className="text-xl font-bold text-[#209988] mt-1">1,92x</div>
                    <span className="text-[10px] text-[#5B6E79]">Ativos / Passivos</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="text-xs text-[#5B6E79]">Ponto de Equilíbrio</span>
                    <div className="text-xl font-bold text-[#123B4A] mt-1">R$ 96.840</div>
                    <span className="text-[10px] text-[#209988] font-semibold">Batido dia 19</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                    <span className="text-xs text-[#5B6E79]">Taxa Inadimplência</span>
                    <div className="text-xl font-bold text-[#1E5A6A] mt-1">1,8%</div>
                    <span className="text-[10px] text-[#209988] font-semibold">Baixo risco</span>
                  </div>
                </div>

                {/* Demonstrative Donut / Category Progress Breakdown */}
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#123B4A]">Composição do Faturamento</span>
                    <span className="text-[#5B6E79]">Total: R$ 148.420,00</span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-[#1C252B] font-medium">Contratos Recorrentes (MRR)</span>
                        <span className="font-bold text-[#123B4A]">57% (R$ 84.600)</span>
                      </div>
                      <div className="w-full bg-[#EAF2F4] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#123B4A] h-full w-[57%] rounded-full"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-[#1C252B] font-medium">Projetos & Serviços Fechados</span>
                        <span className="font-bold text-[#2CB6A3]">43% (R$ 63.820)</span>
                      </div>
                      <div className="w-full bg-[#EAF2F4] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#2CB6A3] h-full w-[43%] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-center text-[#82AFBC]">
                  * Dados ilustrativos para demonstração visual da plataforma.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
