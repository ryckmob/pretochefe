'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Cardapio(): JSX.Element {
  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="p-4">
          <Link
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition"
          >
            <ArrowLeft size={22} />
          </Link>
        </div>

        <div className="px-6 pb-6">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-28 h-28 rounded-full overflow-hidden">
              <Image
                src="/Logotipo%20do%20Chef%20em%20Hexágono.png"
                alt="avatar"
                fill
                sizes="112px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <h1 className="text-2xl font-semibold">
              Preto Chefe
            </h1>

            <p className="text-sm text-neutral-500 text-center">
              Sabores autênticos e irresistíveis. Peça já o seu!
            </p>
          </div>
        </div>

        <div className="px-[10px] pb-[10px]">
          <div className="px-[10px] pb-[10px]">
            <Image
              src="https://i.imgur.com/NUsDyko.png"
              alt="Cardápio Preto Chefe"
              width={1000}
              height={1600}
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        <footer className="px-6 pb-6 text-xs text-neutral-400 text-center leading-relaxed">
          Quando alguém pede uma feijoada do Preto Chefe, não recebe só um
          prato. Recebe um pedaço de história, um pouco daquela lembrança boa de
          casa cheia, de conversa boa, de simplicidade que faz bem.

          <br />
          <br />

          Porque o segredo do Preto Chefe nunca foi a receita.
          É o amor que vai junto em cada concha.
        </footer>

      </div>
    </main>
  );
}