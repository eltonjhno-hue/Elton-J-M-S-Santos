import React from 'react';
import { TARGET_AUDIENCE_POINTS } from '../data/content';
import { CheckCircle, HeartHandshake, Compass, Library, Users, ArrowRight } from 'lucide-react';

interface TargetAudienceProps {
  onOpenCheckout: () => void;
}

export const TargetAudience: React.FC<TargetAudienceProps> = ({ onOpenCheckout }) => {
  const icons = [
    <Library className="w-6 h-6 text-[#C89D3C]" />,
    <Compass className="w-6 h-6 text-[#3D523A]" />,
    <CheckCircle className="w-6 h-6 text-[#8B5A2B]" />,
    <Users className="w-6 h-6 text-[#2D3B2D]" />
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#F2EBDC] text-[#8B5A2B] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-[#E8DFC9]">
            <HeartHandshake className="w-4 h-4 text-[#C89D3C]" />
            <span>Para Quem Foi Preparado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D3B2D]">
            Este livro é para você que...
          </h2>
        </div>

        {/* 4 Value Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCE_POINTS.map((point, index) => (
            <div
              key={index}
              className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#E8DFC9] flex flex-col justify-between hover:border-[#C89D3C] hover:shadow-md transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8DFC9] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-2xs">
                  {icons[index]}
                </div>

                <h3 className="font-serif font-bold text-xl text-[#2D3B2D] mb-2 leading-snug">
                  {point.title}
                </h3>

                <p className="text-sm text-[#5C4033] leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DFC9]/80 flex items-center gap-1 text-xs font-bold text-[#3D523A] uppercase tracking-wider">
                <span>Feito para você</span>
                <CheckCircle className="w-4 h-4 text-[#3D523A]" />
              </div>
            </div>
          ))}
        </div>

        {/* Mid-page CTA Banner */}
        <div className="mt-14 bg-[#2D3B2D] text-[#FAF7F2] rounded-3xl p-8 sm:p-10 border border-[#3D523A] text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-[#FAF7F2]">
              Preserve a sabedoria natural no seu dia a dia
            </h3>
            <p className="text-sm sm:text-base text-[#E8DFC9] max-w-2xl mx-auto mb-6">
              Acesse agora mesmo o eBook completo e tenha em mãos um guia tradicional e seguro de consulta rápida.
            </p>
            <button
              onClick={onOpenCheckout}
              className="bg-[#C89D3C] hover:bg-[#D4AF37] text-[#1F2B1F] font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer border border-[#FAF7F2]/20 hover:scale-102"
            >
              <span>Garantir Meu eBook por R$ 37,90</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
