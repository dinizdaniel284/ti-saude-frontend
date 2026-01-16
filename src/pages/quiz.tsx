"use client";
import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";

// Interface atualizada para suportar lógica de perfil
interface Question {
  question: string;
  options: {
    text: string;
    weight: "back" | "data" | "security" | "front_marketing";
  }[];
}

export default function QuizPage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [scores, setScores] = useState({ back: 0, data: 0, security: 0, front_marketing: 0 });
  const [finished, setFinished] = useState(false);

  // Perguntas estáticas otimizadas para identificação de área (Ideal para SEO e Performance)
  const questions: Question[] = [
    {
      question: "O que mais te atrai na tecnologia?",
      options: [
        { text: "Estruturar regras de negócio e bancos de dados", weight: "back" },
        { text: "Descobrir padrões em grandes volumes de dados", weight: "data" },
        { text: "Proteger sistemas contra ataques e vulnerabilidades", weight: "security" },
        { text: "Criar interfaces bonitas e focar na experiência do usuário", weight: "front_marketing" },
      ],
    },
    {
      question: "Qual desses problemas você resolveria primeiro em um hospital?",
      options: [
        { text: "Integrar o sistema da farmácia com o estoque central", weight: "back" },
        { text: "Analisar por que o tempo de espera no PS aumentou", weight: "data" },
        { text: "Bloquear acessos não autorizados a prontuários", weight: "security" },
        { text: "Melhorar o design do portal de agendamento do paciente", weight: "front_marketing" },
      ],
    },
    {
      question: "Como você prefere trabalhar no dia a dia?",
      options: [
        { text: "Lidando com lógica pura e arquitetura de sistemas", weight: "back" },
        { text: "Gerando gráficos e relatórios estratégicos", weight: "data" },
        { text: "Monitorando logs e auditorias de segurança", weight: "security" },
        { text: "Comunicando ideias e criando layouts modernos", weight: "front_marketing" },
      ],
    },
    {
      question: "Se você fosse criar um app de saúde, seu foco seria:",
      options: [
        { text: "O motor que faz o app ser rápido e escalável", weight: "back" },
        { text: "O motor de recomendação baseado em histórico médico", weight: "data" },
        { text: "A criptografia e proteção da identidade do usuário", weight: "security" },
        { text: "A facilidade de uso e a identidade visual da marca", weight: "front_marketing" },
      ],
    }
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSelect = (idx: number, weight: "back" | "data" | "security" | "front_marketing") => {
    setSelected(idx);
    
    setTimeout(() => {
      setScores(prev => ({ ...prev, [weight]: prev[weight] + 1 }));
      setSelected(null);
      
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setFinished(true);
      }
    }, 400);
  };

  const profile = useMemo(() => {
    if (!finished) return null;
    
    // Lógica para encontrar o maior score
    const entries = Object.entries(scores);
    const maxEntry = entries.reduce((prev, curr) => (curr[1] > prev[1] ? curr : prev));
    const winner = maxEntry[0];

    const results: Record<string, { name: string, color: string, link: string, desc: string }> = {
      back: { 
        name: "Backend Hospitalar", 
        color: "text-indigo-600", 
        link: "/posts/backend",
        desc: "Você gosta de lógica, APIs e sistemas robustos. Seu lugar é no 'coração' da tecnologia clínica."
      },
      data: { 
        name: "Dados & BI Clínico", 
        color: "text-cyan-600", 
        link: "/posts/power-bi",
        desc: "Sua mente é analítica. Você transforma números em decisões que salvam vidas."
      },
      security: { 
        name: "Segurança & LGPD", 
        color: "text-red-600", 
        link: "/posts/seguranca-saude",
        desc: "Você é o guardião. Sua missão é proteger a privacidade do paciente contra ataques cibernéticos."
      },
      front_marketing: { 
        name: "Saúde Digital & UX", 
        color: "text-emerald-600", 
        link: "/posts/saude-digital",
        desc: "Seu foco é o ser humano. Você une design e tecnologia para facilitar a jornada do paciente."
      }
    };
    
    return results[winner];
  }, [finished, scores]);

  if (!isClient) return null;

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 font-sans">
      <div className="bg-white shadow-2xl rounded-[3rem] p-8 md:p-14 w-full max-w-2xl text-center min-h-[550px] flex flex-col justify-center border border-white/10">
        
        {finished && profile ? (
          <div className="animate-in zoom-in duration-500">
            <div className="mb-6 flex justify-center">
                <span className="bg-slate-100 text-slate-500 px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest">Resultado do Perfil</span>
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter italic">Seu DNA Tecnológico:</h2>
            <div className={`text-2xl md:text-4xl font-black mb-6 p-8 bg-slate-50 rounded-[2.5rem] shadow-inner ${profile.color}`}>
              {profile.name}
            </div>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed px-4">
              {profile.desc}
            </p>
            <button 
              onClick={() => router.push(profile.link)} 
              className="w-full bg-slate-900 text-white font-black py-6 rounded-2xl hover:bg-indigo-600 transition-all shadow-2xl transform active:scale-95 text-lg uppercase tracking-widest"
            >
              Começar minha trilha →
            </button>
          </div>
        ) : (
          <div className="animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center mb-10">
                <span className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full font-black text-[10px] uppercase tracking-widest">
                Passo {currentIndex + 1} de {questions.length}
                </span>
                <div className="flex gap-1">
                    {questions.map((_, i) => (
                        <div key={i} className={`h-1.5 w-6 rounded-full transition-all ${i <= currentIndex ? 'bg-indigo-500' : 'bg-slate-100'}`} />
                    ))}
                </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-12 leading-tight tracking-tight">
              {currentQuestion.question}
            </h1>

            <div className="grid grid-cols-1 gap-4 text-left">
              {currentQuestion.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx, option.weight)}
                  className={`px-8 py-6 rounded-3xl border-2 font-bold transition-all duration-300 flex items-center gap-5 text-lg ${
                    selected === idx 
                      ? "border-indigo-500 bg-indigo-50 text-indigo-900 -translate-y-1 shadow-lg" 
                      : "border-slate-100 bg-white text-slate-600 hover:border-indigo-200 hover:bg-slate-50"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full border-4 flex-shrink-0 transition-all ${
                    selected === idx ? "border-indigo-500 bg-white" : "border-slate-100"
                  }`} />
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">TI-Saúde Ecosystem</p>
        <p className="text-slate-700 text-xs mt-1">Desenvolvido por Daniel Diniz • 2026</p>
      </div>
    </div>
  );
}