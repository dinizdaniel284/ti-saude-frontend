import React from "react";

const Main: React.FC = () => {
  return (
    <main className="p-6 text-center bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-700 text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6 animate-fade-in">Bem-vindo ao TI-Saúde</h2>
      <p className="text-lg sm:text-xl text-gray-200">
        Este site é dedicado a ajudar profissionais da saúde a migrarem para a área de Tecnologia da Informação. Aqui você encontrará quizzes, conteúdos informativos e ferramentas úteis para essa transição!
      </p>
    </main>
  );
};

export default Main;
