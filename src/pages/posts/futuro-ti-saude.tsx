import Head from "next/head";

export default function FuturoTiSaude() {
  return (
    <>
      <Head>
        <title>O Futuro da TI na Saúde | TI & Saúde</title>
        <meta
          name="description"
          content="Descubra como a Tecnologia da Informação está moldando o futuro da saúde digital."
        />
      </Head>

      <article className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          O Futuro da TI na Saúde
        </h1>

        <p className="text-gray-600 mb-6">
          A Tecnologia da Informação está se tornando o coração do setor de saúde.
          Sistemas inteligentes, dados e automação estão redefinindo como cuidamos
          das pessoas.
        </p>

        <p>
          Nos próximos anos, profissionais de TI terão papel essencial na criação
          de soluções mais eficientes, seguras e humanas.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          Tendências que já estão acontecendo
        </h2>

        <ul className="list-disc ml-6 mt-4">
          <li>Inteligência Artificial aplicada à medicina</li>
          <li>Big Data para decisões clínicas</li>
          <li>Telemedicina em larga escala</li>
          <li>Integração de sistemas de saúde</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600 mt-8">
          Oportunidades de carreira
        </h2>

        <p className="mt-4">
          O futuro da saúde exige profissionais que entendam tecnologia e saibam
          aplicar inovação com responsabilidade.
        </p>

        <ul className="list-disc ml-6 mt-4">
          <li>Analista de Dados em Saúde</li>
          <li>Especialista em Segurança da Informação</li>
          <li>Engenheiro de Software</li>
          <li>Especialista em IA aplicada à saúde</li>
        </ul>

        <p className="mt-6 font-medium text-gray-700">
          Quem investir em conhecimento agora estará à frente dessa revolução.
        </p>
      </article>
    </>
  );
}
