"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

// Array de questões (O mesmo que você já tem)
const questions = [
  { question: "Se você trabalhasse em um hospital, o que mais te atrairia resolver?", options: ["Otimizar o banco de dados e APIs (Backend)", "Criar dashboards para decisões médicas (Dados)", "Proteger prontuários contra invasões (Segurança)", "Melhorar a experiência do app para pacientes (Frontend)"] },
  { question: "Como você prefere lidar com desafios técnicos?", options: ["Escrevendo lógica pura e algoritmos", "Analisando gráficos e padrões", "Investigando brechas e vulnerabilidades", "Projetando interfaces visuais"] },
  { question: "Você se sente confortável trabalhando com grandes volumes de números e estatísticas?", options: ["Sim, adoro encontrar insights nos números", "Prefiro focar no funcionamento do sistema", "Prefiro focar na proteção da informação"] },
  { question: "Qual dessas tecnologias mais te fascina no dia a dia?", options: ["Inteligência Artificial Preditiva", "Microsserviços e Integrações", "Criptografia e Cibersegurança", "Design e Usabilidade (UX/UI)"] },
  { question: "Se pudesse criar uma solução para a saúde hoje, qual seria?", options: ["Um sistema de gestão hospitalar robusto", "Um software que prevê riscos de doenças", "Um canal de comunicação médico-paciente blindado", "Uma interface intuitiva para Telemedicina"] },
  { question: "Como você prefere apresentar os resultados do seu trabalho?", options: ["Através de um sistema estável e performático", "Através de relatórios e indicadores visuais", "Através de relatórios de conformidade e riscos", "Através de uma interface bonita e funcional"] },
  { question: "O que te motiva mais a aprender uma tecnologia nova?", options: ["A complexidade da lógica por trás dela", "A capacidade de gerar previsões e estratégias", "O poder de blindar sistemas contra ataques", "O impacto direto na facilidade de uso do usuário"] },
  { question: "Qual o seu nível de interesse em Inteligência Artificial?", options: ["Quero criar os modelos e treinar dados", "Quero usar a IA para prever cenários", "Quero garantir que a IA seja segura e ética", "Quero integrar a IA na interface do usuário"] },
  { question: "Como você lida com a privacidade de dados (LGPD)?", options: ["É um requisito técnico importante no código", "É a base para uma análise de dados ética", "É o meu foco principal de trabalho", "É algo que deve ser transparente para o usuário"] },
  { question: "O que você busca na sua carreira em TI & Saúde?", options: ["Ser uma autoridade técnica em sistemas", "Ser o braço direito da gestão com dados", "Ser o guardião da infraestrutura crítica", "Ser quem transforma a tecnologia em algo humano"] },
];

export default function QuizPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { setIsClient(true); }, []);

  const handleSelect = (index: number) => {
    setSelected(index);
    setTimeout(() => {
      setAnswers(prev => [...prev, index]);
      setSelected(null);
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setLoading(true);
        setTimeout(() => { setFinished(true); setLoading(false); }, 1500);
      }
    }, 400);
  };

  const profile = useMemo(() => {
    if (answers.length < 10) return null;
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
  }, [answers]);

  if (!isClient) return <div className="min-h-screen bg-slate-950" />;

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
              Questão {currentIndex + 1}
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