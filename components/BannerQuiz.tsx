import React from "react";

const BannerQuiz: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-14 px-8 rounded-3xl shadow-2xl text-center mb-12 max-w-4xl mx-auto transition-transform transform hover:scale-105">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        Descubra sua área ideal na TI!
      </h1>
      <p className="text-lg md:text-xl text-white opacity-90 mb-8">
        Responda ao quiz e descubra qual caminho na Tecnologia da Informação mais combina com você.
      </p>
      <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gradient-to-l transition-all duration-300">
        Comece o Quiz
      </button>
    </div>
  );
};

export default BannerQuiz;

