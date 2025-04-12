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

  const getProfile = () => {
    const areaTI = answers[0];
    if (areaTI === "Desenvolvimento") return "Desenvolvedor de Sistemas";
    if (areaTI === "Infraestrutura") return "Especialista em Infraestrutura de TI";
    if (areaTI === "Análise de Dados") return "Analista de Dados";
    if (areaTI === "Segurança") return "Especialista em Segurança da Informação";
    return "Profissional de TI";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-center animate-fade-in">
        {!quizFinished ? (
          <>
            <h1 className="text-4xl font-extrabold text-blue-900 mb-6 drop-shadow-sm">
              Quiz TI-Saúde
            </h1>
            <p className="text-lg text-gray-700 mb-2">
              Pergunta {currentQuestionIndex + 1} de {questions.length}
            </p>
            <p className="text-2xl text-gray-800 font-medium mb-6">{questions[currentQuestionIndex].question}</p>

            <div className="space-y-4 mb-8">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <label
                  key={index}
                  className={`block cursor-pointer px-5 py-4 rounded-xl border-2 font-medium text-gray-800 transition-all duration-300 ease-in-out ${
                    selectedOption === index
                      ? "border-blue-600 bg-blue-100 shadow-md scale-105"
                      : "border-gray-300 bg-white hover:bg-blue-50"
                  }`}
                >
                  <input
                    type="radio"
                    name="option"
                    value={index}
                    checked={selectedOption === index}
                    onChange={() => handleOptionChange(index)}
                    className="mr-3 accent-blue-600"
                  />
                  {option}
                </label>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
            >
              {currentQuestionIndex === questions.length - 1 ? "Finalizar" : "Próxima"}
            </button>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-green-700 mb-6 animate-fade-in-up">Parabéns, quiz finalizado!</h2>
            <p className="text-lg text-gray-700 mb-4">Aqui estão suas respostas:</p>
            <ul className="text-left text-gray-800 space-y-4 mb-6">
              {answers.map((answer, index) => (
                <li key={index} className="bg-white bg-opacity-70 p-4 rounded-xl shadow">
                  <strong className="text-blue-800">{questions[index].question}</strong>
                  <br />
                  <span className="ml-2">{answer}</span>
                </li>
              ))}
            </ul>
            <p className="text-2xl font-semibold text-purple-800">
              Você se identifica como um <span className="text-yellow-500">{getProfile()}</span>!
            </p>
          </>
        )}
      </div>
    </div>
  );
}
