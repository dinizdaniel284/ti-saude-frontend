import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
        Bem-vindo ao Portal TI-Saúde
      </h1>

      <div className="space-y-4 text-center">
        <Link href="/quiz-ti">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
            Fazer o Quiz Interativo
          </button>
        </Link>

        <a href="/guia-para-iniciantes.html" target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Ver Guia para Iniciantes
          </button>
        </a>
      </div>
    </div>
  );
}
