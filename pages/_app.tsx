// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css'; // ✅ funciona 100%

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;