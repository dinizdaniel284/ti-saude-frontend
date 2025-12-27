import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BannerQuiz from "../components/BannerQuiz";
import CarouselHome from "../components/CarouselHome";

const posts = [
  { title: "Backend", desc: "APIs, lógica e sistemas que sustentam aplicações reais.", img: "/assets/backend.png", link: "/posts/backend" },
  { title: "Saúde Digital", desc: "Tecnologia aplicada a hospitais, dados clínicos e inovação.", img: "/assets/saude.png", link: "/posts/saude-digital" },
  { title: "Power BI", desc: "Transforme dados em decisões com dashboards profissionais.", img: "/assets/powerbi.png", link: "/posts/power-bi" },
  { title: "Analista de Dados", desc: "Como dados se transformam em estratégia no mercado atual.", img: "/assets/powerbi.png", link: "/posts/analista-dados" },
  { title: "IA na Saúde", desc: "Inteligência Artificial revolucionando diagnósticos e gestão.", img: "/assets/saude.png", link: "/posts/inteligencia-artificial-saude" },
  { title: "Segurança da Informação", desc: "Proteção de dados, LGPD e segurança no setor da saúde.", img: "/assets/backend.png", link: "/posts/seguranca-informacao-saude" },
  // ADICIONANDO OS NOVOS ARTIGOS DA SUA ÁRVORE PARA O GOOGLE INDEXAR:
  { title: "Telemedicina", desc: "A revolução do atendimento à distância e infraestrutura necessária.", img: "/assets/saude.png", link: "/posts/telemedicina" },
  { title: "O Futuro da TI", desc: "Tendências tecnológicas que vão dominar o setor nos próximos anos.", img: "/assets/backend.png", link: "/posts/futuro-ti-saude" },
  { title: "Evolução Digital", desc: "O caminho da transformação digital em instituições de saúde.", img: "/assets/saude.png", link: "/posts/evolucao-digital" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>TI & Saúde | Tecnologia com Propósito</title>
        <meta name="description" content="Onde a tecnologia encontra a saúde. Backend, Dados e IA aplicados à vida real." />
      </Head>

      {/* HERO SECTION - AZUL PROFUNDO E ILUMINADO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 py-20 overflow-hidden border-b border-white/5">
        
        {/* Luzes de fundo para clarear o topo (Glows) */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            
            <div className="text-center md:text-left z-10">
              <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-400 text-slate-900 text-xs font-black uppercase tracking-widest shadow-lg shadow-cyan-500/20">
                Carreira & Tecnologia
              </span>

              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-sm">
                A Tecnologia que <span className="text-cyan-400">salva vidas.</span><br />
                Os Dados que <span className="text-indigo-400">curam o futuro.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl font-light leading-relaxed">
                Domine as ferramentas que estão reinventando a medicina. Aprenda 
                <span className="text-white font-semibold italic"> Backend, Dados e IA</span> focados no setor que não para de crescer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/posts/backend" className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black px-10 py-4 rounded-2xl transition-all shadow-xl shadow-cyan-500/30 hover:-translate-y-1 text-center">
                  QUERO COMEÇAR AGORA
                </Link>
                <Link href="/sobre" className="border-2 border-white/20 text-white font-bold px-10 py-4 rounded-2xl hover:bg-white/5 transition-all text-center">
                  CONHECER O PROJETO
                </Link>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full animate-pulse"></div>
              <Image
                src="/assets/hero.png" 
                alt="Inovação na Saúde"
                width={420}
                height={420}
                priority
                className="relative object-contain drop-shadow-[0_20px_50px_rgba(6,182,212,0.4)] animate-float"
              />
            </div>
          </div>

          {/* O CARROSSEL VOLTOU AQUI - Com margem e brilho próprio */}
          <div className="relative pt-10 border-t border-white/10 opacity-90">
             <p className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-8">Tecnologias que você vai dominar</p>
             <CarouselHome />
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* GRID DE POSTS - Agora com 9 cards para encher a página */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <Link key={i} href={post.link} className="group">
                <div className="bg-slate-50 h-full rounded-3xl p-6 border border-slate-100 hover:border-cyan-200 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                   <div className="h-40 mb-6 flex items-center justify-center bg-white rounded-2xl p-4 shadow-sm">
                      <Image src={post.img} alt={post.title} width={150} height={80} className="object-contain group-hover:scale-110 transition-transform" />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                     {post.title}
                   </h3>
                   <p className="text-slate-600 leading-relaxed text-sm">
                     {post.desc}
                   </p>
                   <div className="mt-4 flex items-center text-cyan-600 font-bold text-xs uppercase tracking-widest">
                      Ler Artigo <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                   </div>
                </div>
              </Link>
            ))}
          </div>

          {/* SIDEBAR FIXA */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <BannerQuiz />
              
              <div className="p-8 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2rem] text-white shadow-xl relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                <h3 className="text-2xl font-bold mb-3 relative z-10">Comunidade <br/> TI & Saúde</h3>
                <p className="text-indigo-100 mb-6 text-sm font-light leading-relaxed relative z-10">
                  Participe do nosso grupo e receba conteúdos práticos de Backend e Dados direto no seu WhatsApp.
                </p>
                <a href="https://wa.me/5519992278928" target="_blank" className="block w-full text-center bg-white text-indigo-600 font-black py-4 rounded-2xl hover:scale-105 transition-transform shadow-lg">
                  ENTRAR AGORA
                </a>
              </div>

              {/* Box de Autor para passar confiança ao AdSense */}
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Editor Responsável</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Artigos revisados por <strong>Daniel Diniz</strong>, focado em levar tecnologia de ponta para o setor assistencial.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}