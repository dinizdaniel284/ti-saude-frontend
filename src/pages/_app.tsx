import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <title>TI & Saúde | Inovação e Tecnologia no Setor Hospitalar</title>
        
        {/* Meta tags para o Google AdSense e SEO */}
        <meta name="description" content="Especialistas em tecnologia para o setor de saúde. Artigos sobre Telemedicina, Power BI, Dados e Segurança da Informação." />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* COLE O SCRIPT DO ADSENSE ABAIXO (Aquele que começa com <script async src=...)
          Isso fará com que os anúncios automáticos apareçam em todo o site.
        */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX" crossorigin="anonymous"></script> */}
      </Head>

      <Header />

      {/* Adicionei scroll-smooth para quando clicarem nos links, 
         a navegação ser suave no mobile 
      */}
      <main className="pt-16 min-h-screen bg-white scroll-smooth">
        <Component {...pageProps} />
      </main>

      {/* Banner de cookies é obrigatório para o Google. Boa! */}
      <CookieBanner /> 
      
      <Footer /> 
    </>
  );
}