import Head from "next/head";

export default function Backend() {
  return (
    <>
      <Head>
        <title>O que é Backend? | TI & Saúde</title>
        <meta
          name="description"
          content="Entenda de forma simples o que é Backend, o que faz um desenvolvedor backend e como começar nessa área."
        />
      </Head>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">
          O que é Backend?
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Backend é a parte “invisível” de um sistema. É onde ficam as regras,
          a lógica, o banco de dados e tudo o que acontece por trás das telas.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Sempre que você faz login em um site, salva um cadastro ou acessa
          informações, é o backend que está trabalhando para isso acontecer.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🔧 O que um desenvolvedor Backend faz?
        </h2>

        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          <li>Cria APIs e serviços</li>
          <li>Conecta sistemas ao banco de dados</li>
          <li>Garante segurança e performance</li>
          <li>Define regras de negócio</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          🚀 Tecnologias mais usadas
        </h2>

        <p className="text-lg text-gray-700 mb-6">
          Python, Java, Node.js, bancos de dados SQL e NoSQL, APIs REST e
          autenticação.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          💡 Por que o Backend é importante?
        </h2>

        <p className="text-lg text-gray-700">
          Sem backend, um sistema não funciona. Ele é essencial para qualquer
          aplicação moderna, inclusive na área da saúde.
        </p>
      </main>
    </>
  );
}
