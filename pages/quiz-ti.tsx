 "use client";

import { useState } from "react";
import clsx from "clsx";

type Question = {
  question: string;
  options: { text: string; category: string }[];
};

const questions: Question[] = [
  {
    question: "Você prefere trabalhar com:",
    options: [
      { text: "Números, estatísticas e relatórios", category: "Dados" },
      { text: "Criar sistemas e páginas na internet", category: "Desenvolvimento" },
      { text: "Prevenir ataques e proteger informações", category: "Segurança" },
    ],
  },
  {
    question: "Qual dessas tarefas te atrai mais?",
    options: [
      { text: "Analisar exames e relatórios médicos digitalmente", category: "Dados" },
      { text: "Desenvolver sistemas de agendamento para clínicas", category: "Desenvolvimento" },
      { text: "Implementar controles de acesso em hospitais", category: "Segurança" },
    ],
  },
  {
    question: "Você se considera uma pessoa mais:",
    options: [
      { text: "Analítica e detalhista", category: "Dados" },
      { text: "Criativa e prática", category: "Desenvolvimento" },
      { text: "Cuidadosa e estratégica", category: "Segurança" },
    ],
  },
  {
    question: "Na área da saúde, você gosta mais de:",
    options: [
      { text: "Lidar com estatísticas de pacientes", category: "Dados" },
      { text: "Ajudar a automatizar rotinas", category: "Desenvolvimento" },
      { text: "Proteger dados sensíveis dos pacientes", category: "Segurança" },
    ],
  },
  {
    question: "Você gostaria de aprender mais sobre:",
    options: [
      { text: "Power BI, SQL, Excel avançado", category: "Dados" },
      { text: "HTML, CSS, JavaScript, React", category: "Desenvolvimento" },
      { text: "Firewalls, criptografia, autenticação", category: "Segurança" },
    ],
  },
  {
    question: "Em um projeto, você se sente mais confortável:",
    options: [
      { text: "Montando relatórios para tomada de decisões", category: "Dados" },
      { text: "Codando e testando funcionalidades", category: "Desenvolvimento" },
      { text: "Identificando e corrigindo vulnerabilidades", category: "Segurança" },
    ],
  },
];

export default function QuizTI() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (category: string, index: number) => {
    setSelectedOption(index);

    setTimeout(() => {
      const newAnswers = [...answers, category];
      setAnswers(newAnswers);
      setSelectedOption(null);

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        const counts: Record<string, number> = {};
        newAnswers.forEach((answer) => {
          counts[answer] = (counts[answer] || 0) + 1;
        });

        const topCategory = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
        setResult(topCategory);
      }
    }, 300);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  const resultMessages: Record<string, string> = {
    Dados:
      "Você tem perfil para Análise de Dados! Com sua atenção aos detalhes e raciocínio lógico, trabalhar com bancos de dados e visualizações é uma ótima escolha.",
    Desenvolvimento:
      "Você tem perfil para Desenvolvimento Web! Sua criatividade e visão prática combinam bem com a criação de soluções digitais para o setor da saúde.",
    Segurança:
      "Você tem perfil para Segurança da Informação! Seu cuidado e estratégia são ideais para proteger dados e sistemas críticos da área da saúde.",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-10">
      <div className="max-w-xl w-full bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-6">
        <h1 className="text-3xl font-bold text-center text-purple-400">
          Descubra sua área ideal na TI + Saúde
        </h1>

        {result ? (
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold text-green-400">Resultado:</h2>
            <p className="text-lg">{resultMessages[result]}</p>
            <button
              onClick={resetQuiz}
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition"
            >
              Refazer Quiz
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-center">
              {questions[currentQuestion].question}
            </h2>
            <div className="grid gap-4">
              {questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.category, idx)}
                  className={clsx(
                    "px-4 py-3 rounded-xl transition font-medium text-left border",
                    selectedOption === idx
                      ? "bg-purple-600 border-purple-400"
                      : "bg-gray-700 hover:bg-gray-600 border-gray-500"
                  )}
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
