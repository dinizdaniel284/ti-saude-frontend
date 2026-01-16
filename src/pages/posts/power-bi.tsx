import PostLayout from "../../components/PostLayout";
import Link from "next/link";

export default function PowerBISaude() {
  return (
    <PostLayout 
      title="Power BI na Saúde: Dashboards que Salvam Vidas" 
      category="Business Intelligence"
    >
      {/* INTRODUÇÃO */}
      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12 italic border-l-4 border-yellow-500 pl-6">
        "No ecossistema hospitalar, o que não é medido não é gerenciado. O Power BI transforma o caos de dados brutos em clareza estratégica para a linha de frente assistencial."
      </p>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">O Fim das Planilhas Estáticas</h2>
        <p>
          O <strong>Power BI</strong> se consolidou como o padrão ouro para a visualização de dados na saúde digital. Em ambientes de alta complexidade, onde sistemas como <strong>MV Soul</strong> ou <strong>Tasy</strong> geram milhares de registros por segundo, a capacidade de consolidar essas informações em painéis dinâmicos é o que define a agilidade de um hospital.
        </p>
      </section>

      {/* DASHBOARDS */}
      <section>
        <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">Dashboards Estratégicos Essenciais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="group p-8 bg-yellow-50/50 rounded-[2.5rem] border border-yellow-100 hover:bg-white hover:shadow-2xl transition-all">
            <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg">📊</div>
            <h3 className="text-xl font-black text-slate-900 mb-3 uppercase">Gestão de Leitos</h3>
            <p className="text-sm text-slate-600">Otimização do giro de leitos e redução do tempo de espera no Pronto-Socorro.</p>
          </div>

          <div className="group p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 hover:shadow-2xl transition-all">
            <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 text-2xl mb-6 shadow-lg">💰</div>
            <h3 className="text-xl font-black text-white mb-3 uppercase">Ciclo Financeiro</h3>
            <p className="text-sm text-slate-300">Monitoramento crítico de glosas médicas e faturamento em tempo real.</p>
          </div>
        </div>
      </section>

      

      {/* COMPARATIVO */}
      <section className="my-16 bg-slate-50 p-10 rounded-[3rem] border border-slate-200">
        <h3 className="text-2xl font-black text-slate-900 mb-8 text-center uppercase tracking-widest">Excel vs Power BI</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <li className="flex gap-4">
            <span className="text-yellow-600 font-bold">✓</span>
            <span className="text-slate-700 text-sm"><strong>Atualização Automática:</strong> Sem trabalho manual.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-yellow-600 font-bold">✓</span>
            <span className="text-slate-700 text-sm"><strong>Segurança:</strong> Controle total de quem vê o quê.</span>
          </li>
        </ul>
      </section>

      {/* CTA FINAL */}
      <footer className="mt-20">
        <div className="relative p-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 rounded-[3rem]">
          <div className="bg-slate-950 rounded-[2.9rem] p-12 text-center relative">
            <h3 className="text-3xl font-black text-white mb-4">Precisa de Inteligência de Dados?</h3>
            <p className="text-slate-300 mb-8 max-w-lg mx-auto font-light"> {/* Ajustei para slate-300 aqui */}
              Desenvolvemos dashboards personalizados para o setor assistencial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5519992278928" className="bg-yellow-500 text-slate-950 font-black px-10 py-5 rounded-2xl hover:scale-105 transition-all uppercase text-xs tracking-widest">
                Consultoria de BI
              </a>
              <Link href="/" className="bg-white/5 text-white font-bold px-10 py-5 rounded-2xl border border-white/10 uppercase text-xs tracking-widest">
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </PostLayout>
  );
}