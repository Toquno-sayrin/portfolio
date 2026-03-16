import type { HeroImage } from "@/types/content";

type HeroPhotoCollageProps = {
  images: HeroImage[];
};

export function HeroPhotoCollage({ images }: HeroPhotoCollageProps) {
  return (
    <div className="w-full max-w-[760px]">
      <div className="grid grid-cols-3 gap-3 sm:gap-5">
        {images.map((image) => (
          <div
            key={image.src}
            className="overflow-hidden rounded-[28px] border border-white/10 bg-ink-800 shadow-paper"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
