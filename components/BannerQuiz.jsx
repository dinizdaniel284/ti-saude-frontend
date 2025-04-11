export default function BannerQuiz() {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 mb-8 overflow-hidden rounded-2xl shadow-lg">
      <img
        src="/images/banner-quiz-ti.jpg"
        alt="Banner TI"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center">
          Qual área da TI combina com você?
        </h1>
      </div>
    </div>
  );
}
