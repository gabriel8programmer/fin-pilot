import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-[#F8FAFB]">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#EAF2F4] text-[#123B4A] mx-auto flex items-center justify-center border border-[#BDD8E0]">
          <Compass className="w-8 h-8 text-[#2CB6A3]" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-sm font-bold text-[#2CB6A3] uppercase tracking-widest">
            Erro 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#123B4A] tracking-tight">
            Esta página não foi encontrada.
          </h1>
          <p className="text-sm text-[#5B6E79] leading-relaxed">
            O endereço acessado pode ter sido alterado ou não existe na estrutura da FinPilot.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-bold bg-[#123B4A] text-white hover:bg-[#1E5A6A] transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para o início</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
