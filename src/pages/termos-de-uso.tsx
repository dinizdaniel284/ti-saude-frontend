import Head from "next/head";
import Link from "next/link";

export default function TermosDeUso() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <Head>
        <title>Termos de Uso | TI & Saúde</title>
        <meta name="robots" content="noindex" /> 
      </Head>

      <main className="max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-premium border border-slate-200">
          <Link href="/" className="text-indigo-600 font-bold hover:underline mb-10 inline-block flex items-center gap-2">
            <span>←</span> Voltar para a Home
          </Link>
          
          <header className="mb-12">
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">
              Termos e Condições de Uso
            </h1>
            <p className="text-slate-500 font-medium">Portal TI & Saúde — Daniel Diniz</p>
          </header>
          
          <div className="prose prose-slate max-w-none text-slate-600 space-y-8 leading-relaxed">
            <section>
              <p>
                Ao acessar o portal <strong>TI & Saúde</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Licença de Uso</h2>
              <p>
                É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site TI & Saúde, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode: 
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-sm">
                <li>Modificar ou copiar os materiais;</li>
                <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública;</li>
                <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site;</li>
                <li>Remover quaisquer notações de direitos autorais ou outras notações de propriedade dos materiais.</li>
              </ul>
            </section>

            <section className="bg-slate-900 p-8 rounded-[2rem] text-slate-300">
              <h2 className="text-xl font-bold text-white mb-4">2. Isenção de Responsabilidade</h2>
              <p className="text-sm leading-relaxed">
                Os materiais no site da TI & Saúde são fornecidos "como estão". O conteúdo focado em <strong>Backend Hospitalar, Power BI, Cibersegurança e Telemedicina</strong> possui caráter estritamente educativo e informativo. 
              </p>
              <p className="mt-4 text-sm leading-relaxed">
                A aplicação de qualquer código, arquitetura ou estratégia discutida neste portal em ambientes de produção médica é de inteira responsabilidade do usuário, devendo ser precedida de testes e validação técnica profissional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Publicidade e Google AdSense</h2>
              <p>
                Este site utiliza o <strong>Google AdSense</strong>. Como parceiro terceirizado, o Google utiliza cookies para veicular anúncios. O usuário concorda com a exibição de conteúdos publicitários e entende que a TI & Saúde não possui controle total sobre a natureza dos anúncios exibidos pelo motor do Google, embora filtremos categorias sensíveis para manter a ética do setor de saúde.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitações</h2>
              <p>
                Em nenhum caso o TI & Saúde ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucros devido à interrupção do negócio) decorrentes do uso ou da incapacidade de usar os materiais, mesmo que tenhamos sido notificados oralmente ou por escrito da possibilidade de tais danos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Precisão dos Materiais</h2>
              <p>
                Dada a velocidade da evolução tecnológica, os materiais exibidos podem incluir erros técnicos ou tipográficos. Não garantimos que qualquer material seja preciso, completo ou atual em tempo real, embora nos esforcemos para atualizar as diretrizes de 2026 constantemente.
              </p>
            </section>
          </div>

          <footer className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400 font-bold uppercase tracking-widest">
            <span>© 2026 TI & Saúde</span>
            <span>Atualizado em: 16 de Janeiro de 2026</span>
          </footer>
        </div>
      </main>
    </div>
  );
}