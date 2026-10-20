"use client";

import { useState } from "react";
import { CheckCircle2, Send, Loader2, RefreshCw } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    tamanhoEmpresa: "1-10",
    mensagem: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay for realistic feedback
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      tamanhoEmpresa: "1-10",
      mensagem: "",
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 rounded-xl bg-white border border-[#2CB6A3]/40 shadow-xs text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-14 h-14 rounded-full bg-[#EBF8F5] text-[#1F9686] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8 text-[#2CB6A3]" />
        </div>

        <h3 className="text-xl font-bold text-[#123B4A]">
          Solicitação Recebida com Sucesso!
        </h3>

        <p className="text-sm text-[#5B6E79] max-w-md mx-auto leading-relaxed">
          Obrigado, <strong className="text-[#1C252B]">{formData.nome}</strong>.
          Nossa equipe entrará em contato pelo e-mail{" "}
          <strong className="text-[#1C252B]">{formData.email}</strong> em até 1 dia útil
          para apresentar a plataforma e alinhar o horário da demonstração.
        </p>

        <div className="pt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-[#123B4A] bg-[#EAF2F4] hover:bg-[#D3E5E8] transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Enviar outra solicitação</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Row 1: Nome & Empresa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="nome"
            className="block text-xs font-bold uppercase tracking-wider text-[#1C252B] mb-1.5"
          >
            Seu Nome <span className="text-[#E57373]">*</span>
          </label>
          <input
            type="text"
            id="nome"
            required
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            placeholder="Ex: Roberto Silva"
            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D3DDE2] text-sm text-[#1C252B] placeholder:text-[#82AFBC] focus:border-[#2CB6A3] focus:ring-1 focus:ring-[#2CB6A3] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="empresa"
            className="block text-xs font-bold uppercase tracking-wider text-[#1C252B] mb-1.5"
          >
            Nome da Empresa <span className="text-[#E57373]">*</span>
          </label>
          <input
            type="text"
            id="empresa"
            required
            value={formData.empresa}
            onChange={(e) =>
              setFormData({ ...formData, empresa: e.target.value })
            }
            placeholder="Ex: Alfa Soluções Ltda"
            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D3DDE2] text-sm text-[#1C252B] placeholder:text-[#82AFBC] focus:border-[#2CB6A3] focus:ring-1 focus:ring-[#2CB6A3] transition-colors"
          />
        </div>
      </div>

      {/* Row 2: E-mail Corporativo & Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-[#1C252B] mb-1.5"
          >
            E-mail Corporativo <span className="text-[#E57373]">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="roberto@suaempresa.com.br"
            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D3DDE2] text-sm text-[#1C252B] placeholder:text-[#82AFBC] focus:border-[#2CB6A3] focus:ring-1 focus:ring-[#2CB6A3] transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="telefone"
            className="block text-xs font-bold uppercase tracking-wider text-[#1C252B] mb-1.5"
          >
            Telefone / WhatsApp <span className="text-[#E57373]">*</span>
          </label>
          <input
            type="tel"
            id="telefone"
            required
            value={formData.telefone}
            onChange={(e) =>
              setFormData({ ...formData, telefone: e.target.value })
            }
            placeholder="(11) 98765-4321"
            className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D3DDE2] text-sm text-[#1C252B] placeholder:text-[#82AFBC] focus:border-[#2CB6A3] focus:ring-1 focus:ring-[#2CB6A3] transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Tamanho da Empresa */}
      <div>
        <label
          htmlFor="tamanhoEmpresa"
          className="block text-xs font-bold uppercase tracking-wider text-[#1C252B] mb-1.5"
        >
          Porte da Empresa (Colaboradores)
        </label>
        <select
          id="tamanhoEmpresa"
          value={formData.tamanhoEmpresa}
          onChange={(e) =>
            setFormData({ ...formData, tamanhoEmpresa: e.target.value })
          }
          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D3DDE2] text-sm text-[#1C252B] focus:border-[#2CB6A3] focus:ring-1 focus:ring-[#2CB6A3] transition-colors"
        >
          <option value="1-5">1 a 5 colaboradores</option>
          <option value="6-20">6 a 20 colaboradores</option>
          <option value="21-50">21 a 50 colaboradores</option>
          <option value="51-150">51 a 150 colaboradores</option>
          <option value="150+">Mais de 150 colaboradores</option>
        </select>
      </div>

      {/* Row 4: Mensagem / Dores Atuais */}
      <div>
        <label
          htmlFor="mensagem"
          className="block text-xs font-bold uppercase tracking-wider text-[#1C252B] mb-1.5"
        >
          Como é a gestão financeira hoje? (Opcional)
        </label>
        <textarea
          id="mensagem"
          rows={3}
          value={formData.mensagem}
          onChange={(e) =>
            setFormData({ ...formData, mensagem: e.target.value })
          }
          placeholder="Ex: Utilizamos planilhas e temos dificuldade de acompanhar o fluxo de caixa futuro..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#D3DDE2] text-sm text-[#1C252B] placeholder:text-[#82AFBC] focus:border-[#2CB6A3] focus:ring-1 focus:ring-[#2CB6A3] transition-colors resize-none"
        ></textarea>
      </div>

      {/* CTA Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-bold text-white bg-[#123B4A] hover:bg-[#1E5A6A] active:bg-[#0D2D38] transition-colors shadow-xs disabled:opacity-70"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Processando solicitação...</span>
          </>
        ) : (
          <>
            <span>Solicitar demonstração</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-[#5B6E79] text-center pt-1">
        Não enviamos spam. Suas informações são protegidas e tratadas com sigilo.
      </p>
    </form>
  );
}
