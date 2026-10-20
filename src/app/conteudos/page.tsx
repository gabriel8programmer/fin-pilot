import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight } from "lucide-react";
import { ARTICLES } from "@/data/articles";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Conteúdos & Artigos Financeiros | FinPilot",
  description:
    "Guias práticos, análises de fluxo de caixa, indicadores e boas práticas de gestão financeira para pequenas e médias empresas.",
  openGraph: {
    title: "Conteúdos & Artigos Financeiros | FinPilot",
    description:
      "Aprenda a estruturar o fluxo de caixa, calcular indicadores e organizar as contas da sua empresa com a equipe FinPilot.",
  },
};

export default function ConteudosPage() {
  const categories = [
    "Todos",
    "Gestão Financeira",
    "Educação Financeira",
    "Indicadores",
    "Tecnologia & Processos",
    "Planejamento",
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F0F5F7] to-[#F8FAFB] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2F4] border border-[#BDD8E0] text-[#123B4A] text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5 text-[#2CB6A3]" />
              <span>Conhecimento Prático • FinPilot Insights</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#123B4A] tracking-tight leading-[1.15]">
              Conteúdos práticos para apoiar suas decisões.
            </h1>

            <p className="text-lg text-[#5B6E79] leading-relaxed">
              Sem fórmulas mágicas ou teorias inacessíveis. Nossos artigos abordam
              as dores reais enfrentadas por gestores e empreendedores no dia a dia
              da tesouraria.
            </p>
          </div>
        </div>
      </section>

      {/* Grid de Artigos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header com Categorias */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-[#E2E8F0]">
            <div className="flex flex-wrap gap-2 text-xs">
              {categories.map((cat, idx) => (
                <span
                  key={cat}
                  className={`px-3 py-1.5 rounded-lg font-medium cursor-default transition-colors ${
                    idx === 0
                      ? "bg-[#123B4A] text-white"
                      : "bg-[#F8FAFB] text-[#5B6E79] border border-[#E2E8F0]"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="text-xs text-[#5B6E79]">
              Exibindo <strong>{ARTICLES.length} artigos</strong> publicados
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#F8FAFB] border border-[#E2E8F0] hover:border-[#BDD8E0] hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#5B6E79]">
                    <span className="font-semibold px-2.5 py-1 rounded-md bg-[#EAF2F4] text-[#123B4A]">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#82AFBC]" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-[#1C252B] group-hover:text-[#123B4A] transition-colors leading-snug">
                    <Link href={`/conteudos/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                  <div className="text-[#5B6E79]">
                    <span className="font-medium text-[#1C252B] block">
                      {article.author.name}
                    </span>
                    <span className="text-[11px] text-[#82AFBC]">
                      {article.date}
                    </span>
                  </div>

                  <Link
                    href={`/conteudos/${article.slug}`}
                    className="font-bold text-[#123B4A] group-hover:text-[#2CB6A3] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Ler artigo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
