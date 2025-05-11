"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Question {
  question: string;
  options: string[];
}

export default function Quiz() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [loadingResult, setLoadingResult] = useState(false);

  const questions: Question[] = [
    { question: "Qual destas áreas da TI mais te desperta curiosidade?", options: ["Desenvolvimento de Software", "Infraestrutura de Redes", "Análise de Dados", "Cibersegurança"] },
    { question: "Você se imagina trabalhando com interpretação e visualização de dados?", options: ["Sim, adoro isso!", "Não muito, prefiro outra área"] },
    { question: "Se pudesse escolher agora, onde preferiria atuar?", options: ["Frontend (interface do usuário)", "Backend (lógica por trás)", "Fullstack (ambos)"] },
    { question: "Machine Learning parece interessante para você?", options: ["Com certeza!", "Acho confuso", "Tenho curiosidade, mas não conheço muito"] },
    { question: "Você gostaria de trabalhar com bancos de dados e grandes volumes de informação?", options: ["Sim, gosto dessa área", "Não, prefiro outras áreas", "Talvez, dependendo do projeto"] },
    { question: "Segurança digital te parece um campo importante e empolgante?", options: ["Sim, totalmente!", "Não é o que me atrai", "Talvez, tenho interesse crescente"] },
    { question: "Você prefere resolver problemas lógicos ou lidar com pessoas e processos?", options: ["Problemas lógicos", "Pessoas e processos", "Um pouco dos dois"] },
    { question: "Como você se sente aprendendo novas linguagens de programação?", options: ["Motivado, gosto de aprender", "Um pouco perdido, mas animado", "Não gosto muito"] },
    { question: "Você se vê criando soluções para facilitar o dia a dia de profissionais da saúde?", options: ["Sim! Quero fazer a diferença", "Talvez, dependendo da área", "Prefiro trabalhar nos bastidores"] },
    { question: "Prefere projetos com resultados visuais ou que otimizem o funcionamento interno de sistemas?", options: ["Visuais", "Funcionamento interno", "Ambos são legais"] },
    { question: "Você tem interesse em trabalhar com Inteligência Artificial e automação?", options: ["Sim, quero aprender mais", "Tenho curiosidade, mas ainda não sei muito", "Não é minha praia"] },
    { question: "Como você lida com desafios técnicos difíceis?", options: ["Adoro resolver problemas complexos", "Fico frustrado, mas tento superar", "Evito quando possível"] },
    { question: "Qual a sua abordagem para aprender novas tecnologias?", options: ["Prática e experiência", "Estudo teórico", "Através de tutoriais e cursos online"] },
    { question: "Você acha que o trabalho em equipe é importante em TI?", options: ["Sim, gosto de colaborar com outros", "Prefiro trabalhar sozinho", "Depende do projeto"] },
    { question: "Você tem interesse em trabalhar com infraestrutura e servidores?", options: ["Sim, adoro essa área", "Tenho curiosidade", "Não é o meu foco"] },
    { question: "Você acha que TI é uma área com boas oportunidades para o futuro?", options: ["Sim, o futuro da TI é promissor", "Não tenho certeza", "Não estou muito otimista"] },
    { question: "Você se interessa por startups ou empresas estabelecidas em TI?", options: ["Startups, gosto do ambiente dinâmico", "Empresas grandes, gosto de estrutura", "Depende do tipo de trabalho"] },
  ];

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const updatedAnswers = [...answers];
      updatedAnswers[currentQuestionIndex] = questions[currentQuestionIndex].options[selectedOption];
      setAnswers(updatedAnswers);
      setSelectedOption(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setLoadingResult(true);
        setTimeout(() => {
          setQuizFinished(true);
          setLoadingResult(false);
        }, 2000);
      }
    } else {
      alert("Por favor, selecione uma opção.");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setSelectedOption(null);
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setQuizFinished(false);
    setLoadingResult(false);
  };

  const shareQuiz = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl).then(() => {
      alert("Link copiado! Compartilhe com seus amigos.");
    });
  };

  const goHome = () => {
    router.push("/");
  };

  const getProfile = () => {
    const area = answers[0];
    if (area?.includes("Desenvolvimento")) return "Desenvolvedor(a) de Software";
    if (area?.includes("Infraestrutura")) return "Especialista em Redes e Suporte";
    if (area?.includes("Análise")) return "Analista de Dados";
    if (area?.includes("Cibersegurança")) return "Especialista em Segurança da Informação";
    return "Profissional de TI em formação";
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-600 flex flex-col items-center justify-center p-6">
      <motion.div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {loadingResult ? (
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 border-4 border-teal-300 border-t-teal-700 rounded-full animate-spin"></div>
            <p className="text-xl text-teal-800 font-medium">Calculando seu perfil...</p>
          </div>
        ) : quizFinished ? (
          <>
            <h2 className="text-3xl font-bold text-green-700 mb-6">Parabéns, quiz finalizado!</h2>
            <p className="text-lg text-gray-700 mb-4">Aqui estão suas respostas:</p>
            <ul className="text-left text-gray-800 space-y-6 mb-6">
              {answers.map((answer, index) => (
                <li key={index} className="bg-white bg-opacity-70 p-4 rounded-xl shadow-md">
                  <strong className="text-teal-800">{questions[index].question}</strong>
                  <br />
                  <span className="ml-2">{answer}</span>
                </li>
              ))}
            </ul>
            <p className="text-2xl font-semibold text-purple-800">
              Você se identifica como um <span className="text-yellow-500">{getProfile()}</span>!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <button onClick={shareQuiz} className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
                Compartilhar Quiz
              </button>
              <button onClick={handleRestart} className="bg-orange-500 text-white px-6 py-3 rounded-full shadow hover:bg-orange-600 transition">
                Refazer Quiz
              </button>
              <button onClick={goHome} className="bg-gray-500 text-white px-6 py-3 rounded-full shadow hover:bg-gray-700 transition">
                Voltar ao Início
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-10 italic">Criado com 💙 por Daniel Diniz</p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-extrabold text-teal-900 mb-6 drop-shadow-md">Quiz TI-Saúde</h1>
            <p className="text-lg text-gray-700 mb-4">Pergunta {currentQuestionIndex + 1} de {questions.length}</p>
            <motion.p className="text-2xl text-gray-800 font-medium mb-6" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }}>
              {questions[currentQuestionIndex].question}
            </motion.p>

            <div className="space-y-6 mb-8">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <motion.label key={index} className={`block cursor-pointer px-6 py-4 rounded-xl border-2 font-medium text-gray-800 transition-all duration-300 ease-in-out bg-teal-100 ${selectedOption === index ? "border-teal-600 bg-teal-200 shadow-xl scale-105" : "border-gray-300 hover:bg-teal-50"}`} whileHover={{ scale: 1.05 }}>
                  <input type="radio" name="option" value={index} checked={selectedOption === index} onChange={() => handleOptionChange(index)} className="mr-3 accent-teal-600" />
                  {option}
                </motion.label>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <motion.button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0} className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl shadow hover:bg-gray-300 transition" whileHover={{ scale: 1.05 }}>
                Voltar
              </motion.button>
              <motion.button onClick={handleNextQuestion} className="bg-teal-600 text-white px-6 py-3 rounded-xl shadow hover:bg-teal-700 transition" whileHover={{ scale: 1.05 }}>
                {currentQuestionIndex === questions.length - 1 ? "Finalizar" : "Próxima"}
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
