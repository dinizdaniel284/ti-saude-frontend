"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

interface Question {
  question: string;
  options: string[];
}

export default function QuizPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    async function fetchQuestions() {
      try {
        const response = await fetch("https://ti-saude-backend-k4g9.vercel.app/quiz");
        const data = await response.json();
        const questionsList = data.perguntas || data;
        if (Array.isArray(questionsList)) setQuestions(questionsList);
      } catch (error) {
        console.error("Erro:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);

  const handleSelect = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      setAnswers(prev => [...prev, index]);
      setSelected(null);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setFinished(true);
      }
    }, 400);
  };

  const profile = useMemo(() => {
    if (questions.length === 0 || answers.length < questions.length) return null;
    const counts = [0, 0, 0, 0];
    answers.forEach(val => { if (counts[val] !== undefined) counts[val]++; });
    const maxIndex = counts.indexOf(Math.max(...counts));
    const results = [
      { name: "Backend Hospitalar", color: "text-indigo-600", link: "/posts/backend" },
      { name: "Dados & BI Clínico", color: "text-cyan-600", link: "/posts/power-bi" },
      { name: "Segurança & LGPD", color: "text-red-600", link: "/posts/seguranca-informacao-saude" },
      { name: "Saúde Digital e UX", color: "text-emerald-600", link: "/posts/saude-digital" }
    ];
    return results[maxIndex];
  }, [answers, questions]);

  if (!isClient) return null;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-[2.5rem] p-8 md:p-12 w-full max-w-2xl text-center min-h-[500px] flex flex-col justify-center">
        {loading ? (
          <p className="text-slate-800 font-bold animate-pulse">CARREGANDO...</p>
        ) : finished && profile ? (
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">Seu Perfil:</h2>
            <div className={`text-2xl font-black mb-10 ${profile.color}`}>{profile.name}</div>
            <button onClick={() => router.push(profile.link)} className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl">
              VER MINHA TRILHA
            </button>
          </div>
        ) : currentQuestion ? (
          <div>
            <span className="bg-slate-100 text-slate-500 px-4 py-1 rounded-full font-black text-[10px]">
              QUESTÃO {currentIndex + 1} DE {questions.length}
            </span>
            <h1 className="text-2xl font-black text-slate-900 mt-6 mb-10">
              {currentQuestion.question}
            </h1>
            <div className="grid grid-cols-1 gap-4">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`px-6 py-5 rounded-2xl border-2 font-bold transition-all ${
                    selected === idx ? "border-cyan-500 bg-cyan-50" : "border-slate-100 bg-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}