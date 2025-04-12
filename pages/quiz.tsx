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
  const [loadingResult, setLoadingResult] = useState(false);

  const questions: Question[] = [
    {
      question: "Qual destas áreas da TI mais te desperta curiosidade?",
      options: ["Desenvolvimento de Software", "Infraestrutura de Redes", "Análise de Dados", "Cibersegurança"],
    },
    {
      question: "Você se imagina trabalhando com interpretação e visualização de dados?",
      options: ["Sim, adoro isso!", "Não muito, prefiro outra área"],
    },
    {
      question: "Se pudesse escolher agora, onde preferiria atuar?",
      options: ["Frontend (interface do usuário)", "Backend (lógica por trás)", "Fullstack (ambos)"],
    },
    {
      question: "Machine Learning parece interessante para você?",
      options: ["Com certeza!", "Acho confuso", "Tenho curiosidade, mas não conheço muito"],
    },
    {
      question: "Você gostaria de trabalhar com bancos de dados e grandes volumes de informação?",
      options: ["Sim, gosto dessa área", "Não, prefiro outras áreas", "Talvez, dependendo do projeto"],
    },
    {
      question: "Segurança digital te parece um campo importante e empolgante?",
      options: ["Sim, totalmente!", "Não é o que me atrai", "Talvez, tenho interesse crescente"],
    },
    {
      question: "Você prefere resolver problemas lógicos ou lidar com pessoas e processos?",
      options: ["Problemas lógicos", "Pessoas e processos", "Um pouco dos dois"],
    },
    {
      question: "Como você se sente aprendendo novas linguagens de programação?",
      options: ["Motivado, gosto de aprender", "Um pouco perdido, mas animado", "Não gosto muito"],
    },
    {
      question: "Você se vê criando soluções para facilitar o dia a dia de profissionais da saúde?",
      options: ["Sim! Quero fazer a diferença", "Talvez, dependendo da área", "Prefiro trabalhar nos bastidores"],
    },
    {
      question: "Prefere projetos com resultados visuais ou que otimizem o funcionamento interno de sistemas?",
      options: ["Visuais", "Funcionamento interno", "Ambos são legais"],
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
        setLoadingResult(true);
        setTimeout(() => {
          setQuizFinished(true);
          setLoadingResult(false);
        }, 2000);
      }
    } else {
      alert("Por favor, selecione uma opção.");
    }
  };

  const getProfile = () => {
    const area = answers[0];
    if (area.includes("Desenvolvimento")) return "Desenvolvedor(a) de Software";
    if (area.includes("Infraestrutura")) return "Especialista em Redes e Suporte";
    if (area.includes("Análise")) return "Analista de Dados";
    if (area.includes("Cibersegurança")) return "Especialista em Segurança da Informação";
    return "Profissional de TI em formação";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-10 max-w-3xl w-full text-center animate-fade-in">
        {loadingResult ? (
          <div className="flex flex-col items-center justify-center space-y-6 animate-fade-in-up">
            <div className="w-16 h-16 border-4 border-blue-300 border-t-blue-700 rounded-full animate-spin"></div>
            <p className="text-xl text-blue-800 font-medium">Calculando seu perfil...</p>
          </div>
        ) : quizFinished ? (
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
        ) : (
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
        )}
      </div>
    </div>
  );
}