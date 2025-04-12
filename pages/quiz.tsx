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

  // Lógica para determinar o perfil
  const getProfile = () => {
    const areaTI = answers[0]; // A primeira resposta é sobre a área de TI.
    if (areaTI === "Desenvolvimento") {
      return "Desenvolvedor de Sistemas";
    } else if (areaTI === "Infraestrutura") {
      return "Especialista em Infraestrutura de TI";
    } else if (areaTI === "Análise de Dados") {
      return "Analista de Dados";
    } else if (areaTI === "Segurança") {
      return "Especialista em Segurança da Informação";
    } else {
      return "Profissional de TI";
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
            <p className="text-xl text-gray-800 mb-6">{questions[currentQuestionIndex].question}</p>

            <div className="space-y-4 mb-6">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <label
                  key={index}
                  className={`block cursor-pointer text-left px-4 py-3 rounded-lg border-2 ${
                    selectedOption === index
                      ? "border-blue-600 bg-blue-100"
                      : "border-gray-300 bg-white"
                  } hover:bg-blue-50 transition`}
                >
                  <input
                    type="radio"
                    name="option"
                    value={index}
                    checked={selectedOption === index}
                    onChange={() => handleOptionChange(index)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition"
            >
              {currentQuestionIndex === questions.length - 1 ? "Finalizar" : "Próxima"}
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-green-700 mb-6">Parabéns, quiz finalizado!</h2>
            <p className="text-lg text-gray-700 mb-4">Aqui estão suas respostas:</p>
            <ul className="text-left text-gray-800 space-y-2">
              {answers.map((answer, index) => (
                <li key={index}>
                  <strong>{questions[index].question}</strong><br />
                  <span className="ml-2">{answer}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xl font-semibold text-blue-700">
              Você se identifica como um {getProfile()}!
            </p>
          </>
        )}
      </div>
    </div>
  );
}
