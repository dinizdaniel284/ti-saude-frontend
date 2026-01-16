import PostLayout from "../../components/PostLayout";
import Link from "next/link";

export default function PowerBISaude() {
  return (
    <PostLayout 
      title="Power BI na Saúde: Dashboards que Salvam Vidas" 
      category="Business Intelligence"
    >
      {/* INTRODUÇÃO ESTRUTURADA */}
      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12 italic border-l-4 border-yellow-500 pl-6">
        "No ecossistema hospitalar, o que não é medido não é gerenciado. O Power BI transforma o caos de dados brutos em clareza estratégica para a linha de frente assistencial."
      </p>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">O Fim das Planilhas Estáticas</h2>
        <p>
          O <strong>Power BI</strong> se consolidou como o padrão ouro para a visualização de dados na saúde digital. Em ambientes de alta complexidade, onde sistemas como <strong>MV Soul</strong> ou <strong>Tasy</strong> geram milhares de registros por segundo, a capacidade de consolidar essas informações em painéis dinâmicos é o que define a agilidade de um hospital.
        </p>
        <p className="mt-4">
          Diferente do Excel, o BI permite a criação de uma <strong>única fonte da verdade (Single Source of Truth)</strong>, onde diretoria, médicos e gestores administrativos olham para os mesmos indicadores, atualizados automaticamente via Gateway de dados.
        </p>
      </section>

      {/* GRID DE DASHBOARDS - DESIGN DE ELITE */}
      <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">Dashboards Estratégicos Essenciais</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        <div className="group p-8 bg-yellow-50/50 rounded-[2.5rem] border border-yellow-100 hover:bg-white hover:shadow-premium transition-all">
          <div className="w-12 h-12 bg-yellow-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
            📊
          </div>
          <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Gestão de Leitos e TMP</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Acompanhamento em tempo real da taxa de ocupação e <strong>TMP (Tempo Médio de Permanência)</strong>. O uso de cálculos em <strong>DAX</strong> permite prever altas e otimizar o giro de leitos, reduzindo o tempo de espera no Pronto-Socorro.
          </p>
        </div>

        <div className="group p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 hover:shadow-2xl transition-all">
          <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center text-slate-900 text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform">
            💰
          </div>
          <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tighter">Ciclo Financeiro e Glosas</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Monitoramento crítico de <strong>Glosas Médicas</strong> e contas abertas. Identificar padrões de rejeição por operadora permite que o faturamento ajuste processos na origem, garantindo a saúde financeira da instituição.
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">O Poder dos KPIs Assistenciais</h2>
        <p>
          O grande diferencial do BI na saúde é o cruzamento de dados heterogêneos. Ao unir dados de RH com indicadores clínicos, conseguimos correlacionar o dimensionamento da equipe com a <strong>Taxa de Infecção Hospitalar</strong> ou episódios de queda de pacientes. 
        </p>
        <p className="mt-4 italic text-slate-500">
          "Através de algoritmos de inteligência artificial nativos do Power BI, como o Key Influencers, gestores podem descobrir quais variáveis realmente impactam na satisfação do paciente (NPS)."
        </p>
      </section>

      {/* COMPARAÇÃO TÉCNICA (GOOGLE AMA TABELAS/LISTAS ESTRUTURADAS) */}
      <section className="my-16 bg-slate-50 p-10 rounded-[3rem] border border-slate-200">
        <h3 className="text-2xl font-black text-slate-900 mb-8 text-center uppercase tracking-widest">Por que migrar do Excel para o BI?</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <li className="flex gap-4">
            <span className="text-yellow-600 font-bold">✓</span>
            <span className="text-slate-700 text-sm"><strong>Atualização Automática:</strong> Conexão direta com SQL Server e Oracle.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-yellow-600 font-bold">✓</span>
            <span className="text-slate-700 text-sm"><strong>Segurança RLS:</strong> Filtre dados sensíveis por nível de acesso do usuário.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-yellow-600 font-bold">✓</span>
            <span className="text-slate-700 text-sm"><strong>Mobilidade:</strong> App nativo para acompanhamento médico em tablets e celulares.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-yellow-600 font-bold">✓</span>
            <span className="text-slate-700 text-sm"><strong>Governança:</strong> Histórico de dados sem risco de erro humano em fórmulas.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Conclusão: Dados que Transformam o Cuidado</h2>
        <p>
          Dominar o Power BI na saúde não é apenas sobre criar gráficos bonitos, é sobre dar transparência a um sistema complexo. Para o profissional de TI, esta é uma das carreiras mais promissoras, servindo como ponte entre a tecnologia e a diretoria médica.
        </p>
        <p className="mt-6">
          Explore mais sobre o perfil deste profissional em nosso artigo sobre <Link href="/posts/analista-dados" className="text-yellow-600 font-bold hover:underline">Analista de Dados na Saúde</Link>.
        </p>
      </section>

      {/* CTA DE CONVERSÃO */}
      <footer className="mt-20">
        <div className="relative p-1 bg-gradient-to-r from-yellow-400 via-yellow-600 to-yellow-400 rounded-[3rem] overflow-hidden">
          <div className="bg-slate-950 rounded-[2.9rem] p-12 text-center relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-yellow-500/10 blur-[100px]"></div>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">Precisa de Inteligência de Dados?</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto font-light">
              Desenvolvemos dashboards personalizados para hospitais, clínicas e laboratórios com foco em ROI e eficiência clínica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5519992278928" className="bg-yellow-500 text-slate-950 font-black px-10 py-5 rounded-2xl hover:bg-yellow-400 transition-all hover:scale-105 shadow-xl uppercase text-xs tracking-[0.2em]">
                Consultoria de BI
              </a>
              <Link href="/" className="bg-white/5 text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/10 transition-all border border-white/10 uppercase text-xs tracking-[0.2em]">
                Ver Portfólio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </PostLayout>
  );
}