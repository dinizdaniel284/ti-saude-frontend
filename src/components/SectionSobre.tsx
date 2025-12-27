import React from 'react';

const SectionSobre: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm">Sobre o Projeto</span>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-8">TI & Saúde</h1>
        
        <div className="prose prose-lg text-slate-600 space-y-6">
          <p>
            O portal <strong>TI & Saúde</strong> é uma iniciativa dedicada a explorar a interseção entre tecnologia da informação e o setor assistencial. Nossa missão é capacitar profissionais de tecnologia para os desafios específicos da Saúde Digital.
          </p>
          <p>
            Idealizado por <strong>Daniel Diniz</strong>, o projeto foca em pilares fundamentais como Backend robusto, análise de dados com Power BI e a implementação de Inteligência Artificial para otimização de processos clínicos.
          </p>
          <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-cyan-500">
            <p className="italic font-medium text-slate-700">
              "Acreditamos que o código bem escrito e o dado bem analisado são ferramentas poderosas para salvar vidas e melhorar a gestão hospitalar."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSobre;