"use client";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-purple-200 to-pink-300 flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-80 shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center transform hover:scale-105 transition-all duration-500">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 drop-shadow-lg mb-6">
          Seja Bem-vindo ao TI-Saúde!
        </h1>
        
        <div className="space-y-4 mb-8">
          <p className="text-xl text-gray-800 italic font-semibold">
            "A tecnologia muda o mundo, e você pode mudar a tecnologia."
          </p>
          <p className="text-xl text-gray-800 italic font-semibold">
            "Transforme sua paixão em carreira e encontre seu caminho na TI."
          </p>
          <p className="text-xl text-gray-800 italic font-semibold">
            "Cada clique é um passo rumo ao seu futuro!"
          </p>
        </div>

        <button
          onClick={handleStartQuiz}
          className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Fazer o Quiz e Descobrir Minha Área
        </button>
      </div>
    </div>
  );
}
