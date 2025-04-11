import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 drop-shadow">
          Bem-vindo ao TI-Saúde!
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Descubra como migrar para a tecnologia sendo da área da saúde. Conquiste novas oportunidades com nosso guia e teste interativo!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/quiz-ti">
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-md transition-all duration-300">
              Fazer o Quiz Interativo
            </button>
          </Link>

          <a
            href="/guia-para-iniciantes.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition-all duration-300">
              Ver Guia para Iniciantes
            </button>
          </a>
        </div>
      </div>

      <footer className="mt-12 text-gray-500 text-sm">
        Criado por Daniel - Transformando Saúde com Tecnologia
      </footer>
    </div>
  );
}
