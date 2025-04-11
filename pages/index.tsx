// pages/index.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 drop-shadow mb-6">
          Bem-vindo ao TI-Saúde
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Descubra qual área da Tecnologia mais combina com você! Responda ao nosso quiz interativo ou acesse o guia de transição para profissionais da saúde.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link href="/quiz-ti">
            <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:scale-105">
              Fazer o Quiz
            </button>
          </Link>

          <Link href="/beginners-guide.html" target="_blank">
            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-2xl shadow-lg hover:scale-105">
              Guia para Iniciantes
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
