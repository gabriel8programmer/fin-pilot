import type { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  ShieldCheck,
  RefreshCw,
  Cpu,
  Lock,
  ArrowRight,
  Database,
  Code2,
} from "lucide-react";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Arquitetura & Tecnologia | FinPilot",
  description:
    "Conheça a tecnologia por trás da FinPilot: infraestrutura web em nuvem, dados centralizados, APIs modernas e segurança contínua para empresas.",
  openGraph: {
    title: "Arquitetura & Tecnologia | FinPilot",
    description:
      "Tecnologia web moderna, integração por APIs e boas práticas de segurança para uma rotina financeira estável e confiável.",
  },
};

export default function TecnologiaPage() {
  const techPillars = [
    {
      icon: Cloud,
      title: "Plataforma 100% Web em Nuvem",
      description:
        "Acesso contínuo a partir de qualquer navegador moderno, sem necessidade de instalação de servidores locais ou manutenção de arquivos no computador.",
    },
    {
      icon: Database,
      title: "Dados Centralizados e Sincronizados",
      description:
        "Toda a equipe financeira compartilha a mesma base de informações em tempo real, eliminando divergências de versões e retrabalho de digitação.",
    },
    {
      icon: ShieldCheck,
      title: "Boas Práticas de Segurança e Proteção",
      description:
        "Comunicação criptografada de ponta a ponta (HTTPS/TLS), backups programados e infraestrutura resiliente para proteger as informações da empresa.",
    },
    {
      icon: Lock,
      title: "Controle Rigoroso de Acessos",
      description:
        "Defina permissões personalizadas para sócios, analistas administrativos e contadores externos, restringindo a visualização de dados confidenciais.",
    },
    {
      icon: Code2,
      title: "Integração por APIs e Formatos Abertos",
      description:
        "Importação ágil de arquivos bancários (OFX, CSV) e arquitetura preparada para conectar rotinas de faturamento e sistemas contábeis.",
    },
    {
      icon: RefreshCw,
      title: "Atualizações Contínuas e Transparentes",
      description:
        "Melhorias de desempenho, correções e novos recursos são disponibilizados automaticamente sem paradas longas ou custos extras de licença.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F0F5F7] to-[#F8FAFB] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2F4] border border-[#BDD8E0] text-[#123B4A] text-xs font-semibold">
              <Cpu className="w-3.5 h-3.5 text-[#2CB6A3]" />
              <span>Infraestrutura & Engenharia</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#123B4A] tracking-tight leading-[1.15]">
              Tecnologia moderna a serviço da estabilidade do seu negócio.
            </h1>

            <p className="text-lg text-[#5B6E79] leading-relaxed">
              Desenvolvemos a FinPilot com base em padrões consolidados da web
              moderna: sistemas leves, bancos de dados protegidos e rotinas de
              automação pensadas para a rotina diária de PMEs.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#123B4A] text-white hover:bg-[#1E5A6A] transition-colors shadow-xs"
              >
                <span>Solicitar demonstração técnica</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solucoes"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white text-[#123B4A] border border-[#D3DDE2] hover:bg-[#F0F5F7] transition-colors"
              >
                Conhecer soluções
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pilares Tecnológicos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B4A] tracking-tight">
              Os pilares técnicos da nossa plataforma
            </h2>
            <p className="text-base text-[#5B6E79]">
              Confiabilidade operacional sem sobrecarregar sua equipe de TI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F8FAFB] border border-[#E2E8F0] hover:border-[#BDD8E0] hover:bg-white hover:shadow-xs transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EAF2F4] text-[#123B4A] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#2CB6A3]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1C252B]">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed">
                    {p.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como funciona a Arquitetura em Nuvem */}
      <section className="py-20 bg-[#F0F5F7]/60 border-y border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#123B4A]">
              Arquitetura em Camadas para Máxima Fluidez
            </h2>
            <p className="text-sm text-[#5B6E79]">
              Uma visão simplificada de como processamos dados, geramos relatórios e protegemos acessos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Camada 1 */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-mono font-bold text-[#2CB6A3] uppercase tracking-wider block">
                Camada 01 • Apresentação
              </span>
              <h3 className="text-base font-bold text-[#123B4A]">Interface Web Responsiva</h3>
              <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed">
                Desenvolvida com tecnologias de renderização rápida, permitindo navegação
                instantânea em telas de computadores, tablets ou celulares.
              </p>
            </div>

            {/* Camada 2 */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-mono font-bold text-[#2CB6A3] uppercase tracking-wider block">
                Camada 02 • Regras de Negócio
              </span>
              <h3 className="text-base font-bold text-[#123B4A]">Motor de Cálculo Financeiro</h3>
              <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed">
                Algoritmos que atualizam previsões de caixa, calculam margens operacionais e
                detectam incongruências de lançamentos em milissegundos.
              </p>
            </div>

            {/* Camada 3 */}
            <div className="p-6 rounded-xl bg-white border border-[#E2E8F0] space-y-3">
              <span className="text-xs font-mono font-bold text-[#2CB6A3] uppercase tracking-wider block">
                Camada 03 • Armazenamento
              </span>
              <h3 className="text-base font-bold text-[#123B4A]">Bancos de Dados Protegidos</h3>
              <p className="text-xs sm:text-sm text-[#5B6E79] leading-relaxed">
                Infraestrutura em nuvem resiliente com réplicas e backups diários para
                garantir que nenhum lançamento histórico seja perdido.
              </p>
            </div>
          </div>

          {/* Segurança Transparente */}
          <div className="p-6 rounded-2xl bg-[#123B4A] text-white border border-[#194D60] space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2CB6A3]">
              <ShieldCheck className="w-4 h-4 text-[#2CB6A3]" />
              <span>Compromisso Ético e Segurança</span>
            </div>
            <h3 className="text-xl font-bold">
              Proteção responsável de dados financeiros empresariais
            </h3>
            <p className="text-xs sm:text-sm text-[#BDD8E0] leading-relaxed">
              Tratamos os dados de receitas e despesas da sua empresa com confidencialidade
              estrita. Aplicamos políticas de menor privilégio de acesso, isolamento de instâncias
              e transmissões criptografadas em todos os níveis da plataforma.
            </p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
