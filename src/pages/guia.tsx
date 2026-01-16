import React from 'react';
import Head from 'next/head';
import SectionGuia from '../components/SectionGuia';
import { Download, BookOpen, Lightbulb, CheckCircle } from 'lucide-react';

const GuiaPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>Guia de Implementação TI & Saúde | Recursos Gratuitos</title>
        <meta 
          name="description" 
          content="Acesse guias práticos, checklists de cibersegurança e frameworks de BI para acelerar a transformação digital na sua instituição de saúde." 
        />
      </Head>

      {/* Hero Section do Guia */}
      <section className="pt-24 pb-16 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
            Conteúdo Exclusivo
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-6 mb-6 tracking-tighter leading-tight">
            Recursos Estratégicos para <span className="text-indigo-600">Gestores de TI.</span>
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Nossos guias práticos reúnem as melhores práticas de mercado para transformar a tecnologia em um ativo clínico e financeiro.
          </p>
        </div>
      </section>

      {/* Destaques Técnicos (Resumo do que encontrar no guia) */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <CheckCircle className="text-green-500 mb-4" size={28} />
            <h3 className="font-bold text-slate-900 mb-2">Checklist LGPD</h3>
            <p className="text-sm text-slate-500">Passos essenciais para adequação de dados sensíveis hospitalares.</p>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <BookOpen className="text-indigo-500 mb-4" size={28} />
            <h3 className="font-bold text-slate-900 mb-2">Framework BI</h3>
            <p className="text-sm text-slate-500">Como estruturar KPIs assistenciais do zero no Power BI.</p>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <Lightbulb className="text-yellow-500 mb-4" size={28} />
            <h3 className="font-bold text-slate-900 mb-2">Guia de IA</h3>
            <p className="text-sm text-slate-500">Onde aplicar Inteligência Artificial para reduzir glosas.</p>
          </div>
          <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <Download className="text-cyan-500 mb-4" size={28} />
            <h3 className="font-bold text-slate-900 mb-2">Templates</h3>
            <p className="text-sm text-slate-500">Modelos de documentação técnica para sistemas HIS/PEP.</p>
          </div>
        </div>
      </section>

      {/* Renderização da SectionGuia Original */}
      <div className="pb-20">
        <SectionGuia />
      </div>

      {/* Newsletter / CTA de Encerramento */}
      <section className="py-20 px-6 bg-slate-900 rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-6">Mantenha-se Atualizado</h2>
          <p className="text-slate-400 mb-10 text-lg">
            A tecnologia na saúde evolui diariamente. Receba nossos novos guias e análises técnicas diretamente no seu e-mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <input 
               type="email" 
               placeholder="Seu melhor e-mail" 
               className="px-6 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-80"
             />
             <button className="bg-indigo-600 text-white font-black px-10 py-4 rounded-2xl hover:bg-indigo-500 transition shadow-xl shadow-indigo-600/20">
               INSCREVER AGORA
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuiaPage;