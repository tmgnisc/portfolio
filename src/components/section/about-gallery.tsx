import Image from "next/image";

const photos = [
  { src: "/about-1.jpg", alt: "Nischal Tamang" },
  { src: "/about-2.jpg", alt: "Nischal Tamang" },
];

export function AboutGallery() {
  return (
    <div className="flex items-start gap-4">
      <blockquote className="flex-1 border-l-2 border-border pl-4 text-sm italic text-muted-foreground">
        &ldquo;I know, but I don&apos;t know how I know.&rdquo;
      </blockquote>
      <div className="flex gap-3 shrink-0">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-md overflow-hidden"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              loading="lazy"
              sizes="128px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
