"use client";

import { useState } from "react";

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [resultText, setResultText] = useState("");

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

  const handleOptionChange = (index: number) => {
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
        gerarResultado([...answers, selectedAnswer]);
        setShowResult(true);
      }
    } else {
      alert("Por favor, selecione uma opção.");
    }
  };

  const gerarResultado = (respostas: string[]) => {
    const perfil = {
      "Desenvolvimento": 0,
      "Infraestrutura": 0,
      "Análise de Dados": 0,
      "Segurança": 0,
      "Frontend": 0,
      "Backend": 0,
    };

    respostas.forEach((resposta) => {
      Object.keys(perfil).forEach((key) => {
        if (resposta.includes(key)) perfil[key]++;
      });
    });

    // Pega a área com maior contagem
    const resultadoFinal = Object.entries(perfil).reduce((a, b) => (a[1] > b[1] ? a : b))[0];

    let mensagem = "";

    switch (resultadoFinal) {
      case "Desenvolvimento":
        mensagem = "Você tem perfil para Desenvolvimento! Que tal aprender JavaScript ou Python?";
        break;
      case "Infraestrutura":
        mensagem = "Seu caminho pode estar em Infraestrutura. Redes, servidores e cloud são sua praia!";
        break;
      case "Análise de Dados":
        mensagem = "Análise de Dados parece ideal para você! Power BI, SQL e Python são ótimos pontos de partida.";
        break;
      case "Segurança":
        mensagem = "Você se encaixa bem em Segurança da Informação. Cibersegurança e pentest podem te interessar!";
        break;
      case "Frontend":
        mensagem = "Você tem o olhar criativo do Frontend. React, Tailwind e UI/UX são áreas promissoras!";
        break;
      case "Backend":
        mensagem = "Você manda bem com lógica e estrutura — o Backend é sua cara! Foque em APIs, banco de dados e linguagens como Node ou Python.";
        break;
      default:
        mensagem = "Você tem um perfil multidisciplinar na TI! Explore várias áreas para encontrar sua paixão.";
        break;
    }

    setResultText(mensagem);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-6 sm:p-10 max-w-xl w-full text-center">
        {!showResult ? (
          <>
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 drop-shadow-xl">
              Quiz TI-Saúde
            </h1>

            <p className="text-lg sm:text-xl text-gray-800 font-medium">
              {questions[currentQuestionIndex].question}
            </p>

            <div className="space-y-3 mt-6">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full py-3 px-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 ${
                    selectedOption === index
                      ? "bg-blue-600 text-white scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-500 hover:text-white"
                  }`}
                  onClick={() => handleOptionChange(index)}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={handleNextQuestion}
              className="w-full mt-6 bg-blue-700 hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-full transition-all duration-300"
            >
              {currentQuestionIndex < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
            </button>
          </>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Resultado</h2>
            <p className="text-gray-700 text-lg">{resultText}</p>
            <button
              className="mt-8 bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded-full"
              onClick={() => {
                setCurrentQuestionIndex(0);
                setAnswers([]);
                setShowResult(false);
                setResultText("");
              }}
            >
              Refazer Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
