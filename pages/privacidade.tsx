import React from 'react';

export default function Privacidade() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-10 max-w-4xl mx-auto">
      <header>
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Política de Privacidade</h1>
        <p className="mb-6">
          Esta Política de Privacidade descreve como suas informações pessoais são coletadas, usadas e protegidas ao acessar o site <strong>TI-Saúde</strong>.
        </p>
      </header>

      <section className="space-y-6 text-lg">
        <article>
          <h2 className="text-xl font-semibold mb-2">1. Coleta de Informações</h2>
          <p>
            Não coletamos dados sensíveis ou pessoais sem o seu consentimento. O site pode usar cookies para melhorar a experiência do usuário e funcionalidades como o quiz.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-2">2. Uso de Cookies</h2>
          <p>
            Utilizamos cookies apenas para fins de estatísticas e personalização da navegação. Você pode desativá-los nas configurações do seu navegador.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-2">3. Google AdSense e Cookies de Publicidade</h2>
          <p>
            Este site utiliza o Google AdSense, um serviço de publicidade da Google. O AdSense utiliza cookies para exibir anúncios relevantes com base em suas visitas anteriores a este e outros sites.
          </p>
          <p>
            Esses cookies permitem que o Google e seus parceiros exibam anúncios com base em seu histórico de navegação.
          </p>
          <p>
            Você pode optar por desativar a personalização de anúncios acessando as{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Configurações de Anúncios do Google
            </a>.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-2">4. Consentimento</h2>
          <p>
            Ao utilizar este site, você concorda com o uso de cookies e com os termos desta Política de Privacidade, inclusive no que se refere à veiculação de anúncios personalizados por terceiros.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-2">5. Compartilhamento de Dados</h2>
          <p>
            Não compartilhamos suas informações com terceiros. O site é informativo e seguro, voltado para o público da área da saúde.
          </p>
        </article>

        <article>
          <h2 className="text-xl font-semibold mb-2">6. Alterações nesta Política</h2>
          <p>
            Podemos atualizar esta política ocasionalmente. Recomendamos que visite esta página periodicamente para estar ciente de possíveis mudanças.
          </p>
        </article>
      </section>

      <footer className="mt-10 text-sm text-gray-600">
        Última atualização: Maio de 2025
      </footer>
    </main>
  );
}
