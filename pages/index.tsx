import React from 'react';

const IndexPage = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to right, #f0f4f8, #d9e2ec)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#102a43',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 20px',
      textAlign: 'center',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '20px',
        color: '#334e68',
      }}>
        Bem-vindo ao <span style={{ color: '#3e7cb1' }}>TI + Saúde</span>
      </h1>

      <p style={{
        fontSize: '1.2rem',
        maxWidth: '600px',
        marginBottom: '15px',
      }}>
        Nosso projeto conecta profissionais da saúde ao universo da Tecnologia da Informação.
      </p>

      <p style={{
        fontSize: '1rem',
        maxWidth: '600px',
        marginBottom: '30px',
        color: '#486581',
      }}>
        Descubra como suas habilidades podem ser aproveitadas em áreas como Análise de Dados, Desenvolvimento de Sistemas, Segurança da Informação e muito mais.
      </p>

      <a
        href="/quiz-ti"
        style={{
          padding: '12px 25px',
          backgroundColor: '#3e7cb1',
          color: '#ffffff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        Fazer o Quiz Agora
      </a>
    </div>
  );
};

export default IndexPage;
