"use client";

const DEFAULT_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Google_Analytics_Logo_2015.png/1280px-Google_Analytics_Logo_2015.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/960px-Vercel_logo_black.svg.png",
  "https://company.boxoffice.com/wp-content/uploads/2021/06/ads-logo-horizontal.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/nextjs-dqhvgu9iwvacgwnwl8bs25.png/nextjs-ghnqttyc6ffbnqnn8xlrpj.png?_a=DATAiZAAZAA0",
  "https://static.vecteezy.com/system/resources/thumbnails/019/909/566/small/microsoft-transparent-microsoft-free-free-png.png",
];

interface ImageCarouselProps {
  images?: string[];
  height?: number;
}

export default function ImageCarousel({
  images = DEFAULT_IMAGES,
  height = 240,
}: ImageCarouselProps) {
  void height;

  return (
    <div className="w-full h-20 md:h-30 relative overflow-hidden my-8">
      <div
        className="flex w-max animate-scroll"
        style={{
          animationDuration: `${images.length * 4}s`,
        }}
      >
        {[0, 1].map((groupIndex) => (
          <div
            key={groupIndex}
            className="flex shrink-0 items-center gap-10 "
            aria-hidden={groupIndex === 1}
          >
            {images.map((src, i) => (
              <div
                key={`${groupIndex}-${i}`}
                className="flex h-10 md:h-30 w-fit items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Carousel image ${i + 1}`}
                  className="w-35 object-contain object-center brightness-0 invert"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
