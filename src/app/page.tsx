import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import DashboardMockup from "@/components/finance/DashboardMockup";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionsOverview from "@/components/sections/SolutionsOverview";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import InteractiveTabDashboards from "@/components/finance/InteractiveTabDashboards";
import NumbersSection from "@/components/sections/NumbersSection";
import ArticlesPreview from "@/components/sections/ArticlesPreview";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-8 pb-20 lg:pt-14 lg:pb-28 overflow-hidden bg-gradient-to-b from-[#F0F5F7]/80 via-[#F8FAFB] to-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6 mb-12 lg:mb-16">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2F4] border border-[#BDD8E0] text-[#123B4A] text-xs sm:text-sm font-semibold shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#2CB6A3]"></span>
              <span>Dados organizados. Visão mais clara. Decisões mais seguras.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#123B4A] tracking-tight leading-[1.12]">
              Mais clareza para decisões financeiras melhores.
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#5B6E79] max-w-3xl mx-auto leading-relaxed">
              Soluções digitais para empresas acompanharem fluxo de caixa, indicadores
              e movimentações financeiras em um só lugar.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <Link
                href="/contato"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-base font-bold bg-[#123B4A] text-white hover:bg-[#1E5A6A] transition-all shadow-xs focus:ring-2 focus:ring-[#2CB6A3]"
              >
                <span>Solicitar demonstração</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solucoes"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-base font-semibold text-[#123B4A] bg-white hover:bg-[#F0F5F7] border border-[#D3DDE2] transition-all shadow-2xs"
              >
                Conhecer soluções
              </Link>
            </div>

            {/* Trust points */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#5B6E79]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2CB6A3]" />
                <span>Sem necessidade de instalação local</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#2CB6A3]" />
                <span>Dados protegidos em nuvem</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#2CB6A3]" />
                <span>Adequado para pequenas e médias empresas</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="max-w-5xl mx-auto relative">
            <DashboardMockup />
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PROBLEMA */}
      <ProblemSection />

      {/* SEÇÃO DE SOLUÇÕES (3 PILARES COM COMPOSIÇÃO) */}
      <SolutionsOverview />

      {/* SEÇÃO DE DIFERENCIAIS */}
      <DifferentialsSection />

      {/* SEÇÃO DE DASHBOARDS (TELAS DEMONSTRATIVAS COM TABS) */}
      <section className="py-20 lg:py-28 bg-[#F0F5F7]/50 border-t border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2F4] text-[#123B4A] text-xs font-bold uppercase tracking-wider">
              <span>Experiência Visual da Plataforma</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B4A] tracking-tight">
              Visões demonstrativas pensadas para sua rotina.
            </h2>
            <p className="text-base text-[#5B6E79]">
              Navegue pelas telas demonstrativas e veja como organizamos dados
              de fluxo, despesas, faturamento e contas a liquidar.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <InteractiveTabDashboards />
          </div>
        </div>
      </section>

      {/* SEÇÃO DE NÚMEROS */}
      <NumbersSection />

      {/* SEÇÃO DE CONTEÚDOS RECENTES */}
      <ArticlesPreview />

      {/* CTA BANNER FINAL */}
      <CtaBanner />
    </div>
  );
}
