import type { HeroImage } from "@/types/content";

type HeroPhotoCollageProps = {
  images: HeroImage[];
};

export function HeroPhotoCollage({ images }: HeroPhotoCollageProps) {
  return (
    <div className="w-full max-w-[760px]">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <div
            key={image.src}
            className="overflow-hidden rounded-[28px] border border-ink-200 bg-ink-100 shadow-paper"
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
