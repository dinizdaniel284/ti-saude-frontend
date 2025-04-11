import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-700 drop-shadow-md">
          Bem-vindo ao TI Saúde
        </h1>
        <p className="text-lg sm:text-xl mb-8 font-medium text-gray-700">
          Descubra com qual área da tecnologia você mais se identifica!
        </p>
        <Link href="/quiz-ti">
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl">
            Iniciar Quiz
          </button>
        </Link>
      </div>

      <footer className="mt-12 text-sm text-gray-600">
        © {new Date().getFullYear()} TI Saúde. Todos os direitos reservados.
      </footer>
    </div>
  );
}
