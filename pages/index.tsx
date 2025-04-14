import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 flex flex-col items-center justify-center px-6 py-16 text-dark-text">
      <Head>
        <title>Bem-vindo ao TI-Saúde</title>
        <meta
          name="description"
          content="Conectando tecnologia e saúde para transformar carreiras."
        />
      </Head>

      <main className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-6 text-blue-600 drop-shadow-md"
        >
          Transforme sua Carreira com TI na Saúde 💡
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl mb-4 max-w-2xl mx-auto text-gray-700"
        >
          Seja você da área da saúde querendo migrar para tecnologia ou curioso sobre o futuro digital da medicina,
          aqui é seu ponto de partida. Vamos juntos explorar as possibilidades!
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-lg text-gray-600 mb-8"
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
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-2xl shadow-lg transition-all duration-300">
              Fazer o Quiz
            </button>
          </Link>
          <Link href="/guia">
            <button className="bg-white border border-blue-500 text-blue-600 hover:bg-blue-100 py-3 px-6 rounded-2xl shadow-md transition-all duration-300">
              Ver o Guia
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-12 text-lg text-gray-800"
        >
          <p>Não perca a chance de dar o primeiro passo para uma carreira incrível na TI e Saúde!</p>
        </motion.div>
      </main>

      <footer className="mt-20 text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} TI-Saúde — Desenvolvido com 💙</p>
        <p className="text-sm">Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
