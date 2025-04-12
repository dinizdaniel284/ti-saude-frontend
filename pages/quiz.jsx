"use client";
import { useState } from "react";

const questions = [
  {
    question: "O que você mais curte fazer?",
    options: [
      { text: "Criar sites e sistemas", area: "Desenvolvimento" },
      { text: "Analisar dados e gráficos", area: "Análise de Dados" },
      { text: "Configurar redes", area: "Infraestrutura" },
      { text: "Proteger sistemas", area: "Segurança" },
    ],
  },
  {
    question: "Qual ferramenta você usaria agora?",
    options: [
      { text: "React", area: "Desenvolvimento" },
      { text: "Power BI", area: "Análise de Dados" },
      { text: "Cisco Packet Tracer", area: "Infraestrutura" },
      { text: "Kali Linux", area: "Segurança" },
    ],
  },
  {
    question: "O que te dá mais satisfação?",
    options: [
      { text: "Fazer um sistema funcionar", area: "Desenvolvimento" },
      { text: "Ver insights de dados", area: "Análise de Dados" },
      { text: "Montar uma rede", area: "Infraestrutura" },
      { text: "Detectar falhas de segurança", area: "Segurança" },
    ],
  },
  {
    question: "Qual linguagem você prefere?",
    options: [
      { text: "JavaScript", area: "Desenvolvimento" },
      { text: "Python", area: "Análise de Dados" },
      { text: "Shell Script", area: "Infraestrutura" },
      { text: "C", area: "Segurança" },
    ],
  },
  {
    question: "Qual ambiente você se sente melhor?",
    options: [
      { text: "VS Code, Git", area: "Desenvolvimento" },
      { text: "Excel, Power BI", area: "Análise de Dados" },
      { text: "Linux, switches", area: "Infraestrutura" },
      { text: "Terminais, firewalls", area: "Segurança" },
    ],
  },
  {
    question: "Como você aprende melhor?",
    options: [
      { text: "Criando sistemas", area: "Desenvolvimento" },
      { text: "Explorando dados", area: "Análise de Dados" },
      { text: "Fazendo testes em redes", area: "Infraestrutura" },
      { text: "Simulando ataques", area: "Segurança" },
    ],
  },
  {
    question: "Qual curso você faria hoje?",
    options: [
      { text: "Full Stack", area: "Desenvolvimento" },
      { text: "Data Science", area: "Análise de Dados" },
      { text: "Redes de Computadores", area: "Infraestrutura" },
      { text: "Cyber Security", area: "Segurança" },
    ],
  },
  {
    question: "Qual papel você se vê?",
    options: [
      { text: "Dev", area: "Desenvolvimento" },
      { text: "Analista de Dados", area: "Análise de Dados" },
      { text: "Administrador de Redes", area: "Infraestrutura" },
      { text: "Analista de Segurança", area: "Segurança" },
    ],
  },
  {
    question: "Qual tarefa você faria agora?",
    options: [
      { text: "Programar um app", area: "Desenvolvimento" },
      { text: "Fazer relatório de dados", area: "Análise de Dados" },
      { text: "Configurar servidor", area: "Infraestrutura" },
      { text: "Analisar logs", area: "Segurança" },
    ],
  },
  {
    question: "O que te motiva?",
    options: [
      { text: "Criar soluções", area: "Desenvolvimento" },
      { text: "Ajudar com dados", area: "Análise de Dados" },
      { text: "Manter tudo funcionando", area: "Infraestrutura" },
      { text: "Proteger contra ataques", area: "Segurança" },
    ],
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (area, index) => {
    const newAnswers = [...answers, area];
    setAnswers(newAnswers);
    setSelectedOption(index);

    setTimeout(() => {
      setSelectedOption(null);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 300);
  };

  const calculateArea = () => {
    const count = {};
    answers.forEach((area) => {
      count[area] = (count[area] || 0) + 1;
    });
    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    return sorted[0][0];
  };

  const current = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 p-4 text-gray-800">
      <div className="max-w-2xl mx-auto mt-10 rounded-xl shadow-lg bg-white p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Quiz: Sua área ideal na TI
        </h1>

        {!showResult && current ? (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-blue-600">{current.question}</h2>
            <div className="grid grid-cols-1 gap-4">
              {current.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.area, idx)}
                  className={`transition-all duration-300 p-4 rounded-xl shadow-md border text-left font-medium ${
                    selectedOption === idx
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 hover:bg-blue-300 text-blue-800"
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Resultado:</h2>
            <p className="text-lg">
              A área da TI que mais combina com você é:{" "}
              <span className="font-semibold text-blue-700">{calculateArea()}</span>
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
  );
        }
      
