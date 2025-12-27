import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner'; // Importe o banner de cookies aqui

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TI & Saúde | Inovação e Tecnologia</title>
      </Head>

      <Header />

      <main className="pt-16 min-h-screen bg-white">
        <Component {...pageProps} />
      </main>

      <CookieBanner /> {/* O aviso legal que o Google exige */}
      
      <Footer /> 
    </>
  );
}