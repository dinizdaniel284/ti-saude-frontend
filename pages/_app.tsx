import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'; // ✅ funciona 100%

// Importa a função do gtag para o Google Analytics
import * as gtag from '../lib/gtag';

// ID do Google Analytics
const GA_ID = gtag.GA_MEASUREMENT_ID;

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url); // Chama a função para registrar a visualização da página
    };

    // Quando a rota mudar, chama a função para registrar a visualização da página
    window.addEventListener('routeChangeComplete', handleRouteChange);

    return () => {
      window.removeEventListener('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <>
      {/* Script do Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
