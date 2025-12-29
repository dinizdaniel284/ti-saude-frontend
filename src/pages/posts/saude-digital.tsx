import Head from "next/head";
import Link from "next/link";

export default function SaudeDigital() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head>
        <title>Saúde Digital: O Ecossistema da Inovação Hospitalar | TI & Saúde</title>
        <meta 
          name="description" 
          content="Entenda o conceito de Saúde Digital, seus pilares e como sistemas como HIS, PEP e RIS transformam a assistência médica e a gestão hospitalar." 
        />
      </Head>

      <article className="max-w-4xl mx-auto">
        <Link href="/" className="text-emerald-600 font-bold hover:underline mb-8 inline-block">
          ← Voltar para a Home
        </Link>
        
        <header className="mb-12">
          <span className="text-emerald-600 font-black uppercase tracking-widest text-sm">Estratégia & Gestão</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
            Saúde Digital: Conectando <span className="text-emerald-600">Tecnologia e Cuidado.</span>
          </h1>
          <p className="text-xl font-light text-slate-600 leading-relaxed italic">
            A saúde digital vai além da digitalização de processos; ela é a inteligência que coloca o paciente no centro do ecossistema médico.
          </p>
        </header>

        <div className="prose prose-lg text-slate-600 space-y-8 leading-relaxed">
          <p>
            O conceito de <strong>Saúde Digital</strong> abrange um vasto ecossistema que utiliza tecnologias de informação e comunicação para melhorar a prevenção, o diagnóstico e o tratamento de doenças. No ambiente hospitalar, isso se traduz em sistemas robustos como o <strong>HIS (Hospital Information System)</strong>, que gerencia desde a recepção até a alta médica.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Os 3 Pilares Fundamentais:</h2>
            <div className="space-y-4">
              <div className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                <h3 className="text-emerald-800 font-bold mb-1">1. Interoperabilidade e Conectividade</h3>
                <p className="text-sm text-emerald-900">
                  Garantir que o <strong>PEP (Prontuário Eletrônico do Paciente)</strong> converse com o sistema de imagem (PACS) e com o laboratório. Sem dados integrados, não há saúde digital real.
                </p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                <h3 className="text-emerald-800 font-bold mb-1">2. Mobilidade e Segurança</h3>
                <p className="text-sm text-emerald-900">
                  Acesso seguro aos dados críticos em dispositivos móveis, permitindo que a equipe de enfermagem e médicos tomem decisões à beira do leito, amparados por criptografia de ponta.
                </p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500 shadow-sm">
                <h3 className="text-emerald-800 font-bold mb-1">3. Engajamento do Paciente</h3>
                <p className="text-sm text-emerald-900">
                  Ferramentas como portais de resultados, aplicativos de agendamento e telemonitoramento que transformam o paciente em um agente ativo do seu próprio cuidado.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-800">A Eficiência Clínica através do Dado</h2>
            <p>
              Quando implementamos uma estratégia de saúde digital eficiente, reduzimos drasticamente o erro humano. Sistemas de apoio à decisão (CDSS) utilizam a base de dados para alertar sobre protocolos de sepse ou interações medicamentosas, elevando o padrão de segurança hospitalar.
            </p>
            <p>
              Para o profissional de tecnologia, o desafio é manter esse ecossistema funcionando 24/7. Isso exige um <strong>Backend</strong> robusto e uma governança de dados impecável, respeitando normas como a LGPD.
            </p>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-[2.5rem] my-12 flex flex-col md:flex-row items-center gap-6 shadow-xl">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Transforme sua Instituição</h3>
              <p className="text-slate-400 text-sm">A saúde digital é o único caminho para a sustentabilidade financeira e excelência clínica em 2025.</p>
            </div>
            <Link href="/posts/evolucao-digital" className="bg-emerald-500 text-slate-900 font-black px-6 py-3 rounded-xl hover:bg-emerald-400 transition">
              Saiba Mais
            </Link>
          </section>
        </div>

        <footer className="mt-12 flex justify-between items-center py-6 border-t border-slate-100">
          <p className="text-slate-400 text-sm italic">Conheça o impacto da IA nesse ecossistema.</p>
          <Link href="/posts/ia-na-saude" className="text-emerald-600 font-bold hover:underline">
            Ver Próximo Artigo →
          </Link>
        </footer>
      </article>
    </div>
  );
}