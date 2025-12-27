import Head from "next/head";
import Link from "next/link";

export default function FuturoTiSaude() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <Head>
        <title>O Futuro da TI na Saúde: Tendências para 2025 | TI & Saúde</title>
      </Head>

      <article className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[3rem] shadow-sm border border-slate-100">
        <Link href="/" className="text-indigo-600 font-bold hover:underline mb-8 inline-block">
          ← Voltar para a Home
        </Link>
        
        <h1 className="text-4xl font-black text-slate-900 mb-8 leading-tight">
          O Futuro da TI na Saúde: O que esperar nos <span className="text-indigo-600">próximos anos?</span>
        </h1>
        
        <div className="prose prose-lg text-slate-600 space-y-6">
          <p>
            A área de TI Hospitalar deixou de ser um setor de "suporte" para se tornar o <strong>setor de estratégia</strong>. Mas o que vem por aí?
          </p>

          <h2 className="text-2xl font-bold text-slate-800">1. IA Preditiva</h2>
          <p>
            Não apenas diagnosticar, mas prever. Algoritmos de IA agora analisam históricos para prever riscos de internação antes mesmo dos sintomas graves aparecerem.
          </p>

          <h2 className="text-2xl font-bold text-slate-800">2. Blockchain na Saúde</h2>
          <p>
            A segurança definitiva para o histórico do paciente. Com o blockchain, o paciente se torna o verdadeiro dono do seu dado, autorizando o acesso de forma rastreável e inviolável.
          </p>

          <h2 className="text-2xl font-bold text-slate-800">3. Internet das Coisas Médicas (IoMT)</h2>
          <p>
            Camas inteligentes, marcapassos conectados e sensores de farmácia. Tudo gerando dados em tempo real no seu Dashboard de Power BI.
          </p>

          <p className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 font-medium">
            O profissional que dominar a integração desses dados será o mais valorizado no mercado de saúde digital.
          </p>
        </div>
      </article>
    </div>
  );
}