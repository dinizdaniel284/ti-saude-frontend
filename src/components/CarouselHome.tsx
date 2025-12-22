const images = [
  "/assets/carousel/backend.png",
  "/assets/carousel/saude.png",
  "/assets/carousel/powerbi.png",
  "/assets/carousel/dados.png",
];

export default function CarouselHome() {
  return (
    <div className="overflow-hidden w-full py-10 bg-white">
      <div className="flex gap-8 animate-carousel">
        {images.concat(images).map((src, i) => (
          <div
            key={i}
            className="min-w-[220px] h-[160px] bg-gray-50 rounded-2xl shadow-md flex items-center justify-center"
          >
            <img
              src={src}
              alt="Tecnologia e Saúde"
              className="max-h-[120px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
