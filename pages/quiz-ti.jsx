"use client";
import { useState } from "react";

const questions = [
  {
    question: "Com qual área da TI você mais se identifica?",
    options: [
      "Desenvolvimento de Software",
      "Banco de Dados",
      "Análise de Dados",
      "Segurança da Informação",
      "Infraestrutura de Redes",
    ],
  },
  {
    question: "Você prefere trabalhar mais com...",
    options: [
      "Lógica e Algoritmos",
      "Gráficos e Visualizações",
      "Configuração de Servidores",
      "Scripts e Automatizações",
      "Gerenciamento de Dados",
    ],
  },
  {
    question: "Qual ambiente te atrai mais?",
    options: [
      "Ambiente de desenvolvimento (IDE, Git)",
      "Ambiente de análise (Excel, Power BI)",
      "Ambiente de rede (Cisco, Wireshark)",
      "Ambiente de banco (SQL, MongoDB)",
      "Ambiente de segurança (Firewalls, logs)",
    ],
  },
  {
    question: "Você gosta mais de...",
    options: [
      "Codar do zero",
      "Interpretar dados",
      "Configurar máquinas e sistemas",
      "Proteger informações",
      "Organizar informações em tabelas",
    ],
  },
  {
    question: "Se tivesse que aprender uma ferramenta agora, qual seria?",
    options: ["React", "Power BI", "PostgreSQL", "Cisco Packet Tracer", "Kali Linux"],
  },
  {
    question: "O que mais te motiva na tecnologia?",
    options: [
      "Criar soluções com código",
      "Transformar dados em decisões",
      "Manter sistemas funcionando",
      "Proteger empresas de ameaças",
      "Gerenciar grandes volumes de dados",
    ],
  },
  {
    question: "Com qual linguagem você tem mais afinidade?",
    options: ["JavaScript", "Python", "SQL", "Shell Script", "C/C++"],
  },
  {
    question: "Em um projeto, qual seria seu papel ideal?",
    options: [
      "Programador",
      "Analista de dados",
      "Administrador de redes",
      "Especialista em segurança",
      "Gestor de banco de dados",
    ],
  },
  {
    question: "Prefere trabalhar...",
    options: [
      "Em equipe com devs",
      "Com dashboards e relatórios",
      "Com servidores e switches",
      "Na defesa contra hackers",
      "Com estrutura e performance de dados",
    ],
  },
  {
    question: "Você se vê atuando mais...",
    options: [
      "Como desenvolvedor full stack",
      "Como cientista/analista de dados",
      "Como administrador de redes",
      "Como analista de segurança da informação",
      "Como DBA (Administrador de Banco de Dados)",
    ],
  },
];

export default function QuizPage() {
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

  const current = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 p-4 text-gray-800">
      <div className="max-w-2xl mx-auto mt-10 rounded-3xl p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Descubra sua área ideal na TI
        </h1>

        {!showResult && current ? (
          <div className="animate-fade-in">
            <h2 className="text-xl font-semibold mb-4 text-blue-500">
              {current.question}
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {current.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="bg-blue-100 hover:bg-blue-500 text-blue-700 hover:text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : showResult ? (
          <div className="text-center mt-10">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Resultado:</h2>
            <p className="text-lg">
              A área da TI que mais combina com você é:{" "}
              <span className="font-semibold text-blue-600">{calculateArea()}</span>
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
        ) : null}
      </div>
    </div>
  );
      }
