import Head from "next/head";
import Link from "next/link";

export default function AnalistaDados() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <Head>
        <title>Analista de Dados na Saúde: Carreira e Desafios | TI & Saúde</title>
        <meta name="description" content="Saiba como se tornar um Analista de Dados na saúde, as principais ferramentas como SQL e Python, e o impacto da análise de dados em hospitais." />
      </Head>
      
      <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
        <Link href="/" className="text-blue-600 font-bold hover:underline mb-8 inline-block">
          ← Voltar para a Home
        </Link>
        
        <header className="mb-10">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs">Carreiras & Tecnologia</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6 leading-tight">
            Analista de Dados: O <span className="text-blue-600">Estrategista</span> da Saúde Digital.
          </h1>
          <p className="text-xl text-slate-500 italic">Como a ciência de dados está otimizando hospitais e salvando vidas através da análise preditiva.</p>
        </header>

        <div className="prose prose-lg text-slate-700 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">A Revolução dos Dados no Setor Hospitalar</h2>
            <p>
              Atualmente, o setor de saúde enfrenta um desafio sem precedentes: o volume massivo de informações geradas por prontuários eletrônicos, dispositivos de IoT e sistemas de gestão. O papel do <strong>Analista de Dados na Saúde</strong> é filtrar esse mar de informações e extrair inteligência que impacte diretamente no desfecho clínico.
            </p>
            <p>
              Diferente de um analista financeiro comum, o profissional de saúde lida com indicadores sensíveis, como taxas de mortalidade, tempo de desmame de ventilação mecânica e protocolos de sepse. Transformar esses dados em <em>dashboards</em> intuitivos permite que médicos tomem decisões baseadas em evidências em tempo real.
            </p>
          </section>

          <div className="bg-blue-50 p-8 rounded-3xl border-l-8 border-blue-500 my-10">
            <h3 className="font-bold text-blue-900 text-xl mb-4">Hard Skills Essenciais para 2025:</h3>
            <ul className="list-disc ml-6 space-y-2 text-blue-800">
              <li><strong>SQL Avançado:</strong> Para extração de dados complexos em sistemas como MV ou Tasy.</li>
              <li><strong>Python & R:</strong> Ferramentas fundamentais para limpeza de dados e modelos estatísticos.</li>
              <li><strong>Power BI / Tableau:</strong> Visualização de dados para transformar números em gráficos compreensíveis para a diretoria.</li>
              <li><strong>Conhecimento em LGPD:</strong> Segurança da informação é vital ao lidar com dados sensíveis de pacientes.</li>
            </ul>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">O Impacto Prático na Gestão Clínica</h2>
            <p>
              Um exemplo prático da atuação deste profissional é a análise da <strong>jornada do paciente</strong>. Ao identificar gargalos no fluxo de atendimento do pronto-socorro, o analista pode sugerir mudanças que reduzem o tempo de espera em até 30%, otimizando o uso de recursos humanos e financeiros.
            </p>
            <p>
              Além disso, a análise preditiva permite antecipar picos de demanda por leitos de UTI, permitindo que a administração hospitalar se prepare com antecedência, evitando a superlotação e garantindo a qualidade do atendimento.
            </p>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Conclusão</h2>
            <p>
              A carreira de Analista de Dados na Saúde não é apenas sobre números; é sobre eficiência operacional e cuidado com o próximo. Se você busca uma profissão com alto propósito e demanda crescente, este é o momento ideal para se especializar.
            </p>
          </section>
        </div>

        <div className="mt-12 p-6 bg-slate-900 rounded-2xl text-white flex justify-between items-center">
          <div>
            <p className="font-bold">Gostou deste conteúdo?</p>
            <p className="text-slate-400 text-sm">Leia também sobre as tendências de Telemedicina.</p>
          </div>
          <Link href="/posts/telemedicina" className="bg-blue-600 px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition">
            Ver Artigo
          </Link>
        </div>
      </article>
    </div>
  );
}