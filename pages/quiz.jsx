"use client";
import { useState } from "react";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    { question: "Qual área da TI você mais se interessa?", options: ["Desenvolvimento", "Infraestrutura", "Banco de Dados", "Segurança"] },
    { question: "Você prefere trabalhar com front-end ou back-end?", options: ["Front-end", "Back-end", "Ambos"] },
    { question: "Quais ferramentas você já utiliza?", options: ["Git", "Docker", "AWS", "Node.js"] },
    { question: "Você tem experiência com programação?", options: ["Sim", "Não", "Estou aprendendo"] },
    { question: "Qual linguagem de programação você mais gosta?", options: ["Python", "JavaScript", "Java", "C++"] },
    { question: "Você se interessa por Inteligência Artificial?", options: ["Sim", "Não", "Tenho interesse, mas não sei por onde começar"] },
    { question: "Você prefere trabalhar em equipe ou individualmente?", options: ["Equipe", "Individualmente", "Ambos"] },
    { question: "Já trabalhou com algum banco de dados?", options: ["Sim", "Não", "Em aprendizado"] },
    { question: "Você conhece o que é DevOps?", options: ["Sim", "Não", "Estou aprendendo"] },
    { question: "Você gosta de resolver problemas e otimizar processos?", options: ["Sim", "Não", "Depende da situação"] },
  ];

  const handleAnswer = (answer) => {
    // Lógica para registrar a resposta e passar para a próxima pergunta
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Finalizar o quiz ou enviar para outra página
      alert("Quiz finalizado!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center px-6">
      <div className="bg-white bg-opacity-80 shadow-2xl rounded-3xl p-10 max-w-2xl w-full">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4 drop-shadow-xl">
            Quiz TI-Saúde
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Responda as perguntas e descubra qual área da TI você se encaixa melhor!
          </p>
        </div>

        {/* Exibição da pergunta e opções */}
        <div className="space-y-4">
          <div className="bg-blue-600 text-white shadow-lg rounded-lg p-6 mb-6">
            <p className="text-2xl font-semibold mb-4">{questions[currentQuestion].question}</p>
            <div className="space-y-2">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
