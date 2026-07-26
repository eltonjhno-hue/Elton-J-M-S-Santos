import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface FloatingCtaBarProps {
  onOpenCheckout: () => void;
}

export const FloatingCtaBar: React.FC<FloatingCtaBarProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating bar after scrolling 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 p-3 sm:p-4 bg-[#FAF7F2]/95 backdrop-blur-md border-t border-[#E8DFC9] shadow-2xl transition-all duration-300 transform translate-y-0 animate-slideUp">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
        
        <div className="hidden sm:flex flex-col">
          <span className="text-xs uppercase font-bold text-[#8B5A2B] tracking-wider">
            Raízes do Seu Ângelo
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-serif font-bold text-[#2D3B2D]">R$ 37,90</span>
            <span className="text-[11px] text-[#6B5E52]">Acesso Imediato</span>
          </div>
        </div>

        <div className="flex-1 sm:flex-none flex items-center gap-3">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto bg-[#2D3B2D] hover:bg-[#3D523A] text-[#FAF7F2] font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 border border-[#C89D3C]/30 cursor-pointer active:scale-95"
          >
            <span>QUERO RECEBER MEU EBOOK AGORA</span>
            <ArrowRight className="w-4 h-4 text-[#C89D3C]" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-1.5 text-xs text-[#5C4033] font-medium">
          <ShieldCheck className="w-4 h-4 text-[#3D523A]" />
          <span>Garantia de 7 dias</span>
        </div>

      </div>
    </div>
  );
};
