import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/content';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-[#F4EFE6] border-y border-[#E8DFC9] relative">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#FAF7F2] text-[#8B5A2B] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 border border-[#E8DFC9]">
            <HelpCircle className="w-4 h-4 text-[#C89D3C]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2D3B2D]">
            Perguntas frequentes
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#FAF7F2] rounded-2xl border border-[#E8DFC9] overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F2EBDC]/60 transition-colors"
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#2D3B2D]">
                    {item.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#3D523A] shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#4A423A] leading-relaxed border-t border-[#E8DFC9]/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
