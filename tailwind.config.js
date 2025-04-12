// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#1E40AF', // Cor personalizada de azul
        'button-blue': '#3B82F6', // Cor do botão
        'button-hover': '#2563EB', // Cor do botão ao passar o mouse
      },
    },
  },
  plugins: [],
};
