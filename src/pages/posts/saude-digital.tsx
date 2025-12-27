import Head from "next/head";
import Link from "next/link";

export default function SaudeDigital() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head><title>Saúde Digital: O Ecossistema da Inovação | TI & Saúde</title></Head>
      <article className="max-w-3xl mx-auto">
        <Link href="/" className="text-emerald-600 font-bold hover:underline mb-8 inline-block">← Voltar para a Home</Link>
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          Saúde Digital: Conectando <span className="text-emerald-600">Tecnologia e Cuidado.</span>
        </h1>
        <div className="prose prose-lg text-slate-600 space-y-6">
          <p className="text-xl font-medium text-slate-800">A saúde digital não é apenas sobre computadores, é sobre melhorar a jornada do paciente através do dado.</p>
          <p>O conceito de Saúde Digital abrange desde o uso de aplicativos de monitoramento até grandes sistemas de gestão hospitalar (HIS) e prontuários eletrônicos (PEP). O objetivo é um só: eficiência clínica.</p>
          <h2 className="text-2xl font-bold text-slate-800">Os 3 Pilares da Saúde Digital:</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Conectividade:</strong> Sistemas que conversam entre si (Interoperabilidade).</li>
            <li><strong>Mobilidade:</strong> Acesso aos dados do paciente em qualquer lugar, de forma segura.</li>
            <li><strong>Engajamento:</strong> Ferramentas que permitem ao paciente cuidar da própria saúde.</li>
          </ul>
        </div>
      </article>
    </div>
  );
}