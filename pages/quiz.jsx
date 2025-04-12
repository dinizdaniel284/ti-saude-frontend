"use client";

import { useState } from "react";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: "Qual área da TI mais te interessa?",
      options: ["Desenvolvimento", "Infraestrutura", "Análise de Dados", "Segurança"],
    },
    {
      question: "Você gosta de trabalhar com análise de dados?",
      options: ["Sim", "Não"],
    },
    {
      question: "Prefere trabalhar mais no frontend ou backend?",
      options: ["Frontend", "Backend", "Ambos"],
    },
  ];

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const selectedAnswer = questions[currentQuestionIndex].options[selectedOption];
      setAnswers([...answers, selectedAnswer]);
      setSelectedOption(null);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert("Quiz Finalizado! Respostas: " + JSON.stringify([...answers, selectedAnswer]));
      }
    } else {
      alert("Por favor, selecione uma opção.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white bg-opacity-80 shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 drop-shadow-xl">
          Quiz TI-Saúde
        </h1>

        <div className="space-y-6">
          <p className="text-xl text-gray-800">{questions[currentQuestionIndex].question}</p>

          <div className="space-y-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`w-full py-3 px-4 border rounded-lg text-lg ${
                  selectedOption === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-blue-500"
                }`}
                onClick={() => handleOptionChange(index)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={handleNextQuestion}
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 w-full"
            >
              {currentQuestionIndex < questions.length - 1 ? "Próxima Pergunta" : "Finalizar Quiz"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
