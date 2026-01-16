import PostLayout from "../../components/PostLayout";
import Link from "next/link";

export default function CarreirasTISaude() {
  return (
    <PostLayout 
      title="Carreiras em TI & Saúde: Guia Completo para 2026" 
      category="Carreira & Mercado"
    >
      {/* INTRODUÇÃO ESTRUTURADA */}
      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12 italic border-l-4 border-indigo-600 pl-6">
        "O setor de HealthTech não busca apenas programadores; busca resolvedores de problemas assistenciais. Em 2026, a TI na saúde deixou de ser suporte para virar o coração da operação hospitalar."
      </p>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">O Boom do Mercado de HealthTech</h2>
        <p>
          A digitalização forçada pela telemedicina e a necessidade de eficiência operacional criaram um vácuo de profissionais qualificados. Trabalhar com <strong>TI na Saúde</strong> exige uma camada extra de responsabilidade: o entendimento de que um <em>bug</em> no sistema pode significar o atraso em uma medicação crítica ou a perda de um histórico clínico vital.
        </p>
      </section>

      {/* GRID DE CARREIRAS - VISUAL PREMIUM */}
      <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">
        As Profissões de Elite do Setor
      </h2>
      
      <div className="space-y-8">
        <div className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-premium hover:-translate-y-2">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-xl font-bold italic text-sm">01</span>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Analista de BI e Performance Clínica</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Não basta criar dashboards; é preciso entender de <strong>DRG (Diagnosis Related Groups)</strong> e KPIs assistenciais como a média de permanência e a taxa de ocupação. O analista de BI moderno ajuda hospitais a reduzirem custos sem perder a qualidade do desfecho clínico.
          </p>
        </div>

        <div className="group p-8 bg-[#020617] rounded-[2.5rem] border border-white/5 transition-all hover:shadow-indigo-500/10 hover:shadow-2xl hover:-translate-y-2">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-10 flex items-center justify-center bg-cyan-400 text-slate-900 rounded-xl font-bold italic text-sm">02</span>
            <h3 className="text-xl font-black text-white uppercase tracking-tight">Arquiteto de Interoperabilidade</h3>
          </div>
          <p className="text-slate-400 leading-relaxed">
            Especialistas em padrões <strong>FHIR (Fast Healthcare Interoperability Resources)</strong> e <strong>HL7</strong> são os profissionais mais caros do mercado hoje. Eles garantem que o dado gerado no Apple Watch do paciente chegue com segurança ao Prontuário Eletrônico do Hospital.
          </p>
        </div>

        <div className="group p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 transition-all hover:bg-white hover:shadow-premium hover:-translate-y-2">
          <div className="flex items-center gap-4 mb-4">
            <span className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-xl font-bold italic text-sm">03</span>
            <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">CISO Hospitalar (Cybersecurity)</h3>
          </div>
          <p className="text-slate-600 leading-relaxed">
            Com o aumento de ataques de Ransomware a hospitais, o CISO (Chief Information Security Officer) focado em saúde precisa dominar a <strong>LGPD (Lei Geral de Proteção de Dados)</strong> e normas de segurança como a <strong>HIPAA</strong> e ISO 27701.
          </p>
        </div>
      </div>

      {/* SEÇÃO DE SALÁRIOS E CERTIFICAÇÕES (MUITO IMPORTANTE PARA ADSENSE) */}
      <section className="my-20 bg-indigo-50 p-10 rounded-[3rem] border border-indigo-100">
        <h2 className="text-2xl font-black text-indigo-900 mb-6 uppercase tracking-widest text-center">Roadmap & Salários</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-bold text-slate-900 mb-3 border-b pb-2">Média Salarial (BR)</h4>
            <ul className="text-sm space-y-2 text-slate-600">
              <li>• Júnior: R$ 4.500 - R$ 6.500</li>
              <li>• Pleno: R$ 7.500 - R$ 12.000</li>
              <li>• Sênior/Especialista: R$ 15.000 +</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-bold text-slate-900 mb-3 border-b pb-2">Certificações Valorizadas</h4>
            <ul className="text-sm space-y-2 text-slate-600">
              <li>• CPHIMS (Informatics in Healthcare)</li>
              <li>• HL7 V2 / FHIR Certification</li>
              <li>• AWS Certified Machine Learning</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Como Fazer a Transição?</h2>
        <p>
          Para entrar na área começando do zero, o caminho mais curto é a especialização híbrida. Domine ferramentas como <strong>SQL</strong> ou <strong>Power BI</strong> e aplique-as em datasets públicos de saúde (como os do DATASUS). Grandes redes como Albert Einstein, Rede D&apos;Or e operadoras como a Bradesco Saúde buscam profissionais que falem a língua dos dados e entendam a dor da assistência.
        </p>
      </section>

      {/* CTA FINAL ESTILIZADO */}
      <div className="mt-20 p-1 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600 rounded-[3rem]">
        <div className="bg-white rounded-[2.9rem] p-12 text-center">
          <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Pronto para ser o próximo especialista?</h3>
          <p className="text-slate-500 mb-8 max-w-lg mx-auto leading-relaxed">
            Acompanhe nossas análises técnicas semanais e domine as tecnologias que estão salvando vidas no mundo real.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://wa.me/5519992278928" className="bg-slate-900 text-white font-black px-10 py-5 rounded-2xl hover:bg-indigo-600 transition-all shadow-xl uppercase text-xs tracking-[0.2em]">
              Assinar Hub VIP
            </a>
            <Link href="/" className="bg-slate-100 text-slate-600 font-bold px-10 py-5 rounded-2xl hover:bg-slate-200 transition-all uppercase text-xs tracking-[0.2em]">
              Voltar ao Início
            </Link>
          </div>
        </div>
      </div>
    </PostLayout>
  );
}