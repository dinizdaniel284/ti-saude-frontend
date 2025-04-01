"use client";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    fetch("http://localhost:5000/quiz")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar os dados do quiz");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Perguntas recebidas:", data);
        setPerguntas(data.perguntas || []);
      })
      .catch((err) => console.error("Erro ao carregar o quiz:", err));
  }, []);

  const handleResposta = (index: number, categoria: string) => {
    setRespostas((prev) => ({ ...prev, [index]: categoria }));
  };

  const calcularResultado = () => {
    if (Object.keys(respostas).length === 0) {
      setResultado("Responda ao menos uma pergunta antes de ver o resultado.");
      return;
    }

    const contagem: { [key: string]: number } = {};

    Object.values(respostas).forEach((categoria) => {
      contagem[categoria] = (contagem[categoria] || 0) + 1;
    });

    const categorias = Object.keys(contagem);
    if (categorias.length === 0) {
      setResultado("Não foi possível calcular o resultado.");
      return;
    }

    const categoriaMaisEscolhida = categorias.reduce((a, b) =>
      contagem[a] > contagem[b] ? a : b
    );

    setResultado(`A área mais indicada para você é: ${categoriaMaisEscolhida}`);
  };

  const recomendacoes = (categoria: string) => {
    const links = {
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

    return links[categoria as keyof typeof links] || [];
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-4">Quiz: Qual área de TI combina com você?</h1>

      {perguntas.length > 0 ? (
        perguntas.map((pergunta, index) => (
          <div key={index} className="w-full max-w-2xl bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-semibold mb-4">{pergunta.enunciado}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pergunta.opcoes.map((opcao, idx) => (
                <button
                  key={idx}
                  onClick={() => handleResposta(index, opcao.categoria)}
                  className={`p-3 rounded-lg border-2 ${respostas[index] === opcao.categoria ? "bg-blue-500 text-white border-blue-500" : "bg-gray-200 text-black border-gray-300"}`}
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

      {Object.keys(respostas).length === perguntas.length && (
        <button onClick={calcularResultado} className="mt-4 p-3 bg-green-500 text-white rounded-lg">
          Ver Resultado
        </button>
      )}

      {resultado && (
        <div className="mt-4 text-lg font-semibold">
          <p>{resultado}</p>
          <h2 className="mt-4 text-xl font-semibold">Recomendações de Certificação:</h2>
          {resultado.includes("Desenvolvimento") && (
            <div>
              <ul>
                {recomendacoes("Desenvolvimento").map((link, index) => (
                  <li key={index}>
                    <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      {link.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {resultado.includes("Infraestrutura") && (
            <div>
              <ul>
                {recomendacoes("Infraestrutura").map((link, index) => (
                  <li key={index}>
                    <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      {link.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {resultado.includes("Segurança") && (
            <div>
              <ul>
                {recomendacoes("Segurança").map((link, index) => (
                  <li key={index}>
                    <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      {link.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {resultado.includes("Dados") && (
            <div>
              <ul>
                {recomendacoes("Dados").map((link, index) => (
                  <li key={index}>
                    <a href={link.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      {link.nome}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}