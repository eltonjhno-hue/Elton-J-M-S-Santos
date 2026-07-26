import React, { useState } from 'react';
import { SAMPLE_RECIPE } from '../data/content';
import { Coffee, Flame, Info, CheckCircle2, BookOpen, Sparkles } from 'lucide-react';

export const RecipePreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sample' | 'structure'>('sample');

  return (
    <section className="py-16 md:py-24 bg-[#F4EFE6] border-y border-[#E8DFC9] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FAF7F2] border border-[#C89D3C]/40 text-[#8B5A2B] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#C89D3C]" />
            <span>Formato Claro & Leitura Confortável</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D3B2D] mb-4">
            Como cada receita é apresentada
          </h2>

          <p className="text-base sm:text-lg text-[#5C4033] leading-relaxed">
            Cada receita foi cuidadosamente organizada de forma clara, bonita e prática para permitir uma consulta rápida a qualquer momento.
          </p>

          {/* Toggle View Switch */}
          <div className="mt-6 inline-flex bg-[#FAF7F2] p-1 rounded-xl border border-[#E8DFC9] shadow-2xs">
            <button
              onClick={() => setActiveTab('sample')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'sample'
                  ? 'bg-[#2D3B2D] text-[#FAF7F2] shadow-xs'
                  : 'text-[#6B5E52] hover:text-[#2D3B2D]'
              }`}
            >
              Ver Exemplo de Receita
            </button>
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'structure'
                  ? 'bg-[#2D3B2D] text-[#FAF7F2] shadow-xs'
                  : 'text-[#6B5E52] hover:text-[#2D3B2D]'
              }`}
            >
              Estrutura Padronizada
            </button>
          </div>
        </div>

        {/* Content Showcase */}
        {activeTab === 'sample' ? (
          <div className="max-w-3xl mx-auto bg-[#FAF7F2] rounded-3xl p-6 sm:p-10 border-2 border-[#D8CFC0] shadow-xl relative">
            {/* Vintage Corner Accent */}
            <div className="absolute top-4 right-4 text-xs font-serif font-semibold text-[#8B5A2B] bg-[#F2EBDC] px-3 py-1 rounded-full border border-[#E8DFC9]">
              Página de Exemplo
            </div>

            <div className="mb-6 pb-4 border-b border-[#E8DFC9]">
              <span className="text-xs uppercase font-bold text-[#8B5A2B] tracking-wider block mb-1">
                {SAMPLE_RECIPE.chapter}
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D3B2D] flex items-center gap-2">
                <Coffee className="w-7 h-7 text-[#3D523A]" />
                {SAMPLE_RECIPE.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Ingredients Block */}
              <div className="bg-[#F4EFE6] p-5 rounded-2xl border border-[#E8DFC9]">
                <h4 className="font-serif font-bold text-base text-[#2D3B2D] mb-3 flex items-center gap-2 border-b border-[#E8DFC9] pb-2">
                  <span className="w-2 h-2 rounded-full bg-[#3D523A]" />
                  Ingredientes Necessários
                </h4>
                <ul className="space-y-2 text-sm text-[#4A423A]">
                  {SAMPLE_RECIPE.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C89D3C] font-bold">•</span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mode of Preparation */}
              <div className="bg-[#F4EFE6] p-5 rounded-2xl border border-[#E8DFC9]">
                <h4 className="font-serif font-bold text-base text-[#2D3B2D] mb-3 flex items-center gap-2 border-b border-[#E8DFC9] pb-2">
                  <Flame className="w-4 h-4 text-[#C89D3C]" />
                  Modo de Preparo Passo a Passo
                </h4>
                <ol className="space-y-2 text-sm text-[#4A423A]">
                  {SAMPLE_RECIPE.preparation.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-bold text-[#3D523A] text-xs bg-[#FAF7F2] w-5 h-5 rounded-full flex items-center justify-center shrink-0 border border-[#E8DFC9]">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Traditional Use & Important Notes */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E8DFC9]">
              <div className="bg-[#2D3B2D] text-[#FAF7F2] p-4 rounded-xl text-xs sm:text-sm">
                <span className="block font-bold font-serif text-[#C89D3C] mb-1">
                  💡 Forma Tradicional de Uso:
                </span>
                <p className="leading-relaxed text-[#E8DFC9]">
                  {SAMPLE_RECIPE.traditionalUse}
                </p>
              </div>

              <div className="bg-[#F2EBDC] p-4 rounded-xl text-xs sm:text-sm border border-[#D8CFC0]">
                <span className="block font-bold text-[#8B5A2B] mb-1 flex items-center gap-1">
                  <Info className="w-4 h-4 text-[#8B5A2B]" />
                  Observações Importantes:
                </span>
                <ul className="list-disc pl-4 space-y-1 text-[#5C4033]">
                  {SAMPLE_RECIPE.importantNotes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ) : (
          /* Structure Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFC9] text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#3D523A] text-[#FAF7F2] flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2D3B2D] mb-2">Ingredientes & Medidas</h3>
              <p className="text-sm text-[#6B5E52]">
                Proporções exatas descritas em medidas caseiras fáceis de encontrar em qualquer cozinha.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFC9] text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#C89D3C] text-[#FAF7F2] flex items-center justify-center mb-4">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2D3B2D] mb-2">Preparo Passo a Passo</h3>
              <p className="text-sm text-[#6B5E52]">
                Instruções sequenciais de fervura, infusão, compressa ou maceração sem complicações.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#E8DFC9] text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#8B5A2B] text-[#FAF7F2] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#2D3B2D] mb-2">Forma de Uso & Cuidados</h3>
              <p className="text-sm text-[#6B5E52]">
                Horários recomendados, formas tradicionais de consumo e avisos de conservação.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
