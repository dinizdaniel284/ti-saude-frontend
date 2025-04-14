import React, { useState } from 'react';
import Head from 'next/head';

const Guia = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-100 to-white text-dark-text">
      <Head>
        <title>Guia para Iniciantes em TI & Saúde | TI-Saúde</title>
        <meta
          name="description"
          content="Comece sua transição para a área de TI com foco em Saúde. Dicas, áreas de atuação e próximos passos."
        />
      </Head>

      <div className="max-w-4xl mx-auto px-6 py-12 md:px-16 md:py-20">
        <header className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-primary-blue">
            Guia para Iniciantes na TI & Saúde
          </h1>
          <p className="text-lg text-light-text max-w-3xl mx-auto">
            A tecnologia está revolucionando a saúde. Pronto para transformar sua carreira e fazer parte dessa mudança?
          </p>
        </header>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">💡 O Que é TI & Saúde?</h2>
          <p className="text-lg leading-relaxed mb-6">
            A Tecnologia da Informação (TI) tem se tornado uma aliada essencial para transformar a saúde. Sistemas de gestão hospitalar, aplicativos de monitoramento e a análise de dados são apenas algumas das maneiras em que a TI pode aprimorar os cuidados médicos.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Se você é da área da saúde e está considerando migrar para a TI, este guia foi feito para você. Vamos te mostrar as melhores áreas para atuar, as habilidades necessárias e como começar sua jornada para uma nova carreira promissora.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">🚀 Áreas de Atuação na TI & Saúde</h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="bg-white p-6 rounded-3xl shadow-xl border-l-4 border-secondary-green hover:scale-105 transform transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">💻 Desenvolvimento de Software para Saúde</h3>
              <p>
                Imagine criar soluções digitais que ajudam hospitais e clínicas a oferecerem cuidados mais rápidos e eficientes. Se você gosta de programar, essa área oferece muitas oportunidades para transformar o cuidado com a saúde.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-xl border-l-4 border-primary-blue hover:scale-105 transform transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-2">📊 Análise de Dados em Saúde</h3>
              <p>
                Trabalhe com dados para otimizar decisões médicas e administrativas. A combinação de Big Data e Inteligência Artificial está transformando a medicina e a gestão hospitalar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl shadow-xl border-l-4 border-accent-purple hover:scale-105 transform transition-all duration-300 md:col-span-2">
              <h3 className="text-2xl font-semibold mb-2">⚙️ Consultoria e Implementação de Sistemas</h3>
              <p>
                Ajude organizações de saúde a escolherem e implementarem sistemas de TI seguros e eficientes, garantindo a integridade dos dados dos pacientes.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">🛠️ Habilidades Necessárias</h2>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li><strong>💡 Programação:</strong> Python, JavaScript e SQL são as linguagens essenciais para a maioria dos sistemas de TI em saúde.</li>
            <li><strong>🧠 Conhecimentos em Saúde:</strong> Ter um entendimento básico de protocolos médicos, fluxos hospitalares e gestão de saúde é uma vantagem.</li>
            <li><strong>📋 Gestão de Projetos:</strong> Ser capaz de liderar ou colaborar na implementação de novos sistemas de TI no ambiente da saúde.</li>
            <li><strong>📈 Big Data e IA:</strong> Essenciais para processar grandes volumes de dados clínicos e gerar insights para melhorias na saúde.</li>
            <li><strong>🔒 Cibersegurança:</strong> Conhecimentos em segurança digital são cruciais para proteger dados sensíveis e garantir a privacidade dos pacientes.</li>
            <li><strong>📱 Desenvolvimento Mobile:</strong> Criar aplicativos voltados para a saúde, como monitoramento de pacientes e agendamentos médicos, é uma habilidade em alta.</li>
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">📍 Próximos Passos</h2>
          <ul className="list-decimal list-inside space-y-4 text-lg">
            <li><strong>Aprenda Programação:</strong> Comece com cursos gratuitos de <a href="https://www.coursera.org" target="_blank" className="text-primary-blue underline">Python e JavaScript</a> para dominar as linguagens mais comuns.</li>
            <li><strong>Explore Análise de Dados:</strong> Use ferramentas como Excel, Power BI e SQL para explorar dados e gerar relatórios importantes.</li>
            <li><strong>Estude TI em Saúde:</strong> Busque cursos e recursos especializados, e entenda como a tecnologia está moldando o setor de saúde.</li>
            <li><strong>Participe de Comunidades:</strong> Conecte-se com outros profissionais da área, participe de fóruns, webinars e workshops para crescer na área.</li>
          </ul>
        </section>

        <section className="text-center mb-20">
          <h3 className="text-2xl font-semibold mb-4">❓ Tem Dúvidas? Fale Conosco!</h3>
          <form onSubmit={handleFormSubmit} className="max-w-xl mx-auto">
            {messageSent && (
              <div className="text-success-green bg-white p-4 rounded-md mb-4 shadow-xl">
                Sua mensagem foi enviada com sucesso! Estamos aqui para ajudar na sua jornada.
              </div>
            )}
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full mb-4 p-4 rounded-2xl bg-gray-100 text-dark-text shadow-md"
              required
            />
            <textarea
              placeholder="Sua mensagem"
              className="w-full mb-4 p-4 rounded-2xl bg-gray-100 text-dark-text shadow-md"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-button-blue hover:bg-button-hover text-white font-semibold py-4 px-8 rounded-xl w-full transition-all shadow-lg"
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
