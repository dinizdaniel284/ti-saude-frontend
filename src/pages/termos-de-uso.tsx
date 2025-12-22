import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BannerQuiz from "../components/BannerQuiz";
import CarouselHome from "../components/CarouselHome";

const posts = [
  {
    title: "Backend",
    desc: "APIs, lógica e sistemas que sustentam aplicações reais.",
    img: "/assets/backend.png",
    link: "/posts/backend",
  },
  {
    title: "Saúde Digital",
    desc: "Tecnologia aplicada a hospitais, dados clínicos e inovação.",
    img: "/assets/saude.png",
    link: "/posts/saude-digital",
  },
  {
    title: "Power BI",
    desc: "Transforme dados em decisões com dashboards profissionais.",
    img: "/assets/powerbi.png",
    link: "/posts/power-bi",
  },
  {
    title: "Analista de Dados",
    desc: "Como dados se transformam em estratégia no mercado atual.",
    img: "/assets/powerbi.png",
    link: "/posts/analista-dados",
  },
  {
    title: "IA na Saúde",
    desc: "Inteligência Artificial revolucionando diagnósticos e gestão.",
    img: "/assets/saude.png",
    link: "/posts/inteligencia-artificial-saude",
  },
  {
    title: "Segurança da Informação",
    desc: "Proteção de dados, LGPD e segurança no setor da saúde.",
    img: "/assets/backend.png",
    link: "/posts/seguranca-informacao",
  },
  {
    title: "Telemedicina",
    desc: "O atendimento médico remoto e o futuro da saúde digital.",
    img: "/assets/saude.png",
    link: "/posts/telemedicina",
  },
  {
    title: "O Futuro da TI na Saúde",
    desc: "Tendências, inovação e oportunidades na área.",
    img: "/assets/hero.png",
    link: "/posts/futuro-ti-saude",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>TI & Saúde | Onde tecnologia encontra propósito</title>
        <meta
          name="description"
          content="Aprenda Backend, Dados e Power BI aplicados à Saúde. Conteúdos claros, práticos e focados no mercado."
        />
      </Head>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#0F172A] via-[#004AAD] to-[#5B21B6] text-white py-24 overflow-hidden">
        
        {/* Glow */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          {/* TEXTO */}
          <div className="text-center md:text-left">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 text-sm tracking-wide">
              🚀 Tecnologia aplicada à vida real
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Onde <span className="text-cyan-300">Tecnologia</span>
              <br />
              encontra a <span className="text-purple-300">Saúde</span>
            </h1>

            <p className="text-lg text-white/90 mb-6 max-w-xl">
              Aprenda Backend, Dados e Power BI aplicados à Saúde.
              Conteúdos diretos, sem enrolação, focados no que o mercado pede.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/posts/backend"
                className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-cyan-300 transition"
              >
                Começar agora
              </Link>

              <Link
                href="/quiz"
                className="border border-white/40 px-6 py-3 rounded-xl hover:bg-white/10 transition"
              >
                Descobrir minha área
              </Link>
            </div>

            {/* CARROSSEL */}
            <div className="mt-10 max-w-md mx-auto md:mx-0">
              <CarouselHome />
            </div>
          </div>

          {/* IMAGEM HERO */}
          <div className="flex justify-center">
            <Image
              src="/assets/hero.png"
              alt="Tecnologia e Saúde"
              width={320}
              height={320}
              priority
              className="max-h-[320px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* BLOG + QUIZ */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
        {/* BLOG */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, i) => (
            <Link key={i} href={post.link}>
              <div className="bg-white rounded-3xl shadow-lg hover:-translate-y-2 transition overflow-hidden group">
                
                <div className="h-[180px] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={220}
                    height={140}
                    className="object-contain group-hover:scale-105 transition"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {post.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* QUIZ */}
        <div className="sticky top-28 h-fit">
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 shadow-2xl">
            <BannerQuiz />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 bg-gray-100 text-sm">
        © 2025 — Daniel | TI & Saúde 🚀
        <div className="text-xs text-gray-500 mt-1">
          Tecnologia com propósito, dados com impacto.
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/5519992278928"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition"
      >
        <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
      </a>
    </>
  );
}
