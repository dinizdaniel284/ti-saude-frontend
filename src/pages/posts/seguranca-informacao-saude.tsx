import PostLayout from "../../components/PostLayout";
import Link from "next/link";

export default function SegurancaSaude() {
  return (
    <PostLayout 
      title="Segurança da Informação e LGPD na Saúde: Protegendo o Bem mais Valioso" 
      category="Privacidade & Dados"
    >
      {/* INTRODUÇÃO COM PESO ÉTICO */}
      <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-12 italic border-l-4 border-red-500 pl-6">
        "Na saúde, um vazamento de dados não é apenas um prejuízo financeiro ou jurídico; é uma violação da intimidade humana e um risco direto à continuidade assistencial."
      </p>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mt-12 mb-6 tracking-tight">O Setor Hospitalar na Mira do Ransomware</h2>
        <p>
          Com a aceleração da digitalização, hospitais e clínicas tornaram-se alvos preferenciais para ataques de <strong>Ransomware</strong>. O motivo é simples: a criticidade dos dados. A impossibilidade de acessar um prontuário em meio a uma cirurgia ou o sequestro de dados de pacientes gera uma pressão extrema para o pagamento de resgates. 
        </p>
        <p className="mt-4">
          A <strong>Segurança da Informação</strong> na saúde em 2026 exige uma arquitetura de <strong>Zero Trust</strong> (Confiança Zero), onde cada requisição, mesmo interna, deve ser autenticada, autorizada e criptografada.
        </p>
      </section>

      {/* BOX DE PILARES TÉCNICOS - DESIGN DE ALERTA */}
      <div className="bg-slate-900 p-10 md:p-16 rounded-[3rem] text-white my-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px]"></div>
        <h3 className="text-2xl font-black mb-10 text-red-500 uppercase tracking-[0.2em] text-center">Protocolos de Cibersegurança</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h4 className="text-white font-bold flex items-center gap-3">
              <span className="p-2 bg-red-600/20 rounded-lg text-red-500 text-sm">01</span>
              Criptografia AES-256 & TLS 1.3
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Todos os dados em repouso (at rest) e em trânsito (in transit) devem ser cifrados com os padrões mais altos da indústria para garantir que sejam ilegíveis em caso de interceptação.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-white font-bold flex items-center gap-3">
              <span className="p-2 bg-red-600/20 rounded-lg text-red-500 text-sm">02</span>
              RBAC e Controle de Acesso
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              O <strong>Role-Based Access Control</strong> garante que o médico veja o histórico clínico, mas o setor de faturamento veja apenas dados de guias, limitando a exposição de dados sensíveis.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold flex items-center gap-3">
              <span className="p-2 bg-red-600/20 rounded-lg text-red-500 text-sm">03</span>
              Logs de Auditoria Imutáveis
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cada clique dentro do sistema deve ser rastreável. Auditorias perenes permitem identificar quem acessou ou exportou registros, criando uma cultura de responsabilidade (Accountability).
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-bold flex items-center gap-3">
              <span className="p-2 bg-red-600/20 rounded-lg text-red-500 text-sm">04</span>
              Tokenização e Anonimização
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Para fins de pesquisa e BI, os dados devem ser anonimizados, removendo o vínculo direto com a identidade do paciente, conforme exigido pela LGPD.
            </p>
          </div>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">LGPD: Dados Sensíveis e Base Legal</h2>
        <p>
          A Lei Geral de Proteção de Dados classifica as informações de saúde como <strong>dados sensíveis</strong>. Isso impõe aos desenvolvedores e gestores de TI a obrigação de implementar a "Privacidade por Design" (Privacy by Design). Não basta proteger o banco de dados; a segurança deve estar na concepção de cada nova funcionalidade do software.
        </p>
        <p className="mt-4">
          O uso de protocolos modernos de autenticação como <strong>OAuth2, OpenID Connect e JWT</strong> (JSON Web Tokens) não são mais opcionais para qualquer HealthTech ou sistema hospitalar que deseje estar em conformidade com a ANPD.
        </p>
      </section>

      {/* QUOTE DE AUTORIDADE */}
      <div className="my-20 border-y border-slate-100 py-10">
        <p className="text-center text-slate-500 text-lg font-medium">
          "No ecossistema da Saúde Digital, a segurança não é uma barreira para a inovação, mas o alicerce que permite que ela ocorra com confiança."
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">A Missão do Backend em Sistemas Críticos</h2>
        <p>
          Para quem atua na engenharia de software hospitalar, o foco deve ser a <strong>resiliência</strong>. Isso envolve a implementação de redundâncias, planos de recuperação de desastres (Disaster Recovery) e PenTests (testes de intrusão) regulares para identificar vulnerabilidades antes que os invasores o façam.
        </p>
      </section>

      {/* CTA DE AUDITORIA */}
      <footer className="mt-20">
        <div className="bg-gradient-to-br from-red-600 to-red-900 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-red-500/20">
          <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">Seu Sistema está em Conformidade?</h3>
          <p className="text-red-100 mb-10 max-w-xl mx-auto font-light text-lg">
            Garanta a proteção dos seus pacientes e evite multas milionárias. Oferecemos diagnósticos de segurança e consultoria de adequação à LGPD.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5519992278928" 
              className="bg-white text-red-900 font-black px-10 py-5 rounded-2xl hover:bg-red-50 transition-all hover:scale-105 shadow-lg uppercase text-xs tracking-widest"
            >
              Solicitar Auditoria 🛡️
            </a>
            <Link href="/posts/evolucao-digital" className="bg-red-800/40 text-white font-bold px-10 py-5 rounded-2xl hover:bg-red-800/60 transition-all border border-white/20 uppercase text-xs tracking-widest">
              Ver Evolução Digital
            </Link>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Leia também: <Link href="/posts/ia-na-saude" className="text-red-600 font-bold hover:underline">O papel da Inteligência Artificial na Segurança de Dados</Link>
          </p>
        </div>
      </footer>
    </PostLayout>
  );
}