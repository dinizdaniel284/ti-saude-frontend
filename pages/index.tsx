"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Facebook, Instagram, MessageCircle } from "lucide-react";
import Script from "next/script";

export default function Home() {
  const router = useRouter();

  const handleGoToQuiz = () => router.push("/quiz");
  const handleGoToGuide = () => router.push("/guia");

  const siteURL = "https://ti-saude.vercel.app";

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-blue-600 flex flex-col items-center justify-center p-6">
      {/* AdSense Script global */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7353371878367127"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-teal-900 mb-4 drop-shadow">
          Transforme sua Carreira com TI na Saúde 💡
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Seja você da área da saúde querendo migrar para tecnologia ou curioso sobre o futuro digital da medicina, aqui é seu ponto de partida. Vamos juntos explorar as possibilidades!
        </p>
        <p className="text-base text-gray-700 mb-6">
          🚀 Cursos, testes interativos, guias, e muito mais. Tudo em um só lugar para você evoluir na área de TI!
        </p>

        {/* Anúncio do AdSense */}
        <div className="my-6">
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-7353371878367127"
            data-ad-slot="3263865651"
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
          <Script id="adsbygoogle-init" strategy="afterInteractive">
            {`(adsbygoogle = window.adsbygoogle || []).push({});`}
          </Script>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={handleGoToQuiz}
            className="bg-teal-600 text-white px-6 py-3 rounded-xl shadow hover:bg-teal-700 transition"
          >
            Fazer o Quiz
          </button>
          <button
            onClick={handleGoToGuide}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition"
          >
            Ver o Guia
          </button>
        </div>

        <p className="text-sm text-gray-600 italic mb-6">
          Não perca a chance de dar o primeiro passo para uma carreira incrível na TI e Saúde!
        </p>

        {/* Compartilhamento */}
        <div className="flex justify-center gap-6 mb-4 text-blue-600">
          <a
            href={`https://wa.me/?text=Veja%20este%20site%20incrível%20sobre%20TI%20e%20Saúde:%20${encodeURIComponent(siteURL)}`}
            target="_blank"
            aria-label="Compartilhar no WhatsApp"
          >
            <MessageCircle className="w-6 h-6 hover:text-green-500 transition" />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteURL)}`}
            target="_blank"
            aria-label="Compartilhar no Facebook"
          >
            <Facebook className="w-6 h-6 hover:text-blue-700 transition" />
          </a>
          <a
            href={`https://www.instagram.com/`}
            target="_blank"
            aria-label="Instagram (visite o perfil para compartilhar nos stories)" // Instagram não tem compartilhamento direto
          >
            <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
          </a>
        </div>

        {/* Rodapé */}
        <div className="text-xs text-gray-500 mt-6">
          <p>© 2025 TI-Saúde — Desenvolvido com 💙</p>
          <p>Todos os direitos reservados.</p>
          <p className="mt-1">Desenvolvedor: Daniel Diniz</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-blue-600 text-sm">
            <a href="/sobre" className="hover:underline">Sobre</a>
            <a href="/privacidade" className="hover:underline">Política de Privacidade</a>
            <a href="/contato" className="hover:underline">Contato</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
