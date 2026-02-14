import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
        <title>TI & Saúde | Inovação e Tecnologia no Setor Hospitalar</title>

        {/* SEO */}
        <meta
          name="description"
          content="Portal especializado em tecnologia para o setor de saúde. Insights sobre Telemedicina, Power BI, IA Clínica e Segurança de Dados (LGPD)."
        />
        <meta name="author" content="Daniel Diniz" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TI & Saúde | Tecnologia Hospitalar" />
        <meta
          property="og:description"
          content="Transformando a gestão hospitalar através de dados e inovação digital."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="theme-color" content="#020617" />
      </Head>

      {/* ✅ SCRIPT DO ADSENSE CORRETO */}
      <Script
        id="adsbygoogle-init"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7353371878367127"
        crossOrigin="anonymous"
      />

      <div className="flex flex-col min-h-screen selection:bg-cyan-100 selection:text-cyan-900">
        <Header />

        <main className="flex-grow pt-20 bg-white">
          <Component {...pageProps} />
        </main>

        <CookieBanner />
        <Footer />
      </div>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
}
