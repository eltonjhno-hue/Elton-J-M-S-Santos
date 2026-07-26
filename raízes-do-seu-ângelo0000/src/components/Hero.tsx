import React from 'react';
import { HERO_CONTENT } from '../data/content';
import { CheckCircle2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

import heroImg from '../assets/images/seu_angelo_hero_1785090965404.jpg';
import coverImg from '../assets/images/ebook_cover_1785090981371.jpg';

interface HeroProps {
  onOpenCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2]">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3D523A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C89D3C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Copywriting & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#F2EBDC] border border-[#C89D3C]/40 text-[#5C4033] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold w-fit shadow-xs">
              <Sparkles className="w-4 h-4 text-[#C89D3C]" />
              <span>Saberes Tradicionais & Sabedoria Natural</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D3B2D] leading-[1.15] tracking-tight">
              {HERO_CONTENT.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#4A423A] leading-relaxed font-normal">
              {HERO_CONTENT.subheadline}
            </p>

            {/* Checklist items */}
            <div className="bg-[#FAF7F2]/80 backdrop-blur-xs p-5 rounded-2xl border border-[#E8DFC9] shadow-xs">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm sm:text-base font-medium text-[#2C2825]">
                {HERO_CONTENT.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-[#3D523A] shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Box & CTA */}
            <div className="flex flex-col gap-3 mt-2">
              <div className="flex items-baseline gap-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8B5A2B]">
                  Por Apenas
                </span>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-[#2D3B2D]">
                  R$ 37,90
                </span>
                <span className="text-xs text-[#6B5E52] line-through">
                  R$ 97,00
                </span>
              </div>

              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto bg-[#2D3B2D] hover:bg-[#3D523A] text-[#FAF7F2] font-semibold text-base sm:text-lg px-8 py-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 border border-[#C89D3C]/30 cursor-pointer group"
              >
                <span>{HERO_CONTENT.ctaButtonText}</span>
                <ArrowRight className="w-5 h-5 text-[#C89D3C] group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#6B5E52] mt-1 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#3D523A]" />
                <span>{HERO_CONTENT.guaranteeMicrocopy}</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Visual Showcase */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-md">
              {/* Outer Glow / Halo */}
              <div className="absolute inset-0 bg-[#3D523A]/10 rounded-3xl transform rotate-2 scale-105 blur-lg" />
              
              {/* Main eBook Mockup Card */}
              <div className="relative bg-[#FAF7F2] p-3 sm:p-4 rounded-3xl border border-[#E8DFC9] shadow-xl overflow-hidden group">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-[#D8CFC0]">
                  <img
                    src={coverImg}
                    alt="Capa do eBook Raízes do Seu Ângelo"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Badge Overlay */}
                  <div className="absolute top-3 right-3 bg-[#2D3B2D]/90 backdrop-blur-md text-[#FAF7F2] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#C89D3C]/40 shadow-sm">
                    Edição Oficial
                  </div>
                </div>

                {/* Floating Portrait Badge of Seu Ângelo */}
                <div className="mt-3 flex items-center gap-3 p-2.5 bg-[#F4EFE6] rounded-xl border border-[#E8DFC9]">
                  <img
                    src={heroImg}
                    alt="Seu Ângelo Martins"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#C89D3C]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <span className="block text-xs font-semibold text-[#8B5A2B]">Autor Oficial</span>
                    <span className="block text-sm font-bold font-serif text-[#2D3B2D]">Seu Ângelo Martins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
