import Link from "next/link";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import { ARTICLES } from "@/data/articles";

export default function ArticlesPreview() {
  const recentArticles = ARTICLES.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFB] border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2F4] text-[#123B4A] text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5 text-[#2CB6A3]" />
              <span>Inteligência & Educação Financeira</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B4A] tracking-tight">
              Conteúdos práticos para aprimorar sua gestão.
            </h2>
            <p className="text-base text-[#5B6E79]">
              Artigos, conceitos fundamentais e orientações para apoiar rotinas financeiras saudáveis.
            </p>
          </div>

          <Link
            href="/conteudos"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#123B4A] hover:text-[#2CB6A3] transition-colors self-start md:self-end group"
          >
            <span>Ver todos os conteúdos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-2xs hover:shadow-sm hover:border-[#BDD8E0] transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#5B6E79]">
                  <span className="font-semibold px-2.5 py-1 rounded-md bg-[#EAF2F4] text-[#123B4A]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#82AFBC]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#1C252B] group-hover:text-[#123B4A] transition-colors leading-snug">
                  <Link href={`/conteudos/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-[#F0F4F7] flex items-center justify-between text-xs">
                <span className="text-[#5B6E79] font-medium">{article.date}</span>
                <Link
                  href={`/conteudos/${article.slug}`}
                  className="font-semibold text-[#123B4A] group-hover:text-[#2CB6A3] inline-flex items-center gap-1 transition-colors"
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
  );
}
