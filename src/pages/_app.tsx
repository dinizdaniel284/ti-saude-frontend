import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script'; // Importado para melhor performance do AdSense
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <title>TI & Saúde | Inovação e Tecnologia no Setor Hospitalar</title>
        
        {/* SEO Fundamental */}
        <meta name="description" content="Portal especializado em tecnologia para o setor de saúde. Insights sobre Telemedicina, Power BI, IA Clínica e Segurança de Dados (LGPD)." />
        <meta name="author" content="Daniel Diniz" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* Social Share (Open Graph) - Aumenta o clique em redes sociais */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TI & Saúde | Tecnologia Hospitalar" />
        <meta property="og:description" content="Transformando a gestão hospitalar através de dados e inovação digital." />
        <meta property="og:image" content="/og-image.jpg" /> {/* Crie uma imagem de 1200x630 na pasta public */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* SCRIPT DO ADSENSE (USANDO NEXT/SCRIPT) 
          Substitua o ca-pub-XXXXXX pelo seu ID real quando receber do Google.
          O 'afterInteractive' garante que o site carregue primeiro para o usuário,
          melhorando sua nota no Google PageSpeed.
      */}
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX"
        crossOrigin="anonymous"
      />

      <div className="flex flex-col min-h-screen">
        <Header />

        {/* pt-20 para compensar o Header fixo e não cobrir o conteúdo */}
        <main className="flex-grow pt-20 bg-white scroll-smooth">
          <Component {...pageProps} />
        </main>

        <CookieBanner /> 
        <Footer /> 
      </div>
    </>
  );
}