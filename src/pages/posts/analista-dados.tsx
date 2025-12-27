import Head from "next/head";
import Link from "next/link";

export default function AnalistaDados() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <Head><title>Analista de Dados na Saúde: Carreira do Futuro | TI & Saúde</title></Head>
      <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[3rem] shadow-sm">
        <Link href="/" className="text-blue-600 font-bold hover:underline mb-8 inline-block">← Voltar para a Home</Link>
        <h1 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Analista de Dados: O <span className="text-blue-600">Estrategista</span> da Saúde Digital.</h1>
        <div className="prose prose-lg text-slate-600 space-y-6">
          <p>Hoje, hospitais geram terabytes de dados por dia. O papel do analista é transformar esse "ruído" em decisões que salvam vidas e reduzem desperdícios.</p>
          <p>Seja analisando o tempo médio de espera no pronto-socorro ou a taxa de reintervenções cirúrgicas, o analista de dados é quem fornece as respostas para a diretoria clínica.</p>
          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-800 mb-2">Habilidades Necessárias:</h3>
            <p className="text-sm">SQL para extração, Python para limpeza e uma visão clínica apurada para interpretar os indicadores.</p>
          </div>
        </div>
      </article>
    </div>
  );
}