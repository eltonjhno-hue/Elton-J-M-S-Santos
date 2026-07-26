import React, { useState } from 'react';
import { X, ShieldCheck, Lock, CheckCircle2, QrCode, CreditCard, Mail, Sparkles, Download } from 'lucide-react';
import coverImg from '../assets/images/ebook_cover_1785090981371.jpg';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FAF7F2] rounded-3xl border-2 border-[#C89D3C]/60 shadow-2xl overflow-hidden text-[#2C2825]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#F4EFE6] hover:bg-[#E8DFC9] flex items-center justify-center text-[#2D3B2D] transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="bg-[#2D3B2D] text-[#FAF7F2] p-6 text-center relative">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#C89D3C] font-semibold mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Finalize seu Pedido com Risco Zero
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#FAF7F2]">
                Raízes do Seu Ângelo
              </h3>
              <p className="text-xs text-[#E8DFC9] mt-1">
                Garantia Incondicional de 7 Dias • Acesso Imediato
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              
              {/* Product Summary */}
              <div className="flex items-center gap-4 bg-[#F4EFE6] p-3 rounded-2xl border border-[#E8DFC9]">
                <img
                  src={coverImg}
                  alt="Raízes do Seu Ângelo"
                  className="w-12 h-16 object-cover rounded-lg border border-[#D8CFC0]"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <span className="block text-xs font-bold text-[#8B5A2B]">eBook Digital Completo</span>
                  <span className="block text-sm font-serif font-bold text-[#2D3B2D]">55 Receitas Tradicionais</span>
                  <span className="block text-xs text-[#6B5E52]">Autor: Seu Ângelo Martins</span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#8B5A2B] block">Valor</span>
                  <span className="text-xl font-serif font-bold text-[#2D3B2D]">R$ 37,90</span>
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-[#5C4033] mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria da Silva"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-white border border-[#E8DFC9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3D523A]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#5C4033] mb-1">
                    E-mail para Receber o eBook *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8B5A2B] absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="seu.email@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-[#E8DFC9] rounded-xl pl-10 pr-3.5 py-2.5 text-sm focus:outline-none focus:border-[#3D523A]"
                    />
                  </div>
                  <span className="text-[11px] text-[#6B5E52] mt-0.5 block">
                    O link de acesso e download será enviado para este e-mail.
                  </span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-[#5C4033] mb-1.5">
                  Forma de Pagamento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('pix')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold cursor-pointer transition-all ${
                      paymentMethod === 'pix'
                        ? 'bg-[#3D523A] text-[#FAF7F2] border-[#2D3B2D] shadow-xs'
                        : 'bg-white text-[#4A423A] border-[#E8DFC9] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-[#C89D3C]" />
                    <span>Pix (Acesso Imediato)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'bg-[#3D523A] text-[#FAF7F2] border-[#2D3B2D] shadow-xs'
                        : 'bg-white text-[#4A423A] border-[#E8DFC9] hover:bg-[#F4EFE6]'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-[#C89D3C]" />
                    <span>Cartão de Crédito</span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#2D3B2D] hover:bg-[#3D523A] text-[#FAF7F2] font-bold text-base py-3.5 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2 border border-[#C89D3C]/40 mt-2"
              >
                {isLoading ? (
                  <span>Processando Pedido Seguro...</span>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-[#C89D3C]" />
                    <span>Concluir Pedido — R$ 37,90</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B5E52]">
                <ShieldCheck className="w-4 h-4 text-[#3D523A]" />
                <span>Pagamento 100% Criptografado & Garantido por 7 dias</span>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="p-8 text-center space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#3D523A] text-[#FAF7F2] flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-[#C89D3C]" />
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#2D3B2D]">
              Parabéns, {fullName.split(' ')[0]}!
            </h3>

            <p className="text-sm text-[#4A423A] leading-relaxed">
              O seu pedido do eBook <strong className="text-[#2D3B2D]">Raízes do Seu Ângelo</strong> foi registrado com sucesso! O e-mail de acesso foi enviado para:
            </p>

            <div className="bg-[#F4EFE6] p-3 rounded-xl font-mono text-xs font-bold text-[#3D523A] border border-[#E8DFC9]">
              {email}
            </div>

            <div className="bg-[#2D3B2D] text-[#FAF7F2] p-4 rounded-xl text-xs space-y-2 text-left">
              <span className="font-bold text-[#C89D3C] block font-serif text-sm">
                O que fazer agora?
              </span>
              <p className="text-[#E8DFC9]">
                1. Verifique a caixa de entrada (ou spam) do seu e-mail.
              </p>
              <p className="text-[#E8DFC9]">
                2. Baixe o arquivo PDF completo para seu celular ou computador.
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full bg-[#C89D3C] hover:bg-[#D4AF37] text-[#1F2B1F] font-bold py-3 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Concluir e Voltar ao Site</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
