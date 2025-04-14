import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-indigo-500 text-white p-8 rounded-b-2xl shadow-xl">
      <h1 className="text-4xl font-extrabold text-center sm:text-5xl md:text-6xl">
        TI & Saúde
      </h1>
      <p className="text-center text-lg mt-3 sm:text-xl">
        Conectando tecnologia e bem-estar
      </p>
    </header>
  );
};

export default Header;

