import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0F172A]/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        
        <Link href="/" className="font-bold text-lg">
          TI & Saúde
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/posts/backend" className="hover:text-cyan-300">Backend</Link>
          <Link href="/posts/saude-digital" className="hover:text-cyan-300">Saúde</Link>
          <Link href="/posts/power-bi" className="hover:text-cyan-300">Power BI</Link>
          <Link href="/quiz" className="hover:text-cyan-300">Quiz</Link>
        </nav>
      </div>
    </header>
  );
}
