import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Imports ajustados para a nova pasta components
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerQuiz from "../components/BannerQuiz";
import CarouselHome from "../components/CarouselHome";

const posts = [
  { title: "Backend Architecture", desc: "Arquiteturas escaláveis e sistemas de alta disponibilidade para o setor crítico da saúde.", img: "/assets/saude.png", link: "/posts/backend", tag: "Engenharia" },
  { title: "Saúde Digital 4.0", desc: "A convergência entre IoT, telemedicina e interoperabilidade de dados clínicos.", img: "/assets/saude.png", link: "/posts/saude-digital", tag: "Inovação" },
  { title: "Business Intelligence", desc: "Dashboards de alto impacto que transformam indicadores brutos em decisões médicas.", img: "/assets/saude.png", link: "/posts/power-bi", tag: "Dados" },
  { title: "Data Science & IA", desc: "Algoritmos preditivos aplicados ao diagnóstico precoce e gestão populacional.", img: "/assets/saude.png", link: "/posts/inteligencia-artificial-saude", tag: "IA" },
  { title: "Cybersecurity", desc: "Segurança de dados e conformidade com a LGPD no ecossistema hospitalar.", img: "/assets/saude.png", link: "/posts/seguranca-informacao-saude", tag: "Segurança" },
  { title: "Telemedicina", desc: "Infraestrutura robusta para o novo padrão de atendimento global.", img: "/assets/saude.png", link: "/posts/telemedicina", tag: "Conectividade" },
];

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Head>
        <title>TI & Saúde | Engenharia de Software com Propósito</title>
        <meta name="description" content="Soluções tecnológicas de alto nível para o setor da saúde." />
      </Head>

      <Header />

      <main>
        {/* HERO SECTION - STARTUP PREMIUM */}
        <section className="relative bg-[#020617] py-24 lg:py-40 overflow-hidden">
          
          {/* Efeitos de Luz Difusa (Glows de Luxo) */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

          <div className="relative max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-20">
              <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                The Future of Health Tech
              </span>

              <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 leading-[1.1] tracking-tighter">
                Tecnologia que <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">salva vidas.</span><br />
                Engenharia de <span className="text-slate-400">Elite.</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl font-light leading-relaxed">
                Onde o <span className="text-white font-semibold">Backend robusto</span> e a <span className="text-white font-semibold">Inteligência de Dados</span> se encontram para redefinir o cuidado assistencial.
              </p>

              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/posts/backend" className="bg-white text-slate-950 font-black px-12 py-5 rounded-2xl transition-all hover:scale-105 hover:bg-cyan-400 active:scale-95 shadow-xl">
                  EXPLORAR SOLUÇÕES
                </Link>
                <Link href="/sobre" className="border border-white/20 text-white font-bold px-12 py-5 rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm">
                  CONHECER O PROJETO
                </Link>
              </div>
            </div>

            {/* Carousel com Glassmorphism */}
            <div className="relative mt-20 p-8 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl">
               <p className="text-center text-slate-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10">Stack Tecnológica & Protocolos</p>
               <CarouselHome />
            </div>
          </div>
        </section>

        {/* FEED DE PROJETOS/ARTIGOS */}
        <section className="bg-slate-50 py-32">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter">Deep Tech na Saúde</h2>
                <p className="text-slate-500 text-lg">Insights técnicos sobre arquitetura, dados e inovação clínica.</p>
              </div>
              <div className="h-[1px] flex-1 bg-slate-200 mb-4 hidden md:block ml-10"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* GRID DE POSTS */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                {posts.map((post, i) => (
                  <Link key={i} href={post.link} className="group">
                    <article className="relative bg-white h-full rounded-[2.5rem] p-8 border border-slate-200 transition-all duration-500 hover:shadow-premium hover:-translate-y-3 overflow-hidden">
                      <div className="absolute top-0 right-0 p-6">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">{post.tag}</span>
                      </div>
                      
                      <div className="h-44 mb-8 flex items-center justify-start group-hover:scale-110 transition-transform duration-500">
                        <Image 
                          src={post.img} 
                          alt={post.title} 
                          width={100} 
                          height={100} 
                          className="object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                          priority={i < 2}
                        />
                      </div>

                      <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors tracking-tight">
                        {post.title}
                      </h3>
                      <p className="text-slate-500 leading-relaxed text-sm mb-8">
                        {post.desc}
                      </p>
                      
                      <div className="flex items-center text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] group-hover:text-indigo-600 transition-all">
                        ANALYZE CASE <span className="ml-2 transition-transform group-hover:translate-x-2">→</span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* SIDEBAR */}
              <aside className="lg:col-span-1">
                <div className="sticky top-28 space-y-10">
                  <BannerQuiz />
                  
                  <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group border border-white/10">
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
                    <h3 className="text-3xl font-bold mb-4 leading-tight">Ready to build?</h3>
                    <p className="text-slate-400 mb-8 font-light leading-relaxed text-sm">
                      Junte-se ao ecossistema de desenvolvedores que estão moldando o futuro assistencial através do código.
                    </p>
                    <a href="https://wa.me/5519992278928" target="_blank" className="inline-flex items-center justify-center w-full bg-white text-slate-900 font-black py-5 rounded-2xl transition-all hover:bg-cyan-400 shadow-lg">
                      JOIN COMMUNITY
                    </a>
                  </div>

                  {/* Profile Widget */}
                  <div className="p-6 bg-white rounded-[2rem] border border-slate-200 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px]">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-black text-slate-900 italic text-sm">DD</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Daniel Diniz</h4>
                      <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest">Lead Systems Architect</p>
                    </div>
                  </div>
                </div>
              </aside>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}