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
          marginBottom: '25px',
        }}
      >
        Fazer o Quiz Agora
      </a>

      {/* Bloco novo: Link para o Guia */}
      <div style={{
        marginTop: '20px',
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
        maxWidth: '500px',
      }}>
        <h2 style={{
          fontSize: '1.3rem',
          color: '#334e68',
          marginBottom: '10px',
        }}>
          Novo por aqui?
        </h2>
        <p style={{
          fontSize: '1rem',
          color: '#486581',
          marginBottom: '15px',
        }}>
          Acesse nosso guia exclusivo para iniciantes e descubra o caminho da saúde para a tecnologia.
        </p>
        <a
          href="/guia-para-iniciantes.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#22c55e',
            color: '#ffffff',
            borderRadius: '6px',
            fontWeight: 'bold',
            textDecoration: 'none',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          Acessar o Guia para Iniciantes
        </a>
      </div>
    </div>
  );
};

export default IndexPage;
