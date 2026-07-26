import React from 'react';
import { OFFER_DETAILS } from '../data/content';
import { Check, ShieldCheck, Lock, Sparkles, Zap, ArrowRight, BookOpen } from 'lucide-react';
import coverImg from '../assets/images/ebook_cover_1785090981371.jpg';

interface OfferSectionProps {
  onOpenCheckout: () => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#F2EBDC] text-[#8B5A2B] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-[#E8DFC9]">
            <Sparkles className="w-4 h-4 text-[#C89D3C]" />
            <span>Oferta Especial de Lançamento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D3B2D] mb-3">
            Receitas do Seu Ângelo
          </h2>

          <p className="text-base text-[#5C4033]">
            Adquira o eBook completo com todos os conteúdos organizados para consulta vitalícia.
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="bg-[#FAF7F2] rounded-3xl border-2 border-[#C89D3C] shadow-2xl overflow-hidden relative">
          
          {/* Top Decorative Banner */}
          <div className="bg-[#2D3B2D] text-[#FAF7F2] py-3 px-6 text-center text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-[#C89D3C]" />
            <span>Condição Exclusiva de Lançamento • Acesso Vitalício</span>
          </div>

          <div className="p-6 sm:p-10 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Book Cover Preview */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden border border-[#D8CFC0] shadow-xl">
                <img
                  src={coverImg}
                  alt="Raízes do Seu Ângelo - eBook Completo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="mt-3 text-xs text-[#8B5A2B] font-semibold flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-[#3D523A]" />
                Formato eBook (PDF de Alta Qualidade)
              </span>
            </div>

            {/* Right: Included List & Pricing */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D3B2D] mb-2">
                  Você receberá:
                </h3>

                <ul className="space-y-3 mb-8">
                  {OFFER_DETAILS.itemsIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-[#2C2825] font-medium">
                      <div className="w-5 h-5 rounded-full bg-[#3D523A] text-[#FAF7F2] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Box & CTA */}
              <div className="bg-[#F4EFE6] p-6 rounded-2xl border border-[#E8DFC9] flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#8B5A2B]">
                    Hoje Por Apenas
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl sm:text-5xl font-serif font-extrabold text-[#2D3B2D]">
                      R$ 37,90
                    </span>
                    <span className="text-xs text-[#6B5E52] font-medium">
                      (Valor Promocional)
                    </span>
                  </div>
                </div>

                <div className="text-xs text-[#5C4033] font-medium space-y-1">
                  <p>✔ Pagamento único.</p>
                  <p>✔ Acesso imediato no e-mail.</p>
                  <p>✔ Leitura para toda a vida.</p>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full bg-[#2D3B2D] hover:bg-[#3D523A] text-[#FAF7F2] font-bold text-lg py-4 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 border border-[#C89D3C]/40 cursor-pointer active:scale-98"
                >
                  <span>QUERO GARANTIR MEU EBOOK</span>
                  <ArrowRight className="w-5 h-5 text-[#C89D3C]" />
                </button>

                {/* Micro Badges */}
                <div className="flex items-center justify-between text-[11px] text-[#6B5E52] font-medium pt-2 border-t border-[#E8DFC9]">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-[#3D523A]" /> Pix / Cartão / Boleto
                  </span>
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#3D523A]" /> 7 dias de garantia
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
