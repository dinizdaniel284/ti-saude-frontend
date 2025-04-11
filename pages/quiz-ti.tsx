"use client";
import { useState } from "react";

const questions = [
  {
    question: "Qual dessas linguagens é mais usada para desenvolver APIs?",
    options: ["HTML", "Python", "CSS", "SQL"],
    answer: "Python",
  },
  {
    question: "O que significa HTTP?",
    options: [
      "HyperText Transfer Protocol",
      "HighText Transfer Protocol",
      "HyperTool Transfer Protocol",
      "None of the above",
    ],
    answer: "HyperText Transfer Protocol",
  },
  {
    question: "Qual banco de dados é orientado a documentos?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    answer: "MongoDB",
  },
  {
    question: "Qual dessas ferramentas é usada para controle de versão?",
    options: ["Docker", "Git", "Figma", "Jira"],
    answer: "Git",
  },
];

export default function QuizTI() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 700);
  };

  return (
    <div className="min-h-screen bg-blue-100 text-center p-6">
      {/* Cabeçalho bonito com mensagem e botão */}
      <h1 className="text-4xl font-extrabold text-blue-700 mb-2 drop-shadow-md">
        Bem-vindo ao Quiz Interativo de TI!
      </h1>
      <p className="text-lg text-blue-800 mb-6">
        Teste seus conhecimentos e descubra sua afinidade com o mundo da tecnologia.
      </p>
      <a
        href="/beginners-guide.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mb-10 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-lg font-bold py-3 px-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-blue-500 transition duration-300">
          Guia para Iniciantes
        </button>
      </a>

      {/* Corpo do Quiz */}
      {!showResult ? (
        <div className="bg-white rounded-xl p-6 shadow-xl max-w-xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`w-full py-3 px-4 rounded-xl text-lg font-medium transition-colors duration-300
                  ${
                    selectedOption === option
                      ? option === questions[currentQuestion].answer
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                      : "bg-blue-200 hover:bg-blue-300 text-gray-800"
                  }`}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-xl shadow-xl max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Resultado Final</h2>
          <p className="text-lg text-gray-700 mb-4">
            Você acertou {score} de {questions.length} perguntas!
          </p>
          <a
            href="/quiz-ti"
            className="inline-block mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl"
          >
            Refazer Quiz
          </a>
        </div>
      )}
    </div>
  );
}
