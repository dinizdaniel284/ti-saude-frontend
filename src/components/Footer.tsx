import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">TI & <span className="text-cyan-400">Saúde</span></h2>
            <p className="text-slate-400 max-w-sm font-light leading-relaxed">
              O maior portal de tecnologia aplicada ao setor da saúde. Transformando dados em decisões e código em vidas.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-white">Institucional</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="/sobre" className="hover:text-cyan-400 transition">Sobre o Projeto</Link></li>
              <li><Link href="/contato" className="hover:text-cyan-400 transition">Fale Conosco</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-cyan-400 transition">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white">Jurídico</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><Link href="/termos-de-uso" className="hover:text-cyan-400 transition">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="hover:text-cyan-400 transition">Privacidade</Link></li>
              <li><Link href="/cookies" className="hover:text-cyan-400 transition">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} TI-Saúde — Daniel Diniz</p>
          <p>Tecnologia com propósito</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;