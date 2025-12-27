import React from 'react';
import Head from 'next/head';
import SectionPrivacidade from '../components/SectionPrivacidade';

const PrivacidadePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Política de Privacidade | TI & Saúde</title>
        <meta name="description" content="Política de Privacidade e proteção de dados do portal TI & Saúde." />
      </Head>
      <SectionPrivacidade />
    </>
  );
};

export default PrivacidadePage;