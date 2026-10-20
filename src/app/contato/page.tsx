import type { Metadata } from "next";
import { Mail, Phone, Clock, MapPin, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contato & Demonstração | FinPilot",
  description:
    "Solicite uma demonstração da plataforma FinPilot e converse com nossos especialistas sobre como organizar o fluxo financeiro da sua empresa.",
  openGraph: {
    title: "Contato & Demonstração | FinPilot",
    description:
      "Agende uma demonstração prática e veja a FinPilot em ação com os dados da sua empresa.",
  },
};

export default function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#F0F5F7] to-[#F8FAFB] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF2F4] border border-[#BDD8E0] text-[#123B4A] text-xs font-semibold">
              <Phone className="w-3.5 h-3.5 text-[#2CB6A3]" />
              <span>Contato & Agendamento Comercial</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#123B4A] tracking-tight leading-[1.15]">
              Vamos conversar sobre a gestão financeira da sua empresa?
            </h1>

            <p className="text-lg text-[#5B6E79] leading-relaxed">
              Preencha o formulário para solicitar uma demonstração personalizada
              ou entre em contato pelos nossos canais institucionais.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section: Form + Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-[#F8FAFB] p-6 sm:p-9 rounded-2xl border border-[#E2E8F0] shadow-2xs">
              <div className="space-y-2 mb-6">
                <h2 className="text-2xl font-bold text-[#123B4A]">
                  Solicitar Demonstração
                </h2>
                <p className="text-xs sm:text-sm text-[#5B6E79]">
                  Apresentação individual de 25 minutos com um de nossos consultores de produto.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right Column: Contact Details & Service Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-2xl bg-white border border-[#D3DDE2] shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#123B4A] pb-3 border-b border-[#E2E8F0]">
                  Canais de Atendimento
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#EAF2F4] text-[#123B4A] shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-[#2CB6A3]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#1C252B] block">
                        E-mail Institucional
                      </span>
                      <span className="text-[#5B6E79] text-xs">
                        contato@finpilot.exemplo.com.br
                      </span>
                      <span className="text-[11px] text-[#82AFBC] block mt-0.5">
                        (Canal fictício para fins de portfólio)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#EAF2F4] text-[#123B4A] shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-[#2CB6A3]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#1C252B] block">
                        Central Telefônica
                      </span>
                      <span className="text-[#5B6E79] text-xs">
                        (11) 4003-0980 (Demonstrativo)
                      </span>
                      <span className="text-[11px] text-[#82AFBC] block mt-0.5">
                        Ligação local para capitais e regiões metropolitanas
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#EAF2F4] text-[#123B4A] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-[#2CB6A3]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#1C252B] block">
                        Horário de Atendimento
                      </span>
                      <span className="text-[#5B6E79] text-xs">
                        Segunda a Sexta-feira: 09h00 às 18h00
                      </span>
                      <span className="text-[11px] text-[#82AFBC] block mt-0.5">
                        Exceto feriados nacionais
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#EAF2F4] text-[#123B4A] shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-[#2CB6A3]" />
                    </div>
                    <div>
                      <span className="font-semibold text-[#1C252B] block">
                        Sede Administrativa
                      </span>
                      <span className="text-[#5B6E79] text-xs">
                        Av. Paulista, 1000 - Bela Vista, São Paulo - SP
                      </span>
                      <span className="text-[11px] text-[#82AFBC] block mt-0.5">
                        Atendimento presencial mediante agendamento prévio
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informative Security Card */}
              <div className="p-6 rounded-2xl bg-[#EAF2F4] border border-[#BDD8E0] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#123B4A]">
                  <ShieldCheck className="w-4 h-4 text-[#2CB6A3]" />
                  <span>Privacidade e Segurança</span>
                </div>
                <p className="text-xs text-[#5B6E79] leading-relaxed">
                  Os dados informados no formulário são utilizados estritamente para
                  o retorno de contato comercial. Nunca compartilhamos dados de contato
                  com terceiros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
