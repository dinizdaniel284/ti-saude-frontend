import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function IAnaSaude() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head>
        <title>IA na Saúde: O Cérebro Digital da Medicina Moderna | TI & Saúde</title>
        <meta name="description" content="Descubra como a Inteligência Artificial está revolucionando diagnósticos, gestão hospitalar e medicina de precisão." />
      </Head>

      <article className="max-w-3xl mx-auto">
        <Link href="/" className="text-indigo-600 font-bold hover:underline mb-8 inline-block">
          ← Voltar para a Home
        </Link>
        
        <header className="mb-12">
          <span className="text-cyan-600 font-black uppercase tracking-widest text-sm">Tecnologia de Ponta</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
            Inteligência Artificial: O <span className="text-indigo-600">Cérebro Digital</span> que auxilia médicos.
          </h1>
          <div className="flex items-center gap-4 text-slate-500 text-sm">
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden relative">
               {/* Aqui você pode colocar sua foto futuramente */}
               <div className="bg-indigo-600 w-full h-full flex items-center justify-center text-white font-bold">DD</div>
            </div>
            <span>Por <strong>Daniel Diniz</strong> • 5 min de leitura</span>
          </div>
        </header>

        <div className="prose prose-lg text-slate-600 space-y-8 leading-relaxed">
          <p className="text-xl text-slate-700 leading-relaxed font-light">
            Não estamos falando de robôs substituindo médicos, mas de algoritmos processando milhões de dados para encontrar padrões que o olho humano levaria anos para perceber.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Onde a IA atua hoje?</h2>
            <p>
              A aplicação da IA na saúde digital é vasta e já está presente em grandes centros hospitalares através de três pilares principais:
            </p>
            <ul className="space-y-4">
              <li className="bg-slate-50 p-4 rounded-xl border-l-4 border-cyan-500">
                <strong>Visão Computacional em Radiologia:</strong> Auxílio na detecção precoce de tumores em exames de imagem com precisão superior a 90%.
              </li>
              <li className="bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-500">
                <strong>NLP (Processamento de Linguagem Natural):</strong> Transcrição e análise de prontuários para identificar riscos de comorbidades automaticamente.
              </li>
              <li className="bg-slate-50 p-4 rounded-xl border-l-4 border-purple-500">
                <strong>Análise Preditiva:</strong> Algoritmos que preveem picos de ocupação em UTIs, permitindo uma gestão de leitos muito mais eficiente.
              </li>
            </ul>
          </section>

          <h2 className="text-2xl font-bold text-slate-800">IA e o Profissional de TI</h2>
          <p>
            Para quem trabalha com **Backend e Dados**, o desafio é a integração. Não adianta ter uma IA incrível se o dado não chega nela de forma limpa e rápida. A estruturação de bancos de dados robustos e APIs seguras é o que permite que a IA "respire".
          </p>

          <div className="my-12 relative h-64 w-full rounded-[2rem] overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-500 opacity-90 flex items-center justify-center p-8 text-center">
                <h3 className="text-white text-2xl font-black">"A IA não vai substituir o médico, mas o médico que usa IA substituirá o que não usa."</h3>
             </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-800">Ética e Segurança</h2>
          <p>
            O uso de IA na saúde exige uma responsabilidade imensa com a **LGPD**. A anonimização dos dados de treinamento é obrigatória para garantir que a inovação não custe a privacidade do paciente.
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-100">
           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl">
              <div className="flex-1 text-center md:text-left">
                 <h3 className="text-2xl font-bold mb-2">Quer aplicar IA no seu projeto?</h3>
                 <p className="text-slate-400 text-sm mb-0">Vamos discutir como transformar seus dados em inteligência clínica.</p>
              </div>
              <a href="https://wa.me/5519992278928" className="bg-cyan-500 text-slate-900 font-black px-8 py-4 rounded-2xl hover:bg-cyan-400 transition transform hover:scale-105 whitespace-nowrap">
                FALAR COM ESPECIALISTA
              </a>
           </div>
        </footer>
      </article>
    </div>
  );
}