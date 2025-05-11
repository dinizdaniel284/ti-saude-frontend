import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#7FDBDA] via-blue-500 to-blue-700 flex flex-col items-center justify-center px-6 py-16 text-dark-text">
      <Head>
        <title>TI Saúde - Tecnologia para Profissionais da Saúde</title>
        <meta name="description" content="Descubra qual área de TI combina com você. Quiz e guias para profissionais da saúde que querem aprender tecnologia." />
        <meta property="og:title" content="TI Saúde - Conectando Saúde e Tecnologia" />
        <meta property="og:description" content="Descubra sua carreira ideal em TI com nosso quiz e guias exclusivos para profissionais da saúde." />
        <meta property="og:image" content="https://ti-saude-frontend.vercel.app/logo.png" />
        <meta property="og:url" content="https://ti-saude-frontend.vercel.app/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
        >
          Transforme sua Carreira com TI na Saúde 💡
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg sm:text-xl mb-4 max-w-2xl mx-auto text-white/90"
        >
          Seja você da área da saúde querendo migrar para tecnologia ou curioso sobre o futuro digital da medicina,
          aqui é seu ponto de partida. Vamos juntos explorar as possibilidades!
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-md sm:text-lg text-white/80 mb-8"
        >
          🚀 Cursos, testes interativos, guias, e muito mais. Tudo em um só lugar para você evoluir na área de TI!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/quiz">
            <button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300">
              Fazer o Quiz
            </button>
          </Link>
          <Link href="/guia">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300">
              Ver o Guia
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-12 text-md sm:text-lg text-white/90"
        >
          <p>Não perca a chance de dar o primeiro passo para uma carreira incrível na TI e Saúde!</p>
        </motion.div>
      </main>

      <footer className="mt-20 text-white/70 text-sm text-center">
        <p>© {new Date().getFullYear()} TI-Saúde — Desenvolvido com 💙</p>
        <p>Todos os direitos reservados.</p>
        <p>Desenvolvedor: Daniel Diniz</p>
      </footer>
    </div>
  );
}
