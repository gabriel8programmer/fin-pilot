"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Wallet,
  TrendingUp,
  BarChart3,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
    setIsSolutionsDropdownOpen(false);
  }

  // Click outside to close desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Empresa", href: "/empresa" },
    { name: "Soluções", href: "/solucoes", hasDropdown: true },
    { name: "Tecnologia", href: "/tecnologia" },
    { name: "Conteúdos", href: "/conteudos" },
    { name: "Contato", href: "/contato" },
  ];

  const solutions = [
    {
      title: "Gestão Financeira",
      description: "Organização estruturada de receitas, despesas e centros de custo.",
      href: "/solucoes/gestao-financeira",
      icon: Wallet,
    },
    {
      title: "Fluxo de Caixa",
      description: "Acompanhamento diário e projeção antecipada de entradas e saídas.",
      href: "/solucoes/fluxo-de-caixa",
      icon: TrendingUp,
    },
    {
      title: "Indicadores",
      description: "Métricas consolidadas para fundamentar decisões com precisão.",
      href: "/solucoes/indicadores",
      icon: BarChart3,
    },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E2E8F0]"
          : "bg-[#F8FAFB]/90 backdrop-blur-xs border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-[#123B4A] focus:outline-hidden focus:ring-2 focus:ring-[#2CB6A3] rounded-sm group"
            aria-label="FinPilot - Início"
          >
            <div className="w-10 h-10 rounded-lg bg-[#123B4A] flex items-center justify-center text-white shadow-xs group-hover:bg-[#1E5A6A] transition-colors">
              {/* Modern geometric compass/pilot icon */}
              <svg
                width="22"
                height="22"
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
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-tight text-[#123B4A]">
                Fin<span className="text-[#2CB6A3]">Pilot</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#5B6E79] -mt-1">
                Tecnologia Financeira
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setIsSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setIsSolutionsDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen)
                      }
                      aria-expanded={isSolutionsDropdownOpen}
                      className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                        isLinkActive(link.href)
                          ? "text-[#123B4A] bg-[#EAF2F4]"
                          : "text-[#44545F] hover:text-[#123B4A] hover:bg-[#F3F8F9]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isSolutionsDropdownOpen ? "rotate-180 text-[#2CB6A3]" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Solutions Dropdown Menu */}
                    {isSolutionsDropdownOpen && (
                      <div className="absolute left-0 mt-1 w-80 rounded-xl bg-white border border-[#E2E8F0] shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="px-4 py-2 border-b border-[#F0F4F7]">
                          <Link
                            href="/solucoes"
                            className="text-xs font-bold uppercase tracking-wider text-[#123B4A] hover:text-[#2CB6A3] flex items-center justify-between group"
                          >
                            <span>Todas as Soluções</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#5B6E79] group-hover:translate-x-0.5 group-hover:text-[#2CB6A3] transition-all" />
                          </Link>
                        </div>
                        <div className="p-1 space-y-0.5">
                          {solutions.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F8FAFB] transition-colors group"
                              >
                                <div className="p-2 rounded-md bg-[#EAF2F4] text-[#123B4A] group-hover:bg-[#123B4A] group-hover:text-white transition-colors shrink-0">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-[#1C252B] group-hover:text-[#123B4A]">
                                    {item.title}
                                  </div>
                                  <p className="text-xs text-[#5B6E79] line-clamp-2 leading-relaxed">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                    isLinkActive(link.href)
                      ? "text-[#123B4A] bg-[#EAF2F4]"
                      : "text-[#44545F] hover:text-[#123B4A] hover:bg-[#F3F8F9]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-[#123B4A] hover:bg-[#1E5A6A] rounded-lg shadow-xs transition-all duration-150 focus:ring-2 focus:ring-[#2CB6A3] focus:ring-offset-2"
            >
              Solicitar demonstração
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-[#123B4A] hover:bg-[#EAF2F4] focus:outline-hidden focus:ring-2 focus:ring-[#2CB6A3]"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#E2E8F0] bg-white px-4 pt-2 pb-6 space-y-3 animate-in fade-in duration-200 shadow-md">
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              className={`px-3 py-2.5 rounded-lg text-sm font-semibold ${
                pathname === "/" ? "bg-[#EAF2F4] text-[#123B4A]" : "text-[#44545F]"
              }`}
            >
              Início
            </Link>
            <Link
              href="/empresa"
              className={`px-3 py-2.5 rounded-lg text-sm font-semibold ${
                pathname === "/empresa" ? "bg-[#EAF2F4] text-[#123B4A]" : "text-[#44545F]"
              }`}
            >
              Empresa
            </Link>

            {/* Mobile Soluções Accordion */}
            <div className="border-y border-[#F0F4F7] py-2 my-1">
              <Link
                href="/solucoes"
                className="px-3 py-1.5 block text-xs font-bold uppercase tracking-wider text-[#123B4A]"
              >
                Soluções FinPilot
              </Link>
              <div className="mt-1 pl-3 space-y-1">
                {solutions.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-[#44545F] hover:text-[#123B4A] hover:bg-[#F8FAFB] rounded-md"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2CB6A3]"></span>
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/tecnologia"
              className={`px-3 py-2.5 rounded-lg text-sm font-semibold ${
                pathname === "/tecnologia" ? "bg-[#EAF2F4] text-[#123B4A]" : "text-[#44545F]"
              }`}
            >
              Tecnologia
            </Link>
            <Link
              href="/conteudos"
              className={`px-3 py-2.5 rounded-lg text-sm font-semibold ${
                pathname.startsWith("/conteudos")
                  ? "bg-[#EAF2F4] text-[#123B4A]"
                  : "text-[#44545F]"
              }`}
            >
              Conteúdos
            </Link>
            <Link
              href="/contato"
              className={`px-3 py-2.5 rounded-lg text-sm font-semibold ${
                pathname === "/contato" ? "bg-[#EAF2F4] text-[#123B4A]" : "text-[#44545F]"
              }`}
            >
              Contato
            </Link>
          </nav>

          <div className="pt-2 border-t border-[#F0F4F7]">
            <Link
              href="/contato"
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-[#123B4A] hover:bg-[#1E5A6A] rounded-lg shadow-xs"
            >
              Solicitar demonstração
            </Link>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#5B6E79]">
              <ShieldCheck className="w-4 h-4 text-[#2CB6A3]" />
              <span>Ambiente institucional seguro e protegido</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
