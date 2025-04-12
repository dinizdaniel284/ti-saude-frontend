// pages/index.tsx
"use client";
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-800 to-indigo-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <header className="text-center mb-12 drop-shadow-lg">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-tight">
          Bem-vindo ao <span className="text-yellow-300">TI & Saúde</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-xl mx-auto">
          Conectando profissionais da saúde com a tecnologia para uma nova era.
        </p>
      </header>

      <div className="space-y-6 text-center w-full max-w-sm">
        <Link href="/quiz">
          <button className="w-full bg-green-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300 ease-in-out">
            Comece o Quiz Interativo
          </button>
        </Link>

        <Link href="/guide">
          <button className="w-full bg-blue-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out">
            Leia o Guia para Iniciantes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
