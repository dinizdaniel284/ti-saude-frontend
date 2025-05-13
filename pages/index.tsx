'use client';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaTwitter } from 'react-icons/fa';
import Script from 'next/script';

export default function Home() {
  const url = encodeURIComponent('https://ti-saude.vercel.app/quiz');
  const text = encodeURIComponent('Descubra qual área de TI combina com você! Faça o quiz do TI-Saúde 🚀');

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#7FDBDA] via-blue-500 to-blue-700 flex flex-col items-center justify-center px-6 py-16 text-dark-text">
      <Head>
        <title>TI Saúde - Tecnologia para Profissionais da Saúde</title>
        <meta name="description" content="Descubra qual área de TI combina com você. Quiz e guias para profissionais da saúde que querem aprender tecnologia." />
        <meta name="google-site-verification" content="o2OWszBRoFmqtrI9vL5ta-Nop0iU2hluhL2eo9J1glw" />
        <meta property="og:title" content="TI Saúde - Conectando Saúde e Tecnologia" />
        <meta property="og:description" content="Descubra sua carreira ideal em TI com nosso quiz e guias exclusivos para profissionais da saúde." />
        <meta property="og:image" content="https://ti-saude-frontend.vercel.app/social-banner.png" />
        <meta property="og:url" content="https://ti-saude.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TI Saúde - Conectando Saúde e Tecnologia" />
        <meta name="twitter:description" content="Descubra sua carreira ideal em TI com nosso quiz e guias exclusivos para profissionais da saúde." />
        <meta name="twitter:image" content="https://ti-saude-frontend.vercel.app/social-banner.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* AdSense script global */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7353371878367127"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <main className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold mb-6 text-white drop-shadow-lg"
        >
          TI Saúde - Transforme sua Carreira com TI na Saúde 💡
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/quiz">
              <button className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300">
                Fazer o Quiz
              </button>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/guia">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300">
                Ver o Guia
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Botões de Compartilhamento */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-10 flex gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`https://wa.me/?text=${text}%20${url}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Compartilhar no WhatsApp"
            className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg text-white"
          >
            <FaWhatsapp size={22} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Compartilhar no Facebook"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg text-white"
          >
            <FaFacebookF size={22} />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Compartilhar no Twitter"
            className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full shadow-lg text-white"
          >
            <FaTwitter size={22} />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-12 text-md sm:text-lg text-white/90"
        >
          <p>Não perca a chance de dar o primeiro passo para uma carreira incrível na TI e Saúde!</p>
        </motion.div>

        {/* AdSense bloco - rodapé-site */}
        <div className="mt-16">
          <ins className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-7353371878367127"
            data-ad-slot="1253614132"
            data-ad-format="auto"
            data-full-width-responsive="true">
          </ins>
          <Script id="adsbygoogle-init" strategy="afterInteractive">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </div>
      </main>

      <footer className="mt-20 text-white/70 text-sm text-center space-y-2">
        <p>© {new Date().getFullYear()} TI-Saúde — Desenvolvido com 💙</p>
        <p>Todos os direitos reservados.</p>
        <p>Desenvolvedor: Daniel Diniz</p>
        <p>
          <Link href="/privacidade" className="underline hover:text-white transition">
            Política de Privacidade
          </Link>
        </p>
      </footer>
    </div>
  );
}
