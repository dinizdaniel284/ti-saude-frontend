// components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600 mt-8">
      © {new Date().getFullYear()} TI-Saúde. Todos os direitos reservados.
    </footer>
  );
};

export default Footer;
