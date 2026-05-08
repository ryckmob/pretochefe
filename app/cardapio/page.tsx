'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Cardapio(): JSX.Element {
  return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">

        <div className="p-4">
          <Link
            href="/"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-neutral-900 text-white hover:bg-neutral-800 transition-all duration-200 shadow-sm"
          >
            <ArrowLeft size={22} />
          </Link>
        </div>

        <div className="px-6 pb-6">
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
        </div>

        <div className="px-3 pb-3">
          <Image
            src="https://i.imgur.com/NUsDyko.png"
            alt="Cardápio Preto Chefe"
            width={1000}
            height={1600}
            className="w-full h-auto rounded-2xl shadow-sm"
          />
        </div>

        <footer className="px-6 pb-8 pt-4 text-sm text-neutral-500 text-center leading-relaxed">
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