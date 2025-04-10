"use client";

import { useState } from "react";

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
];

export default function QuizTI() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (category: string) => {
    const newAnswers = [...answers, category];
    setAnswers(newAnswers);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Finaliza e calcula o resultado
      const counts: Record<string, number> = {};
      newAnswers.forEach((answer) => {
        counts[answer] = (counts[answer] || 0) + 1;
      });

      const topCategory = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      setResult(topCategory);
    }
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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Descubra sua área ideal na TI</h1>

      {result ? (
        <div className="max-w-md">
          <h2 className="text-xl font-semibold mb-4">Resultado:</h2>
          <p className="mb-6">{resultMessages[result]}</p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
            onClick={resetQuiz}
          >
            Refazer Quiz
          </button>
        </div>
      ) : (
        <div className="max-w-xl">
          <h2 className="text-lg font-medium mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="grid gap-4">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                onClick={() => handleAnswer(option.category)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
