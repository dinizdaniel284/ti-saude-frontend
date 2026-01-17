import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const PrivacidadePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <Head>
        <title>Política de Privacidade | TI & Saúde</title>
        <meta
          name="description"
          content="Leia nossa Política de Privacidade para entender como protegemos seus dados e garantimos a conformidade com a LGPD."
        />
        <meta name="robots" content="noindex" />
      </Head>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-slate-100 pb-8">
          <span className="text-indigo-600 font-black uppercase tracking-widest text-xs">
            Transparência
          </span>
          <h1 className="text-4xl font-black text-slate-900 mt-4 mb-4 tracking-tighter">
            Política de Privacidade
          </h1>
          <p className="text-slate-500 text-sm italic">
            Este documento detalha nosso compromisso com a proteção de dados em conformidade com a LGPD (Lei 13.709/2018).
          </p>
        </header>

        <div className="prose prose-slate prose-lg text-slate-600 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              1. Introdução
            </h2>
            <p>
              O portal <strong>TI & Saúde</strong> prioriza a privacidade de seus visitantes.
              Este documento descreve os tipos de informações que são coletadas e registradas
              pelo nosso site e como as utilizamos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              2. Coleta de Informações
            </h2>
            <p>
              Coletamos informações de identificação pessoal apenas quando fornecidas
              voluntariamente por você através de formulários de contato ou inscrição em
              newsletters. Dados técnicos como endereço IP, tipo de navegador e páginas
              acessadas podem ser coletados automaticamente por meio de arquivos de log,
              com finalidades estatísticas, analíticas e de segurança.
            </p>
          </section>

          <section className="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100">
            <h2 className="text-xl font-bold text-indigo-900 mb-4">
              3. Políticas de Terceiros (AdSense e Analytics)
            </h2>

            <p className="text-indigo-950/80 mb-4 text-sm">
              Utilizamos serviços de terceiros para melhorar sua experiência e viabilizar a
              manutenção do portal:
            </p>

            <ul className="list-disc pl-6 space-y-4 text-sm text-indigo-950/80">
              <li>
                <strong>Google AdSense:</strong> O Google, como fornecedor terceirizado,
                utiliza cookies, incluindo o cookie DoubleClick, para exibir anúncios aos
                usuários com base em suas visitas a este e a outros sites na Internet.
                O uso do cookie DoubleClick permite que o Google e seus parceiros veiculem
                anúncios com base nos interesses do usuário.
                <br />
                <br />
                Os usuários podem optar por desativar a publicidade personalizada acessando
                as{' '}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline"
                >
                  Configurações de Anúncios do Google
                </a>
                .
              </li>

              <li>
                <strong>Google Analytics:</strong> Utilizamos esta ferramenta para analisar
                métricas de acesso, comportamento de navegação e consumo de conteúdo,
                auxiliando na criação de materiais mais relevantes sobre tecnologia aplicada
                à saúde.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              4. Direitos do Titular (LGPD)
            </h2>
            <p>
              Em conformidade com a legislação brasileira, garantimos ao titular dos dados os
              seguintes direitos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existência de tratamento de seus dados;</li>
              <li>Acessar e corrigir dados incompletos, inexatos ou desatualizados;</li>
              <li>Solicitar a anonimização, bloqueio ou exclusão de dados desnecessários;</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              5. Segurança dos Dados
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas, como criptografia
              SSL/TLS e controles de acesso, para proteger os dados pessoais contra perda,
              uso indevido, acesso não autorizado, divulgação ou alteração. Ainda assim,
              nenhum sistema é completamente seguro.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              6. Contato e DPO
            </h2>
            <p>
              Para dúvidas sobre esta Política de Privacidade ou para exercer seus direitos
              como titular de dados, entre em contato com nosso Encarregado de Proteção de
              Dados (DPO) através da nossa{' '}
              <Link
                href="/contato"
                className="text-indigo-600 font-bold hover:underline"
              >
                Página de Contato
              </Link>
              .
            </p>
          </section>
        </div>
      </article>
    </div>
  );
};

export default PrivacidadePage;
