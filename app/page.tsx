'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaShareAlt } from 'react-icons/fa'; // importando ícone FontAwesome via react-icons

export default function LinkHub(): JSX.Element {
  const pdfName = 'a3f9b27c51d8e4f2.pdf';
  const pdfPath = `/files/${pdfName}`;

  const shareWhatsapp = (): void => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const shareUrl = url.endsWith('/') ? url + pdfName : url + '/' + pdfName;

    const message = encodeURIComponent(
      `Porque o segredo do Preto Chefe nunca foi só a receita. É o carinho que vai em cada concha! Peça já o seu e experimente essa história de sabor.\n\n\nConfira o cardápio completo aqui: ${shareUrl}`
    );

    const whatsappLink = `https://wa.me/?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <main className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-28 h-28 rounded-full overflow-hidden">
            <Image
              src="/avatar-placeholder.png"
              alt="avatar"
              fill
              sizes="112px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <h1 className="text-2xl font-semibold">Preto Chefe</h1>
          <p className="text-sm text-neutral-500 text-center">
            Sabores autênticos e irresistíveis. Peça já o seu!
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <a
            href="https://wa.me/86998107672"
            target="_blank"
            rel="noreferrer"
            className="block w-full text-center py-3 rounded-xl border-2 border-transparent bg-green-600 text-white hover:bg-green-700 transition"
          >
            Faça seu pedido
          </a>
          <Link
            href={pdfPath}
            className="block w-full text-center py-3 rounded-xl bg-neutral-900 text-white hover:bg-neutral-800 transition"
          >
            Cardápio Preto Chefe
          </Link>
        </div>

        <div className="mt-6 flex gap-2 justify-center">
          <button
            onClick={shareWhatsapp}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-300 hover:bg-neutral-100 transition"
          >
            <FaShareAlt /> Compartilhar
          </button>
        </div>

        <footer className="mt-6 text-xs text-neutral-400 text-center">
          Quando alguém pede uma feijoada do Preto Chefe, não recebe só um
          prato. Recebe um pedaço de história, um pouco daquela lembrança boa de
          casa cheia, de conversa boa, de simplicidade que faz bem.
          <br />
          <br />
          Porque o segredo do Preto Chefe nunca foi a receita. É o amor que vai
          junto em cada concha.
        </footer>
      </div>
    </main>
  );
}
