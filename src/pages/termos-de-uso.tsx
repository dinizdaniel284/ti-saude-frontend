import Head from "next/head";
import Link from "next/link";

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Head>
        <title>Termos de Uso | TI & Saúde</title>
        <meta name="robots" content="noindex" /> 
      </Head>

      <main className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-200">
          <Link href="/" className="text-cyan-600 font-medium hover:underline mb-8 inline-block">
            ← Voltar para a Home
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
            Termos de Uso
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
            <p>
              Bem-vindo ao <strong>TI & Saúde</strong>. Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-8">1. Licença de Uso</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site TI & Saúde, apenas para visualização transitória pessoal e não comercial.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-8">2. Isenção de Responsabilidade</h2>
            <p>
              Os materiais no site da TI & Saúde são fornecidos 'como estão'. Não oferecemos garantias, expressas ou implícitas. O conteúdo sobre Backend, Power BI e Saúde Digital tem fins educacionais e informativos.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-8">3. Limitações</h2>
            <p>
              Em nenhum caso o TI & Saúde ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em nosso site.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-8">4. Google AdSense e Cookies</h2>
            <p>
              Este site utiliza o Google AdSense para veicular anúncios. O Google utiliza cookies (como o cookie DART) para exibir anúncios baseados em suas visitas anteriores. Você pode optar por desativar o cookie DART visitando a Política de Privacidade da rede de conteúdo e anúncios do Google.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-8">5. Precisão dos Materiais</h2>
            <p>
              Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. TI & Saúde não garante que qualquer material em seu site seja preciso, completo ou atual.
            </p>

            <h2 className="text-xl font-bold text-slate-800 mt-8">6. Links</h2>
            <p>
              O TI & Saúde não revisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por TI & Saúde.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-100 text-sm text-slate-500">
            Última atualização: Outubro de 2023.
          </div>
        </div>
      </main>
    </div>
  );
}