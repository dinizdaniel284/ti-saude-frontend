import Head from "next/head";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <Head>
        <title>Política de Cookies | TI & Saúde</title>
        <meta name="robots" content="noindex" /> {/* Páginas jurídicas não precisam de ranking, apenas estar presentes */}
      </Head>
      
      <div className="max-w-3xl mx-auto">
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Política de Cookies</h1>
          <p className="text-slate-500 text-sm">Última atualização: Janeiro de 2026</p>
        </header>

        <div className="text-slate-600 space-y-8 leading-relaxed">
          <section>
            <p>
              Esta Política de Cookies explica como o portal <strong>TI & Saúde</strong> utiliza cookies e tecnologias semelhantes para reconhecê-lo quando você visita nosso site. Explicamos o que são essas tecnologias, por que as usamos e seus direitos para controlar o nosso uso delas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. O que são cookies?</h2>
            <p>
              Cookies são pequenos arquivos de dados que são colocados no seu computador ou dispositivo móvel quando você visita um site. Eles são amplamente utilizados pelos proprietários de sites para fazer com que seus sites funcionem, ou para funcionar de forma mais eficiente, bem como para fornecer informações de relatórios.
            </p>
          </section>

          <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-4">2. Cookies de Terceiros e Google AdSense</h2>
            <p className="mb-4">
              O Google, como fornecedor terceirizado, utiliza cookies para exibir anúncios neste site. O uso do cookie <strong>DART</strong> permite que o Google exiba anúncios para você com base em suas visitas a este e outros sites na Internet.
            </p>
            <p>
              Nós utilizamos o <strong>Google AdSense</strong> para veicular publicidade. O Google pode usar cookies de publicidade para coletar dados sobre sua navegação (como as páginas que você visitou) para personalizar os anúncios que você vê, garantindo que sejam relevantes aos seus interesses em tecnologia e saúde.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Por que usamos cookies?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essenciais:</strong> Necessários para o funcionamento técnico do site.</li>
              <li><strong>Desempenho:</strong> Para entender como os visitantes interagem com o conteúdo (Google Analytics).</li>
              <li><strong>Publicidade:</strong> Para exibir anúncios que sejam do seu interesse e limitar a frequência com que você vê o mesmo anúncio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Como posso controlar os cookies?</h2>
            <p>
              Você tem o direito de decidir se aceita ou rejeita cookies. Você pode configurar ou alterar os controles do seu navegador para aceitar ou recusar cookies. Se você optar por rejeitar os cookies, ainda poderá usar nosso site, embora seu acesso a algumas funcionalidades e áreas do site possa ser restrito.
            </p>
            <p className="mt-4">
              Além disso, você pode desativar a publicidade personalizada visitando as 
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline ml-1">
                Configurações de Anúncios do Google
              </a>.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Mais informações</h2>
            <p>
              Esperamos que isso tenha esclarecido as coisas para você. Se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.
            </p>
            <p className="mt-6">
              Para dúvidas, entre em contato através da nossa <Link href="/contato" className="text-indigo-600 font-bold">Página de Contato</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}