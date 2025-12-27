import Head from "next/head";
import Link from "next/link";

export default function SegurancaSaude() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head>
        <title>Segurança da Informação e LGPD na Saúde | TI & Saúde</title>
        <meta name="description" content="Saiba como proteger dados sensíveis de pacientes e garantir a conformidade com a LGPD no setor hospitalar." />
      </Head>

      <article className="max-w-3xl mx-auto">
        <Link href="/" className="text-red-600 font-bold hover:underline mb-8 inline-block">
          ← Voltar para a Home
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
             <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                Crítico
             </span>
             <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Privacidade & Dados</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            Segurança na Saúde: Protegendo o bem mais valioso, <span className="text-red-600">o Dado.</span>
          </h1>
        </header>

        <div className="prose prose-lg text-slate-600 space-y-8 leading-relaxed">
          <p className="text-xl text-slate-700 leading-relaxed">
            Na saúde, um vazamento de dados não custa apenas multas milionárias; ele custa a confiança e a privacidade da vida de um paciente.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">O que é a LGPD aplicada à Saúde?</h2>
            <p>
              A Lei Geral de Proteção de Dados (LGPD) classifica as informações de saúde como <strong>dados sensíveis</strong>. Isso significa que o tratamento desses dados exige um rigor técnico muito superior ao de um e-commerce comum.
            </p>
          </section>

          <div className="bg-slate-900 p-8 rounded-[2rem] text-white my-10 shadow-xl border-l-8 border-red-600">
            <h3 className="text-xl font-bold mb-4 text-red-500">Pilares da Cibersegurança Hospitalar:</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-red-500">🔒</span>
                <span><strong>Criptografia em Repouso:</strong> Dados armazenados no banco precisam estar cifrados.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">🔒</span>
                <span><strong>Controle de Acesso (RBAC):</strong> Apenas as pessoas certas (médicos/enfermeiros) veem os dados necessários.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500">🔒</span>
                <span><strong>Logs de Auditoria:</strong> Saber exatamente quem acessou qual prontuário e quando.</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-slate-800">O Papel do Desenvolvedor Backend</h2>
          <p>
            O desenvolvedor é o primeiro guardião da lei. Construir APIs com autenticação robusta (OAuth2/JWT) e validar cada entrada de dados para evitar <em>SQL Injection</em> é o básico para sobreviver no mercado de saúde atual.
          </p>

          <p className="italic border-l-4 border-slate-200 pl-6 text-slate-500">
            "Segurança não é um produto que você compra, é um processo que você constrói todos os dias."
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col items-center text-center">
           <h3 className="text-2xl font-black text-slate-900 mb-4">Seu sistema está seguro?</h3>
           <p className="text-slate-600 max-w-md mb-8">Ofereço diagnóstico de segurança para aplicações de saúde e adequação à LGPD.</p>
           <a href="https://wa.me/5519992278928" className="inline-flex items-center gap-3 bg-red-600 text-white font-black px-10 py-4 rounded-2xl hover:bg-red-700 transition shadow-lg shadow-red-600/20">
             SOLICITAR AUDITORIA 🛡️
           </a>
        </footer>
      </article>
    </div>
  );
}