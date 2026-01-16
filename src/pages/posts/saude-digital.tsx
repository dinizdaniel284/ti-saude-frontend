import PostLayout from "../../components/PostLayout";
import Link from "next/link";

export default function SaudeDigital() {
  return (
    <PostLayout 
      title="Saúde Digital: O Ecossistema da Inovação Hospitalar" 
      category="Estratégia & Gestão"
    >
      {/* INTRODUÇÃO DE ALTO NÍVEL */}
      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12 italic border-l-4 border-emerald-500 pl-6">
        "A saúde digital não é apenas a digitalização de processos; é a inteligência que coloca o paciente no centro de um ecossistema médico hiperconectado e resiliente."
      </p>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">O Que é o Ecossistema de Saúde Digital?</h2>
        <p>
          O conceito de <strong>Saúde Digital</strong> abrange um vasto ecossistema que utiliza tecnologias de informação e comunicação para melhorar a prevenção, o diagnóstico e o tratamento de doenças. No ambiente hospitalar de alta performance, isso se traduz na integração vertical de sistemas como o <strong>HIS (Hospital Information System)</strong>, que gerencia o fluxo administrativo e clínico de ponta a ponta.
        </p>
        <p className="mt-4">
          Estamos falando de uma infraestrutura onde o <strong>RIS (Radiology Information System)</strong> e o <strong>PACS (Picture Archiving and Communication System)</strong> operam em simbiose, garantindo que o médico tenha acesso ao laudo e à imagem do paciente no exato momento em que ele entra no consultório.
        </p>
      </section>

      {/* INFOGRÁFICO DE PILARES */}
      <section>
        <h2 className="text-2xl font-black text-slate-800 mt-16 mb-8 text-center uppercase tracking-widest">Os Pilares da Maturidade Digital</h2>
        
        <div className="space-y-6">
          <div className="group p-8 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100 hover:bg-white hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">01</div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-emerald-900 mb-2">Interoperabilidade Semântica</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Não basta trocar dados; o sistema receptor precisa entender o dado. O uso de padrões como <strong>HL7 FHIR</strong> e <strong>DICOM</strong> garante que o histórico do paciente flua entre hospitais, laboratórios e farmácias sem perda de contexto clínico.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-8 bg-slate-900 rounded-[2.5rem] border border-slate-800 hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-14 h-14 bg-emerald-400 text-slate-900 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">02</div>
              <div className="flex-1 text-white">
                <h3 className="text-xl font-black text-emerald-400 mb-2">Segurança Beira-Leito</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  A mobilidade permite que a equipe assistencial utilize tablets e dispositivos portáteis para checagem de medicamentos via código de barras. Isso elimina o erro humano e garante que a <strong>Segurança do Paciente</strong> seja o norte da operação.
                </p>
              </div>
            </div>
          </div>

          <div className="group p-8 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100 hover:bg-white hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">03</div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-emerald-900 mb-2">Patient Experience & Telemonitoramento</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  O cuidado continua fora das paredes do hospital. Através de aplicativos e sensores IoT, a instituição monitora pacientes crônicos em tempo real, reduzindo a taxa de reinternação e aumentando o engajamento no tratamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      <section>
        <h2 className="text-3xl font-black text-slate-900 mt-16 mb-6 tracking-tight">Eficiência Clínica e Modelos CDSS</h2>
        <p>
          A implementação de sistemas de <strong>Apoio à Decisão Clínica (CDSS)</strong> é o ápice da saúde digital. Esses algoritmos analisam em milissegundos o <strong>PEP (Prontuário Eletrônico)</strong> para disparar alertas sobre interações medicamentosas ou riscos iminentes de sepse. É a tecnologia agindo como uma camada extra de proteção para o médico.
        </p>
        <p className="mt-4">
          Para o setor de TI, o desafio é manter o <em>uptime</em> e a performance de um <strong>Backend</strong> complexo que deve obedecer rigorosamente às normas da <strong>LGPD</strong> e aos níveis de maturidade exigidos pela certificação <strong>HIMSS</strong>.
        </p>
      </section>

      {/* CTA SECTION */}
      <section className="mt-20 p-12 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] group-hover:bg-white/20 transition-all"></div>
        <div className="relative z-10 text-center md:text-left">
          <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">Rumo à Saúde 5.0</h3>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl font-light">
            Sua instituição está preparada para a jornada digital? Entenda como as ferramentas certas podem garantir sustentabilidade financeira e excelência no desfecho clínico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/posts/ia-na-saude" className="bg-white text-emerald-900 font-black px-10 py-5 rounded-2xl hover:scale-105 transition-all text-center uppercase text-xs tracking-widest shadow-xl">
              Explorar IA na Saúde →
            </Link>
            <Link href="/posts/evolucao-digital" className="bg-emerald-900/30 text-white font-bold px-10 py-5 rounded-2xl hover:bg-emerald-900/50 transition-all text-center border border-white/20 uppercase text-xs tracking-widest">
              Linha do Tempo Digital
            </Link>
          </div>
        </div>
      </section>
    </PostLayout>
  );
}