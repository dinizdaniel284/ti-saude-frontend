// pages/index.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, BookOpenCheck } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-800 to-indigo-900 text-white flex flex-col items-center justify-center px-6 py-12">
      <motion.header
        className="text-center mb-12 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white tracking-tight">
          Bem-vindo ao <span className="text-yellow-300">TI & Saúde</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 max-w-xl mx-auto">
          Conectando profissionais da saúde com a tecnologia para uma nova era.
        </p>
      </motion.header>

      <motion.div
        className="space-y-8 text-center w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Link href="/quiz">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-green-500 text-white font-semibold py-4 px-6 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:bg-green-600 transition"
          >
            <Brain className="w-6 h-6" />
            Comece o Quiz Interativo
          </motion.button>
        </Link>

        <Link href="/guia">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-blue-500 text-white font-semibold py-4 px-6 rounded-2xl shadow-xl flex items-center justify-center gap-3 hover:bg-blue-600 transition"
          >
            <BookOpenCheck className="w-6 h-6" />
            Leia o Guia para Iniciantes
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;