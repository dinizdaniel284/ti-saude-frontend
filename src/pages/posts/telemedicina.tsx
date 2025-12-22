import Head from "next/head";

export default function Telemedicina() {
  return (
    <>
      <Head>
        <title>Telemedicina: o futuro da saúde | TI & Saúde</title>
        <meta
          name="description"
          content="Entenda como a telemedicina está transformando o acesso à saúde."
        />
      </Head>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          Telemedicina: o futuro da saúde
        </h1>

        <p className="text-gray-600 mb-6">
          A telemedicina permite consultas médicas à distância, usando tecnologia
          para ampliar o acesso à saúde.
        </p>

        <p>
          Ela se tornou essencial em regiões afastadas e em momentos de alta demanda.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          Benefícios da telemedicina
        </h2>

        <ul className="list-disc ml-6 mt-4">
          <li>Acesso rápido a médicos</li>
          <li>Redução de custos</li>
          <li>Mais comodidade</li>
          <li>Integração com sistemas digitais</li>
        </ul>

        <p className="mt-6">
          A telemedicina une tecnologia, saúde e inovação.
        </p>
      </article>
    </>
  );
}
