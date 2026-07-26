import React from 'react';
import { BookOpen, ShieldCheck, Zap } from 'lucide-react';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-sm border-b border-[#E8DFC9]">
      {/* Top Banner Alert */}
      <div className="bg-[#2D3B2D] text-[#FAF7F2] text-xs md:text-sm py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 sm:gap-6 flex-wrap">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#C89D3C]" />
          Garantia Incondicional de 7 Dias
        </span>
        <span className="hidden sm:inline text-[#3D523A]">•</span>
        <span className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-[#C89D3C]" />
          Acesso Digital Imediato
        </span>
        <span className="hidden sm:inline text-[#3D523A]">•</span>
        <span className="text-[#E8DFC9]">100% Seguro</span>
      </div>

      {/* Main Brand Navbar */}
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-[#F2EBDC] border border-[#C89D3C]/40 flex items-center justify-center text-[#2D3B2D] shadow-sm group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5 text-[#3D523A]" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#8B5A2B] font-semibold">
              Receitas do Seu Ângelo
            </span>
            <span className="block text-lg font-bold font-serif text-[#2D3B2D] leading-tight">
              Raízes do Seu Ângelo
            </span>
          </div>
        </a>

        <div className="flex items-center gap-4">
          <span className="hidden md:block text-xs text-[#5C4033] bg-[#F4EFE6] px-3 py-1.5 rounded-full border border-[#E8DFC9]">
            Oferta Especial: <strong className="text-[#2D3B2D]">R$ 37,90</strong>
          </span>
          <button
            onClick={onOpenCheckout}
            className="bg-[#3D523A] hover:bg-[#2D3B2D] text-[#FAF7F2] text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all hover:shadow-md cursor-pointer border border-[#2D3B2D]"
          >
            Garantir eBook
          </button>
        </div>
      </div>
    </header>
  );
};
