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
    <div className="min-h-screen bg-gradient-to-b from-soft-white to-white text-dark-text">
      <Head>
        <title>Guia para Iniciantes em TI & Saúde | TI-Saúde</title>
        <meta
          name="description"
          content="Comece sua transição para a área de TI com foco em Saúde. Dicas, áreas de atuação e próximos passos."
        />
      </Head>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-blue">
            Guia para Iniciantes na TI & Saúde
          </h1>
          <p className="text-lg text-light-text max-w-2xl mx-auto">
            Transforme sua carreira e descubra como a tecnologia pode melhorar a saúde.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">💡 O Que é TI & Saúde?</h2>
          <p className="text-lg leading-relaxed mb-4">
            A tecnologia da informação (TI) aplicada à área da saúde está transformando o atendimento
            e a gestão de cuidados médicos. Profissionais da saúde podem se beneficiar da TI para melhorar
            o diagnóstico, tratamentos e gestão de dados dos pacientes.
          </p>
          <p className="text-lg leading-relaxed">
            Se você é um profissional da saúde e quer migrar para a área de TI, este guia irá te ajudar
            a entender as áreas de atuação, habilidades necessárias e como começar sua jornada de transição.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">🚀 Áreas de Atuação na TI & Saúde</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-2xl shadow-card border-l-4 border-secondary-green hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">💻 Desenvolvimento de Software para Saúde</h3>
              <p>
                Criação de sistemas de gestão hospitalar, apps de monitoramento, entre outros.
                Se você curte programar, essa é pra você!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-card border-l-4 border-primary-blue hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">📊 Análise de Dados em Saúde</h3>
              <p>
                Analisar e interpretar dados para melhorar decisões clínicas e administrativas. Big Data e IA são aliados!
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-card border-l-4 border-accent-purple hover:scale-105 transition-all duration-300 md:col-span-2">
              <h3 className="text-2xl font-semibold mb-2">⚙️ Consultoria e Implementação de Sistemas</h3>
              <p>
                Ajudar instituições a escolherem, configurarem e usarem sistemas com segurança e eficiência.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">🛠️ Habilidades Necessárias</h2>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li><strong>💡 Programação:</strong> Python, JavaScript e SQL são essenciais.</li>
            <li><strong>🧠 Conhecimentos em Saúde:</strong> Entender protocolos, fluxos e gestão hospitalar.</li>
            <li><strong>📋 Gestão de Projetos:</strong> Fundamental para liderar ou participar de implementações.</li>
            <li><strong>📈 Big Data e IA:</strong> Para análise e predição de dados clínicos.</li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">📍 Próximos Passos</h2>
          <ul className="list-decimal list-inside space-y-4 text-lg">
            <li><strong>Aprenda Programação:</strong> Comece com cursos de <a href="https://www.coursera.org" target="_blank" className="text-primary-blue underline">Python e JS</a>.</li>
            <li><strong>Explore Análise de Dados:</strong> Use Excel, Power BI, SQL.</li>
            <li><strong>Estude TI em Saúde:</strong> Faça cursos e leia conteúdos especializados.</li>
            <li><strong>Participe de Comunidades:</strong> Conecte-se com pessoas da área.</li>
          </ul>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-2xl font-semibold mb-4">❓ Dúvidas? Entre em contato!</h3>
          <form onSubmit={handleFormSubmit} className="max-w-md mx-auto">
            {messageSent && (
              <div className="text-success-green bg-white p-4 rounded-md mb-4">
                Sua mensagem foi enviada com sucesso!
              </div>
            )}
            <input
              type="email"
              placeholder="Seu email"
              className="w-full mb-4 p-3 rounded-xl bg-gray-100 text-dark-text"
              required
            />
            <textarea
              placeholder="Sua mensagem"
              className="w-full mb-4 p-3 rounded-xl bg-gray-100 text-dark-text"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-button-blue hover:bg-button-hover text-white font-semibold py-3 px-6 rounded-xl w-full transition-all"
            >
              Enviar Mensagem
            </button>
          </form>
        </section>

        <footer className="text-center mt-20">
          <p className="text-sm text-light-text">
            © {new Date().getFullYear()} TI-Saúde. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Guia;