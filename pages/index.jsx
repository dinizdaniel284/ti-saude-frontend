"use client";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push("/quiz");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-white to-blue-100 text-gray-800">
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 shadow-xl bg-blue-500 text-white rounded-b-3xl">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Bem-vindo ao TI-Saúde!</h1>
        <p className="text-lg mb-2">&quot;A tecnologia muda o mundo, e você pode mudar a tecnologia.&quot;</p>
        <p className="text-lg mb-6">&quot;Descubra o seu caminho na área da TI e brilhe com seu talento!&quot;</p>
        <button
          onClick={handleStartQuiz}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 hover:text-blue-800 transition-all"
        >
          Bora fazer um quiz e descobrir sua área ideal?
        </button>
      </div>
    </div>
  );
}
