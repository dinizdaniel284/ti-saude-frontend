import Head from "next/head";

export default function SegurancaInformacaoSaude() {
  return (
    <>
      <Head>
        <title>Segurança da Informação na Saúde | TI & Saúde</title>

        <meta
          name="description"
          content="Entenda por que a segurança da informação é essencial no setor da saúde e como proteger dados sensíveis de pacientes."
        />

        {/* Canonical evita problemas de SEO e 404 mascarado */}
        <link
          rel="canonical"
          href="https://ti-saude-frontend-topaz.vercel.app/posts/seguranca-informacao-saude"
        />
      </Head>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Segurança da Informação na Saúde
        </h1>

        <p className="text-gray-600 mb-6">
          Dados de pacientes são extremamente sensíveis e precisam ser protegidos
          contra vazamentos, acessos não autorizados e ataques cibernéticos.
        </p>

        <p className="text-gray-700 mb-6">
          A segurança da informação garante a confidencialidade, integridade e
          disponibilidade dos dados, sendo essencial para instituições de saúde
          que lidam diariamente com informações críticas.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8 mb-4">
          Principais responsabilidades
        </h2>

        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Proteção contra ataques cibernéticos</li>
          <li>Controle de acesso a sistemas e prontuários</li>
          <li>Criptografia de dados sensíveis</li>
          <li>Conformidade com a LGPD</li>
        </ul>

        <p className="mt-8 text-gray-700">
          Essa área é uma das mais valorizadas no mercado atual, especialmente no
          setor da saúde, onde a proteção da informação é fundamental para a
          confiança e a segurança dos pacientes.
        </p>
      </article>
    </>
  );
}
