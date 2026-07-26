import React, { useState } from 'react';
import { CHAPTERS_DATA, EXTRA_SECTIONS } from '../data/content';
import { BookOpen, Check, ChevronDown, ChevronUp, Leaf, Calendar, ListChecks, HelpCircle } from 'lucide-react';

export const BookContents: React.FC = () => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(1);

  const toggleChapter = (id: number) => {
    setExpandedChapter(expandedChapter === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#F2EBDC] text-[#8B5A2B] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-[#E8DFC9]">
            <BookOpen className="w-4 h-4 text-[#C89D3C]" />
            <span>Conteúdo Completo & Sumário</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D3B2D] mb-4">
            O que você encontrará neste livro
          </h2>

          <p className="text-base sm:text-lg text-[#5C4033]">
            Você terá acesso a um material organizado e fácil de consultar sempre que desejar:
          </p>
        </div>

        {/* Feature Grid Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          <div className="bg-[#F4EFE6] p-5 rounded-2xl border border-[#E8DFC9] flex flex-col items-start gap-2 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#3D523A] text-[#FAF7F2] flex items-center justify-center font-bold text-lg">
              55
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2D3B2D]">Receitas Tradicionais</h3>
            <p className="text-xs text-[#6B5E52]">Testadas e organizadas por categorias de bem-estar</p>
          </div>

          <div className="bg-[#F4EFE6] p-5 rounded-2xl border border-[#E8DFC9] flex flex-col items-start gap-2 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#C89D3C] text-[#FAF7F2] flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2D3B2D]">Guia de Ervas</h3>
            <p className="text-xs text-[#6B5E52]">Propriedades e formas corretas de preparo</p>
          </div>

          <div className="bg-[#F4EFE6] p-5 rounded-2xl border border-[#E8DFC9] flex flex-col items-start gap-2 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#8B5A2B] text-[#FAF7F2] flex items-center justify-center">
              <ListChecks className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2D3B2D]">Glossário das Plantas</h3>
            <p className="text-xs text-[#6B5E52]">Nomes populares e científicos para fácil identificação</p>
          </div>

          <div className="bg-[#F4EFE6] p-5 rounded-2xl border border-[#E8DFC9] flex flex-col items-start gap-2 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#2D3B2D] text-[#FAF7F2] flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#C89D3C]" />
            </div>
            <h3 className="font-serif font-bold text-lg text-[#2D3B2D]">Calendário Tradicional</h3>
            <p className="text-xs text-[#6B5E52]">Épocas certas de colheita, secagem e conservação</p>
          </div>
        </div>

        {/* Interactive Chapters Breakdown Accordion */}
        <div className="max-w-4xl mx-auto bg-[#F4EFE6] rounded-3xl p-6 sm:p-8 border border-[#E8DFC9] shadow-sm">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E8DFC9]">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2D3B2D]">
              Sumário de Capítulos do eBook
            </h3>
            <span className="text-xs font-semibold bg-[#2D3B2D] text-[#FAF7F2] px-3 py-1 rounded-full">
              11 Capítulos + Guias Bônus
            </span>
          </div>

          <div className="space-y-3">
            {CHAPTERS_DATA.map((chapter) => {
              const isOpen = expandedChapter === chapter.id;
              return (
                <div
                  key={chapter.id}
                  className="bg-[#FAF7F2] rounded-xl border border-[#E8DFC9] overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleChapter(chapter.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F2EBDC]/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#3D523A] text-[#FAF7F2] text-xs font-bold flex items-center justify-center shrink-0">
                        {chapter.id}
                      </span>
                      <h4 className="font-serif font-bold text-base sm:text-lg text-[#2D3B2D]">
                        {chapter.title}
                      </h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block text-xs font-medium text-[#8B5A2B] bg-[#F2EBDC] px-2.5 py-1 rounded-md">
                        {chapter.recipesCount} receitas
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#3D523A]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#6B5E52]" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 bg-[#FAF7F2] border-t border-[#E8DFC9]/60">
                      <p className="text-xs text-[#6B5E52] mb-3 italic">
                        {chapter.description}
                      </p>
                      
                      {chapter.recipes && chapter.recipes.length > 0 && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#2C2825] font-medium">
                          {chapter.recipes.map((recipe, rIdx) => (
                            <li key={rIdx} className="flex items-center gap-2 bg-[#F4EFE6] p-2.5 rounded-lg border border-[#E8DFC9]">
                              <Check className="w-4 h-4 text-[#3D523A] shrink-0" />
                              <span>{recipe}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Extra Included Sections */}
          <div className="mt-8 pt-6 border-t border-[#E8DFC9]">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#8B5A2B] mb-3">
              Seções Complementares e Guias Inclusos:
            </h4>
            <div className="flex flex-wrap gap-2">
              {EXTRA_SECTIONS.map((section, idx) => (
                <span
                  key={idx}
                  className="bg-[#FAF7F2] border border-[#C89D3C]/50 text-[#2D3B2D] text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-2xs"
                >
                  <Leaf className="w-3.5 h-3.5 text-[#3D523A]" />
                  {section}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
