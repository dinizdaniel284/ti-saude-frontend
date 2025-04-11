import { useState } from "react";
import BannerQuiz from "../components/BannerQuiz"; // Importa o banner

const questions = [
  // ... (mantém suas perguntas do jeito que estão)
];

export default function QuizTI() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 p-4 text-gray-800">
      <div className="max-w-3xl mx-auto mt-10">
        <BannerQuiz /> {/* Banner no topo */}

        <div className="bg-white shadow-2xl rounded-3xl p-8">
          {!showResult ? (
            <div className="animate-fade-in">
              <h2 className="text-xl font-semibold mb-4 text-blue-500">
                {questions[currentQuestion].question}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {questions[currentQuestion].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option)}
                    className="bg-blue-100 hover:bg-blue-400 text-blue-700 font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:text-white shadow-md"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                Resultado:
              </h2>
              <p className="text-lg">
                A área da TI que mais combina com você é:{" "}
                <span className="font-semibold text-blue-600">
                  {calculateArea()}
                </span>
              </p>
              <button
                className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-800 transition-all"
                onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers([]);
                  setShowResult(false);
                }}
              >
                Refazer Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
