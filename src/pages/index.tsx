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
    link: "/posts/seguranca-informacao-saude",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>TI & Saúde | Tecnologia aplicada à vida real</title>
        <meta
          name="description"
          content="Backend, Dados e Power BI aplicados à Saúde. Conteúdos claros, práticos e focados no mercado."
        />
      </Head>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-sky-100 via-slate-50 to-indigo-100 py-24 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-cyan-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-indigo-300/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium">
              🚀 Tecnologia aplicada à saúde
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
              Onde a <span className="text-cyan-600">Tecnologia</span>
              <br />
              encontra a <span className="text-indigo-600">Saúde</span>
            </h1>

            <p className="text-lg text-slate-700 mb-6 max-w-xl">
              Aprenda Backend, Dados e Power BI aplicados à Saúde.
              Conteúdos diretos, práticos e focados no mercado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/posts/backend"
                className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-cyan-400 transition"
              >
                Começar agora
              </Link>

              <Link
                href="/quiz"
                className="border border-slate-300 px-6 py-3 rounded-xl hover:bg-slate-100 transition text-slate-700"
              >
                Descobrir minha área
              </Link>
            </div>

            <div className="mt-10 max-w-md mx-auto md:mx-0">
              <CarouselHome />
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/assets/hero.png"
              alt="Tecnologia e Saúde"
              width={340}
              height={340}
              priority
              className="object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <Link key={i} href={post.link}>
                <div className="bg-white rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition overflow-hidden border border-slate-200">
                  <div className="h-[180px] bg-slate-100 flex items-center justify-center">
                    <Image
                      src={post.img}
                      alt={post.title}
                      width={220}
                      height={140}
                      className="object-contain"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {post.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* SIDEBAR */}
          <div className="sticky top-28 h-fit">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
              <BannerQuiz />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              TI & Saúde
            </h3>
            <p className="text-sm text-slate-400">
              Tecnologia aplicada à saúde, dados e inovação.
              Conteúdos práticos para quem quer evoluir na área.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Institucional
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/termos-de-uso" className="hover:text-white">Termos de Uso</Link></li>
              <li><Link href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</Link></li>
              <li><Link href="/contato" className="hover:text-white">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-3">
              Fale com a gente
            </h3>
            <a
              href="https://wa.me/5519992278928"
              target="_blank"
              className="text-green-400 hover:text-green-300"
            >
              WhatsApp →
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-slate-500 mt-10">
          © 2025 — TI & Saúde | Todos os direitos reservados
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/5519992278928"
        target="_blank"
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition"
      >
        <img src="/assets/whatsapp.png" alt="WhatsApp" className="w-7 h-7" />
      </a>
    </>
  );
}
