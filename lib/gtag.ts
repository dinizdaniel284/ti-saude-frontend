// lib/gtag.ts
export const GA_MEASUREMENT_ID = 'G-DJY54KJ7PF'; // Coloque o ID de métricas aqui

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
