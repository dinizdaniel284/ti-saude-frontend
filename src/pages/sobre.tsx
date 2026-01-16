import React from 'react';
import Head from 'next/head';
import SectionSobre from '../components/SectionSobre';
import { Award, Code2, HeartPulse, ShieldCheck } from 'lucide-react';

const SobrePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Sobre Daniel Diniz | Especialista em TI & Saúde</title>
        <meta 
          name="description" 
          content="Conheça a trajetória de Daniel Diniz, focado em transformar a gestão hospitalar através de tecnologia, dados e inovação digital." 
        />
      </Head>

      {/* Hero da Biografia */}
      <section className="pt-24 pb-16 px-6 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/5 skew-x-12 transform origin-right"></div>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] bg-slate-200 overflow-hidden shadow-2xl border-4 border-white rotate-3">
             {/* Substitua pelo caminho da sua foto real */}
             <img 
               src="/foto-daniel.jpg" 
               alt="Daniel Diniz" 
               className="w-full h-full object-cover"
             />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <span className="text-indigo-600 font-black uppercase tracking-[.3em] text-xs">O Autor</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-6 tracking-tighter">
              Daniel <span className="text-indigo-600">Diniz.</span>
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed italic">
              "Acredito que a tecnologia só atinge seu propósito máximo quando serve para salvar vidas e otimizar o cuidado humano."
            </p>
          </div>
        </div>
      </section>

      {/* Missão e Visão - Essencial para AdSense */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-premium">
            <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4">Especialidade</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Desenvolvedor FullStack e consultor focado em arquiteturas hospitalares críticas, integração de sistemas (HIS/PEP) e segurança da informação.
            </p>
          </div>

          <div className="p-10 bg-indigo-900 rounded-[2.5rem] shadow-2xl">
            <div className="w-12 h-12 bg-emerald-400 text-indigo-950 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <HeartPulse size={24} />
            </div>
            <h3 className="text-xl font-black text-white mb-4">Propósito</h3>
            <p className="text-indigo-100 text-sm leading-relaxed">
              Democratizar o conhecimento sobre Saúde Digital 5.0, ajudando profissionais e instituições na transição para um modelo baseado em dados.
            </p>
          </div>

          <div className="p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-premium">
            <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4">Experiência</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Anos de atuação no ecossistema de HealthTechs, liderando projetos de BI e adequação de sistemas às normas da LGPD.
            </p>
          </div>
        </div>
      </section>

      {/* Texto de História Profissional */}
      <div className="pb-20">
        <SectionSobre />
      </div>

      {/* Rodapé de Encerramento com CTA Social */}
      <section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="mx-auto text-indigo-600 mb-6" size={48} />
          <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter">Compromisso com a Ética</h2>
          <p className="text-lg text-slate-600 mb-10 font-light">
            Todo o conteúdo publicado neste portal passa por um rigoroso processo de revisão técnica. Meu objetivo é garantir que você receba informações precisas para tomar as melhores decisões na sua carreira e instituição.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/seu-perfil" target="_blank" className="text-slate-400 hover:text-indigo-600 font-bold transition-colors">LinkedIn</a>
            <a href="https://github.com/seu-perfil" target="_blank" className="text-slate-400 hover:text-slate-900 font-bold transition-colors">GitHub</a>
            <a href="mailto:contato@tisaude.com.br" className="text-slate-400 hover:text-red-500 font-bold transition-colors">E-mail</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;