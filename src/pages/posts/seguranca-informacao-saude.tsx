import Head from "next/head";

export default function SegurancaDaInformacao() {
  return (
    <>
      <Head>
        <title>Segurança da Informação na Saúde | TI & Saúde</title>
        <meta
          name="description"
          content="Saiba por que a segurança da informação é essencial no setor da saúde."
        />
      </Head>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Segurança da Informação na Saúde
        </h1>

        <p className="text-gray-600 mb-6">
          Dados de pacientes são extremamente sensíveis e precisam ser protegidos
          contra vazamentos e ataques cibernéticos.
        </p>

        <p>
          A segurança da informação garante confidencialidade, integridade e
          disponibilidade dos dados.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          Principais responsabilidades
        </h2>

        <ul className="list-disc ml-6 mt-4">
          <li>Proteção contra ataques</li>
          <li>Controle de acesso</li>
          <li>Criptografia de dados</li>
          <li>Conformidade com LGPD</li>
        </ul>

        <p className="mt-6">
          Essa área é uma das mais valorizadas no mercado atual.
        </p>
      </article>
    </>
  );
}
