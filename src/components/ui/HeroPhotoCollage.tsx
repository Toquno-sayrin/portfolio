import { useState } from "react";
import type { HeroImage } from "@/types/content";

type HeroPhotoCollageProps = {
  images: HeroImage[];
};

export function HeroPhotoCollage({ images }: HeroPhotoCollageProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-[760px]">
      <div className="grid grid-cols-3 gap-3 sm:gap-5">
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
          <div
            key={image.src}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            className={`cursor-pointer overflow-hidden rounded-[28px] border bg-ink-800 shadow-paper transition duration-300 ${
              isActive
                ? "border-frost-300 shadow-[0_16px_40px_rgba(79,115,217,0.24)]"
                : "border-white/10 opacity-75 hover:border-frost-300/40 hover:opacity-100"
            } ${isActive ? "sm:-translate-y-2" : ""}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className={`aspect-[4/5] w-full object-cover object-center transition duration-500 ${
                isActive ? "scale-[1.04]" : "scale-100"
              }`}
            />
          </div>
          );
        })}
      </div>
    </div>
  );
}
