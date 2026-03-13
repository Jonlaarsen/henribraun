import React from "react";
const DEFAULT_IMAGES = [
  "https://www.breadcrumb.ai/blog/images/breadcrumb-ga-cover.png",
  "https://company.boxoffice.com/wp-content/uploads/2021/06/ads-logo-horizontal.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1280px-Shopify_logo_2018.svg.png",
  "https://miro.medium.com/v2/resize:fit:1400/0*U_ilPWHF6oxyi42p.jpg",
  "https://find-model.jp/insta-lab/wp-content/uploads/2021/10/meta-logo-16-9.png",
  "https://diplo-media.s3.eu-central-1.amazonaws.com/2025/07/microsoft-azure-365-AI-Cloud-earnings-Nadella.jpg",
];

const GridPhotos = () => {
  return (
    <div className="w-full h-50 grid grid-cols-3 md:grid-cols-6 px-5 gap-5">
      {DEFAULT_IMAGES.map((photos, index) => (
        <div key={index} className="flex items-center justify-center">
          <img src={photos} alt={photos} />
        </div>
      ))}
    </div>
  );
};

export default GridPhotos;
