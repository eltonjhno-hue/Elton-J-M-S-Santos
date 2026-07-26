import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AudioMessage } from './components/AudioMessage';
import { AuthorStory } from './components/AuthorStory';
import { BookContents } from './components/BookContents';
import { RecipePreview } from './components/RecipePreview';
import { TargetAudience } from './components/TargetAudience';
import { Guarantee } from './components/Guarantee';
import { OfferSection } from './components/OfferSection';
import { FaqSection } from './components/FaqSection';
import { FinalMessageFooter } from './components/FinalMessageFooter';
import { FloatingCtaBar } from './components/FloatingCtaBar';
import { CHECKOUT_URL } from './data/content';

export default function App() {
  const handleOpenCheckout = () => {
    if (CHECKOUT_URL && CHECKOUT_URL !== '#') {
      window.location.href = CHECKOUT_URL;
    } else {
      const offerElement = document.getElementById('oferta');
      if (offerElement) {
        offerElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = CHECKOUT_URL || '#';
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2C2825] font-sans antialiased selection:bg-[#3D523A] selection:text-[#FAF7F2]">
      {/* 1. Header with Top Announcement Bar */}
      <Header onOpenCheckout={handleOpenCheckout} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero onOpenCheckout={handleOpenCheckout} />

        {/* 3. Audio Message Section ("Uma breve mensagem do Seu Ângelo") */}
        <AudioMessage />

        {/* 4. Author Story Section ("Um pouco da minha história") */}
        <AuthorStory />

        {/* 5. Book Contents & Chapter Explorer ("O que você encontrará neste livro") */}
        <BookContents />

        {/* 6. Recipe Format Preview ("Como cada receita é apresentada") */}
        <RecipePreview />

        {/* 7. Target Audience ("Este livro é para você que...") */}
        <TargetAudience onOpenCheckout={handleOpenCheckout} />

        {/* 8. Guarantee Section ("Garantia de 7 dias") */}
        <Guarantee />

        {/* 9. Offer Section ("Sua Oferta" / "Receitas do Seu Ângelo") */}
        <OfferSection onOpenCheckout={handleOpenCheckout} />

        {/* 10. FAQ Section ("Perguntas frequentes") */}
        <FaqSection />
      </main>

      {/* 11. Final Message & Footer ("Mensagem final") */}
      <FinalMessageFooter />

      {/* 12. Floating CTA Bar for Mobile Conversion */}
      <FloatingCtaBar onOpenCheckout={handleOpenCheckout} />
    </div>
  );
}
