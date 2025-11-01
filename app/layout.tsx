import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Preto Chefe',
  description: 'Sabores autênticos e irresistíveis do Preto Chefe. Peça já!',
  openGraph: {
    title: 'Preto Chefe',
    description: 'Porque o segredo do Preto Chefe nunca foi só a receita. É o carinho que vai em cada concha!',
    url: 'https://pretochefe.vercel.app/', 
    type: 'website',
    images: [
      {
        url: 'https://pretochefe.vercel.app/vizualization.png', 
        width: 1200,
        height: 630,
        alt: 'Preto Chefe - Sabores autênticos e irresistíveis',
      },
    ],
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
