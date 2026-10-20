import type { Metadata } from "next";
import Link from "next/link";
import {
  Wallet,
  ArrowRight,
  CheckCircle2,
  FolderTree,
  CalendarRange,
  Layers,
  ArrowUpRight,
  ArrowDownRight,
  Sparkles,
} from "lucide-react";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Gestão Financeira Empresarial | FinPilot",
  description:
    "Organize receitas, despesas, centros de custo e conciliações em um só lugar. A solução de Gestão Financeira da FinPilot simplifica sua rotina contábil.",
  openGraph: {
    title: "Gestão Financeira Empresarial | FinPilot",
    description:
      "Controle financeiro sem complicação. Categorização padronizada, histórico de lançamentos e fechamento mensal ágil.",
  },
};

export default function GestaoFinanceiraPage() {
  const capabilities = [
    {
      title: "Cadastro ágil de receitas e despesas",
      description:
        "Lance movimentações avulsas ou recorrentes com poucos cliques, vinculando notas fiscais, comprovantes e fornecedores.",
      icon: Wallet,
    },
    {
      title: "Categorização e Centros de Custo",
      description:
        "Padronize as contas contábeis e separe despesas por departamento, projeto ou unidade operacional.",
      icon: FolderTree,
    },
    {
      title: "Acompanhamento de movimentações em tempo real",
      description:
        "Filtre extratos por período, modalidade de pagamento (PIX, boleto, cartão) e situação de liquidação.",
      icon: Layers,
    },
    {
      title: "Organização periódica e fechamento",
      description:
        "Rotinas de encerramento mensal com relatórios estruturados, facilitando a conciliação e o envio à contabilidade.",
      icon: CalendarRange,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F0F5F7] to-[#F8FAFB] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2F4] border border-[#BDD8E0] text-[#123B4A] text-xs font-semibold">
              <Wallet className="w-3.5 h-3.5 text-[#2CB6A3]" />
              <span>Soluções FinPilot • Módulo de Gestão</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#123B4A] tracking-tight leading-[1.15]">
              Controle financeiro sem complicação.
            </h1>

            <p className="text-lg text-[#5B6E79] leading-relaxed">
              Substitua controles manuais fragmentados por um ambiente centralizado
              onde cada receita, despesa e comprovante é catalogado com rigor
              e facilidade de consulta.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#123B4A] text-white hover:bg-[#1E5A6A] transition-colors shadow-xs"
              >
                <span>Solicitar demonstração desta solução</span>
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

      {/* Visão Detalhada com Mockup Demonstrativo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Informações estruturais */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#209988]">
                  Eficiência Operacional
                </span>
                <h2 className="text-3xl font-extrabold text-[#123B4A] mt-1 tracking-tight">
                  Toda a movimentação financeira catalogada e transparente.
                </h2>
                <p className="text-[#5B6E79] mt-3 text-sm sm:text-base leading-relaxed">
                  A gestão financeira da FinPilot foi pensada para resolver a rotina de quem precisa
                  inserir lançamentos rápidos sem perder a rastreabilidade contábil.
                </p>
              </div>

              <div className="space-y-4">
                {capabilities.map((cap, i) => {
                  const Icon = cap.icon;
                  return (
                    <div key={i} className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8FAFB] border border-[#E2E8F0]">
                      <div className="p-2 rounded-lg bg-[#EAF2F4] text-[#123B4A] shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-[#2CB6A3]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-[#1C252B]">{cap.title}</h3>
                        <p className="text-xs text-[#5B6E79] mt-1 leading-relaxed">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Demonstrative Interface Card */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl bg-[#FAFDFD] border border-[#D3DDE2] p-6 shadow-sm space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#2CB6A3]" />
                    <span className="text-xs font-bold text-[#123B4A]">
                      Extrato Consolidado por Centro de Custo
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#5B6E79] bg-white px-2 py-0.5 rounded-sm border border-[#E2E8F0]">
                    Visualização demonstrativa
                  </span>
                </div>

                {/* Filter tags */}
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-[#123B4A] text-white font-medium">
                    Todas as contas
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[#5B6E79]">
                    Setor Comercial
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-[#E2E8F0] text-[#5B6E79]">
                    Setor Operacional
                  </span>
                </div>

                {/* Simulated transactions list */}
                <div className="space-y-2.5">
                  {[
                    {
                      desc: "Faturamento Contrato Enterprise - Alpha",
                      cat: "Receita Operacional",
                      date: "19/10 • 14:10",
                      val: "+ R$ 28.400,00",
                      type: "in",
                    },
                    {
                      desc: "Servidor Dedicado e Armazenamento AWS",
                      cat: "Tecnologia & Infra",
                      date: "19/10 • 10:20",
                      val: "- R$ 3.820,00",
                      type: "out",
                    },
                    {
                      desc: "Assinatura de Software de Automação",
                      cat: "Administrativo",
                      date: "18/10 • 16:45",
                      val: "- R$ 1.150,00",
                      type: "out",
                    },
                    {
                      desc: "Honorários Consultoria de Processos",
                      cat: "Serviços Terceirizados",
                      date: "17/10 • 11:30",
                      val: "- R$ 4.500,00",
                      type: "out",
                    },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#EAF2F4] text-xs hover:border-[#BDD8E0] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-1.5 rounded-md ${
                            row.type === "in"
                              ? "bg-[#EBF8F5] text-[#1F9686]"
                              : "bg-[#FBEBEB] text-[#E57373]"
                          }`}
                        >
                          {row.type === "in" ? (
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          ) : (
                            <ArrowDownRight className="w-3.5 h-3.5" />
                          )}
                        </div>
                        <div>
                          <div className="font-semibold text-[#1C252B]">{row.desc}</div>
                          <div className="text-[11px] text-[#5B6E79] flex items-center gap-2">
                            <span>{row.cat}</span>
                            <span>•</span>
                            <span>{row.date}</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`font-bold ${
                          row.type === "in" ? "text-[#209988]" : "text-[#1C252B]"
                        }`}
                      >
                        {row.val}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-lg bg-[#EAF2F4] border border-[#BDD8E0] text-xs text-[#123B4A] flex items-center justify-between">
                  <span>Saldo líquido conciliado do período:</span>
                  <span className="font-bold text-[#123B4A]">R$ 18.930,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Práticos */}
      <section className="py-20 bg-[#F8FAFB] border-t border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-[#123B4A]">
              Benefícios práticos no dia a dia da empresa
            </h2>
            <p className="text-sm text-[#5B6E79]">
              Menos tempo preenchendo relatórios, mais clareza para focar no crescimento da operação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Fechamento mensal sem dor de cabeça",
                desc: "Ao manter as despesas e receitas categorizadas diariamente, o encerramento contábil é realizado em minutos.",
              },
              {
                title: "Prevenção de duplicidade e cobranças indevidas",
                desc: "A conciliação rápida identifica pagamentos repetidos a fornecedores ou boletos emitidos sem contraprestação.",
              },
              {
                title: "Visão precisa por centro de custo",
                desc: "Saiba com exatidão se uma filial ou linha de serviço gera lucro real ou absorve recursos de outras áreas.",
              },
              {
                title: "Histórico completo e auditável",
                desc: "Consulte lançamentos de meses ou anos anteriores com filtros rápidos por razão social, CNPJ ou categoria.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-white border border-[#E2E8F0] space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#2CB6A3]" />
                  <h3 className="font-bold text-[#1C252B]">{item.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed pl-7">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
