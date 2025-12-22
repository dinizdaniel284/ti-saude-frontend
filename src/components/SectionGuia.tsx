import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const SectionGuia: React.FC = () => {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-blue-700 mb-6 text-center"
      >
        Guias de Carreira
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8"
      >
        Explore guias completos sobre diferentes áreas da TI e descubra o caminho ideal para você na tecnologia.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center"
      >
        <Link
          href="/guia"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg transition-all duration-300 inline-block"
        >
          Ver Guias
        </Link>
      </motion.div>
    </section>
  );
};

export default SectionGuia;
