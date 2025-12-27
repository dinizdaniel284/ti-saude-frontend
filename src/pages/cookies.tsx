import Head from "next/head";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <Head><title>Política de Cookies | TI & Saúde</title></Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black mb-8">Política de Cookies</h1>
        <div className="text-slate-600 space-y-6">
          <p>Utilizamos cookies para entender como você interage com nosso site e para exibir anúncios personalizados via Google AdSense.</p>
          <h2 className="text-xl font-bold text-slate-900">O que são cookies?</h2>
          <p>São pequenos arquivos de texto baixados no seu computador para melhorar sua experiência.</p>
          <h2 className="text-xl font-bold text-slate-900">Como usamos?</h2>
          <p>Usamos cookies do Google para analisar o tráfego e medir a eficiência dos nossos anúncios. Você pode gerenciar isso nas configurações do seu navegador.</p>
        </div>
      </div>
    </div>
  );
}