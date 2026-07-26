import React from 'react';
import { Heart, ShieldCheck, BookOpen } from 'lucide-react';
import heroImg from '../assets/images/seu_angelo_hero_1785090965404.jpg';

export const FinalMessageFooter: React.FC = () => {
  return (
    <footer className="bg-[#1F2B1F] text-[#FAF7F2] pt-16 pb-12 relative overflow-hidden border-t border-[#3D523A]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        
        {/* Author Avatar */}
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#C89D3C] mx-auto mb-6 shadow-xl">
          <img
            src={heroImg}
            alt="Seu Ângelo Martins"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#FAF7F2] mb-6">
          Mensagem final
        </h2>

        {/* Closing Note Box */}
        <div className="bg-[#2D3B2D]/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#3D523A] max-w-2xl mx-auto mb-12 shadow-lg">
          <p className="text-base sm:text-lg text-[#E8DFC9] leading-relaxed font-serif italic mb-4">
            "Muito obrigado por dedicar um pouco do seu tempo para conhecer este trabalho. Meu desejo é que estas páginas ajudem a manter vivo um conhecimento que foi passado de geração em geração e que merece continuar sendo lembrado. Espero que este livro faça parte da sua casa por muitos anos."
          </p>

          <div className="pt-4 border-t border-[#3D523A] flex flex-col items-center">
            <span className="text-sm text-[#C89D3C] font-serif font-bold">
              Um grande abraço,
            </span>
            <span className="text-lg font-bold font-serif text-[#FAF7F2] mt-0.5">
              Seu Ângelo Martins
            </span>
            <span className="text-xs text-[#A89F91]">Receitas do Seu Ângelo</span>
          </div>
        </div>

        {/* Footer Badges & Copyright */}
        <div className="pt-8 border-t border-[#3D523A]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89F91]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#C89D3C]" />
            <span className="font-semibold text-[#FAF7F2]">Raízes do Seu Ângelo</span>
          </div>

          <div className="flex items-center gap-1 text-[#E8DFC9]">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-[#A64B2A] fill-current" />
            <span>e respeito à tradição</span>
          </div>

          <div className="flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-[#3D523A]" />
            <span>Plataforma Segura</span>
          </div>
        </div>

        <div className="mt-6 text-[11px] text-[#A89F91]">
          © {new Date().getFullYear()} Receitas do Seu Ângelo. Todos os direitos reservados. Raízes do Seu Ângelo.
        </div>

      </div>
    </footer>
  );
};
