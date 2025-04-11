// app/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Brain, ShieldCheck, Stethoscope } from 'lucide-react'

export default function Home() {
  const topics = [
    {
      title: 'TI na Saúde',
      description: 'Explore como a tecnologia pode otimizar processos e salvar vidas.',
      icon: <Stethoscope className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Segurança da Informação',
      description: 'Proteja dados sensíveis com práticas e ferramentas essenciais.',
      icon: <ShieldCheck className="h-8 w-8 text-green-500" />
    },
    {
      title: 'Inteligência Artificial',
      description: 'Descubra como a IA está transformando diagnósticos e tratamentos.',
      icon: <Brain className="h-8 w-8 text-purple-500" />
    }
  ]

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center text-gray-800 mb-10"
      >
        Conectando TI e Saúde
      </motion.h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {topics.map((topic, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {topic.icon}
              <h2 className="text-xl font-semibold text-gray-700">{topic.title}</h2>
            </div>
            <p className="text-gray-600">{topic.description}</p>
          </motion.div>
        ))}
      </section>
    </main>
  )
}
