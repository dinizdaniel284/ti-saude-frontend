import PostLayout from "../../components/PostLayout";
import Link from "next/link";

export default function Telemedicina() {
  return (
    <PostLayout 
      title="Telemedicina: Muito além de uma Videochamada" 
      category="Saúde Digital"
    >
      {/* INTRODUÇÃO IMPACTANTE */}
      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12 italic border-l-4 border-cyan-500 pl-6">
        "A telemedicina moderna não é apenas uma interface de vídeo; é uma orquestração complexa de dados clínicos, segurança de nível bancário e interoperabilidade em tempo real."
      </p>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">A Infraestrutura Invisível</h2>
        <p>
          O que o paciente vê como uma simples conversa pelo celular é, na verdade, a ponta de um iceberg tecnológico. No backend, sistemas de <strong>Edge Computing</strong> processam pacotes de dados para reduzir a latência, enquanto protocolos <strong>WebRTC</strong> garantem que a imagem e o som sejam fluidos o suficiente para uma semiologia médica precisa.
        </p>
        <p className="mt-4">
          Para o profissional de TI, implementar telessaúde em 2026 significa garantir que a jornada digital esteja em conformidade com a <strong>LGPD</strong> e totalmente integrada ao <strong>PEP (Prontuário Eletrônico do Paciente)</strong>, permitindo que a prescrição digital e o pedido de exames ocorram sem fricção.
        </p>
      </section>

      {/* GRID DE DESAFIOS TÉCNICOS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group hover:-translate-y-1">
          <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-white text-xl mb-6 shadow-lg group-hover:rotate-12 transition-transform">
            ⚡
          </div>
          <h3 className="font-black text-slate-900 mb-3 uppercase tracking-tighter text-sm">WebRTC & Latência</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Uso de protocolos de comunicação em tempo real que priorizam a estabilidade do fluxo de dados em redes instáveis, essencial para o exame físico remoto.
          </p>
        </div>

        <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-white/5 shadow-2xl group hover:-translate-y-1 transition-all">
          <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white text-xl mb-6 shadow-lg group-hover:rotate-12 transition-transform">
            🔐
          </div>
          <h3 className="font-black text-indigo-400 mb-3 uppercase tracking-tighter text-sm">HIPAA & Segurança</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Criptografia de ponta a ponta (E2EE) e conformidade com padrões internacionais de saúde para armazenamento em nuvem de sessões gravadas e anexos.
          </p>
        </div>

        <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all group hover:-translate-y-1">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl mb-6 shadow-lg group-hover:rotate-12 transition-transform">
            📂
          </div>
          <h3 className="font-black text-slate-900 mb-3 uppercase tracking-tighter text-sm">Visualização DICOM</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Integração com sistemas <strong>PACS</strong> para que o médico visualize tomografias e ressonâncias de alta resolução sem sair da janela de atendimento.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">IoMT: O Futuro do Telemonitoramento</h2>
        <p>
          O próximo salto da telemedicina é a integração com a <strong>Internet das Coisas Médicas (IoMT)</strong>. Wearables e biossensores agora alimentam <strong>APIs</strong> que enviam sinais vitais (como ECG e oximetria) diretamente para o dashboard do médico durante a consulta.
        </p>
        <p className="mt-4 italic text-slate-500 border-l-2 border-slate-200 pl-4">
          "Isso transforma a telemedicina de uma ferramenta de triagem em um consultório digital completo, capaz de monitorar pacientes crônicos 24 horas por dia."
        </p>
      </section>

      {/* INFOBOX - TÉCNICO E ESTRATÉGICO */}
      <section className="my-16 bg-cyan-950 text-white p-10 rounded-[3rem] relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 blur-[80px]"></div>
        <h4 className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-xs mb-4">Visão do Desenvolvedor</h4>
        <p className="text-lg font-light leading-relaxed text-slate-200">
          O sucesso de uma plataforma de telemedicina em 2026 não depende da interface, mas da <strong>resiliência do backend</strong>. Escalabilidade via microsserviços e governança de dados via <strong>HL7 FHIR</strong> são os diferenciais das HealthTechs que dominam o mercado.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Conclusão</h2>
        <p>
          A tecnologia é o meio, mas o desfecho clínico é o fim. A telemedicina veio para democratizar o acesso à saúde especializada, eliminando barreiras geográficas com segurança e humanização.
        </p>
        <p className="mt-6">
          Saiba como a <Link href="/posts/ia-na-saude" className="text-cyan-600 font-bold hover:underline">Inteligência Artificial</Link> está otimizando as triagens no atendimento remoto.
        </p>
      </section>

      {/* FOOTER DO POST COM CTA TÉCNICO */}
      <footer className="mt-20 pt-12 border-t border-slate-100">
        <div className="bg-slate-950 rounded-[3.5rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent"></div>
          <h3 className="text-3xl font-black text-white mb-4 relative z-10">Sua Operação de Telessaúde é Escalável?</h3>
          <p className="text-slate-300 mb-10 max-w-xl mx-auto font-light relative z-10">
            Ajudamos instituições a estruturar arquiteturas de telemedicina seguras, integradas e em conformidade com as normas do CFM e LGPD.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <a 
              href="https://wa.me/5519992278928" 
              className="bg-cyan-500 text-slate-950 font-black px-10 py-5 rounded-2xl hover:bg-cyan-400 transition-all hover:scale-105 shadow-xl uppercase text-xs tracking-[0.2em]"
            >
              Consultoria Técnica 🚀
            </a>
            <Link href="/" className="bg-white/5 text-white font-bold px-10 py-5 rounded-2xl hover:bg-white/10 transition-all border border-white/10 uppercase text-xs tracking-widest">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </footer>
    </PostLayout>
  );
}