import Head from "next/head";
import QuizTI from "./quiz-ti";

export default function Home() {
  return (
    <>
      <Head>
        <title>Descubra sua área na TI</title>
        <meta name="description" content="Quiz interativo para descobrir sua área ideal na tecnologia" />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-8">
            Bem-vindo ao TI-Saúde
          </h1>
          <p className="mb-6 text-lg text-gray-700">
            Clique no botão abaixo para iniciar o quiz e descobrir com qual área da TI você mais se identifica!
          </p>
          <QuizTI />
        </div>
      </main>
    </>
  );
}
