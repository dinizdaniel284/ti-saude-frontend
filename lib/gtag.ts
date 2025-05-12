// lib/gtag.ts

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Função para registrar visualização de página
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};
