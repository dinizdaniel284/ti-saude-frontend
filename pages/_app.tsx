// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '@/styles/globals.css'; // Certifique-se de que o arquivo globals.css existe ou remova essa linha se não for usar.

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;