import PostLayout from "../../components/PostLayout";

export default function Backend() {
  return (
    <PostLayout 
      title="Backend: O Motor Invisível da Saúde Digital" 
      category="Engenharia de Software & HealthTech"
    >
      {/* INTRODUÇÃO IMPACTANTE */}
      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12 italic border-l-4 border-indigo-500 pl-6">
        "No ecossistema hospitalar, o Backend é a garantia de que os dados de um paciente estarão disponíveis para o médico no momento exato de uma emergência. É tecnologia com propósito de salvar."
      </p>

      <p>
        No mundo do desenvolvimento de software, o <strong>Backend</strong> é frequentemente chamado de "o que acontece nos bastidores". 
        Diferente de um e-commerce comum, o backend em <strong>HealthTech</strong> precisa lidar com protocolos de interoperabilidade complexos e segurança crítica.
      </p>

      {/* SEÇÃO DE RESPONSABILIDADES COM CARDS LIMPOS */}
      <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">
        🔧 O que um desenvolvedor Backend faz na Saúde?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
          <h4 className="font-bold text-indigo-600 mb-2">Interoperabilidade</h4>
          <p className="text-sm text-slate-600">Conectar prontuários eletrônicos (PEP) com sistemas laboratoriais e exames de imagem.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
          <h4 className="font-bold text-indigo-600 mb-2">Segurança Máxima</h4>
          <p className="text-sm text-slate-600">Implementar criptografia de ponta a ponta seguindo a LGPD e padrões internacionais.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
          <h4 className="font-bold text-indigo-600 mb-2">Alta Disponibilidade</h4>
          <p className="text-sm text-slate-600">Garantir que a telemedicina nunca fique fora do ar durante um atendimento crítico.</p>
        </div>
        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
          <h4 className="font-bold text-indigo-600 mb-2">Lógica Clínica</h4>
          <p className="text-sm text-slate-600">Criar alertas automáticos para resultados de exames que detectam riscos imediatos.</p>
        </div>
      </div>

      {/* BOX DE STACK TECNOLÓGICA (VISUAL DE DASHBOARD) */}
      <div className="relative p-8 my-16 bg-[#020617] rounded-[2.5rem] overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl group-hover:bg-indigo-500/40 transition-all"></div>
        <h3 className="relative z-10 font-bold text-cyan-400 text-xl mb-6 tracking-widest uppercase text-center md:text-left">
          🚀 Stack Tecnológica Recomendada
        </h3>
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <span className="block text-slate-400 text-[10px] uppercase font-bold mb-2 tracking-widest">Linguagens</span>
            <p className="text-white font-medium">Node.js, Python (FastAPI) e Java Spring.</p>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <span className="block text-slate-400 text-[10px] uppercase font-bold mb-2 tracking-widest">Databases</span>
            <p className="text-white font-medium">PostgreSQL, MongoDB e Redis (Cache).</p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 tracking-tight">
        💡 Vitalidade para a Medicina Moderna
      </h2>
      <p>
        Sem um backend sólido, a <strong>Inteligência Artificial</strong> na saúde não conseguiria processar dados, a telemedicina não teria estabilidade e os registros seriam fragmentados. 
        O backend é o fio condutor da <strong>continuidade do cuidado</strong>.
      </p>

      {/* FOOTER DO ARTIGO COM NAVEGAÇÃO */}
      <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-1">Próxima Leitura</p>
          <h4 className="text-slate-900 font-bold">Analista de Dados: O Futuro das Decisões</h4>
        </div>
        <Link href="/posts/analista-dados" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg text-sm uppercase tracking-widest">
          Ver Próximo Artigo →
        </Link>
      </div>
    </PostLayout>
  );
}