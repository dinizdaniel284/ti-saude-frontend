"use client";
// pages/index.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4">Bem-vindo ao TI & Saúde</h1>
        <p className="text-xl mb-4">Conectando profissionais da saúde com a tecnologia para uma nova era.</p>
      </header>

      <div className="space-y-6 text-center">
        <Link href="/quiz">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition duration-300">
            Comece o Quiz Interativo
          </button>
        </Link>

        <Link href="/guide">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
            Leia o Guia para Iniciantes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
