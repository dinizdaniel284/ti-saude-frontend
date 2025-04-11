import React, { useState } from 'react';

type Pergunta = {
  pergunta: string;
  opcoes: string[];
};

const perguntas: Pergunta[] = [
  {
    pergunta: 'Você prefere lidar com dados ou com interfaces visuais?',
    opcoes: ['Dados', 'Interfaces visuais'],
  },
  {
    pergunta: 'Você tem interesse em bancos de dados?',
    opcoes: ['Sim', 'Não'],
  },
  {
    pergunta: 'Você se interessa por design e experiência do usuário?',
    opcoes: ['Sim', 'Não'],
  },
  {
    pergunta: 'Você gosta de automatizar tarefas repetitivas?',
    opcoes: ['Sim', 'Não'],
  },
  {
    pergunta: 'Você prefere desenvolver aplicativos ou analisar informações?',
    opcoes: ['Desenvolver aplicativos', 'Analisar informações'],
  },
  {
    pergunta: 'Você se interessa por segurança digital?',
    opcoes: ['Sim', 'Não'],
  },
];

export default function QuizTI() {
  const [respostas, setRespostas] = useState<string[]>([]);
  const [resultado, setResultado] = useState('');

  const handleResposta = (resposta: string) => {
    const novasRespostas = [...respostas, resposta];
    setRespostas(novasRespostas);

    if (novasRespostas.length === perguntas.length) {
      const dados = novasRespostas.filter((r) => r === 'Dados').length;
      const design = novasRespostas.filter((r) => r === 'Interfaces visuais').length;
      const analisar = novasRespostas.filter((r) => r === 'Analisar informações').length;
      const desenvolver = novasRespostas.filter((r) => r === 'Desenvolver aplicativos').length;

      if (dados >= 2 || analisar >= 2) {
        setResultado('Você tem perfil para área de **Análise de Dados** ou **Banco de Dados**!');
      } else if (design >= 2) {
        setResultado('Você tem perfil para área de **Front-End** ou **UX/UI Design**!');
      } else if (desenvolver >= 2) {
        setResultado('Você tem perfil para **Desenvolvimento Back-End**!');
      } else {
        setResultado('Você pode explorar áreas como **Segurança da Informação** ou **DevOps**!');
      }
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>Quiz - Qual área da TI combina com você?</h1>
      {respostas.length < perguntas.length ? (
        <div>
          <h2>{perguntas[respostas.length].pergunta}</h2>
          {perguntas[respostas.length].opcoes.map((opcao, idx) => (
            <button
              key={idx}
              onClick={() => handleResposta(opcao)}
              style={{
                margin: '5px',
                padding: '10px 15px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                backgroundColor: '#f0f0f0',
                cursor: 'pointer',
              }}
            >
              {opcao}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <h2>Resultado:</h2>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}
