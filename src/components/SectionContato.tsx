import React from 'react';

const SectionContato: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-black text-slate-900 mb-6">Fale Conosco</h1>
        <p className="text-lg text-slate-600 mb-12">
          Tem alguma dúvida, sugestão de conteúdo ou proposta de parceria? Estamos à disposição.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="font-bold text-slate-900 mb-2">E-mail</h3>
            <p className="text-cyan-600 break-words font-medium">contato@tisaude.com.br</p>
          </div>

          <a href="https://wa.me/5519992278928" target="_blank" className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-cyan-500 transition-colors">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="font-bold text-slate-900 mb-2">WhatsApp</h3>
            <p className="text-green-600 font-medium">Chamar no Direto</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionContato;