import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600 mt-8">
      <p>© {new Date().getFullYear()} TI-Saúde. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
