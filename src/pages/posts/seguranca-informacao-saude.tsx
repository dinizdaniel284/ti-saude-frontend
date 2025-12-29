import Head from "next/head";
import Link from "next/link";

export default function SegurancaSaude() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head>
        <title>Segurança da Informação e LGPD na Saúde | TI & Saúde</title>
        <meta 
          name="description" 
          content="Proteja dados sensíveis de pacientes: Guia de cibersegurança hospitalar, conformidade com a LGPD, criptografia e auditoria de sistemas de saúde." 
        />
      </Head>

      <article className="max-w-4xl mx-auto">
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
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Como garantir a integridade das informações clínicas em um cenário de crescentes ataques cibernéticos a hospitais e clínicas.
          </p>
        </header>

        <div className="prose prose-lg text-slate-600 space-y-8 leading-relaxed">
          <p>
            Na saúde, um vazamento de dados não custa apenas multas milionárias aplicadas pela ANPD; ele custa a confiança pública e, em casos extremos, pode interromper o cuidado assistencial. Com a digitalização, o setor tornou-se o alvo principal de <strong>Ransomware</strong>, exigindo uma postura de vigilância constante.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">O que é a LGPD aplicada à Saúde?</h2>
            <p>
              A Lei Geral de Proteção de Dados (LGPD) classifica as informações de saúde como <strong>dados sensíveis</strong>. Isso significa que o tratamento desses dados (coleta, armazenamento e processamento) exige uma base legal rigorosa. Desde o Prontuário Eletrônico (PEP) até o sistema de faturamento, tudo deve seguir o princípio da "privacidade por design".
            </p>
          </section>

          <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white my-12 shadow-2xl border-l-8 border-red-600">
            <h3 className="text-xl font-bold mb-6 text-red-500">Pilares da Cibersegurança Hospitalar:</h3>
            <ul className="space-y-6 text-sm md:text-base text-slate-300">
              <li className="flex items-start gap-4">
                <span className="text-2xl">🔒</span>
                <div>
                  <strong>Criptografia AES-256:</strong> Dados armazenados no banco precisam estar cifrados para que, mesmo em caso de furto, sejam ilegíveis.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">👤</span>
                <div>
                  <strong>RBAC (Role-Based Access Control):</strong> Implementação de níveis de acesso onde médicos veem apenas o histórico clínico e o faturamento vê apenas dados financeiros.
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📝</span>
                <div>
                  <strong>Logs e Auditoria:</strong> Registro imutável de quem acessou, modificou ou exportou qualquer dado de paciente, garantindo rastreabilidade total.
                </div>
              </li>
            </ul>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">A Missão do Desenvolvedor Backend</h2>
            <p>
              O desenvolvedor backend é o arquiteto da muralha. Utilizar protocolos modernos como <strong>OAuth2 e JWT</strong> para autenticação, além de realizar testes de intrusão (PenTests) regulares, é vital. A segurança não é um estado estático, mas um processo de melhoria contínua.
            </p>
            <p>
              Veja também nossa análise sobre a <Link href="/posts/evolucao-digital" className="text-red-600 font-bold hover:underline">evolução digital na saúde</Link>.
            </p>
          </section>

          <p className="italic border-l-4 border-slate-200 pl-6 text-slate-500 py-2">
            "No setor hospitalar, a cibersegurança é uma extensão direta do cuidado ao paciente."
          </p>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col items-center text-center">
           <h3 className="text-3xl font-black text-slate-900 mb-4">Seu sistema está em conformidade?</h3>
           <p className="text-slate-600 max-w-lg mb-8">Oferecemos diagnóstico de segurança e consultoria técnica para adequação à LGPD em sistemas hospitalares e HealthTechs.</p>
           <a 
             href="https://wa.me/5519992278928" 
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center gap-3 bg-red-600 text-white font-black px-12 py-5 rounded-2xl hover:bg-red-700 transition shadow-xl shadow-red-600/30 transform hover:scale-105"
           >
             SOLICITAR AUDITORIA 🛡️
           </a>
        </footer>
      </article>
    </div>
  );
}