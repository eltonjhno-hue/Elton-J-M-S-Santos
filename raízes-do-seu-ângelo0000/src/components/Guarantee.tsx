import React from 'react';
import { ShieldCheck, Award, Lock, RefreshCw } from 'lucide-react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F4EFE6] border-y border-[#E8DFC9] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="bg-[#FAF7F2] rounded-3xl p-8 sm:p-12 border-2 border-[#C89D3C]/40 shadow-lg relative flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          
          {/* Vintage Seal Badge */}
          <div className="shrink-0 relative">
            <div className="w-32 h-32 rounded-full bg-[#2D3B2D] border-4 border-[#C89D3C] flex flex-col items-center justify-center text-[#FAF7F2] shadow-xl p-3 relative">
              <ShieldCheck className="w-8 h-8 text-[#C89D3C] mb-0.5" />
              <span className="text-xl font-serif font-extrabold leading-none text-[#FAF7F2]">7 DIAS</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#C89D3C] mt-0.5">
                DE GARANTIA
              </span>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#C89D3C] text-[#1F2B1F] p-1.5 rounded-full shadow-md">
              <Award className="w-5 h-5" />
            </div>
          </div>

          {/* Guarantee Text */}
          <div className="flex-1 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#3D523A] bg-[#F2EBDC] px-3 py-1 rounded-full border border-[#D8CFC0]">
              <Lock className="w-3.5 h-3.5" />
              <span>Risco Zero Para Você</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D3B2D]">
              Garantia de 7 dias
            </h2>

            <p className="text-sm sm:text-base text-[#4A423A] leading-relaxed">
              Você poderá conhecer todo o conteúdo do eBook com tranquilidade. Caso o material não atenda às suas expectativas, poderá solicitar o reembolso integral dentro do prazo de 7 dias, conforme a política da plataforma.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs font-semibold text-[#8B5A2B]">
              <span className="flex items-center gap-1">
                <RefreshCw className="w-4 h-4 text-[#3D523A]" />
                Reembolso sem burocracia
              </span>
              <span>•</span>
              <span>Processamento 100% Seguro</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
