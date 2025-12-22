import React from 'react';
import Link from 'next/link';

const BannerQuiz: React.FC = () => {
  const url = encodeURIComponent('https://ti-saude.vercel.app/quiz');
  const text = encodeURIComponent('Descubra qual área de TI combina com você! Faça o quiz do TI-Saúde 🚀');

  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold mb-4 text-white">Descubra sua área ideal na TI!</h2>
      <p className="text-white/90 mb-6">
        Responda ao quiz e descubra qual caminho na Tecnologia da Informação mais combina com você.
      </p>
      <Link
        href="/quiz"
        className="bg-white text-blue-600 hover:bg-blue-100 font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 inline-block"
      >
        Comece o Quiz
      </Link>
    </div>
  );
};

export default BannerQuiz;
