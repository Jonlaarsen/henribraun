"use client";

import Image from "next/image";

const DEFAULT_IMAGES = [
  "https://www.breadcrumb.ai/blog/images/breadcrumb-ga-cover.png",
  "https://company.boxoffice.com/wp-content/uploads/2021/06/ads-logo-horizontal.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1280px-Shopify_logo_2018.svg.png",
  "https://miro.medium.com/v2/resize:fit:1400/0*U_ilPWHF6oxyi42p.jpg",
  "https://find-model.jp/insta-lab/wp-content/uploads/2021/10/meta-logo-16-9.png",
  "https://diplo-media.s3.eu-central-1.amazonaws.com/2025/07/microsoft-azure-365-AI-Cloud-earnings-Nadella.jpg",
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
    <div className="w-full h-50 relative overflow-hidden bg-white py-4">
      <div
        className="flex animate-scroll items-center justify-center gap-6"
        style={{
          width: "max-content",
          animationDuration: `${images.length * 4}s`,
        }}
      >
        {duplicatedImages.map((src, i) => (
          <div key={i} className="flex h-50 w-fit items-center justify-center">
            <img
              src={src}
              alt={`Carousel image ${i + 1}`}
              className="object-cover object-center w-70 "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
