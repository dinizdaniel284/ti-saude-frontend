import Head from "next/head";
import Link from "next/link";

export default function Telemedicina() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head>
        <title>Telemedicina: A Revolução do Cuidado à Distância | TI & Saúde</title>
        <meta 
          name="description" 
          content="Explore os desafios técnicos da telemedicina: segurança WebRTC, integração com prontuários eletrônicos (PEP) e conformidade com a LGPD em 2025." 
        />
      </Head>

      <article className="max-w-4xl mx-auto">
        <Link href="/" className="text-cyan-600 font-bold hover:underline mb-8 inline-block">
          ← Voltar para a Home
        </Link>
        
        <header className="mb-12">
          <span className="text-cyan-600 font-black uppercase tracking-widest text-sm">Saúde Digital</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-6 leading-tight">
            Telemedicina: Muito além de uma <span className="text-cyan-600">videochamada.</span>
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Entenda a complexa infraestrutura de TI que permite diagnósticos precisos e seguros sem barreiras geográficas.
          </p>
        </header>
        
        <div className="prose prose-lg text-slate-600 space-y-8 leading-relaxed">
          <p className="text-xl font-medium text-slate-800">
            A telemedicina não é apenas atender um paciente pelo celular; é uma estrutura crítica que envolve orquestração de dados, segurança cibernética e interoperabilidade em tempo real.
          </p>
          
          <p>
            Desde a regulamentação acelerada em 2020, o atendimento à distância tornou-se um pilar fundamental da <strong>Saúde 4.0</strong>. No entanto, o desafio para o profissional de TI vai muito além de escolher uma plataforma de vídeo. É necessário garantir que a jornada digital do paciente esteja em total conformidade com a <strong>LGPD</strong> e integrada ao <strong>PEP (Prontuário Eletrônico do Paciente)</strong>.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-10">Os Desafios Técnicos da Implementação</h2>
          <p>
            Para rodar uma operação de telemedicina de alta performance, a stack tecnológica deve contemplar:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 text-sm">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-cyan-600 mb-2">WebRTC & Streaming</h3>
              <p>Uso de protocolos de baixa latência para garantir que a imagem e o som sejam fluidos, permitindo a percepção de nuances clínicas.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-cyan-600 mb-2">Segurança de Dados</h3>
              <p>Criptografia TLS/SSL e armazenamento em nuvem com certificações de saúde (HIPAA-compliant) para proteger dados sensíveis.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-cyan-600 mb-2">Integração PACS/DICOM</h3>
              <p>Capacidade de visualizar exames de imagem de alta resolução diretamente na tela da consulta via protocolos médicos.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-800">Telemonitoramento e IoT Médica (IoMT)</h2>
          <p>
            O próximo passo da telemedicina é o uso de dispositivos vestíveis (wearables). Imagine o médico recebendo a frequência cardíaca e a saturação de oxigênio do paciente em tempo real através de uma <strong>API</strong> conectada a um smartwatch. Essa convergência de dados permite que a telemedicina deixe de ser apenas reativa e se torne preventiva.
          </p>

          <p className="bg-slate-900 text-slate-300 p-6 rounded-2xl italic border-l-8 border-cyan-500">
             "O sucesso da telemedicina não está na tecnologia em si, mas na transparência com que ela conecta o médico ao paciente, mantendo a humanização mesmo através da tela."
          </p>
          
          <p>
            Confira também como a <Link href="/posts/ia-na-saude" className="text-cyan-600 font-bold hover:underline">Inteligência Artificial</Link> está ajudando no triagem desses atendimentos remotos.
          </p>
        </div>

        <div className="mt-16 p-10 bg-cyan-50 rounded-[2.5rem] border border-cyan-100 text-center shadow-sm">
          <h3 className="text-2xl font-black text-slate-900 mb-3">Sua plataforma de Telemedicina está pronta?</h3>
          <p className="text-slate-600 mb-8 max-w-md mx-auto">Oferecemos consultoria para estruturação de arquitetura, escolha de fornecedores e adequação de segurança para serviços de telessaúde.</p>
          <a 
            href="https://wa.me/5519992278928" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-slate-950 px-10 py-4 rounded-2xl font-black hover:bg-cyan-400 transition shadow-xl shadow-cyan-500/30 transform hover:scale-105 inline-block"
          >
            CONSULTORIA TÉCNICA 🚀
          </a>
        </div>
      </article>
    </div>
  );
}