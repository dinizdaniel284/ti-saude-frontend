import { useState } from 'react';

const perguntas = [
  {
    pergunta: 'Qual linguagem é conhecida como a linguagem da web?',
    opcoes: ['Python', 'C++', 'JavaScript', 'Java'],
    resposta: 'JavaScript',
  },
  {
    pergunta: 'O que significa HTML?',
    opcoes: [
      'Hyper Trainer Marking Language',
      'Hyper Text Markup Language',
      'Hyper Text Marketing Language',
      'Hyper Tool Markup Language',
    ],
    resposta: 'Hyper Text Markup Language',
  },
  {
    pergunta: 'Qual ferramenta é usada para controle de versão?',
    opcoes: ['Jira', 'Git', 'Figma', 'Photoshop'],
    resposta: 'Git',
  },
  {
    pergunta: 'Qual sistema de gerenciamento ágil é popular para projetos de TI?',
    opcoes: ['Waterfall', 'Scrum', 'XP', 'DevOps'],
    resposta: 'Scrum',
  },
  {
    pergunta: 'React é uma biblioteca de...',
    opcoes: ['Estilização', 'Back-end', 'Manipulação de imagens', 'Front-end'],
    resposta: 'Front-end',
  },
];

export default function QuizTI() {
  const [indice, setIndice] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState('');
  const [acertos, setAcertos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const responder = (opcao: string) => {
    setRespostaSelecionada(opcao);
    if (opcao === perguntas[indice].resposta) {
      setAcertos(acertos + 1);
    }
    setTimeout(() => {
      if (indice + 1 < perguntas.length) {
        setIndice(indice + 1);
        setRespostaSelecionada('');
      } else {
        setFinalizado(true);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-xl">
        {!finalizado ? (
          <>
            <h1 className="text-2xl font-bold text-purple-600 mb-4">Quiz de Conhecimentos em TI</h1>
            <p className="text-lg text-gray-700 mb-6">{perguntas[indice].pergunta}</p>
            <div className="grid gap-4">
              {perguntas[indice].opcoes.map((opcao, i) => (
                <button
                  key={i}
                  onClick={() => responder(opcao)}
                  className={`p-3 rounded-xl text-white font-semibold transition-all duration-300 
                    ${respostaSelecionada === opcao ? 'bg-green-500' : 'bg-purple-500 hover:bg-purple-600'}`}
                >
                  {opcao}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Você acertou {acertos} de {perguntas.length}!</h2>
            <p className="text-gray-700">Parabéns por concluir o quiz. Continue estudando para evoluir ainda mais!</p>
          </div>
        )}
      </div>
    </div>
  );
}   
