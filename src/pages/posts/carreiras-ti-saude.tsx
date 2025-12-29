import Head from "next/head";
import Link from "next/link";

export default function CarreirasTISaude() {
  return (
    <>
      <Head>
        <title>Carreiras em TI & Saúde: Guia Completo para 2025 | TI & Saúde</title>
        <meta
          name="description"
          content="Descubra as profissões mais promissoras na intersecção entre tecnologia e saúde, desde Analista de BI até Especialista em Segurança Hospitalar."
        />
      </Head>

      <article className="max-w-4xl mx-auto px-6 py-16 bg-white my-10 rounded-[2.5rem] shadow-sm border border-slate-100">
        <Link href="/" className="text-blue-600 font-bold hover:underline mb-8 inline-block">
          ← Voltar para a Home
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Carreiras em <span className="text-blue-600">TI & Saúde</span>: Onde a Tecnologia Salva Vidas
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light italic">
            A convergência entre medicina e tecnologia criou um novo mercado de trabalho com alta demanda e salários acima da média.
          </p>
        </header>

        <div className="prose prose-lg text-gray-700 space-y-8">
          <p>
            O setor de <strong>HealthTech</strong> é um dos que mais cresce no mundo. Com a digitalização de hospitais e a chegada da telemedicina, a necessidade de profissionais que entendam tanto de código quanto de fluxos assistenciais tornou-se crítica.
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            As Profissões Mais Promissoras do Setor
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-900">1. Analista de BI na Saúde</h3>
              <p className="text-sm mt-2 text-blue-800">
                Responsável por criar indicadores de desempenho hospitalar (KPIs), como taxa de ocupação de leitos e giro de sala cirúrgica. Fundamental para a gestão financeira de grandes centros médicos.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-400">
              <h3 className="text-xl font-bold text-slate-900">2. Engenheiro de Dados e Interoperabilidade</h3>
              <p className="text-sm mt-2 text-slate-700">
                O profissional que faz os sistemas "conversarem". Utiliza padrões como <strong>HL7</strong> e <strong>FHIR</strong> para garantir que os dados do paciente fluam entre diferentes softwares.
              </p>
            </div>

            <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-900">3. Especialista em Segurança da Informação Hospitalar</h3>
              <p className="text-sm mt-2 text-blue-800">
                Protege o hospital contra ataques de Ransomware. Na saúde, a perda de dados não é apenas financeira, ela pode interromper cirurgias e tratamentos vitais.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-4">
            Como entrar na área começando do zero?
          </h2>
          <p>
            Diferente do que muitos pensam, você não precisa ser médico para trabalhar com TI na saúde. O segredo está em dominar as ferramentas tecnológicas (como SQL, Python ou Nuvem) e buscar entender os <strong>processos hospitalares</strong>.
          </p>
          <p>
            Cursos de especialização em Informática em Saúde e a leitura constante de portais como o <strong>TI & Saúde</strong> são ótimas formas de construir o repertório necessário para se destacar em processos seletivos de grandes redes como Rede D'Or, Albert Einstein ou operadoras de saúde.
          </p>

          <section className="bg-slate-900 text-white p-10 rounded-[2rem] mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 text-white">Pronto para sua transição de carreira?</h2>
            <p className="text-slate-400 mb-8">
              Acompanhe nossos conteúdos semanais para dominar as ferramentas que o mercado de saúde exige.
            </p>
            <Link href="/contato" className="bg-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition inline-block">
              Fale com um Especialista
            </Link>
          </section>
        </div>
      </article>
    </>
  );
}