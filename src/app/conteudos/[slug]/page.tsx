import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Bookmark,
} from "lucide-react";
import { ARTICLES } from "@/data/articles";
import CtaBanner from "@/components/sections/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ARTICLES.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: "Artigo não encontrado | FinPilot",
    };
  }

  return {
    title: `${article.title} | FinPilot Conteúdos`,
    description: article.summary,
    openGraph: {
      title: `${article.title} | FinPilot`,
      description: article.summary,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Filter related articles
  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(
    0,
    2
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Article Header & Breadcrumbs */}
      <section className="pt-12 pb-14 lg:pt-16 lg:pb-16 bg-gradient-to-b from-[#F0F5F7] to-[#F8FAFB] border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            href="/conteudos"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#123B4A] hover:text-[#2CB6A3] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para todos os artigos</span>
          </Link>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-semibold px-2.5 py-1 rounded-md bg-[#123B4A] text-white">
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-[#5B6E79]">
                <Clock className="w-3.5 h-3.5 text-[#82AFBC]" />
                <span>{article.readTime}</span>
              </div>
              <span className="text-[#BDD8E0]">•</span>
              <div className="flex items-center gap-1.5 text-[#5B6E79]">
                <Calendar className="w-3.5 h-3.5 text-[#82AFBC]" />
                <span>{article.date}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#123B4A] tracking-tight leading-[1.2]">
              {article.title}
            </h1>

            <p className="text-base sm:text-lg text-[#5B6E79] leading-relaxed">
              {article.summary}
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-[#5B6E79]">
              <div className="w-8 h-8 rounded-full bg-[#123B4A] text-white flex items-center justify-center font-bold text-xs">
                FP
              </div>
              <div>
                <span className="font-bold text-[#1C252B] block">
                  {article.author.name}
                </span>
                <span className="text-[11px] text-[#82AFBC]">
                  {article.author.role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Intro Paragraph */}
          <div className="text-base sm:text-lg text-[#1C252B] font-medium leading-relaxed p-6 rounded-2xl bg-[#F8FAFB] border-l-4 border-[#2CB6A3] border-y border-r border-[#E2E8F0]">
            {article.content.intro}
          </div>

          {/* Structured Sections */}
          <div className="space-y-8">
            {article.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#123B4A] tracking-tight">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm sm:text-base text-[#44545F] leading-relaxed"
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#EAF2F4] border border-[#BDD8E0] space-y-4 mt-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123B4A]">
              <Bookmark className="w-4 h-4 text-[#2CB6A3]" />
              <span>Pontos Principais para Lembrar</span>
            </div>
            <div className="space-y-2.5">
              {article.content.takeaways.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#1C252B]">
                  <CheckCircle2 className="w-4 h-4 text-[#2CB6A3] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Middle Conversion Box */}
          <div className="p-6 rounded-xl bg-[#123B4A] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-bold text-base text-white">
                Precisa de apoio para organizar seu fluxo de caixa?
              </h3>
              <p className="text-xs text-[#BDD8E0]">
                A FinPilot coloca toda a sua operação em uma só tela.
              </p>
            </div>
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold bg-[#2CB6A3] text-[#0E2933] hover:bg-[#209988] hover:text-white transition-colors shrink-0 shadow-xs"
            >
              <span>Solicitar demonstração</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-[#F8FAFB] border-t border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#123B4A]">
              Artigos Relacionados
            </h3>
            <Link
              href="/conteudos"
              className="text-xs font-bold text-[#123B4A] hover:text-[#2CB6A3] transition-colors"
            >
              Ver todos os artigos
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                className="p-6 rounded-xl bg-white border border-[#E2E8F0] space-y-3 hover:border-[#BDD8E0] transition-colors"
              >
                <div className="flex items-center justify-between text-xs text-[#5B6E79]">
                  <span className="font-semibold text-[#123B4A] px-2 py-0.5 rounded-sm bg-[#EAF2F4]">
                    {rel.category}
                  </span>
                  <span>{rel.readTime}</span>
                </div>
                <h4 className="font-bold text-base text-[#1C252B] hover:text-[#123B4A] transition-colors">
                  <Link href={`/conteudos/${rel.slug}`}>{rel.title}</Link>
                </h4>
                <p className="text-xs text-[#5B6E79] line-clamp-2">
                  {rel.summary}
                </p>
                <Link
                  href={`/conteudos/${rel.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#123B4A] hover:text-[#2CB6A3] pt-2 transition-colors"
                >
                  <span>Continuar lendo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
