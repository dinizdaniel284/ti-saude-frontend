"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

// Definindo a interface para o TypeScript não dar alertas
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
        // Buscando os dados da sua API atualizada
        const response = await fetch("https://ti-saude-backend-k4g9.vercel.app/quiz");
        const data = await response.json();
        
        // Ajuste para ler o objeto 'perguntas' que vimos no seu JSON
        const questionsList = data.perguntas || data;
        
        if (Array.isArray(questionsList) && questionsList.length > 0) {
          setQuestions(questionsList);
        }
      } catch (error) {
        console.error("Erro ao carregar o quiz:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, []);

  const handleSelect = (index: number) => {
    setSelected(index);
    // Pequeno delay para o usuário ver o feedback do clique
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

  // Evita erros de hidratação do Next.js
  if (!isClient) return null;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-[2.5rem] p-8 md:p-12 w-full max-w-2xl text-center min-h-[500px] flex flex-col justify-center relative overflow-hidden">
        
        {loading ? (
          <div className="flex flex-col items-center animate-in fade-in">
             <div className="w-12 h-12 border-4 border-slate-100 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
             <p className="text-slate-800 font-bold uppercase tracking-widest text-sm">Conectando...</p>
          </div>
        ) : finished && profile ? (
          <div className="animate-in zoom-in duration-500">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Concluido!</h2>
            <p className="text-slate-500 mb-8 font-medium">Seu perfil ideal na saúde é:</p>
            <div className={`text-2xl md:text-3xl font-black mb-10 p-6 bg-slate-50 rounded-3xl ${profile.color}`}>
              {profile.name}
            </div>
            <button 
              onClick={() => router.push(profile.link)} 
              className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-cyan-600 transition-all shadow-xl active:scale-95"
            >
              VER MINHA TRILHA →
            </button>
          </div>
        ) : currentQuestion ? (
          <div className="animate-in slide-in-from-right-4 duration-300">
            <span className="bg-slate-100 text-slate-500 px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest">
              Questão {currentIndex + 1} de {questions.length}
            </span>
            
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 mt-6 mb-10 leading-tight">
              {currentQuestion.question}
            </h1>

            <div className="grid grid-cols-1 gap-4 text-left">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`px-6 py-5 rounded-2xl border-2 font-bold transition-all duration-200 flex items-center gap-4 ${
                    selected === idx 
                      ? "border-cyan-500 bg-cyan-50 text-cyan-800 -translate-y-1 shadow-md" 
                      : "border-slate-100 bg-white text-slate-600 hover:border-slate-200"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 ${
                    selected === idx ? "border-cyan-500 bg-cyan-500 shadow-[0_0_0_4px_rgba(6,182,212,0.1)]" : "border-slate-200"
                  }`} />
                  {option}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-slate-500">
            Não foi possível carregar as questões. Verifique sua conexão.
          </div>
        )}
      </div>
      
      <p className="mt-8 text-slate-500 text-sm font-medium">© 2026 TI-Saúde — Daniel Diniz</p>
    </div>
  );
}