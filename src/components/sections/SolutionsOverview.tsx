"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Wallet,
  TrendingUp,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { SOLUTIONS } from "@/data/solutions";

export default function SolutionsOverview() {
  const [selectedPillar, setSelectedPillar] = useState<string>("gestao-financeira");
  const activeSolution =
    SOLUTIONS.find((s) => s.id === selectedPillar) || SOLUTIONS[0];

  const pillarIcons: Record<string, typeof Wallet> = {
    "gestao-financeira": Wallet,
    "fluxo-de-caixa": TrendingUp,
    "indicadores": BarChart3,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2F4] text-[#123B4A] text-xs font-bold uppercase tracking-wider mb-4">
            <span>Soluções Integradas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B4A] tracking-tight leading-tight">
            Três pilares fundamentais para transformar sua rotina financeira.
          </h2>
          <p className="text-base sm:text-lg text-[#5B6E79] mt-3">
            Em vez de contratar ferramentas isoladas que não conversam entre si, a
            FinPilot reúne controle diário, projeção temporal e inteligência
            estratégica.
          </p>
        </div>

        {/* Pillars Selection Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {SOLUTIONS.map((sol) => {
            const Icon = pillarIcons[sol.id] || Layers;
            const isSelected = selectedPillar === sol.id;
            return (
              <button
                key={sol.id}
                type="button"
                onClick={() => setSelectedPillar(sol.id)}
                className={`p-5 rounded-xl text-left transition-all border ${
                  isSelected
                    ? "bg-[#123B4A] text-white border-[#123B4A] shadow-md ring-2 ring-[#2CB6A3]/40"
                    : "bg-white text-[#1C252B] border-[#E2E8F0] hover:border-[#BDD8E0] hover:bg-[#FAFDFD]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected
                        ? "bg-[#1E5A6A] text-[#2CB6A3]"
                        : "bg-[#EAF2F4] text-[#123B4A]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-sm ${
                      isSelected
                        ? "bg-[#1E5A6A] text-[#EAF2F4]"
                        : "bg-[#F0F5F7] text-[#5B6E79]"
                    }`}
                  >
                    Pilar 0{SOLUTIONS.findIndex((s) => s.id === sol.id) + 1}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1">{sol.title}</h3>
                <p
                  className={`text-xs line-clamp-2 leading-relaxed ${
                    isSelected ? "text-[#BDD8E0]" : "text-[#5B6E79]"
                  }`}
                >
                  {sol.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Composition: Detail Panel with Mockup */}
        <div className="rounded-2xl bg-white border border-[#D3DDE2] shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Context & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#209988]">
                  {activeSolution.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123B4A] mt-1 tracking-tight">
                  {activeSolution.headline}
                </h3>
                <p className="text-sm sm:text-base text-[#5B6E79] mt-3 leading-relaxed">
                  {activeSolution.description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3 pt-2">
                {activeSolution.features.slice(0, 3).map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#2CB6A3] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1C252B]">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-[#5B6E79] mt-0.5 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/solucoes/${activeSolution.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-[#123B4A] text-white hover:bg-[#1E5A6A] transition-colors shadow-xs"
                >
                  <span>Explorar {activeSolution.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contato"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#123B4A] bg-[#EAF2F4] hover:bg-[#D3E5E8] transition-colors"
                >
                  Solicitar demonstração
                </Link>
              </div>
            </div>

            {/* Right Column: Tailored Demonstrative Mockup */}
            <div className="lg:col-span-6">
              <div className="rounded-xl bg-[#FAFDFD] border border-[#D3DDE2] p-5 sm:p-6 shadow-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2CB6A3]"></span>
                    <span className="text-xs font-bold text-[#123B4A]">
                      {activeSolution.mockupData.label}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#5B6E79]">
                    Filtro: Período Atual
                  </span>
                </div>

                {/* Primary & Secondary Highlight */}
                <div className="p-4 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
                  <span className="text-xs text-[#5B6E79]">Métrica Consolidada</span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#123B4A] mt-1">
                    {activeSolution.mockupData.primaryMetric}
                  </div>
                  <div className="text-xs text-[#209988] font-semibold mt-1">
                    {activeSolution.mockupData.secondaryMetric}
                  </div>
                </div>

                {/* Details Breakdown */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#5B6E79]">
                    Lançamentos & Composição
                  </span>
                  {activeSolution.mockupData.details.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-[#EAF2F4] text-xs hover:border-[#BDD8E0] transition-colors"
                    >
                      <span className="font-medium text-[#1C252B]">{item.name}</span>
                      <span
                        className={`font-bold ${
                          item.status === "positive"
                            ? "text-[#209988]"
                            : item.status === "negative"
                            ? "text-[#E57373]"
                            : "text-[#123B4A]"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-[11px] text-center text-[#82AFBC]">
                  * Dados demonstrativos gerados para apresentação de interface.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
