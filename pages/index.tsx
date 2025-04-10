import React from 'react';
import Link from 'next/link';

const IndexPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bem-vindo ao TI + Saúde</h1>
      <p>
        Este projeto tem como objetivo ajudar profissionais da área da saúde a encontrarem oportunidades no setor de Tecnologia da Informação.
      </p>
      <p>
        Explore nosso conteúdo, faça o quiz e descubra quais áreas de TI combinam com seu perfil!
      </p>

      <div style={{ marginTop: '30px' }}>
        <Link href="/quiz-ti">
          <button
            style={{
              backgroundColor: '#4F46E5',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Fazer o Quiz
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
