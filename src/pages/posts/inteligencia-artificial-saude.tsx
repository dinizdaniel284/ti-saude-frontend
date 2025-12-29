import Head from "next/head";
import Link from "next/link";

export default function IAnaSaude() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head>
        <title>IA na Saúde: O Cérebro Digital da Medicina Moderna | TI & Saúde</title>
        <meta 
          name="description" 
          content="Descubra como a Inteligência Artificial revoluciona diagnósticos, a gestão hospitalar e a medicina de precisão através da análise de dados e algoritmos preditivos." 
        />
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
            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-md">
               DD
            </div>
            <span>Por <strong>Daniel Diniz</strong> • Especialista em TI & Saúde</span>
          </div>
        </header>

        <div className="prose prose-lg text-slate-600 space-y-8 leading-relaxed">
          <p className="text-xl text-slate-700 leading-relaxed font-light">
            Não estamos falando de robôs substituindo médicos, mas de algoritmos processando milhões de dados para encontrar padrões que o olho humano levaria anos para perceber. 
            A IA é hoje o maior aliado da <strong>medicina de precisão</strong>.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Onde a IA atua hoje?</h2>
            <p>
              A aplicação da IA na saúde digital é vasta e já está presente em grandes centros hospitalares através de três pilares fundamentais para a Saúde 5.0:
            </p>
            <ul className="space-y-4 list-none pl-0">
              <li className="bg-slate-50 p-5 rounded-xl border-l-4 border-cyan-500 shadow-sm">
                <strong>Visão Computacional em Radiologia:</strong> Auxílio na detecção precoce de tumores em exames de imagem como Tomografias e Ressonâncias com alta precisão.
              </li>
              <li className="bg-slate-50 p-5 rounded-xl border-l-4 border-indigo-500 shadow-sm">
                <strong>NLP (Processamento de Linguagem Natural):</strong> Análise de prontuários eletrônicos (PEP) para identificar riscos de doenças crônicas automaticamente.
              </li>
              <li className="bg-slate-50 p-5 rounded-xl border-l-4 border-purple-500 shadow-sm">
                <strong>Análise Preditiva:</strong> Algoritmos que monitoram sinais vitais e preveem eventos adversos, otimizando a gestão de leitos em UTIs.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">O Desafio para o Profissional de TI</h2>
            <p>
              Para quem trabalha com <strong>Backend e Engenharia de Dados</strong>, o maior desafio é a infraestrutura. A inteligência artificial só é eficiente se os dados forem íntegros e estiverem normalizados. Integrar esses algoritmos aos sistemas legados dos hospitais exige APIs de alta performance e segurança rigorosa.
            </p>
            <p>
              Confira também nosso artigo sobre o <Link href="/posts/futuro-ti-saude" className="text-indigo-600 font-bold hover:underline">futuro da tecnologia hospitalar</Link>.
            </p>
          </section>

          <div className="my-12 relative h-64 w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 via-indigo-600 to-cyan-500 opacity-95 flex items-center justify-center p-10 text-center">
                <h3 className="text-white text-2xl md:text-3xl font-black leading-tight italic">
                  "A IA não vai substituir o médico, mas o médico que usa IA substituirá o que não usa."
                </h3>
             </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Ética, Privacidade e LGPD</h2>
            <p>
              A inovação na saúde caminha lado a lado com a <strong>LGPD (Lei Geral de Proteção de Dados)</strong>. O uso de IA exige que os dados dos pacientes sejam anonimizados durante o treinamento dos modelos. Garantir a privacidade sem perder a capacidade preditiva é o equilíbrio que define o sucesso de uma HealthTech hoje.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-100">
           <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl">
              <div className="flex-1 text-center md:text-left">
                 <h3 className="text-2xl font-bold mb-2">Desenvolva Projetos de IA na Saúde</h3>
                 <p className="text-slate-400 text-sm mb-0">Transforme seus dados hospitalares em ferramentas de decisão clínica avançada.</p>
              </div>
              <a 
                href="https://wa.me/5519992278928" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyan-500 text-slate-900 font-black px-8 py-4 rounded-2xl hover:bg-cyan-400 transition transform hover:scale-105 whitespace-nowrap shadow-lg"
              >
                FALAR COM ESPECIALISTA
              </a>
           </div>
        </footer>
      </article>
    </div>
  );
}