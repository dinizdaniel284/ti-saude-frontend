 "use client";

import React, { useState } from 'react';

const questions = [
  {
    question: 'Qual dessas atividades você se imagina fazendo com mais facilidade?',
    options: [
      { text: 'Analisando planilhas, gráficos e dados', area: 'analise' },
      { text: 'Criando sites e aplicativos', area: 'dev' },
      { text: 'Ajudando pessoas a resolver problemas no computador', area: 'suporte' },
      { text: 'Trabalhando com servidores, redes e segurança', area: 'seguranca' },
    ],
  },
  {
    question: 'Qual dessas ferramentas você gostaria de aprender a usar?',
    options: [
      { text: 'Excel e Power BI', area: 'analise' },
      { text: 'React ou JavaScript', area: 'dev' },
      { text: 'Sistemas operacionais e manutenção', area: 'suporte' },
      { text: 'Linux, AWS ou firewalls', area: 'seguranca' },
    ],
  },
  {
    question: 'O que mais te motiva em uma profissão?',
    options: [
      { text: 'Analisar e encontrar padrões', area: 'analise' },
      { text: 'Criar e inovar soluções digitais', area: 'dev' },
      { text: 'Ajudar e orientar pessoas', area: 'suporte' },
      { text: 'Proteger sistemas e dados', area: 'seguranca' },
    ],
  },
  {
    question: 'Você prefere trabalhar com:',
    options: [
      { text: 'Números e estatísticas', area: 'analise' },
      { text: 'Design e código', area: 'dev' },
      { text: 'Interações humanas e suporte', area: 'suporte' },
      { text: 'Tecnologia de infraestrutura', area: 'seguranca' },
    ],
  },
  {
    question: 'Você se sente mais confortável:',
    options: [
      { text: 'Interpretando gráficos e relatórios', area: 'analise' },
      { text: 'Criando páginas ou sistemas interativos', area: 'dev' },
      { text: 'Resolvendo dúvidas de usuários', area: 'suporte' },
      { text: 'Configurando redes ou servidores', area: 'seguranca' },
    ],
  },
  {
    question: 'Qual cenário te atrai mais?',
    options: [
      { text: 'Análise preditiva para negócios', area: 'analise' },
      { text: 'Desenvolvimento de apps ou jogos', area: 'dev' },
      { text: 'Help desk e atendimento técnico', area: 'suporte' },
      { text: 'Monitoramento de sistemas e segurança digital', area: 'seguranca' },
    ],
  },
  {
    question: 'Como você prefere aprender?',
    options: [
      { text: 'Estudando dados e relatórios', area: 'analise' },
      { text: 'Praticando com códigos e frameworks', area: 'dev' },
      { text: 'Com situações reais e suporte técnico', area: 'suporte' },
      { text: 'Testando sistemas e ambientes de rede', area: 'seguranca' },
    ],
  },
  {
    question: 'Você se identifica mais com:',
    options: [
      { text: 'Projetos analíticos', area: 'analise' },
      { text: 'Projetos criativos e funcionais', area: 'dev' },
      { text: 'Atendimento e resolução de problemas', area: 'suporte' },
      { text: 'Prevenção de ameaças e vulnerabilidades', area: 'seguranca' },
    ],
  },
  {
    question: 'Qual dessas situações você gostaria de resolver?',
    options: [
      { text: 'Entender por que um negócio não está crescendo com dados', area: 'analise' },
      { text: 'Criar uma plataforma online para um serviço novo', area: 'dev' },
      { text: 'Ensinar alguém a usar um sistema de forma eficiente', area: 'suporte' },
      { text: 'Identificar e evitar ataques hackers', area: 'seguranca' },
    ],
  },
  {
    question: 'O que mais te representa?',
    options: [
      { text: 'Curiosidade por estatísticas e tendências', area: 'analise' },
      { text: 'Paixão por desenvolver soluções digitais', area: 'dev' },
      { text: 'Empatia e paciência para lidar com pessoas', area: 'suporte' },
      { text: 'Cuidado com a proteção de dados e sistemas', area: 'seguranca' },
    ],
  },
];

const results = {
  analise: {
    title: 'Análise de Dados',
    message: 'Você tem um perfil analítico! A área de Análise de Dados pode ser perfeita para você. Comece estudando Excel, Power BI, SQL e Python.'
  },
  dev: {
    title: 'Desenvolvimento de Sistemas',
    message: 'Você tem um perfil criativo e lógico! O Desenvolvimento de Software é ideal para você. Comece com HTML, CSS, JavaScript e Python.'
  },
  suporte: {
    title: 'Suporte Técnico',
    message: 'Você tem um perfil comunicativo e prático! O Suporte Técnico pode te oferecer boas oportunidades. Estude hardware, redes e sistemas operacionais.'
  },
  seguranca: {
    title: 'Segurança da Informação / Cloud',
    message: 'Você gosta de proteger e organizar sistemas! A área de Segurança da Informação ou Cloud pode ser seu futuro. Estude redes, Linux e AWS.'
  }
};

const QuizTI = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ analise: 0, dev: 0, suporte: 0, seguranca: 0 });
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnswer = (area) => {
    setScores(prev => ({ ...prev, [area]: prev[area] + 1 }));
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      const topArea = Object.entries(scores).reduce((a, b) => a[1] >= b[1] ? a : b)[0];
      setResult(results[topArea]);
      setShowResult(true);
    }
  };

  if (showResult && result) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <h2>{result.title}</h2>
        <p>{result.message}</p>
        <a href="/" style={{ textDecoration: 'none', marginTop: 20, display: 'inline-block', color: '#3e7cb1' }}>
          Voltar à Página Inicial
        </a>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: '0 auto', fontFamily: 'Segoe UI, sans-serif' }}>
      <h2>{question.question}</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {question.options.map((opt, idx) => (
          <li key={idx} style={{ margin: '10px 0' }}>
            <button
              onClick={() => handleAnswer(opt.area)}
              style={{
                padding: '10px 20px',
                backgroundColor: '#3e7cb1',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                width: '100%',
                fontSize: '1rem'
              }}
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
