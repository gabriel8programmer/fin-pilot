import type { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Zap,
  Building,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Sobre a FinPilot | Tecnologia Financeira",
  description:
    "Conheça o propósito, a visão e os princípios da FinPilot: tecnologia financeira descomplicada para impulsionar a gestão de pequenas e médias empresas.",
  openGraph: {
    title: "Sobre a FinPilot | Tecnologia Financeira",
    description:
      "Ajudamos empresas a transformar desordem financeira em clareza operacional através de tecnologia acessível e focada em resultados.",
  },
};

export default function EmpresaPage() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Clareza e Integridade",
      description:
        "Dados financeiros precisam ser precisos e auditáveis. Não criamos complexidade desnecessária nem termos difíceis.",
    },
    {
      icon: Zap,
      title: "Simplicidade Funcional",
      description:
        "A melhor ferramenta é aquela que a equipe realmente usa todos os dias. Focamos em fluxos de trabalho rápidos e intuitivos.",
    },
    {
      icon: Target,
      title: "Orientação para Decisão",
      description:
        "Números por si só não bastam. Cada relatório e gráfico da FinPilot existe para responder a uma pergunta prática de gestão.",
    },
    {
      icon: HeartHandshake,
      title: "Parceria com PMEs",
      description:
        "Entendemos os desafios de fluxo de caixa, prazos apertados e a necessidade de previsibilidade para manter equipes e operações seguras.",
    },
  ];

  const milestones = [
    {
      year: "Origem",
      title: "A constatação da dor real",
      description:
        "Percebemos que gestores de PMEs passavam finais de semana conciliando planilhas desatualizadas para tentar entender se o mês fecharia no azul.",
    },
    {
      year: "Desenvolvimento",
      title: "Construção com foco em simplicidade",
      description:
        "Desenhamos uma arquitetura centrada em 3 pilares vitais: gestão diária de lançamentos, projeção antecipada de caixa e indicadores claros.",
    },
    {
      year: "Plataforma",
      title: "Ambiente web moderno e seguro",
      description:
        "Consolidação de uma interface rápida, acessível de qualquer dispositivo e estruturada com padrões modernos de proteção de dados.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Empresa */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F0F5F7] to-[#F8FAFB] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2F4] border border-[#BDD8E0] text-[#123B4A] text-xs font-semibold">
              <Building className="w-3.5 h-3.5 text-[#2CB6A3]" />
              <span>Institucional • Quem Somos</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#123B4A] tracking-tight leading-[1.15]">
              Tecnologia financeira feita para simplificar a gestão.
            </h1>

            <p className="text-lg text-[#5B6E79] leading-relaxed">
              Acreditamos que nenhuma empresa deve tomar decisões estratégicas no
              escuro ou perder horas preciosas tentando decifrar controles manuais.
              A FinPilot existe para trazer previsibilidade, transparência e calma
              à rotina financeira empresarial.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#123B4A] text-white hover:bg-[#1E5A6A] transition-colors shadow-xs"
              >
                <span>Falar com nossa equipe</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solucoes"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white text-[#123B4A] border border-[#D3DDE2] hover:bg-[#F0F5F7] transition-colors"
              >
                Conhecer a plataforma
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Propósito */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Propósito */}
            <div className="p-8 rounded-2xl bg-[#F8FAFB] border border-[#E2E8F0] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF2F4] text-[#123B4A] flex items-center justify-center">
                <Target className="w-6 h-6 text-[#2CB6A3]" />
              </div>
              <h2 className="text-xl font-bold text-[#123B4A]">Nosso Propósito</h2>
              <p className="text-sm text-[#5B6E79] leading-relaxed">
                Dar aos gestores e equipes administrativas o controle verdadeiro
                sobre o destino financeiro de suas empresas, eliminando a
                ansiedade causada pela desorganização e pela falta de previsibilidade.
              </p>
            </div>

            {/* Missão */}
            <div className="p-8 rounded-2xl bg-[#F8FAFB] border border-[#E2E8F0] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF2F4] text-[#123B4A] flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#2CB6A3]" />
              </div>
              <h2 className="text-xl font-bold text-[#123B4A]">Nossa Missão</h2>
              <p className="text-sm text-[#5B6E79] leading-relaxed">
                Desenvolver ferramentas digitais robustas, seguras e simples que
                transformem rotinas financeiras burocráticas em processos ágeis,
                claros e orientados a resultados práticos.
              </p>
            </div>

            {/* Visão */}
            <div className="p-8 rounded-2xl bg-[#F8FAFB] border border-[#E2E8F0] space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAF2F4] text-[#123B4A] flex items-center justify-center">
                <Eye className="w-6 h-6 text-[#2CB6A3]" />
              </div>
              <h2 className="text-xl font-bold text-[#123B4A]">Nossa Visão</h2>
              <p className="text-sm text-[#5B6E79] leading-relaxed">
                Ser a referência em tecnologia de acompanhamento financeiro para
                pequenas e médias empresas no Brasil, reconhecida pela clareza de
                interface e confiabilidade de dados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contexto do Negócio */}
      <section className="py-20 bg-[#F0F5F7]/60 border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2F4] text-[#123B4A] text-xs font-bold uppercase tracking-wider">
                <span>Contexto de Mercado</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B4A] tracking-tight">
                Por que a gestão financeira tradicional falha com as PMEs?
              </h2>
              <p className="text-base text-[#5B6E79] leading-relaxed">
                Pequenas e médias empresas representam a maior parte dos empregos
                e da atividade econômica do país. No entanto, a maioria das soluções
                de tecnologia disponíveis no mercado se dividem em dois extremos:
              </p>
              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-sm">
                  <strong className="text-[#123B4A] block mb-1">
                    1. Softwares corporativos legados
                  </strong>
                  <p className="text-[#5B6E79] text-xs sm:text-sm">
                    Extremamente complexos, caros de implantar, com curvas de aprendizado
                    extensas e repletos de telas das quais o gestor utiliza menos de 10%.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] text-sm">
                  <strong className="text-[#123B4A] block mb-1">
                    2. Planilhas desconexas e controles improvisados
                  </strong>
                  <p className="text-[#5B6E79] text-xs sm:text-sm">
                    Aparentemente gratuitas, mas com altíssimo custo em horas de trabalho,
                    risco crônico de fórmulas corrompidas e zero segurança colaborativa.
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#123B4A] font-semibold pt-1">
                A FinPilot foi concebida para ocupar exatamente o espaço do meio: o rigor
                analítico que sua empresa precisa, sem a burocracia dos sistemas antigos.
              </p>
            </div>

            {/* Context Visual Card */}
            <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-2xl border border-[#D3DDE2] shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#123B4A] pb-3 border-b border-[#E2E8F0]">
                O Compromisso FinPilot com a sua Operação
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "Acesso democratizado à boa gestão",
                    text: "Toda empresa tem o direito de saber com precisão sua margem e seu ponto de equilíbrio sem precisar ser um perito contábil.",
                  },
                  {
                    title: "Autonomia para os tomadores de decisão",
                    text: "Sua equipe obtém respostas imediatas para 'podemos contratar este mês?' ou 'quando podemos pagar esse fornecedor?'.",
                  },
                  {
                    title: "Harmonia com a contabilidade externa",
                    text: "Facilitamos o intercâmbio de relatórios organizados, diminuindo o desgaste no fechamento fiscal.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-[#2CB6A3] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-[#1C252B]">{item.title}</h4>
                      <p className="text-xs text-[#5B6E79] mt-0.5 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#EAF2F4] border border-[#BDD8E0] text-xs text-[#123B4A]">
                <strong>Nota institucional:</strong> Não somos uma instituição bancária nem
                concedemos crédito. Somos uma empresa desenvolvedora de software dedicada à
                organização e inteligência de gestão.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Princípios & Valores */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2F4] text-[#123B4A] text-xs font-bold uppercase tracking-wider">
              <span>Cultura & Princípios</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B4A] tracking-tight">
              Os valores que guiam o desenvolvimento de nossas soluções.
            </h2>
            <p className="text-base text-[#5B6E79]">
              Como nos comportamos ao desenhar produtos, prestar suporte e interagir com nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#F8FAFB] border border-[#E2E8F0] hover:border-[#BDD8E0] transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EAF2F4] text-[#123B4A] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#2CB6A3]" />
                  </div>
                  <h3 className="text-base font-bold text-[#1C252B]">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trajetória & Visão de Futuro */}
      <section className="py-20 bg-[#F0F5F7]/40 border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl font-extrabold text-[#123B4A]">
              Nossa trajetória de evolução
            </h2>
            <p className="text-sm text-[#5B6E79]">
              Construindo ferramentas focadas nas necessidades reais do dia a dia empresarial.
            </p>
          </div>

          <div className="space-y-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-start gap-4 p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs"
              >
                <div className="sm:w-32 shrink-0">
                  <span className="inline-block px-3 py-1 rounded-md bg-[#123B4A] text-white font-mono text-xs font-bold">
                    {m.year}
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-[#1C252B]">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
