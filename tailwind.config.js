// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0F52BA', // Azul forte, tech
        'secondary-green': '#10B981', // Verde saúde
        'button-blue': '#2563EB', // Azul botão
        'button-hover': '#1D4ED8', // Hover do botão
        'soft-white': '#F9FAFB', // Fundo claro
        'dark-text': '#111827', // Texto escuro
        'light-text': '#6B7280', // Texto secundário
        'alert-red': '#EF4444', // Erros
        'success-green': '#22C55E', // Sucesso
        'accent-purple': '#8B5CF6', // Detalhes chamativos
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'card': '0 4px 14px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};