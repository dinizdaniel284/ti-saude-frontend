import Head from "next/head";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

interface PostLayoutProps {
  title: string;
  category: string;
  children: React.ReactNode;
}

export default function PostLayout({ title, category, children }: PostLayoutProps) {
  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-100 selection:text-cyan-900">
      <Head>
        <title>{title} | TI & Saúde</title>
        <meta name="description" content={`Aprenda mais sobre ${title} no portal TI & Saúde.`} />
      </Head>

      <Header />

      {/* Hero Section do Artigo - Estilo Startup Moderna */}
      <header className="pt-32 pb-20 bg-[#020617] relative overflow-hidden">
        {/* Luzes difusas de fundo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <Link href="/" className="inline-flex items-center text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8 hover:translate-x-[-4px] transition-all">
            <span className="mr-2">←</span> Voltar ao Hub
          </Link>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tighter shadow-sm">
            {title}
          </h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">{category}</p>
        </div>
      </header>

      {/* Área de Leitura - Minimalismo de Luxo */}
      <main className="max-w-3xl mx-auto px-6 py-24">
        <article className="prose prose-slate prose-lg max-w-none 
          prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-lg
          prose-strong:text-indigo-600 prose-strong:font-bold
          prose-blockquote:border-l-indigo-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:rounded-r-2xl">
          {children}
        </article>

        {/* CTA de Encerramento */}
        <div className="mt-20 p-10 bg-slate-900 rounded-[3rem] text-center border border-white/10 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl"></div>
           <h3 className="text-2xl font-bold text-white mb-4">Gostou desse conteúdo?</h3>
           <p className="text-slate-400 mb-8">Participe da nossa comunidade e domine a tecnologia na saúde.</p>
           <a href="https://wa.me/5519992278928" target="_blank" className="bg-white text-slate-900 font-bold px-8 py-4 rounded-2xl hover:scale-105 transition-transform inline-block">
              ENTRAR NO GRUPO VIP
           </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}