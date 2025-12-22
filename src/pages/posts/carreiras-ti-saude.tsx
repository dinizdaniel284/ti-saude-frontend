import Head from "next/head";

export default function CarreirasTISaude() {
  return (
    <>
      <Head>
        <title>Carreiras em TI & Saúde | TI & Saúde</title>
        <meta
          name="description"
          content="Conheça as principais carreiras que unem tecnologia e saúde."
        />
      </Head>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Carreiras em TI & Saúde
        </h1>

        <p className="text-gray-600 mb-6">
          A área de TI na saúde cresce rapidamente e oferece ótimas oportunidades.
        </p>

        <ul className="list-disc ml-6">
          <li>Analista de Dados</li>
          <li>Desenvolvedor Backend</li>
          <li>Especialista em BI</li>
          <li>Segurança da Informação</li>
        </ul>

        <p className="mt-6">
          É possível entrar nessa área mesmo começando do zero.
        </p>
      </article>
    </>
  );
}
