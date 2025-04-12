"use client";
import { useState } from "react";

const questions = [
  {
    question: "Com qual área da TI você mais se identifica?",
    options: [
      "Desenvolvimento de Software",
      "Banco de Dados",
      "Análise de Dados",
      "Segurança da Informação",
      "Infraestrutura de Redes",
    ],
  },
  // ...demais perguntas iguais
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setAnswers((prev) => [...prev, option]);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateArea = () => {
    const count = {};
    answers.forEach((res) => {
      count[res] = (count[res] || 0) + 1;
    });
    const mostFrequent = Object.entries(count).sort((a, b) => b[1] - a[1]);
    return mostFrequent[0][0];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const current = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 p-4 text-gray-800">
      <div className="max-w-2xl mx-auto mt-10 rounded-3xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Descubra sua área ideal na TI
        </h1>

        {!showResult && current ? (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              {current.question}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {current.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="bg-blue-100 hover:bg-blue-500 text-blue-700 hover:text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          showResult && (
            <div className="text-center mt-10">
              <h2 className="text-2xl font-bold text-green-600 mb-4">Resultado:</h2>
              <p className="text-lg">
                A área da TI que mais combina com você é:{" "}
                <span className="font-semibold text-blue-600">{calculateArea()}</span>
              </p>
              <button
                className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-800 transition-all"
                onClick={resetQuiz}
              >
                Refazer Quiz
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
