import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-200 via-blue-100 to-purple-200 py-6 mt-12">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-700 hover:text-blue-600 transition-all duration-300">
          © {new Date().getFullYear()} <span className="font-bold">TI-Saúde</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
