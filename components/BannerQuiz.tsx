import React from "react";

const BannerQuiz: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-12 px-6 rounded-2xl shadow-lg text-center mb-8">
      <h1 className="text-4xl font-bold text-white mb-2">
        Descubra sua área ideal na TI!
      </h1>
      <p className="text-lg text-white opacity-90">
        Responda o quiz e veja qual caminho mais combina com você
      </p>
    </div>
  );
};

export default BannerQuiz;
