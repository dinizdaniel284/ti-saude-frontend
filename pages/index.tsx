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
        Conectando <span style={{ color: '#3e7cb1' }}>Tecnologia e Saúde</span>
      </h1>

      <p style={{
        fontSize: '1.2rem',
        maxWidth: '700px',
        marginBottom: '15px',
      }}>
        Este projeto foi criado para apoiar profissionais da saúde que desejam explorar as oportunidades crescentes no universo da Tecnologia da Informação.
      </p>

      <p style={{
        fontSize: '1rem',
        maxWidth: '700px',
        marginBottom: '15px',
        color: '#486581',
      }}>
        A transição de carreira pode parecer desafiadora, mas a verdade é que habilidades como atenção aos detalhes, ética profissional e raciocínio lógico já fazem parte da rotina da área da saúde — e são altamente valorizadas na tecnologia.
      </p>

      <p style={{
        fontSize: '1rem',
        maxWidth: '700px',
        marginBottom: '30px',
        color: '#486581',
      }}>
        Aqui você vai encontrar conteúdos sobre programação, análise de dados, segurança da informação, desenvolvimento de sistemas e muito mais. 
        Tudo de forma clara, prática e direcionada para quem está começando.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
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
          Fazer o Quiz de Transição para TI
        </a>

        <a
          href="/beginners-guide.html"
          style={{
            padding: '12px 25px',
            backgroundColor: '#243b53',
            color: '#ffffff',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          Ler o Guia de Iniciantes em Programação
        </a>
      </div>

      <p style={{ fontSize: '0.9rem', color: '#829ab1' }}>
        Criado com dedicação por Daniel Diniz — TI + Saúde para transformar vidas.
      </p>
    </div>
  );
};

export default IndexPage;
