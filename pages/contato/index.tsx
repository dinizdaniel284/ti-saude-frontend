import React from 'react';

export default function Contato() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Entre em Contato</h1>
      <p className="text-lg mb-2">Você pode entrar em contato através do e-mail:</p>
      <a
        href="mailto:contato@ti-saude.com"
        className="text-blue-500 underline text-lg"
      >
        contato@ti-saude.com
      </a>
    </main>
  );
}
