import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-700 text-white mt-16 p-6 text-center space-y-2">
      <p>© {new Date().getFullYear()} TI-Saúde — Desenvolvido com 💙</p>
      <p>Todos os direitos reservados.</p>
      <p>Desenvolvedor: Daniel Diniz</p>
      <p>
        <Link
          href="/privacidade"
          className="underline hover:text-white transition"
        >
          Política de Privacidade
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
