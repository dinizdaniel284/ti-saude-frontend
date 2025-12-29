import Link from 'next/link';

const images = [
  { src: "/assets/carousel/backend.png", link: "/posts/backend" },
  { src: "/assets/carousel/saude.png", link: "/posts/saude-digital" },
  { src: "/assets/carousel/powerbi.png", link: "/posts/power-bi" },
  { src: "/assets/carousel/dados.png", link: "/posts/analista-dados" },
];

export default function CarouselHome() {
  // Duplicamos a lista para criar o efeito de loop infinito visual
  const displayImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full py-10 bg-white">
      <div 
        className="flex gap-8 animate-carousel"
        style={{ willChange: "transform" }}
      >
        {displayImages.map((item, i) => (
          <Link 
            href={item.link} 
            key={i}
            className="min-w-[220px] h-[160px] bg-gray-50 rounded-2xl shadow-md flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
          >
            <img
              src={item.src}
              alt="Tecnologia e Saúde"
              className="max-h-[120px] w-auto object-contain"
              // Otimização de performance para o AdSense
              loading={i < 4 ? "eager" : "lazy"}
              decoding="async"
              // Usando a sintaxe de objeto para evitar alertas de tipagem
              {...{ fetchPriority: i === 0 ? "high" : "auto" }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}