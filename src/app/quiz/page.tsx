import { useState, useEffect } from "react";

// Definindo as categorias e recomendações
const links: Record<string, { nome: string; link: string }[]> = {
  Desenvolvimento: [
    { nome: "Certificação de Desenvolvedor Java", link: "https://www.oracle.com/java/technologies/javase/javase-jdk8-certifications.html" },
    { nome: "Desenvolvedor Frontend - React", link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/" }
  ],
  Infraestrutura: [
    { nome: "Certificação CCNA", link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html" },
    { nome: "Fundamentos de Redes de Computadores", link: "https://www.udemy.com/course/computer-networking/" }
  ],
  Segurança: [
    { nome: "Certificação CISSP", link: "https://www.isc2.org/Certifications/CISSP" },
    { nome: "Curso de Cibersegurança", link: "https://www.udemy.com/course/cyber-security-for-beginners/" }
  ],
  Dados: [
    { nome: "Certificação em Ciência de Dados - Coursera", link: "https://www.coursera.org/professional-certificates/data-science" },
    { nome: "Fundamentos de Machine Learning", link: "https://www.udemy.com/course/machinelearning/" }
  ],
};

interface Opcao {
  texto: string;
  categoria: string;
}

interface Pergunta {
  enunciado: string;
  opcoes: Opcao[];
}

export default function QuizPage() {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([]);
  const [respostas, setRespostas] = useState<{ [key: number]: string }>({});
  const [resultado, setResultado] = useState<string | null>(null);

  // Carregando as perguntas do quiz
  useEffect(() => {
    fetch("https://seu-backend-no-render.com/quiz") // Alterar para a URL do backend hospedado no Render
      .then((res) => res.ok ? res.json() : Promise.reject("Erro ao buscar os dados do quiz"))
      .then((data) => {
        setPerguntas(data.perguntas || []);
      })
      .catch((err) => console.error(err));
  }, []);

  // Função para tratar a resposta do usuário
  const handleResposta = (index: number, categoria: string) => {
    setRespostas((prev) => ({ ...prev, [index]: categoria }));
  };

  // Função para calcular o resultado
  const calcularResultado = () => {
    if (Object.keys(respostas).length !== perguntas.length) {
      setResultado("Responda a todas as perguntas antes de ver o resultado.");
      return;
    }

    const contagem: Record<string, number> = {};
    Object.values(respostas).forEach((categoria) => {
      contagem[categoria] = (contagem[categoria] || 0) + 1;
    });

    const categoriaMaisEscolhida = Object.keys(contagem).reduce((a, b) =>
      contagem[a] > contagem[b] ? a : b
    );

    setResultado(categoriaMaisEscolhida); // Agora é apenas a categoria
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Quiz: Qual área de TI combina com você?</h1>

      {/* Exibe as perguntas */}
      {perguntas.length > 0 ? (
        perguntas.map((pergunta, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-lg font-semibold">{pergunta.enunciado}</h2>
            <div className="flex flex-col gap-2">
              {pergunta.opcoes.map((opcao, idx) => (
                <button
                  key={idx}
                  onClick={() => handleResposta(index, opcao.categoria)}
                  className={`p-2 rounded-lg ${respostas[index] === opcao.categoria ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                  {opcao.texto}
                </button>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Carregando quiz...</p>
      )}

      {/* Botão para calcular o resultado */}
      {Object.keys(respostas).length === perguntas.length && (
        <button onClick={calcularResultado} className="mt-4 p-2 bg-green-500 text-white rounded-lg">
          Ver Resultado
        </button>
      )}

      {/* Exibe o resultado e recomendações */}
      {resultado && (
        <div className="mt-4 text-lg font-semibold">
          <p>A área mais indicada para você é: {resultado}</p>
          <h2 className="mt-4 text-xl font-semibold">Recomendações de Certificação:</h2>
          {links[resultado]?.map((link, index) => (
            <div key={index}>
              <ul>
                <li>
                  <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    {link.nome}
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}