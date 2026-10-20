import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="py-20 lg:py-24 bg-[#0E2933] text-white relative overflow-hidden">
      {/* Subtle geometric line accents in background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(#2CB6A3 1px, transparent 1px), radial-gradient(#BDD8E0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0, 20px 20px",
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E5A6A]/80 border border-[#2CB6A3]/40 text-[#2CB6A3] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#2CB6A3]" />
          <span>Estrutura Financeira Confiável</span>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Mais clareza para decisões financeiras melhores.
          </h2>
          <p className="text-base sm:text-lg text-[#BDD8E0] leading-relaxed">
            Centralize receitas, despesas, fluxo de caixa e indicadores em um único
            ambiente moderno e acessível para toda a equipe.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-base font-bold bg-[#2CB6A3] text-[#0E2933] hover:bg-[#209988] hover:text-white transition-all shadow-md"
          >
            <span>Solicitar demonstração</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/solucoes"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-lg text-base font-semibold text-white bg-[#194D60] hover:bg-[#1E5A6A] border border-[#2C6E80] transition-all"
          >
            Conhecer soluções
          </Link>
        </div>

        <p className="text-xs text-[#82AFBC]">
          Dados organizados. Visão mais clara. Decisões mais seguras.
        </p>
      </div>
    </section>
  );
}
