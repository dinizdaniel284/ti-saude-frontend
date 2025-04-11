"use client";

import React, { useState } from "react";

const questions = [
  {
    question: "Qual dessas atividades você se imagina fazendo com mais facilidade?",
    options: [
      { text: "Analisando planilhas, gráficos e dados", area: "analise" },
      { text: "Criando sites e aplicativos", area: "dev" },
      { text: "Ajudando pessoas a resolver problemas no computador", area: "suporte" },
      { text: "Trabalhando com servidores, redes e segurança", area: "seguranca" },
    ],
  },
  {
    question: "Qual dessas ferramentas você gostaria de aprender a usar?",
    options: [
      { text: "Excel e Power BI", area: "analise" },
      { text: "React ou JavaScript", area: "dev" },
      { text: "Sistemas operacionais e manutenção", area: "suporte" },
      { text: "Linux, AWS ou firewalls", area: "seguranca" },
    ],
  },
  {
    question: "O que mais te motiva em uma profissão?",
    options: [
      { text: "Analisar e encontrar padrões", area: "analise" },
      { text: "Criar e inovar soluções digitais", area: "dev" },
      { text: "Ajudar e orientar pessoas", area: "suporte" },
      { text: "Proteger sistemas e dados", area: "seguranca" },
    ],
  },
  {
    question: "Você prefere trabalhar com:",
    options: [
      { text: "Números e estatísticas", area: "analise" },
      { text: "Design e código", area: "dev" },
      { text: "Interações humanas e suporte", area: "suporte" },
      { text: "Tecnologia de infraestrutura", area: "seguranca" },
    ],
  },
  {
    question: "Você se sente mais confortável:",
    options: [
      { text: "Interpretando gráficos e relatórios", area: "analise" },
      { text: "Criando páginas ou sistemas interativos", area: "dev" },
      { text: "Resolvendo dúvidas de usuários", area: "suporte" },
      { text: "Configurando redes ou servidores", area: "seguranca" },
    ],
  },
  {
    question: "Qual cenário te atrai mais?",
    options: [
      { text: "Análise preditiva para negócios", area: "analise" },
      { text: "Desenvolvimento de apps ou jogos", area: "dev" },
      { text: "Help desk e atendimento técnico", area: "suporte" },
      { text: "Monitoramento de sistemas e segurança digital", area: "seguranca" },
    ],
  },
  {
    question: "Como você prefere aprender?",
    options: [
      { text: "Estudando dados e relatórios", area: "analise" },
      { text: "Praticando com códigos e frameworks", area: "dev" },
      { text: "Com situações reais e suporte técnico", area: "suporte" },
      { text: "Testando sistemas e ambientes de rede", area: "seguranca" },
    ],
  },
  {
    question: "Você se identifica mais com:",
    options: [
      { text: "Projetos analíticos", area: "analise" },
      { text: "Projetos criativos e funcionais", area: "dev" },
      { text: "Atendimento e resolução de problemas", area: "suporte" },
      { text: "Prevenção de ameaças e vulnerabilidades", area: "seguranca" },
    ],
  },
  {
    question: "Qual dessas situações você gostaria de resolver?",
    options: [
      { text: "Entender por que um negócio não está crescendo com dados", area: "analise" },
      { text: "Criar uma plataforma online para um serviço novo", area: "dev" },
      { text: "Ensinar alguém a usar um sistema de forma eficiente", area: "suporte" },
      { text: "Identificar e evitar ataques hackers", area: "seguranca" },
    ],
  },
  {
    question: "O que mais te representa?",
    options: [
      { text: "Curiosidade por estatísticas e tendências", area: "analise" },
      { text: "Paixão por desenvolver soluções digitais", area: "dev" },
      { text: "Empatia e paciência para lidar com pessoas", area: "suporte" },
      { text: "Cuidado com a proteção de dados e sistemas", area: "seguranca" },
    ],
  },
];

const results = {
  analise: {
    title: "Análise de Dados",
    message: "Você tem um perfil analítico! A área de Análise de Dados pode ser perfeita para você. Comece estudando Excel, Power BI, SQL e Python.",
  },
  dev: {
    title: "Desenvolvimento de Sistemas",
    message: "Você tem um perfil criativo e lógico! O Desenvolvimento de Software é ideal para você. Comece com HTML, CSS, JavaScript e Python.",
  },
  suporte: {
    title: "Suporte Técnico",
    message: "Você tem um perfil comunicativo e prático! O Suporte Técnico pode te oferecer boas oportunidades. Estude hardware, redes e sistemas operacionais.",
  },
  seguranca: {
    title: "Segurança da Informação / Cloud",
    message: "Você gosta de proteger e organizar sistemas! A área de Segurança da Informação ou Cloud pode ser seu futuro. Estude redes, Linux e AWS.",
  },
};

const QuizTI = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ analise: 0, dev: 0, suporte: 0, seguranca: 0 });
  const [result, setResult] = useState<null | { title: string; message: string }>(null);

  const handleAnswer = (area: keyof typeof scores) => {
    const updatedScores = { ...scores, [area]: scores[area] + 1 };

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setScores(updatedScores);
    } else {
      const topArea = Object.entries(updatedScores).reduce((a, b) => (a[1] >= b[1] ? a : b))[0];
      setResult(results[topArea as keyof typeof results]);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScores({ analise: 0, dev: 0, suporte: 0, seguranca: 0 });
    setResult(null);
  };

  if (result) {
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold mb-4">{result.title}</h2>
        <p className="mb-6">{result.message}</p>
        <button
          onClick={restartQuiz}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Recomeçar Quiz
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-xl mx-auto p-6 font-sans">
      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
      <ul className="space-y-3">
        {question.options.map((opt, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleAnswer(opt.area as keyof typeof scores)}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {opt.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizTI;
