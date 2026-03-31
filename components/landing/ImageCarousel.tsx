"use client";

import Image from "next/image";

const DEFAULT_IMAGES = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Google_Analytics_Logo_2015.png/1280px-Google_Analytics_Logo_2015.png",
  "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vercel_logo_2025.svg",
  "https://company.boxoffice.com/wp-content/uploads/2021/06/ads-logo-horizontal.png",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png",
  "https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/3840px-Microsoft_logo_%282012%29.svg.png",
];

interface ImageCarouselProps {
  images?: string[];
  height?: number;
}

export default function ImageCarousel({
  images = DEFAULT_IMAGES,
  height = 240,
}: ImageCarouselProps) {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full h-20 md:h-30 relative overflow-hidden  px-4 sm:px-6 md:px-10 lg:px-10 xl:px-40 my-8">
      <div
        className="flex animate-scroll gap-5"
        style={{
          width: "max-content",
          animationDuration: `${images.length * 4}s`,
        }}
      >
        {duplicatedImages.map((src, i) => (
          <div
            key={i}
            className="flex h-10 md:h-30 w-fit items-center justify-center"
          >
            <img
              src={src}
              alt={`Carousel image ${i + 1}`}
              className=" object-cover w-35 object-center brightness-0 invert "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
