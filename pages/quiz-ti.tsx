"use client";
import { useState } from "react";
import Link from "next/link";

const perguntas = [
  {
    pergunta: "Qual linguagem é mais usada no desenvolvimento backend?",
    opcoes: ["Python", "HTML", "CSS", "Photoshop"],
    respostaCorreta: "Python",
  },
  {
    pergunta: "O que significa API?",
    opcoes: [
      "Aplicativo Público de Interface",
      "Interface de Programação de Aplicações",
      "Aplicação Privada de Internet",
      "Acesso Público à Internet",
    ],
    respostaCorreta: "Interface de Programação de Aplicações",
  },
  {
    pergunta: "Qual dessas ferramentas é usada para versionamento de código?",
    opcoes: ["Photoshop", "Excel", "Git", "PowerPoint"],
    respostaCorreta: "Git",
  },
  {
    pergunta: "O que o React ajuda a construir?",
    opcoes: [
      "Planilhas",
      "Interfaces de usuário (UI)",
      "Bancos de dados",
      "Sistemas operacionais",
    ],
    respostaCorreta: "Interfaces de usuário (UI)",
  },
  {
    pergunta: "Qual a principal função do Node.js?",
    opcoes: [
      "Estilizar páginas web",
      "Criar slides",
      "Executar JavaScript no servidor",
      "Editar vídeos",
    ],
    respostaCorreta: "Executar JavaScript no servidor",
  },
];

export default function QuizTI() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState<string | null>(null);
  const [pontuacao, setPontuacao] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const responder = (resposta: string) => {
    if (!respostaSelecionada) {
      setRespostaSelecionada(resposta);
      if (resposta === perguntas[indiceAtual].respostaCorreta) {
        setPontuacao((prev) => prev + 1);
      }
      setTimeout(() => {
        if (indiceAtual + 1 < perguntas.length) {
          setIndiceAtual((prev) => prev + 1);
          setRespostaSelecionada(null);
        } else {
          setFinalizado(true);
        }
      }, 800);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex flex-col items-center justify-start p-4 text-gray-800">
      
      {/* Botão chamativo separado */}
      <div className="bg-white rounded-2xl shadow-md px-6 py-4 mb-6 w-full max-w-md text-center border border-blue-300">
        <h2 className="text-xl font-semibold text-blue-800 mb-2 drop-shadow-sm">
          Novo por aqui?
        </h2>
        <p className="text-blue-700 mb-4">Confira o guia prático para iniciantes em TI!</p>
        <Link href="/guia-para-iniciantes.html" target="_blank">
          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-blue-700 transition">
            Acessar Guia
          </button>
        </Link>
      </div>

      {/* Título do Quiz */}
      <div className="text-center mb-8 mt-2">
        <h1 className="text-4xl font-bold text-blue-800 drop-shadow-lg">
          Quiz TI-Saúde
        </h1>
        <p className="mt-2 text-lg text-blue-700 font-medium">
          Teste seus conhecimentos em tecnologia!
        </p>
      </div>

      {/* Cartão do Quiz */}
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xl transition-all">
        {finalizado ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-700">
              Parabéns, você concluiu!
            </h2>
            <p className="mt-4 text-xl">
              Você acertou{" "}
              <span className="font-bold text-blue-600">{pontuacao}</span> de{" "}
              {perguntas.length} perguntas.
            </p>
            <p className="mt-4 text-sm text-gray-600 italic">
              Continue praticando, você está no caminho certo!
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-lg font-semibold mb-4 text-blue-700">
              {perguntas[indiceAtual].pergunta}
            </h2>
            <div className="space-y-3">
              {perguntas[indiceAtual].opcoes.map((opcao, index) => (
                <button
                  key={index}
                  onClick={() => responder(opcao)}
                  className={`w-full py-2 px-4 rounded-xl border text-base font-medium transition-colors duration-300
                    ${
                      respostaSelecionada
                        ? opcao === perguntas[indiceAtual].respostaCorreta
                          ? "bg-green-500 text-white"
                          : opcao === respostaSelecionada
                          ? "bg-red-500 text-white"
                          : "bg-gray-100"
                        : "bg-blue-200 hover:bg-blue-300 text-blue-800"
                    }`}
                >
                  {opcao}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
