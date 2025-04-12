// pages/quiz.tsx
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
  const [quizFinished, setQuizFinished] = useState(false);

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
        setQuizFinished(true);
      }
    } else {
      alert("Por favor, selecione uma opção.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-center">
        {!quizFinished ? (
          <>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6">
              Quiz TI-Saúde
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Pergunta {currentQuestionIndex + 1} de {questions.length}
            </p>
            <p className="text-xl text-gray-800 mb-6 font-medium">
              {questions[currentQuestionIndex].question}
            </p>

            <div className="space-y-4 mb-6">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <label
                  key={index}
                  className={`block cursor-pointer px-5 py-4 rounded-xl border-2 text-lg font-medium transition duration-300 ${
                    selectedOption === index
                      ? "border-green-600 bg-green-100 shadow-md"
                      : "border-gray-300 bg-white hover:bg-gray-100"
                  }`}
                >
                  <input
                    type="radio"
                    name="option"
                    value={index}
                    checked={selectedOption === index}
                    onChange={() => handleOptionChange(index)}
                    className="mr-3 accent-green-600"
                  />
                  {option}
                </label>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              {currentQuestionIndex === questions.length - 1 ? "Finalizar" : "Próxima"}
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-green-700 mb-6">Quiz Finalizado!</h2>
            <p className="text-lg text-gray-700 mb-4">Aqui estão suas respostas:</p>
            <ul className="text-left text-gray-800 space-y-4">
              {answers.map((answer, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded-xl shadow">
                  <strong className="text-blue-700">{questions[index].question}</strong><br />
                  <span className="ml-2">{answer}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
