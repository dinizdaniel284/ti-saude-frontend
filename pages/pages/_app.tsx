// pages/_app.tsx
import "../styles/globals.css"; // Caminho relativo correto
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
