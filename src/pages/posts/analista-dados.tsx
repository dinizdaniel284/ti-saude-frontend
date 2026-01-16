import PostLayout from "../../components/PostLayout";
import Link from "next/link";

export default function AnalistaDados() {
  return (
    <PostLayout 
      title="Analista de Dados: O Estrategista da Saúde Digital" 
      category="Carreiras & Data Science"
    >
      {/* INTRODUÇÃO ROBUSTA */}
      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12 italic border-l-4 border-cyan-500 pl-6">
        "Na era da Saúde 4.0, o dado é o novo prontuário. Transformar bytes em decisões clínicas é o que separa hospitais comuns de centros de excelência tecnológica."
      </p>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">A Revolução dos Dados no Setor Hospitalar</h2>
        <p>
          Atualmente, o setor de saúde enfrenta um desafio sem precedentes: o volume massivo de informações geradas por prontuários eletrônicos (PEP), dispositivos de IoT vestíveis e sistemas de gestão hospitalar (HIS). O papel do <strong>Analista de Dados na Saúde</strong> é filtrar esse mar de informações e extrair inteligência que impacte diretamente no desfecho clínico.
        </p>
        <p className="mt-4">
          Diferente de um analista de BI do varejo, o profissional de saúde lida com indicadores de vida. Estamos falando de analisar o <strong>Protocolo de Sepse</strong>, monitorar a taxa de ocupação de leitos de UTI e prever o tempo de desmame de ventilação mecânica. Cada dashboard criado pode ser a diferença entre um diagnóstico precoce e uma complicação evitável.
        </p>
      </section>

      {/* BOX DE CONTEÚDO TÉCNICO (ADSENSE AMA ISSO) */}
      <div className="bg-[#020617] p-10 rounded-[2.5rem] my-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-3xl"></div>
        <h3 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-6">Hard Skills & Ecossistema</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="flex flex-col">
            <span className="text-white font-bold text-lg">SQL para Saúde</span>
            <span className="text-slate-400 text-sm">Domínio de queries em bancos Oracle e SQL Server usados em sistemas como MV e Tasy.</span>
          </li>
          <li className="flex flex-col">
            <span className="text-white font-bold text-lg">Interoperabilidade</span>
            <span className="text-slate-400 text-sm">Conhecimento em padrões HL7 e FHIR para integração de dados entre sistemas.</span>
          </li>
          <li className="flex flex-col">
            <span className="text-white font-bold text-lg">Linguagens</span>
            <span className="text-slate-400 text-sm">Python para limpeza de dados (Pandas/NumPy) e R para análises bioestatísticas.</span>
          </li>
          <li className="flex flex-col">
            <span className="text-white font-bold text-lg">LGPD & Segurança</span>
            <span className="text-slate-400 text-sm">Anonimização de dados sensíveis e conformidade com a Lei Geral de Proteção de Dados.</span>
          </li>
        </ul>
      </div>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 tracking-tight">O Impacto na Gestão e no Cuidado</h2>
        <p>
          Um dos maiores ganhos da análise de dados é a otimização da <strong>Jornada do Paciente</strong>. Através de modelos de <em>Process Mining</em>, analistas conseguem identificar gargalos no fluxo de atendimento do Pronto-Socorro. Reduzir o tempo de espera não é apenas uma meta financeira, é uma melhoria direta na qualidade assistencial.
        </p>
        
        <div className="my-10 p-8 bg-slate-50 rounded-3xl border border-slate-200 italic text-slate-700">
           <h4 className="font-bold mb-2 not-italic text-indigo-600">Exemplo Prático:</h4>
           "Ao analisar os dados históricos de admissões, conseguimos prever com 85% de precisão o aumento da demanda por leitos de isolamento 48 horas antes do pico ocorrer, permitindo que a farmácia e a enfermagem se organizassem sem correria."
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mt-10 mb-4">Principais Dashboards de Saúde</h3>
        <p>Para quem está começando, estes são os indicadores fundamentais que você precisará dominar:</p>
        <ul className="list-disc ml-6 space-y-3 mt-4">
          <li><strong>Giro de Leito:</strong> Quantidade de pacientes atendidos por leito em um período.</li>
          <li><strong>Taxa de Reinternação:</strong> Indicador crítico de qualidade clínica e desfecho.</li>
          <li><strong>Ticket Médio por Procedimento:</strong> Fundamental para a sustentabilidade do hospital.</li>
          <li><strong>SLA de Atendimento:</strong> Tempo desde a triagem até o primeiro atendimento médico.</li>
        </ul>
      </section>

      <section className="mt-20 border-t border-slate-100 pt-12">
        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Conclusão: Uma Carreira com Propósito</h2>
        <p>
          A carreira de Analista de Dados na Saúde não é apenas sobre números; é sobre eficiência operacional aplicada à preservação da vida. Se você busca uma profissão onde a tecnologia encontra a humanização, o Data Science médico é o caminho mais promissor da década.
        </p>
      </section>

      {/* CTA DE NAVEGAÇÃO INTERNA (MELHORA O SEO) */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 gap-8">
        <div>
          <h4 className="text-slate-900 font-black text-xl mb-2">Próximo Passo</h4>
          <p className="text-slate-500 text-sm">Entenda como a Telemedicina está integrando esses dados.</p>
        </div>
        <Link href="/posts/telemedicina" className="whitespace-nowrap bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-lg">
          Ler sobre Telemedicina →
        </Link>
      </div>
    </PostLayout>
  );
}