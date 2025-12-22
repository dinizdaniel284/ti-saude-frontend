import Head from "next/head";

export default function SaudeDigital() {
  return (
    <>
      <Head>
        <title>Saúde Digital | TI & Saúde</title>
        <meta
          name="description"
          content="Entenda o que é Saúde Digital e como a tecnologia está transformando a medicina."
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          O que é Saúde Digital?
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Saúde Digital é o uso da tecnologia para melhorar atendimentos,
          diagnósticos, gestão hospitalar e a qualidade de vida das pessoas.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Ela conecta profissionais da saúde com soluções digitais que tornam
          os processos mais rápidos, seguros e eficientes.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🩻 Exemplos de Saúde Digital
        </h2>

        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Telemedicina</li>
          <li>Prontuário eletrônico</li>
          <li>Aplicativos de saúde</li>
          <li>Análise de dados clínicos</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          💻 Onde entra a TI?
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Profissionais de TI atuam criando sistemas, cuidando da segurança dos
          dados e analisando informações médicas.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🌍 Por que essa área cresce tanto?
        </h2>

        <p className="text-lg text-gray-700">
          Porque tecnologia salva tempo, reduz erros e melhora o cuidado com o
          paciente. É uma das áreas mais promissoras do mercado.
        </p>
      </main>
    </>
  );
}
