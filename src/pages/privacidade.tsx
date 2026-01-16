import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacidadePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <Head>
        <title>Política de Privacidade | TI & Saúde</title>
        <meta name="description" content="Leia nossa Política de Privacidade para entender como protegemos seus dados e garantimos a conformidade com a LGPD." />
        <meta name="robots" content="noindex" />
      </Head>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-slate-100 pb-8">
          <span className="text-indigo-600 font-black uppercase tracking-widest text-xs">Transparência</span>
          <h1 className="text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tighter">Política de Privacidade</h1>
          <p className="text-slate-500 text-sm italic">Este documento detalha nosso compromisso com a proteção de dados em conformidade com a LGPD (Lei 13.709/2018).</p>
        </header>

        <div className="prose prose-slate prose-lg text-slate-600 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introdução</h2>
            <p>
              O portal <strong>TI & Saúde</strong>, acessível em tisaude.com.br, prioriza a privacidade de seus visitantes. Este documento contém os tipos de informações que são coletadas e registradas pelo nosso portal e como as utilizamos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Coleta de Informações</h2>
            <p>
              Coletamos informações de identificação pessoal apenas quando fornecidas voluntariamente por você através de formulários de contato ou inscrição em newsletters. Dados técnicos como endereço IP e tipo de navegador são coletados automaticamente através de arquivos de log para fins estatísticos e de segurança.
            </p>
          </section>

          <section className="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">3. Políticas de Terceiros (AdSense e Analytics)</h2>
            <p className="text-indigo-950/80 mb-4 text-sm">
              Utilizamos serviços de terceiros para melhorar sua experiência:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-sm text-indigo-950/80">
              <li><strong>Google AdSense:</strong> O Google utiliza cookies para veicular anúncios baseados em suas visitas anteriores. O uso de cookies de publicidade permite ao Google e seus parceiros veicularem anúncios com base em dados de navegação.</li>
              <li><strong>Google Analytics:</strong> Utilizamos esta ferramenta para entender como o conteúdo é consumido, ajudando na criação de artigos mais relevantes sobre tecnologia hospitalar.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Direitos do Titular (LGPD)</h2>
            <p>Em conformidade com a legislação brasileira, garantimos a você o direito de:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existência de tratamento de seus dados;</li>
              <li>Acessar e corrigir dados incompletos ou inexatos;</li>
              <li>Solicitar a anonimização ou exclusão de dados desnecessários;</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
          </section>

          

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Segurança dos Dados</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais (como criptografia SSL/TLS) para proteger suas informações contra perda, roubo ou acesso não autorizado. No entanto, nenhum método de transmissão pela Internet é 100% seguro.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Contato e DPO</h2>
            <p>
              Para qualquer dúvida sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato com nosso Encarregado de Proteção de Dados (DPO) através da nossa <Link href="/contato" className="text-indigo-600 font-bold hover:underline">Página de Contato</Link>.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default PrivacidadePage;