import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Configurações globais */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header fixo em todas as páginas */}
      <Header />

      {/* Conteúdo com espaçamento para o header */}
      <main className="pt-16 min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}
