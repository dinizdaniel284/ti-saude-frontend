import React from 'react';
import { motion } from 'framer-motion';

const SectionContato: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-blue-700 mb-6 text-center"
      >
        Fale Conosco
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8"
      >
        Tem alguma dúvida ou sugestão? Entre em contato conosco e responderemos rapidamente!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center"
      >
        <a
          href="mailto:contato@ti-saude.vercel.app"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 inline-block"
        >
          Enviar Email
        </a>
      </motion.div>
    </section>
  );
};

export default SectionContato;
