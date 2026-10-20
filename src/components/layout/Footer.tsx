import Link from "next/link";
import { Shield, Mail, Phone, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0E2933] text-[#BDD8E0] border-t border-[#194D60] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#194D60]/60">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-white focus:outline-hidden focus:ring-2 focus:ring-[#2CB6A3] rounded-sm"
              aria-label="FinPilot - Início"
            >
              <div className="w-9 h-9 rounded-lg bg-[#1E5A6A] flex items-center justify-center text-white">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                  aria-hidden="true"
                >
                  <path
                    d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"
                    stroke="#2CB6A3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
                </svg>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">
                Fin<span className="text-[#2CB6A3]">Pilot</span>
              </span>
            </Link>

            <p className="text-sm text-[#BDD8E0] leading-relaxed max-w-sm">
              Plataforma e soluções digitais para ajudar pequenas e médias empresas
              a acompanhar receitas, despesas, fluxo de caixa e indicadores
              financeiros com mais clareza e previsibilidade.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#82AFBC]">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#2CB6A3]" />
                <span>contato@finpilot.exemplo.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#2CB6A3]" />
                <span>(11) 4003-0980 (fictício)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#2CB6A3]" />
                <span>Segunda a sexta, das 09h às 18h</span>
              </div>
            </div>
          </div>

          {/* Coluna 1: Empresa */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Empresa
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/empresa"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Sobre a FinPilot</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/tecnologia"
                  className="hover:text-white transition-colors"
                >
                  Arquitetura & Tecnologia
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-white transition-colors"
                >
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 2: Soluções */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Soluções
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/solucoes/gestao-financeira"
                  className="hover:text-white transition-colors"
                >
                  Gestão Financeira
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes/fluxo-de-caixa"
                  className="hover:text-white transition-colors"
                >
                  Fluxo de Caixa
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes/indicadores"
                  className="hover:text-white transition-colors"
                >
                  Indicadores Financeiros
                </Link>
              </li>
              <li>
                <Link
                  href="/solucoes"
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#2CB6A3]"
                >
                  <span>Ver todas as soluções</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Conteúdos & Contato */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Conteúdos & Suporte
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/conteudos"
                  className="hover:text-white transition-colors"
                >
                  Artigos & Guias
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-white transition-colors"
                >
                  Solicitar Demonstração
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="hover:text-white transition-colors"
                >
                  Central de Atendimento
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Mandatory Portfolio Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#82AFBC]">
          <div className="flex items-center gap-2 text-center md:text-left">
            <Shield className="w-4 h-4 text-[#2CB6A3] shrink-0" />
            <p>
              © 2026 FinPilot Tecnologia Financeira Ltda.{" "}
              <strong className="text-white font-medium">
                Projeto fictício desenvolvido para fins de portfólio.
              </strong>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/empresa"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Termos de Uso (Demonstrativo)
            </Link>
            <Link
              href="/empresa"
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacidade de Dados
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
