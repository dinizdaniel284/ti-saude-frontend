import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex flex-col justify-center items-center p-6 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 drop-shadow-md mb-4">
        Conectando <span className="text-blue-600">Tecnologia</span> e <span className="text-blue-600">Saúde</span>
      </h1>
      
      <p className="text-gray-700 text-lg max-w-2xl mb-6 leading-relaxed">
        Este projeto foi criado para apoiar profissionais da saúde que desejam explorar as oportunidades crescentes no universo da Tecnologia da Informação.
      </p>

      <p className="text-gray-700 text-base max-w-2xl mb-8 leading-relaxed">
        A transição de carreira pode parecer desafiadora, mas a verdade é que habilidades como atenção aos detalhes, ética profissional e raciocínio lógico já fazem parte da rotina da área da saúde — e são altamente valorizadas na tecnologia.
      </p>

      <p className="text-gray-700 text-base max-w-2xl mb-10 leading-relaxed">
        Aqui você vai encontrar conteúdos sobre programação, análise de dados, segurança da informação, desenvolvimento de sistemas e muito mais. Tudo de forma clara, prática e direcionada para quem está começando.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/quiz-ti">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300">
            Fazer o Quiz de Transição para TI
          </button>
        </Link>

        <a
          href="/beginners-guide.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow-md hover:bg-gray-900 transition-colors duration-300">
            Ler o Guia de Iniciantes em Programação
          </button>
        </a>
      </div>
    </div>
  );
}
