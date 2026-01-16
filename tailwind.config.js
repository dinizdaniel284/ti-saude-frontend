/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Agora o Tailwind sabe que 'font-sans' deve usar a Jakarta
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        // Cores personalizadas para o tema "TI Saúde Premium"
        health: {
          900: '#020617', // Deep Slate
          600: '#4f46e5', // Indigo principal
          400: '#22d3ee', // Cyan de destaque
        }
      },
      animation: {
        'scroll': 'scroll 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(1deg)' },
        }
      },
      boxShadow: {
        // Sombra de "luxo" - mais difusa e suave
        'premium': '0 20px 50px -12px rgba(0, 0, 0, 0.1)',
        'cyan-glow': '0 0 20px rgba(34, 211, 238, 0.3)',
      }
    },
  },
  plugins: [],
};