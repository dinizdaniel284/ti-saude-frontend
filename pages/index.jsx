"use client";

import { useRouter } from "next/router";
import BannerQuiz from "../components/BannerQuiz";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col">
      <Header />

      <Main />

      <BannerQuiz />

      <div className="bg-white bg-opacity-80 shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-center mb-8 mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 mb-6 drop-shadow-xl">
          Seja bem-vindo ao TI-Saúde!
        </h1>

        {/* Frases Motivacionais */}
        <div className="space-y-4 mb-6">
          <p className="text-xl text-gray-800 italic">
            &quot;A tecnologia muda o mundo, e você pode mudar a tecnologia.&quot;
          </p>
          <p className="text-xl text-gray-800 italic">
            &quot;Transforme sua paixão em carreira e encontre seu caminho na TI.&quot;
          </p>
          <p className="text-xl text-gray-800 italic">
            &quot;Cada clique é um passo rumo ao seu futuro!&quot;
          </p>
        </div>

        {/* Botão */}
        <button
          onClick={handleStartQuiz}
          className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
        >
          Fazer o Quiz e Descobrir Minha Área
        </button>
      </div>

      <Footer />
    </div>
  );
}
