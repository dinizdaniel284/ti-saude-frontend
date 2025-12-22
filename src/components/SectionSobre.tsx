import React from 'react';
import { motion } from 'framer-motion';

const SectionSobre: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-blue-700 mb-6 text-center"
      >
        Sobre o TI Saúde
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto"
      >
        O TI Saúde conecta profissionais da saúde com o mundo da tecnologia. Aqui você encontra cursos, quizzes, guias e dicas para evoluir na carreira, migrando ou complementando sua atuação com habilidades digitais.
      </motion.p>
    </section>
  );
};

export default SectionSobre;
