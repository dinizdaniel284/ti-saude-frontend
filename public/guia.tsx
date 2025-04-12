import Link from 'next/link';

const GuiaParaIniciantes: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 flex items-center justify-center px-6">
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-xl p-10 max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Guia para Iniciantes na Área de TI
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          Comece sua jornada na Tecnologia da Informação com segurança e direção.
          Este portal oferece um caminho simples para quem deseja migrar da saúde para a tecnologia.
        </p>

        <div className="space-y-4">
          <Link href="/quiz-ti">
            <button className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition">
              Fazer o Quiz Interativo
            </button>
          </Link>

          <a
            href="/guia-para-iniciantes.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
              Acessar Guia Completo (PDF/HTML)
            </button>
          </a>

          <Link href="/contato">
            <button className="w-full bg-gray-800 text-white py-3 rounded-xl hover:bg-gray-900 transition">
              Falar com um Mentor
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuiaParaIniciantes;
