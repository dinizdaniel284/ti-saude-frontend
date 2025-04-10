"use client";

import { useEffect, useState } from "react";

type Question = {
  _id: string;
  question: string;
  options: string[];
  category: string;
};

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch("http://localhost:5000/quiz");
        const data = await res.json();

        // Tratando diferentes formatos de resposta
        if (Array.isArray(data)) {
          setQuestions(data);
        } else if (Array.isArray(data.questions)) {
          setQuestions(data.questions);
        } else {
          console.error("Formato inesperado:", data);
        }
      } catch (error) {
        console.error("Erro ao buscar as perguntas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:5000/quiz/result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (error) {
      console.error("Erro ao enviar as respostas:", error);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Quiz: Qual área de TI combina com você?
      </h1>

      {loading ? (
        <p className="text-gray-600">Carregando perguntas...</p>
      ) : (
        questions.map((q) => (
          <div key={q._id} className="mb-6">
            <h2 className="text-xl font-semibold mb-2">{q.question}</h2>
            <div className="flex flex-col gap-2">
              {q.options.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={q._id}
                    value={option}
                    checked={answers[q._id] === option}
                    onChange={() => handleAnswer(q._id, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))
      )}

      <button
        onClick={handleSubmit}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Ver Resultado
      </button>

      {result && (
        <div className="mt-8 p-4 bg-green-100 border border-green-400 rounded">
          <h2 className="text-2xl font-bold text-green-800">Resultado:</h2>
          <p className="text-lg mt-2">{result}</p>
        </div>
      )}
    </div>
  );
}