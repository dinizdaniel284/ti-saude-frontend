// pages/guia.tsx
import React, { useState } from 'react';
import Head from 'next/head';

const Guia = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <Head>
        <title>Guia para Iniciantes em TI & Saúde | TI-Saúde</title>
        <meta name="description" content="Comece sua transição para a área de TI com foco em Saúde. Dicas, áreas de atuação e próximos passos." />
      </Head>

      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Guia para Iniciantes na TI & Saúde</h1>
          <p className="text-lg opacity-80">
            Transforme sua carreira e descubra como a tecnologia pode melhorar a saúde.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">💡 O Que é TI & Saúde?</h2>
          <p className="text-lg leading-relaxed mb-4">
            A tecnologia da informação (TI) aplicada à área da saúde está transformando o atendimento
            e a gestão de cuidados médicos. Profissionais da saúde podem se beneficiar da TI para melhorar
            o diagnóstico, tratamentos e gestão de dados dos pacientes.
          </p>
          <p className="text-lg leading-relaxed">
            Se você é um profissional da saúde e quer migrar para a área de TI, este guia irá ajudá-lo
            a entender as áreas de atuação, habilidades necessárias e como começar sua jornada de transição.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">🚀 Áreas de Atuação na TI & Saúde</h2>
          <div className="space-y-8">
            <div className="bg-green-100 text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">💻 Desenvolvimento de Software para Saúde</h3>
              <p>
                Desenvolvedores de software criam sistemas de gestão hospitalar, apps de monitoramento, entre outros. 
                Se você gosta de programar, essa área é pra você!
              </p>
            </div>
            <div className="bg-blue-100 text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">📊 Análise de Dados em Saúde</h3>
              <p>
                A análise de dados melhora processos e decisões. Big data e machine learning são grandes aliados aqui!
              </p>
            </div>
            <div className="bg-purple-100 text-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-3">⚙️ Consultoria e Implementação de Sistemas</h3>
              <p>
                Aqui você ajuda hospitais e clínicas a escolherem e usarem sistemas eficientes, seguros e personalizados.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">🛠️ Habilidades Necessárias para Iniciar</h2>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li><strong>💡 Programação:</strong> Aprenda Python, JavaScript e SQL. Essenciais para dev ou análise.</li>
            <li><strong>🧠 Conhecimentos em Saúde:</strong> Entender o contexto é essencial! Gestão hospitalar, protocolos e legislações.</li>
            <li><strong>📋 Gestão de Projetos:</strong> Fundamental pra quem quer implementar ou liderar projetos de sistemas.</li>
            <li><strong>📈 Machine Learning e Big Data:</strong> Super úteis pra analisar e prever com dados de saúde.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">📍 Próximos Passos</h2>
          <p className="text-lg leading-relaxed mb-4">
            Agora que você já conhece o cenário, bora agir!
          </p>
          <ul className="list-decimal list-inside space-y-4 text-lg">
            <li>👉 <strong>Aprenda Programação:</strong> Cursos de Python, JavaScript... <a href="https://www.coursera.org" className="text-blue-500 underline">Veja aqui</a></li>
            <li>👉 <strong>Explore Análise de Dados:</strong> Ferramentas como Excel, Power BI, SQL são fundamentais.</li>
            <li>👉 <strong>Estude TI aplicada à Saúde:</strong> Há cursos específicos sobre isso também.</li>
            <li>👉 <strong>Participe de Comunidades:</strong> Converse com quem já tá na área e troque ideias.</li>
          </ul>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">❓ Dúvidas? Entre em contato!</h3>
          <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
            {messageSent && (
              <div className="text-center text-green-600 p-4 bg-white rounded-md mb-4">
                Sua mensagem foi enviada com sucesso!
              </div>
            )}
            <input
              type="email"
              placeholder="Seu email"
              className="w-full mb-4 p-3 rounded-lg bg-gray-200 text-gray-800"
              required
            />
            <textarea
              placeholder="Sua dúvida ou mensagem"
              className="w-full mb-4 p-3 rounded-lg bg-gray-200 text-gray-800"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg w-full hover:bg-blue-800 cursor-pointer transition"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>

        <footer className="text-center mt-12">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} TI-Saúde. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Guia;
