"use client";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-400 flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-2xl p-10 max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 drop-shadow mb-4">
          Seja bem-vindo ao TI-Saúde!
        </h1>
        <p className="text-lg text-gray-700 mb-2 italic">
          &quot;A tecnologia muda o mundo, e você pode mudar a tecnologia.&quot;
        </p>
        <p className="text-lg text-gray-700 mb-2 italic">
          &quot;Transforme sua paixão em carreira e encontre seu caminho na TI.&quot;
        </p>
        <p className="text-lg text-gray-700 mb-6 italic">
          &quot;Cada clique é um passo rumo ao seu futuro!&quot;
        </p>

        <button
          onClick={handleStartQuiz}
          className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
        >
          Fazer o Quiz e Descobrir Minha Área
        </button>
      </div>
    </div>
  );
}
