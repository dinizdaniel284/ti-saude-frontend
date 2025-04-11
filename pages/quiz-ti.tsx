"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const questions = [
  {
    question: "Você gosta de resolver problemas lógicos e lidar com algoritmos?",
    options: [
      { text: "Sim, adoro lógica!", area: "backend" },
      { text: "Prefiro design e interação", area: "frontend" },
      { text: "Curto dados e estatísticas", area: "dados" },
      { text: "Quero algo mais visual", area: "frontend" },
    ],
  },
  {
    question: "Tem interesse em bancos de dados e estruturas de dados?",
    options: [
      { text: "Sim, bastante", area: "backend" },
      { text: "Não muito", area: "frontend" },
      { text: "Sim, principalmente para análise", area: "dados" },
      { text: "Prefiro trabalhar com telas", area: "frontend" },
    ],
  },
  {
    question: "Gosta de transformar dados em gráficos e relatórios?",
    options: [
      { text: "Sim, amo!", area: "dados" },
      { text: "Gosto, mas prefiro programar lógica", area: "backend" },
      { text: "Não muito", area: "frontend" },
      { text: "Curto design", area: "frontend" },
    ],
  },
];

const QuizTI = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ frontend: 0, backend: 0, dados: 0 });
  const [result, setResult] = useState("");

  const handleAnswer = (area) => {
    const newScores = { ...scores, [area]: scores[area] + 1 };
    setScores(newScores);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const topArea = Object.entries(newScores).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
      setResult(topArea);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-6 md:p-10">
        {result ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">Você combina com: {result.toUpperCase()}</h2>
            <p className="text-gray-700 text-lg">Explore mais sobre essa área e mergulhe na TI!</p>
          </motion.div>
        ) : (
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-2xl font-bold text-blue-700 mb-6">
              Pergunta {currentQuestion + 1} de {questions.length}
            </h1>
            <p className="text-lg font-medium text-gray-800 mb-4">{questions[currentQuestion].question}</p>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((opt, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleAnswer(opt.area)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl shadow-md transition"
                >
                  {opt.text}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default QuizTI;

