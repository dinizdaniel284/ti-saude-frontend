import React from 'react';
import { motion } from 'framer-motion';

const SectionPrivacidade: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-extrabold mb-6">Política de Privacidade</h2>
        <p className="mb-4">
          Respeitamos sua privacidade. Todos os dados coletados são usados apenas para melhorar sua experiência no site e nunca serão compartilhados com terceiros sem seu consentimento.
        </p>
        <p className="mb-4">
          Ao usar nosso site, você concorda com o uso de cookies e coleta de informações conforme descrito nesta política.
        </p>
        <p>
          Para dúvidas ou solicitações de remoção de dados, entre em contato através da página de Contato.
        </p>
      </motion.div>
    </section>
  );
};

export default SectionPrivacidade;
