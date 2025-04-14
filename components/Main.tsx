import React from "react";

const Main: React.FC = () => {
  return (
    <main className="p-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-4xl font-extrabold mb-6 animate-fade-in">Bem-vindo ao TI-Saúde</h2>
      <p className="text-lg sm:text-xl text-gray-200">
        Este site é dedicado a ajudar profissionais da saúde a migrarem para a área de Tecnologia da Informação. Aqui você encontrará quizzes, conteúdos informativos e ferramentas úteis para essa transição!
      </p>
    </main>
  );
};

export default Main;

