import React from 'react';
import Head from 'next/head';
import SectionContato from '../components/SectionContato';
import { Mail, MessageCircle, ShieldCheck, MapPin } from 'lucide-react';

const ContatoPage: React.FC = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Contato | TI & Saúde - Consultoria e Inovação</title>
        <meta 
          name="description" 
          content="Entre em contato com Daniel Diniz. Suporte técnico, parcerias e consultoria especializada em tecnologia hospitalar, BI e LGPD na saúde." 
        />
      </Head>

      {/* Hero da Página de Contato */}
      <section className="pt-24 pb-12 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-indigo-600 font-black uppercase tracking-[0.3em] text-xs">Canais de Atendimento</span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 mt-4 mb-6 tracking-tighter">
            Vamos construir a <span className="text-indigo-600">Saúde Digital</span> juntos.
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
            Seja para uma dúvida técnica, proposta de projeto ou consultoria em LGPD, estou à disposição para ajudar.
          </p>
        </div>
      </section>

      {/* Cards de Contato Rápido */}
      <section className="py-12 px-6 -mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <a href="mailto:contato@tisaude.com.br" className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-indigo-500 transition-all">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <h3 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-2">E-mail Direto</h3>
            <p className="text-slate-600 text-sm">contato@tisaude.com.br</p>
          </a>

          <a href="https://wa.me/5519992278928" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-green-500 transition-all">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all">
              <MessageCircle size={24} />
            </div>
            <h3 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-2">WhatsApp</h3>
            <p className="text-slate-600 text-sm">(19) 99227-8928</p>
          </a>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:border-cyan-500 transition-all">
            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-all">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-black text-slate-900 uppercase text-xs tracking-widest mb-2">Consultoria</h3>
            <p className="text-slate-600 text-sm">Especialista TI & Saúde</p>
          </div>
          
        </div>
      </section>

      {/* Formulário de Contato */}
      <div className="py-12" id="form-contato">
        <SectionContato />
      </div>

      {/* Compliance e Rodapé Técnico */}
      <footer className="py-20 px-6 border-t border-slate-100 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <MapPin className="mx-auto text-slate-300 mb-4" size={32} />
          <p className="text-slate-400 text-sm leading-relaxed">
            Localizado em São Paulo - Atendimento especializado para todo o Brasil.<br />
            Seus dados são protegidos conforme nossa <strong>Política de Privacidade</strong> e a <strong>LGPD</strong>.
            Ao enviar uma mensagem, você concorda com o processamento dos dados apenas para fins de contato profissional.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContatoPage;