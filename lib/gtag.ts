// lib/gtag.ts

// Pega o ID do GA do arquivo .env (com prefixo NEXT_PUBLIC_)
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Função para registrar visualização de página
export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
