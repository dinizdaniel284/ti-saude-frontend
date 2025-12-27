import Head from "next/head";
import Link from "next/link";

export default function Telemedicina() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head>
        <title>Telemedicina: A Revolução do Cuidado à Distância | TI & Saúde</title>
        <meta name="description" content="Entenda como a telemedicina está mudando o atendimento médico e a infraestrutura de TI necessária." />
      </Head>

      <article className="max-w-3xl mx-auto">
        <Link href="/" className="text-cyan-600 font-bold hover:underline mb-8 inline-block">
          ← Voltar para a Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
          Telemedicina: Muito além de uma <span className="text-cyan-600">videochamada.</span>
        </h1>
        
        <div className="prose prose-lg text-slate-600 space-y-6 leading-relaxed">
          <p className="text-xl font-medium text-slate-800">
            A telemedicina não é apenas atender um paciente pelo celular; é uma estrutura complexa de dados, segurança e conectividade.
          </p>
          
          <p>
            Desde a regulamentação acelerada em 2020, o atendimento à distância se tornou um pilar fundamental da saúde digital. Mas, para o profissional de TI, o desafio é garantir que essa conexão seja <strong>segura (LGPD)</strong>, estável e integrada ao prontuário eletrônico (PEP).
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10">O Desafio da Infraestrutura</h2>
          <p>
            Para rodar uma operação de telemedicina eficiente, precisamos de:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Criptografia de ponta a ponta:</strong> Proteção total dos dados sensíveis do paciente.</li>
            <li><strong>Baixa latência:</strong> Conexões estáveis para diagnósticos em tempo real.</li>
            <li><strong>Interoperabilidade:</strong> O dado da consulta precisa fluir para o histórico clínico sem fricção.</li>
          </ul>

          <p>
            O futuro da telemedicina envolve o uso de dispositivos vestíveis (wearables) que enviam sinais vitais em tempo real para o médico durante a chamada, elevando o nível do diagnóstico remoto.
          </p>
        </div>

        <div className="mt-16 p-8 bg-cyan-50 rounded-[2rem] border border-cyan-100 text-center">
          <h3 className="font-bold text-slate-900 mb-2">Quer implementar telemedicina?</h3>
          <p className="text-slate-600 mb-6">Ajudo empresas a estruturarem a tecnologia por trás do atendimento remoto.</p>
          <a href="https://wa.me/5519992278928" className="bg-cyan-500 text-slate-950 px-8 py-3 rounded-xl font-black hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20">
            Consultoria Técnica
          </a>
        </div>
      </article>
    </div>
  );
}