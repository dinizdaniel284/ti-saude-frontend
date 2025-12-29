import Head from "next/head";
import Link from "next/link";

export default function PowerBISaude() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head>
        <title>Power BI na Saúde: Dashboards que Salvam Vidas | TI & Saúde</title>
        <meta 
          name="description" 
          content="Descubra como o Power BI revoluciona a gestão hospitalar através de dashboards dinâmicos, controle de glosas e indicadores assistenciais em tempo real." 
        />
      </Head>

      <article className="max-w-4xl mx-auto">
        <Link href="/" className="text-yellow-600 font-bold hover:underline mb-8 inline-block">
          ← Voltar para a Home
        </Link>
        
        <header className="mb-12">
          <span className="text-yellow-600 font-black uppercase tracking-widest text-sm">Business Intelligence</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
            Power BI na Saúde: Visualizando o <span className="text-yellow-500">Sucesso Clínico.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light">
            Como a principal ferramenta de BI do mercado está transformando planilhas de hospitais em decisões estratégicas em tempo real.
          </p>
        </header>

        <div className="prose prose-lg text-slate-600 space-y-8 leading-relaxed">
          <p>
            O <strong>Power BI</strong> se tornou o padrão ouro para a visualização de dados hospitalares. Em um ambiente onde cada segundo conta, ter a capacidade de transformar dados brutos de sistemas como MV ou Tasy em painéis visuais intuitivos não é mais um luxo, mas uma necessidade básica de gestão.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Exemplos de Dashboards Estratégicos:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-yellow-50 rounded-2xl border-t-4 border-yellow-500 shadow-sm">
                <h3 className="text-yellow-800 font-bold text-lg mb-2">📊 Gestão de Leitos e Fluxo</h3>
                <p className="text-sm text-yellow-900">Acompanhamento em tempo real da taxa de ocupação, tempo médio de permanência (TMP) e giro de leitos da UTI.</p>
              </div>
              <div className="p-6 bg-yellow-50 rounded-2xl border-t-4 border-yellow-500 shadow-sm">
                <h3 className="text-yellow-800 font-bold text-lg mb-2">💰 Faturamento e Glosas</h3>
                <p className="text-sm text-yellow-900">Monitoramento de contas abertas, controle rigoroso de glosas e desempenho financeiro por operadora de saúde.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">A Importância dos KPIs Assistenciais</h2>
            <p>
              O grande diferencial do Power BI na saúde é a capacidade de cruzar dados de diferentes setores. Ao unir dados do RH, Financeiro e Assistencial, o gestor consegue identificar, por exemplo, como o dimensionamento da equipe de enfermagem impacta diretamente na taxa de infecção hospitalar ou na satisfação do paciente (NPS).
            </p>
            <p>
              Através de cálculos complexos em <strong>DAX</strong>, conseguimos criar alertas automáticos que indicam quando um indicador sai da meta, permitindo uma correção de curso imediata pela diretoria técnica.
            </p>
            <p>
              Confira também como o <Link href="/posts/analista-dados" className="text-yellow-600 font-bold hover:underline">Analista de Dados</Link> utiliza essas ferramentas no dia a dia.
            </p>
          </section>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 my-12">
            <h3 className="text-slate-800 font-bold text-xl mb-4">Por que migrar do Excel para o BI?</h3>
            <ul className="list-disc ml-6 space-y-2 text-slate-700">
              <li><strong>Atualização Automática:</strong> Chega de perder horas atualizando tabelas manualmente.</li>
              <li><strong>Segurança:</strong> Controle de acesso por nível de usuário (RLS).</li>
              <li><strong>Acessibilidade:</strong> Dashboards acessíveis pelo celular em qualquer lugar.</li>
              <li><strong>Conectividade:</strong> Conexão direta com bancos de dados SQL Server, Oracle e APIs.</li>
            </ul>
          </div>
        </div>

        <footer className="mt-16 p-10 bg-slate-900 rounded-[2.5rem] text-center shadow-2xl">
           <h3 className="text-white font-black mb-2 text-2xl md:text-3xl">Precisa de um Dashboard Profissional?</h3>
           <p className="text-slate-400 mb-8 max-w-md mx-auto">Desenvolvemos soluções personalizadas de BI para clínicas, laboratórios e hospitais.</p>
           <a 
             href="https://wa.me/5519992278928" 
             target="_blank" 
             rel="noopener noreferrer"
             className="bg-yellow-500 text-slate-900 font-black px-10 py-4 rounded-2xl hover:bg-yellow-400 transition transform hover:scale-105 inline-block shadow-lg"
           >
             SOLICITAR ORÇAMENTO
           </a>
        </footer>
      </article>
    </div>
  );
}