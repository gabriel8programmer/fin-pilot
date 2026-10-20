import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  ArrowRight,
  Calendar,
  AlertTriangle,
  GitCompare,
  BarChart,
  ShieldCheck,
} from "lucide-react";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Fluxo de Caixa Empresarial | FinPilot",
  description:
    "Monitore entradas, saídas e projeções futuras de saldo. Identifique gargalos e antecipe períodos de aperto com o módulo de Fluxo de Caixa da FinPilot.",
  openGraph: {
    title: "Fluxo de Caixa Empresarial | FinPilot",
    description:
      "Veja o caixa antes que ele vire um problema. Previsibilidade financeira diária, semanal e mensal para PMEs.",
  },
};

export default function FluxoDeCaixaPage() {
  const features = [
    {
      title: "Visão diária, semanal e mensal de saldo",
      description:
        "Acompanhe o saldo consolidado ao longo de cada dia do mês, visualizando com exatidão os picos de pagamento.",
      icon: Calendar,
    },
    {
      title: "Projeções antecipadas de descasamento",
      description:
        "O sistema cruza as datas de recebimento de clientes com as datas de vencimento de fornecedores, alertando sobre possíveis saldos negativos.",
      icon: AlertTriangle,
    },
    {
      title: "Comparação entre Previsto vs. Realizado",
      description:
        "Analise desvios entre o planejamento orçamentário inicial e a execução real do caixa, identificando onde ocorreram gastos não programados.",
      icon: GitCompare,
    },
    {
      title: "Identificação proativa de gargalos de liquidez",
      description:
        "Saiba quando prorrogar um pagamento com antecedência ou antecipar um recebível sem pagar juros abusivos de última hora.",
      icon: BarChart,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F0F5F7] to-[#F8FAFB] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2F4] border border-[#BDD8E0] text-[#123B4A] text-xs font-semibold">
              <TrendingUp className="w-3.5 h-3.5 text-[#2CB6A3]" />
              <span>Soluções FinPilot • Módulo de Fluxo de Caixa</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#123B4A] tracking-tight leading-[1.15]">
              Veja o caixa antes que ele vire um problema.
            </h1>

            <p className="text-lg text-[#5B6E79] leading-relaxed">
              Mantenha o controle do presente e antecipe o futuro financeiro da
              sua empresa com projeções confiáveis baseadas em dados reais de
              compromissos já assumidos.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#123B4A] text-white hover:bg-[#1E5A6A] transition-colors shadow-xs"
              >
                <span>Solicitar demonstração do Fluxo</span>
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

      {/* Explicação Profunda e Mockup Demonstrativo de Projeção */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Texto e Pilares */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#209988]">
                  Previsibilidade e Tranquilidade
                </span>
                <h2 className="text-3xl font-extrabold text-[#123B4A] mt-1 tracking-tight">
                  Como a projeção de caixa protege o seu negócio.
                </h2>
                <p className="text-[#5B6E79] mt-3 text-sm sm:text-base leading-relaxed">
                  Uma empresa não quebra necessariamente por falta de vendas; muitas quebram
                  por falta de liquidez no dia do vencimento da folha ou dos impostos.
                  O fluxo de caixa da FinPilot garante que você nunca seja pego de surpresa.
                </p>
              </div>

              <div className="space-y-4">
                {features.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8FAFB] border border-[#E2E8F0]"
                    >
                      <div className="p-2 rounded-lg bg-[#EAF2F4] text-[#123B4A] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-[#2CB6A3]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1C252B]">{feat.title}</h3>
                        <p className="text-xs text-[#5B6E79] mt-1 leading-relaxed">
                          {feat.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Demonstrative Projection Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#FAFDFD] border border-[#D3DDE2] p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-[#2CB6A3]" />
                    <span className="text-xs font-bold text-[#123B4A]">
                      Projeção de Saldo (Próximos 30 dias)
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#5B6E79] bg-white px-2 py-0.5 rounded-sm border border-[#E2E8F0]">
                    Dados demonstrativos
                  </span>
                </div>

                {/* Simulated Curve Status */}
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#5B6E79]">Saldo Mínimo Projetado</span>
                    <span className="font-bold text-[#123B4A]">R$ 48.910,00</span>
                  </div>

                  {/* Visual SVG Curve representation */}
                  <div className="relative h-28 w-full pt-2">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                      <defs>
                        <linearGradient id="flowGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#2CB6A3" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#2CB6A3" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Area */}
                      <path
                        d="M 0 50 Q 75 10, 150 55 T 300 20 L 300 80 L 0 80 Z"
                        fill="url(#flowGrad)"
                      />
                      {/* Line */}
                      <path
                        d="M 0 50 Q 75 10, 150 55 T 300 20"
                        fill="none"
                        stroke="#123B4A"
                        strokeWidth="2.5"
                      />
                      {/* Points */}
                      <circle cx="75" cy="28" r="4" fill="#2CB6A3" />
                      <circle cx="150" cy="55" r="4" fill="#E57373" />
                      <circle cx="280" cy="22" r="4" fill="#123B4A" />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#5B6E79] pt-1">
                    <span>Dia 01: Início</span>
                    <span className="text-[#E57373] font-medium">Dia 15: Ponto Mínimo</span>
                    <span className="text-[#209988] font-medium">Dia 30: Fechamento Superavitário</span>
                  </div>
                </div>

                {/* Critical Dates Alert Simulator */}
                <div className="p-3.5 rounded-xl bg-[#EAF2F4] border border-[#BDD8E0] space-y-1.5 text-xs text-[#123B4A]">
                  <div className="flex items-center gap-2 font-bold">
                    <ShieldCheck className="w-4 h-4 text-[#2CB6A3]" />
                    <span>Diagnóstico de Liquidez FinPilot</span>
                  </div>
                  <p className="text-[11px] text-[#5B6E79] leading-relaxed">
                    Sua empresa mantém margem de segurança positiva em todos os dias projetados.
                    Nenhuma necessidade de recurso emergencial prevista para os próximos 30 dias.
                  </p>
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
