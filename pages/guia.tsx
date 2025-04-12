// pages/guia.tsx
import React from 'react';

const Guia = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-4xl mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Guia para Iniciantes na TI & Saúde</h1>
          <p className="text-lg opacity-80">
            Transforme sua carreira e descubra como a tecnologia pode melhorar a saúde.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">O Que é TI & Saúde?</h2>
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
          <h2 className="text-3xl font-semibold mb-6">Áreas de Atuação na TI & Saúde</h2>
          <div className="space-y-8">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Desenvolvimento de Software para Saúde</h3>
              <p>
                Desenvolvedores de software trabalham na criação de sistemas de gestão hospitalar, aplicativos
                de monitoramento de saúde, e muito mais. Se você tem habilidades em programação, esta área é
                uma excelente opção.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Análise de Dados em Saúde</h3>
              <p>
                A análise de dados é crucial para a melhoria de processos e tomada de decisões. Profissionais
                da área de TI aplicam técnicas de big data e machine learning para interpretar grandes volumes
                de dados de saúde.
              </p>
            </div>
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">Consultoria e Implementação de Sistemas</h3>
              <p>
                Profissionais da TI ajudam hospitais e clínicas a escolher e implementar sistemas adequados
                às suas necessidades, garantindo que o software seja eficiente e seguro.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Habilidades Necessárias para Iniciar</h2>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li><strong>Programação:</strong> Aprenda linguagens como Python, JavaScript, e SQL. Essas são essenciais para quem quer atuar no desenvolvimento de software ou análise de dados.</li>
            <li><strong>Conhecimentos em Saúde:</strong> Embora a TI seja a base, entender o contexto da saúde é fundamental. Compreender os sistemas de gestão hospitalar, protocolos de saúde e legislações é importante.</li>
            <li><strong>Gestão de Projetos:</strong> Se você deseja trabalhar com consultoria ou implementação de sistemas, habilidades em gerenciamento de projetos serão muito úteis.</li>
            <li><strong>Machine Learning e Big Data:</strong> Se você tem interesse em análise de dados, dominar essas áreas pode ajudar a lidar com grandes volumes de dados e aplicar algoritmos para prever resultados.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Próximos Passos</h2>
          <p className="text-lg leading-relaxed mb-4">
            Agora que você conhece as principais áreas de atuação e habilidades necessárias, é hora de
            dar o próximo passo na sua jornada para a TI & Saúde. Aqui estão algumas sugestões de ações:
          </p>
          <ul className="list-decimal list-inside space-y-4 text-lg">
            <li><strong>1. Aprenda as Bases da Programação:</strong> Comece com cursos online de Python, JavaScript ou outras linguagens de programação.</li>
            <li><strong>2. Explore Ferramentas de Análise de Dados:</strong> Ferramentas como Excel, Power BI, e SQL são essenciais para quem trabalha com dados de saúde.</li>
            <li><strong>3. Faça um Curso de TI Aplicado à Saúde:</strong> Existem cursos específicos que ensinam como aplicar TI no contexto de saúde.</li>
            <li><strong>4. Participe de Comunidades de TI & Saúde:</strong> Troque experiências com profissionais da área e fique por dentro das novidades.</li>
          </ul>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Dúvidas? Entre em contato!</h3>
          <p className="text-lg">
            Se você tem alguma dúvida sobre como começar, não hesite em nos enviar uma mensagem. Estamos aqui para ajudar na sua jornada para a TI & Saúde!
          </p>
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
