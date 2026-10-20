import type { Metadata } from "next";
import Link from "next/link";
import {
  Wallet,
  TrendingUp,
  BarChart3,
  FileText,
  CreditCard,
  Layers,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Soluções Financeiras Integradas | FinPilot",
  description:
    "Conheça a suíte completa da FinPilot: Gestão Financeira, Fluxo de Caixa, Indicadores Analíticos e Relatórios Gerenciais para pequenas e médias empresas.",
  openGraph: {
    title: "Soluções Financeiras Integradas | FinPilot",
    description:
      "Plataforma completa para organização, acompanhamento e tomada de decisões financeiras empresariais com clareza e previsibilidade.",
  },
};

export default function SolucoesPage() {
  const mainPillars = [
    {
      id: "gestao-financeira",
      title: "Gestão Financeira",
      badge: "Pilar 01",
      headline: "Controle financeiro sem complicação.",
      description:
        "Centralização de contas a pagar, contas a receber, conciliação e categorização de lançamentos em uma visão transparente.",
      href: "/solucoes/gestao-financeira",
      icon: Wallet,
      highlights: [
        "Cadastro rápido de receitas e despesas",
        "Categorização e centros de custo padronizados",
        "Acompanhamento de status de liquidação",
        "Conciliação bancária unificada",
      ],
    },
    {
      id: "fluxo-de-caixa",
      title: "Fluxo de Caixa",
      badge: "Pilar 02",
      headline: "Veja o caixa antes que ele vire um problema.",
      description:
        "Acompanhamento diário e projeção de entradas e saídas ao longo do tempo para antecipar descompassos e garantir liquidez.",
      href: "/solucoes/fluxo-de-caixa",
      icon: TrendingUp,
      highlights: [
        "Visão diária, semanal e mensal de saldo",
        "Projeções automáticas baseadas em títulos em aberto",
        "Identificação de datas críticas de desembolso",
        "Comparação entre previsto e realizado",
      ],
    },
    {
      id: "indicadores",
      title: "Indicadores Financeiros",
      badge: "Pilar 03",
      headline: "Visão de métricas para apoiar decisões.",
      description:
        "Dashboards analíticos com margem operacional, liquidez, inadimplência e ponto de equilíbrio calculados continuamente.",
      href: "/solucoes/indicadores",
      icon: BarChart3,
      highlights: [
        "Margem de contribuição e lucro operacional",
        "Taxa de inadimplência e aging de recebíveis",
        "Ponto de equilíbrio (break-even point)",
        "Evolução comparativa histórica",
      ],
    },
  ];

  const complementarySolutions = [
    {
      icon: FileText,
      title: "Relatórios Gerenciais",
      description:
        "Gere demonstrações consolidadas por período prontas para exportar em PDF ou compartilhar diretamente com sua contabilidade.",
    },
    {
      icon: CreditCard,
      title: "Organização de Contas",
      description:
        "Controle múltiplos bancos, contas operacionais e reservas sem necessidade de alternar logins complexos.",
    },
    {
      icon: Layers,
      title: "Visão Consolidada",
      description:
        "Visualize a soma total de disponibilidades da empresa e a programação líquida de liquidação para os próximos 60 dias.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Soluções */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F0F5F7] to-[#F8FAFB] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2F4] border border-[#BDD8E0] text-[#123B4A] text-xs font-semibold">
              <Layers className="w-3.5 h-3.5 text-[#2CB6A3]" />
              <span>Plataforma Integrada • Suíte de Soluções</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#123B4A] tracking-tight leading-[1.15]">
              Soluções inteligentes para cada etapa da sua gestão financeira.
            </h1>

            <p className="text-lg text-[#5B6E79] leading-relaxed">
              Descubra como os pilares da FinPilot trabalham de forma coordenada
              para substituir rotinas manuais por processos digitais confiáveis,
              visuais e simples de operar.
            </p>
          </div>
        </div>
      </section>

      {/* Os 3 Pilares Principais (Com links aprofundados) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#123B4A]">
              Os Três Pilares da FinPilot
            </h2>
            <p className="text-[#5B6E79] mt-2">
              Cada módulo foi desenhado com foco nas necessidades cotidianas de gestores de PMEs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="rounded-2xl bg-[#F8FAFB] border border-[#E2E8F0] p-7 flex flex-col justify-between hover:border-[#BDD8E0] hover:shadow-md transition-all group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#EAF2F4] text-[#123B4A] flex items-center justify-center group-hover:bg-[#123B4A] group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6 text-[#2CB6A3] group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#5B6E79] px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0]">
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#1C252B] group-hover:text-[#123B4A] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm font-semibold text-[#209988] mt-1">
                        {pillar.headline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed">
                      {pillar.description}
                    </p>

                    <div className="pt-3 border-t border-[#E2E8F0] space-y-2.5">
                      {pillar.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs">
                          <CheckCircle2 className="w-4 h-4 text-[#2CB6A3] shrink-0 mt-0.5" />
                          <span className="text-[#44545F]">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E2E8F0]">
                    <Link
                      href={pillar.href}
                      className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-sm font-bold text-[#123B4A] bg-white hover:bg-[#123B4A] hover:text-white border border-[#D3DDE2] transition-colors group/link"
                    >
                      <span>Ver detalhes da solução</span>
                      <ArrowRight className="w-4 h-4 text-[#2CB6A3] group-hover/link:text-white transition-colors" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Soluções Complementares: Relatórios, Contas e Visão Consolidada */}
      <section className="py-20 bg-[#F0F5F7]/60 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl font-extrabold text-[#123B4A]">
              Recursos complementares de alta eficiência
            </h2>
            <p className="text-base text-[#5B6E79]">
              Funcionalidades que potencializam o dia a dia da tesouraria da empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complementarySolutions.map((comp, idx) => {
              const Icon = comp.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EAF2F4] text-[#123B4A] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#2CB6A3]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1C252B]">{comp.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed">
                    {comp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
