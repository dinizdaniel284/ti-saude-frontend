"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          style={{ width: "auto", height: "auto" }}
          priority
        />

        {/* Consultoria */}
        <section className="my-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Consultoria em TI para a Saúde</h2>
          <p className="text-lg mb-4">
            Oferecemos consultoria especializada para profissionais da saúde que desejam integrar soluções de TI.
          </p>
          <Link href="/consultoria">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:scale-105 transition-all">
              Saiba Mais
            </button>
          </Link>
        </section>

        {/* Curso */}
        <section className="my-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Curso de TI para a Saúde</h2>
          <p className="text-lg mb-4">
            Curso completo focado na área da saúde. Use o cupom exclusivo disponível na página.
          </p>
          <Link href="/curso">
            <button className="px-6 py-3 bg-orange-600 text-white rounded-full shadow-lg hover:scale-105 transition-all">
              Ver Curso com Desconto
            </button>
          </Link>
        </section>

        {/* Produtos */}
        <section className="my-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Produtos Recomendados</h2>
          <p className="text-lg mb-4">
            Equipamentos e materiais que podem turbinar sua atuação em TI e saúde.
          </p>
          <Link href="/produtos">
            <button className="px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:scale-105 transition-all">
              Ver Produtos
            </button>
          </Link>
        </section>

        {/* Quiz */}
        <section className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Qual área de TI combina com você?</h2>
          <p className="text-lg mb-4">
            Responda ao nosso quiz e descubra seu perfil ideal na tecnologia.
          </p>
          <Link href="/quiz">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:scale-105 transition-all">
              Faça o Quiz
            </button>
          </Link>
        </section>
      </main>
    </div>
  );
}
