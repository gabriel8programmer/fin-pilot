import {
  FileSpreadsheet,
  AlertCircle,
  Clock,
  Layers,
  Split,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function ProblemSection() {
  const painPoints = [
    {
      icon: Split,
      title: "Informações descentralizadas",
      description:
        "Controles financeiros divididos entre notas em papel, planilhas salvas localmente e extratos em múltiplos bancos.",
    },
    {
      icon: Clock,
      title: "Falta de visão futura do caixa",
      description:
        "Dificuldade para antecipar se haverá saldo bancário suficiente para cobrir os compromissos dos próximos 15 ou 30 dias.",
    },
    {
      icon: AlertCircle,
      title: "Decisões baseadas em dados incompletos",
      description:
        "Insegurança ao contratar, investir ou retirar lucros por não saber com clareza a real margem de sobra da operação.",
    },
    {
      icon: FileSpreadsheet,
      title: "Controles manuais e retrabalho",
      description:
        "Horas perdidas digitando lançamentos repetitivos e conferindo fórmulas corrompidas no fechamento mensal.",
    },
    {
      icon: Layers,
      title: "Dificuldade na prestação de contas",
      description:
        "Comunicação truncada com a contabilidade e desgaste na compilação de relatórios para sócios e investidores.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F0F5F7]/70 border-y border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2F4] text-[#123B4A] text-xs font-bold uppercase tracking-wider">
            <span>O Desafio da Rotina Financeira</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B4A] tracking-tight leading-tight">
            Gestão financeira não precisa depender de planilhas espalhadas.
          </h2>

          <p className="text-base sm:text-lg text-[#5B6E79] leading-relaxed">
            Conforme a empresa cresce, controles descentralizados geram gargalos
            invisíveis. Acompanhe a operação com uma estrutura pensada para clareza
            e previsibilidade.
          </p>
        </div>

        {/* Comparison Grid: Pain Points on Left, FinPilot Approach on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: The 5 core problems */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className={`p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs space-y-2.5 transition-all hover:border-[#BDD8E0] ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F8FAFB] border border-[#E2E8F0] text-[#1E5A6A] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#1C252B]">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: The FinPilot Solution Card */}
          <div className="lg:col-span-5 bg-[#123B4A] text-white p-7 sm:p-8 rounded-2xl border border-[#194D60] shadow-md space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#2CB6A3]">
                A Abordagem FinPilot
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Centralização com propósito, simplicidade com rigor.
              </h3>
              <p className="text-sm text-[#BDD8E0] leading-relaxed">
                Desenvolvemos um ambiente que traduz dados complexos de tesouraria
                em rotinas objetivas de acompanhamento.
              </p>
            </div>

            <div className="space-y-3.5 pt-2 border-t border-[#1E5A6A]">
              {[
                "Lançamento simplificado com categorias padronizadas",
                "Visão consolidada de saldos bancários e formas de pagamento",
                "Projeção automática de descasamentos de recebíveis e despesas",
                "Relatórios objetivos prontos para exportação e análise",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#2CB6A3] shrink-0 mt-0.5" />
                  <span className="text-[#EAF2F4]">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/solucoes"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-[#123B4A] bg-[#2CB6A3] hover:bg-[#209988] hover:text-white rounded-lg transition-colors shadow-xs"
              >
                <span>Conhecer nossas soluções</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
