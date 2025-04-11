import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-3xl font-bold text-center text-blue-700">
          Bem-vindo ao Projeto TI-Saúde
        </h1>
        <p className="mt-4 text-center text-gray-600">
          Aqui você encontra recursos de tecnologia voltados para profissionais da saúde.
        </p>
      </main>
    </div>
  );
}
