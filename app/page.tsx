'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShareAlt } from 'react-icons/fa';

export default function LinkHub(): JSX.Element {
  const shareWhatsapp = (): void => {
    const url =
      typeof window !== 'undefined' ? window.location.href : '';

    const shareUrl = url.endsWith('/')
      ? url.slice(0, -1)
      : url;

    const message = encodeURIComponent(
      `Porque o segredo do Preto Chefe nunca foi só a receita. É o carinho que vai em cada concha!

Peça já o seu e experimente essa história de sabor.

Confira o cardápio completo aqui:
${shareUrl}`
    );

    const whatsappLink = `https://wa.me/?text=${message}`;

    window.open(whatsappLink, '_blank');
  };

  return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-neutral-200 shadow-md">
            <Image
              src="/Logotipo%20do%20Chef%20em%20Hexágono.png"
              alt="Logo Preto Chefe"
              fill
              sizes="112px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>

          <h1 className="text-3xl font-bold text-neutral-900">
            Preto Chefe
          </h1>

          <p className="text-sm text-neutral-600 text-center leading-relaxed">
            Sabores autênticos e irresistíveis.
            <br />
            Peça já o seu!
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <a
            href="https://wa.me/5586998107672"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center py-3 rounded-2xl bg-green-600 text-white font-medium hover:bg-green-700 transition-all duration-200"
          >
            Faça seu pedido
          </a>

          <Link
            href="/cardapio"
            className="block w-full text-center py-3 rounded-2xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all duration-200"
          >
            Cardápio Preto Chefe
          </Link>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={shareWhatsapp}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all duration-200 shadow-sm"
          >
            <FaShareAlt />
            Compartilhar
          </button>
        </div>

        <footer className="mt-8 text-sm text-neutral-500 text-center leading-relaxed">
          Quando alguém pede uma feijoada do Preto Chefe,
          não recebe só um prato.

          <br />
          <br />

          Recebe um pedaço de história,
          uma lembrança boa de casa cheia,
          conversa boa e simplicidade que faz bem.

          <br />
          <br />

          Porque o segredo do Preto Chefe
          nunca foi só a receita.
          É o carinho que vai em cada concha.
        </footer>
      </div>
    </main>
  );
}
