"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  
  // Novos estados para gerenciar os dados vindos do MongoDB
  const [questions, setQuestions] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(true); // Começa em true para o carregamento inicial

  useEffect(() => {
    setIsClient(true);
    
    // Função para buscar as perguntas da sua API na Vercel
    async function fetchQuestions() {
      try {
        // O link oficial da sua API que ficou pronto ontem
        const response = await fetch("https://ti-saude-backend-k4g9.vercel.app/quiz");
        const data = await response.json();
        
        // Verificamos se os dados vieram no formato { perguntas: [...] } ou direto [...]
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

  const handleSelect = (index) => {
    setSelected(index);
    setTimeout(() => {
      setAnswers(prev => [...prev, index]);
      setSelected(null);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setLoading(true);
        setTimeout(() => { 
          setFinished(true); 
          setLoading(false); 
        }, 1500);
      }
    }, 400);
  };

  const profile = useMemo(() => {
    // Ajustado para o tamanho real da lista de perguntas que vier do banco
    if (questions.length === 0 || answers.length < questions.length) return null;
    
    const counts = [0, 0, 0, 0];
    answers.forEach(val => counts[val]++);
    const maxIndex = counts.indexOf(Math.max(...counts));
    
    const results = [
      { name: "Desenvolvedor Backend Hospitalar", color: "text-indigo-600", link: "/posts/backend" },
      { name: "Analista de Dados & BI Clínico", color: "text-cyan-600", link: "/posts/power-bi" },
      { name: "Especialista em Segurança & LGPD", color: "text-red-600", link: "/posts/seguranca-informacao-saude" },
      { name: "Especialista em Saúde Digital e UX", color: "text-emerald-600", link: "/posts/saude-digital" }
    ];
    return results[maxIndex];
  }, [answers, questions]);

  // Enquanto o cliente não carrega ou as perguntas estão vindo do banco
  if (!isClient || (loading && questions.length === 0)) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-white text-center">
        <div className="w-12 h-12 border-4 border-slate-700 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
        <p className="font-bold uppercase tracking-widest text-sm">Conectando ao Banco de Dados...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-[2.5rem] p-8 md:p-12 w-full max-w-2xl text-center min-h-[500px] flex flex-col justify-center relative transition-all">
        
        {loading ? (
          <div className="flex flex-col items-center transition-opacity duration-500">
            <div className="w-12 h-12 border-4 border-slate-100 border-t-cyan-500 rounded-full animate-spin mb-4"></div>
            <p className="text-slate-800 font-bold uppercase tracking-tighter">Mapeando Perfil...</p>
          </div>
        ) : finished && profile ? (
          <div className="transition-all duration-700">
            <h2 className="text-3xl font-black text-slate-900 mb-2">Concluído!</h2>
            <div className={`text-2xl font-black mb-10 p-6 bg-slate-50 rounded-3xl ${profile.color}`}>{profile.name}</div>
            <button onClick={() => router.push(profile.link)} className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl hover:bg-cyan-500 transition-all active:scale-95 shadow-xl">
              VER MINHA TRILHA →
            </button>
          </div>
        ) : (
          <div className="transition-all duration-300">
            <span className="bg-slate-100 text-slate-500 px-4 py-1 rounded-full font-black uppercase tracking-widest text-[10px]">
              Questão {currentIndex + 1} de {questions.length}
            </span>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 mt-6 mb-10 leading-tight">
              {questions[currentIndex]?.question}
            </h1>

            <div className="grid grid-cols-1 gap-4 text-left">
              {questions[currentIndex]?.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  className={`flex items-center gap-4 px-6 py-5 rounded-2xl border-2 transition-all duration-200 ${
                    selected === idx 
                      ? "border-cyan-500 bg-cyan-50 -translate-y-1 shadow-md" 
                      : "border-slate-100 bg-white hover:border-slate-300"
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selected === idx ? "border-cyan-500 bg-cyan-500" : "border-slate-300"}`}>
                    {selected === idx && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                  </div>
                  <span className={`font-bold text-sm md:text-base ${selected === idx ? "text-cyan-800" : "text-slate-600"}`}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}