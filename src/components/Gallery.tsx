import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";

const IMAGES: { src: string; alt: string }[] = [
  { src: g1, alt: "Interior toko petshop" },
  { src: g2, alt: "Layanan grooming anjing" },
  { src: g3, alt: "Anak kucing bermain" },
  { src: g4, alt: "Anjing corgi ceria" },
  { src: g5, alt: "Pelanggan bersama hewan peliharaan" },
  { src: g6, alt: "Rak makanan hewan" },
  { src: g7, alt: "Aksesoris hewan" },
  { src: g8, alt: "Area kasir yang ramah" },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? null : (i + 1) % IMAGES.length));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {IMAGES.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className="hover-zoom group relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-card focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/10" />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4 backdrop-blur-sm animate-in fade-in"
          onClick={() => setIndex(null)}
        >
          <button
            aria-label="Tutup"
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Sebelumnya"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? null : (i - 1 + IMAGES.length) % IMAGES.length));
            }}
            className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={IMAGES[index].src}
            alt={IMAGES[index].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-card"
          />
          <button
            aria-label="Berikutnya"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? null : (i + 1) % IMAGES.length));
            }}
            className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/90 text-foreground"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
