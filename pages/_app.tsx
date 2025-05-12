import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import '../styles/globals.css';  // Importando os estilos globais
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      console.log(`Navegou para: ${url}`);
    };

    // Usando os eventos de navegação do Next.js
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup ao remover o evento
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
