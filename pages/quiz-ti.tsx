 "use client";
import React, { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Você prefere trabalhar com dados, pessoas ou sistemas?',
    opcoes: ['Dados', 'Pessoas', 'Sistemas'],
  },
  {
    pergunta: 'Você se considera uma pessoa lógica ou criativa?',
    opcoes: ['Lógica', 'Criativa', 'Um pouco dos dois'],
  },
  {
    pergunta: 'Você tem facilidade com matemática?',
    opcoes: ['Sim', 'Mais ou menos', 'Não muito'],
  },
  {
    pergunta: 'Você gosta de resolver problemas com tecnologia?',
    opcoes: ['Sim, adoro', 'Às vezes', 'Prefiro evitar'],
  },
  {
    pergunta: 'Prefere trabalhar sozinho ou em equipe?',
    opcoes: ['Sozinho', 'Em equipe', 'Depende da situação'],
  },
];

const QuizTI = () => {
  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));

  const handleResposta = (indicePergunta: number, resposta: string) => {
    const novasRespostas = [...respostas];
    novasRespostas[indicePergunta] = resposta;
    setRespostas(novasRespostas);
  };

  const terminou = respostas.every(resposta => resposta !== null);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f0f4f8',
      padding: '20px',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#102a43',
    }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>Quiz: Encontre sua área na TI</h1>

      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}>
        {perguntas.map((item, i) => (
          <div key={i} style={{ marginBottom: '30px' }}>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{item.pergunta}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {item.opcoes.map((opcao, j) => (
                <button
                  key={j}
                  onClick={() => handleResposta(i, opcao)}
                  style={{
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '2px solid #3e7cb1',
                    backgroundColor: respostas[i] === opcao ? '#3e7cb1' : '#ffffff',
                    color: respostas[i] === opcao ? '#ffffff' : '#3e7cb1',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {opcao}
                </button>
              ))}
            </div>
          </div>
        ))}

        {terminou && (
          <div style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: '#e1f0ff',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
            <h2 style={{ color: '#334e68' }}>Parabéns!</h2>
            <p style={{ fontSize: '1.1rem' }}>Com base nas suas respostas, você pode se identificar com áreas como:</p>
            <p style={{ fontWeight: 'bold', marginTop: '10px', color: '#3e7cb1' }}>
              Análise de Dados, Desenvolvimento, UX, Segurança da Informação...
            </p>
            <p style={{ fontSize: '0.9rem', color: '#486581' }}>
              Continue explorando para descobrir o melhor caminho para você!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizTI;



  
