import Image from "next/image";

export default function Main() {
  return (
    <>
      {/* Seção 1 - Hero */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

          {/* Texto */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">
              TI & Saúde — Conectando Tecnologia e Cuidado
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Descubra como a transformação digital está revolucionando a saúde.
              Prepare-se para o futuro e explore novas oportunidades na tecnologia da saúde!
            </p>
            <a
              href="/quiz"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Descobrir minha área ideal
            </a>
          </div>

          {/* Imagem */}
          <div className="relative w-full h-[340px] lg:h-[400px]">
            <Image
              src="/images/medico-dashboard.png"
              alt="Médico usando tecnologia na saúde"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>

        </div>
      </section>

      {/* Seção 2 - Áreas da Tecnologia na Saúde */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            Principais Áreas da Tecnologia na Saúde
          </h2>
          <p className="text-gray-600 mt-2">
            Descubra onde você pode atuar na interseção entre tecnologia e medicina
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Telemedicina", emoji: "🩺" },
            { title: "Segurança da Informação", emoji: "🔐" },
            { title: "Análise de Dados", emoji: "📊" },
            { title: "Desenvolvimento de Sistemas", emoji: "💻" },
          ].map((area) => (
            <div
              key={area.title}
              className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition cursor-pointer"
            >
              <span className="text-4xl">{area.emoji}</span>
              <h3 className="font-semibold text-lg text-gray-800 mt-4">
                {area.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 3 - Benefícios */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Por que trabalhar com Tecnologia na Saúde?
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            O setor de saúde está em constante evolução e a tecnologia é a chave
            para transformar vidas. É uma das áreas que mais crescem no mundo!
          </p>
          <ul className="text-gray-700 mt-6 space-y-3 text-left mx-auto max-w-xl">
            <li>✔ Alta demanda e empregabilidade</li>
            <li>✔ Salários competitivos</li>
            <li>✔ Diversas áreas para especialização</li>
            <li>✔ Você ajuda a salvar vidas com tecnologia!</li>
          </ul>
        </div>
      </section>
    </>
  );
}
