// pages/_app.tsx
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TI Saúde</title>
        <meta name="description" content="Conectando tecnologia com a área da saúde. Descubra sua área ideal de TI!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Fonte Inter do Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="bg-gradient-to-b from-soft-white to-white text-dark-text min-h-screen font-sans">
        <Component {...pageProps} />
      </main>
    </>
  );
}