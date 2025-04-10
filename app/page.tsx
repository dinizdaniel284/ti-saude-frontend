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

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Image
            className="dark:invert"
            src="/vercel.svg"
            alt="Vercel logo"
            width={20}
            height={20}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="my-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Consultoria em TI para a Saúde</h2>
          <p className="text-lg mb-4">
            Precisa de ajuda para implementar soluções de TI no setor da saúde? Oferecemos consultoria especializada para otimizar seus processos.
          </p>
          <Link href="/consultoria">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-all">
              Saiba mais sobre a Consultoria
            </button>
          </Link>
        </div>

        <div className="my-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Curso de TI para a Saúde</h2>
          <p className="text-lg mb-4">
            Aprenda TI focado na área da saúde com este curso incrível! Utilize o código de desconto do nosso site.
          </p>
          <a
            href="https://linkdoprograma.com"
            className="px-6 py-3 bg-orange-600 text-white rounded-full shadow-lg transform hover:scale-105 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acesse o Curso com Desconto
          </a>
        </div>

        <div className="my-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Produtos Recomendados</h2>
          <p className="text-lg mb-4">
            Confira esses produtos que vão melhorar sua experiência em TI e saúde! Compre com nossos links de afiliados.
          </p>
          <div className="flex gap-8 justify-center flex-wrap">
            <div className="text-center">
              <h3 className="font-semibold">Produto 1</h3>
              <Image
                src="/produto1.jpg"
                alt="Produto 1"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <a
                href="https://linkdoproduto1.com"
                className="px-4 py-2 bg-green-600 text-white rounded-full mt-2 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar Produto 1
              </a>
            </div>
            <div className="text-center">
              <h3 className="font-semibold">Produto 2</h3>
              <Image
                src="/produto2.jpg"
                alt="Produto 2"
                width={150}
                height={150}
                className="rounded-lg"
              />
              <a
                href="https://linkdoproduto2.com"
                className="px-4 py-2 bg-green-600 text-white rounded-full mt-2 block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar Produto 2
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold mb-4">Qual área de TI combina com você?</h2>
          <p className="text-lg mb-4">
            Responda ao nosso quiz para descobrir a área de TI que mais combina com seu perfil profissional.
          </p>
          <Link href="/quiz">
            <button className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all">
              Faça o Quiz
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
        }
