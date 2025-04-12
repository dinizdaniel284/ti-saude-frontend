"use client";
import { useState } from "react";
import QuizTI from "./quiz-ti";

export default function Home() {
  const [startQuiz, setStartQuiz] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-300 via-white to-blue-100 text-gray-800">
      <div className="flex flex-col items-center justify-center text-center py-20 px-4 shadow-xl bg-blue-500 text-white rounded-b-3xl">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">Bem-vindo ao TI-Saúde!</h1>
        <p className="text-lg mb-2">"A tecnologia muda o mundo, e você pode mudar a tecnologia."</p>
        <p className="text-lg mb-6">"Descubra o seu caminho na área da TI e brilhe com seu talento!"</p>
        <button
          onClick={() => setStartQuiz(true)}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-100 hover:text-blue-800 transition-all"
        >
          Bora fazer um quiz e descobrir sua área ideal?
        </button>
      </div>

      {startQuiz && (
        <div className="animate-fade-in mt-10 px-4">
          <QuizTI />
        </div>
      )}
    </div>
  );
}
