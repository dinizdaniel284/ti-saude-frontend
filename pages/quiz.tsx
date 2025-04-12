"use client";

import { useState } from "react";

interface Question {
  question: string;
  options: string[];
}

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions: Question[] = [
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

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const selectedAnswer = questions[currentQuestionIndex].options[selectedOption];
      setAnswers((prev) => [...prev, selectedAnswer]);
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

        {/* Contador de Perguntas */}
        <p className="text-lg text-gray-600 mb-4">
          Pergunta {currentQuestionIndex + 1} de {questions.length}
        </p>

        <div className="space-y-6">
          <p className="text-xl text-gray-800">{questions[currentQuestionIndex].question}</p>

          <div className="space-y-4">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`w-full py-3 px-4 border rounded-lg text-lg transition-all duration-300 ease-in-out transform ${
                  selectedOption === index
                    ? "bg-blue-600 text-white scale-105"
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
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 w-full transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {currentQuestionIndex < questions.length - 1 ? "Próxima Pergunta" : "Finalizar Quiz"}
            </button>
          </div>
        </div>

        {/* Tela de Conclusão */}
        {currentQuestionIndex === questions.length && (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Parabéns! Você completou o Quiz.
            </h2>
            <p className="text-lg text-gray-700">Aqui estão suas respostas:</p>
            <ul className="mt-4 space-y-2 text-left text-gray-800">
              {answers.map((answer, index) => (
                <li key={index} className="text-xl">
                  Pergunta {index + 1}: {answer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
