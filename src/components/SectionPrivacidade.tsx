import React from 'react';
import { motion } from 'framer-motion';

const SectionPrivacidade: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white text-slate-800 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold mb-8 text-slate-900 border-b pb-4">Política de Privacidade</h1>
        
        <div className="space-y-6 leading-relaxed">
          <p>
            A sua privacidade é importante para nós. É política do <strong>TI & Saúde</strong> respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Coleta de Informações</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Cookies e Google AdSense</h2>
          <p>
            Este site utiliza o <strong>Google AdSense</strong> para veicular anúncios. O Google utiliza cookies para exibir anúncios baseados em suas visitas anteriores a este ou outros sites.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>O Google usa o cookie de publicidade para permitir que ele e seus parceiros veiculem anúncios com base na sua visita.</li>
            <li>Você pode desativar a publicidade personalizada visitando as Configurações de Anúncios do Google.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Lei Geral de Proteção de Dados (LGPD)</h2>
          <p>
            Em conformidade com a LGPD, garantimos ao usuário o direito de acesso, retificação, exclusão de seus dados e revogação de consentimento a qualquer momento através dos nossos canais de contato.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Retenção de Dados</h2>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, os protegemos dentro de meios comercialmente aceitáveis ​​para evitar perdas e roubos.
          </p>

          <p className="pt-10 text-sm text-slate-500">
            Esta política é efetiva a partir de Janeiro de 2025.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionPrivacidade;