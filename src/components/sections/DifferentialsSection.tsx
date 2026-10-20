import {
  Layers,
  LayoutTemplate,
  FolderKanban,
  Gauge,
  Cloud,
  Network,
} from "lucide-react";

export default function DifferentialsSection() {
  const differentials = [
    {
      icon: Layers,
      title: "Visão consolidada",
      description:
        "Reúna diferentes contas bancárias, cartões empresariais e centros de custo em uma única tela de tesouraria.",
    },
    {
      icon: LayoutTemplate,
      title: "Interface simples e direta",
      description:
        "Desenvolvida para gestores e equipes administrativas, sem telas poluídas ou termos contábeis excessivamente densos.",
    },
    {
      icon: FolderKanban,
      title: "Informações organizadas",
      description:
        "Categorização padronizada que elimina lançamentos duplicados e desvios não catalogados.",
    },
    {
      icon: Gauge,
      title: "Indicadores claros de negócio",
      description:
        "Métricas de lucratividade, margem, inadimplência e liquidez calculadas automaticamente a cada lançamento.",
    },
    {
      icon: Cloud,
      title: "Acesso 100% online e seguro",
      description:
        "Plataforma em nuvem acessível de qualquer dispositivo com backups automatizados e controle por perfis de acesso.",
    },
    {
      icon: Network,
      title: "Integração facilitada por APIs",
      description:
        "Conecte fluxos de faturamento, conciliação de arquivos OFX/CSV e compartilhamento com seu escritório contábil.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF2F4] text-[#123B4A] text-xs font-bold uppercase tracking-wider">
            <span>Diferenciais da Plataforma</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B4A] tracking-tight leading-tight">
            Tecnologia desenhada para a realidade prática de pequenas e médias empresas.
          </h2>

          <p className="text-base sm:text-lg text-[#5B6E79] leading-relaxed">
            Menos complexidade burocrática, mais clareza para planejar o futuro da sua operação com segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#F8FAFB] border border-[#E2E8F0] hover:border-[#BDD8E0] hover:bg-white hover:shadow-sm transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#D3DDE2] text-[#123B4A] flex items-center justify-center mb-4 group-hover:bg-[#123B4A] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 text-[#2CB6A3] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#1C252B] mb-2 group-hover:text-[#123B4A] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#5B6E79] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
