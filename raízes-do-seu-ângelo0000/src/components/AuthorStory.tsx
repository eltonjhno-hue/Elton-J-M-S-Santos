import React from 'react';
import { AUTHOR_STORY } from '../data/content';
import { BookMarked, Heart, Sparkles } from 'lucide-react';
import storyImg from '../assets/images/seu_angelo_story_1785090996541.jpg';

export const AuthorStory: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F4EFE6] relative overflow-hidden border-y border-[#E8DFC9]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photo Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 bg-[#3D523A]/10 rounded-3xl transform -rotate-2" />
              <div className="relative bg-[#FAF7F2] p-4 rounded-3xl border border-[#E8DFC9] shadow-lg">
                <img
                  src={storyImg}
                  alt="Seu Ângelo escrevendo em seu antigo caderno de receitas"
                  className="w-full h-auto rounded-2xl object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Handwritten Notebook Caption Badge */}
                <div className="mt-4 p-3 bg-[#F2EBDC] rounded-xl border border-[#D8CFC0] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#3D523A] text-[#FAF7F2] flex items-center justify-center shrink-0">
                    <BookMarked className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#2D3B2D] font-serif">O Caderno de Anotações</span>
                    <span className="block text-[11px] text-[#6B5E52]">Registros acumulados ao longo de décadas de experiência</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Letter / Story Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FAF7F2] border border-[#C89D3C]/40 text-[#8B5A2B] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C89D3C]" />
                <span>Tradição Passada de Geração em Geração</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D3B2D] leading-tight">
                {AUTHOR_STORY.title}
              </h2>
            </div>

            {/* Parchment Styled Personal Letter */}
            <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#E8DFC9] shadow-xs relative">
              <div className="space-y-4 text-base text-[#4A423A] leading-relaxed font-normal">
                {AUTHOR_STORY.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-2xl first-letter:font-serif first-letter:font-bold first-letter:text-[#3D523A]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Personal Signature Block */}
              <div className="mt-8 pt-6 border-t border-[#E8DFC9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="block text-sm text-[#8B5A2B] italic font-serif">
                    {AUTHOR_STORY.signoff}
                  </span>
                  <span className="block text-xl font-bold font-serif text-[#2D3B2D] mt-1">
                    {AUTHOR_STORY.authorName}
                  </span>
                  <span className="text-xs text-[#6B5E52]">Autor do eBook Raízes do Seu Ângelo</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#3D523A] bg-[#F2EBDC] px-3.5 py-2 rounded-lg border border-[#D8CFC0]">
                  <Heart className="w-4 h-4 fill-current text-[#A64B2A]" />
                  <span>Feito com carinho e sabedoria</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
