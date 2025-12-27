import Head from "next/head";
import Link from "next/link";

export default function PowerBISaude() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head><title>Power BI na Saúde: Dashboards que Salvam Vidas | TI & Saúde</title></Head>
      <article className="max-w-3xl mx-auto">
        <Link href="/" className="text-yellow-600 font-bold hover:underline mb-8 inline-block">← Voltar para a Home</Link>
        <h1 className="text-4xl font-black text-slate-900 mb-6 leading-tight">Power BI na Saúde: Visualizando o <span className="text-yellow-500">Sucesso Clínico.</span></h1>
        <div className="prose prose-lg text-slate-600 space-y-6 leading-relaxed">
          <p>O Power BI se tornou o padrão ouro para visualização de dados hospitalares. Com ele, transformamos planilhas estáticas em painéis dinâmicos e intuitivos.</p>
          <h2 className="text-2xl font-bold text-slate-800">Exemplos de Dashboards Médicos:</h2>
          <ul className="space-y-4">
            <li className="flex gap-4 p-4 bg-yellow-50 rounded-xl">
               <span className="text-2xl">📊</span>
               <span><strong>Gestão de Leitos:</strong> Visualização em tempo real da ocupação da UTI.</span>
            </li>
            <li className="flex gap-4 p-4 bg-yellow-50 rounded-xl">
               <span className="text-2xl">📈</span>
               <span><strong>Faturamento Hospitalar:</strong> Controle de glosas e desempenho financeiro por convênio.</span>
            </li>
          </ul>
          <p>O grande diferencial do Power BI na saúde é a capacidade de cruzar dados do RH, Financeiro e Assistencial em um único lugar.</p>
        </div>
        <footer className="mt-12 p-8 bg-slate-900 rounded-[2rem] text-center">
           <p className="text-white font-bold mb-4 text-xl">Precisa de um Dashboard Profissional?</p>
           <a href="https://wa.me/5519992278928" className="bg-yellow-500 text-slate-900 font-black px-8 py-3 rounded-xl hover:bg-yellow-400 transition">Solicitar Orçamento</a>
        </footer>
      </article>
    </div>
  );
}