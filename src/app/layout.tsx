import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://finpilot.com.br"),
  title: {
    default: "FinPilot | Tecnologia para Gestão Financeira Empresarial",
    template: "%s | FinPilot",
  },
  description:
    "Soluções digitais para pequenas e médias empresas acompanharem fluxo de caixa, indicadores e movimentações financeiras com mais clareza e previsibilidade.",
  keywords: [
    "gestão financeira empresarial",
    "fluxo de caixa PME",
    "indicadores financeiros",
    "controle de contas a pagar e receber",
    "tecnologia financeira",
    "FinPilot",
  ],
  authors: [{ name: "FinPilot Tecnologia" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://finpilot.com.br",
    siteName: "FinPilot",
    title: "FinPilot | Tecnologia para Gestão Financeira Empresarial",
    description:
      "Plataforma e soluções digitais para ajudar PMEs a acompanhar receitas, despesas e fluxo de caixa com inteligência e segurança.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFB] text-[#1C252B] selection:bg-[#EAF2F4] selection:text-[#123B4A]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
