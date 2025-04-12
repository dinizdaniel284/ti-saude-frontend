import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 text-white p-6 rounded-b-2xl shadow-md">
      <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
        TI & Saúde
      </h1>
      <p className="text-center text-sm mt-2 sm:text-base">
        Conectando tecnologia e bem-estar
      </p>
    </header>
  );
};

export default Header;
