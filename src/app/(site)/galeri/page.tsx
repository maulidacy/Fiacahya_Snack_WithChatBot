"use client";

import Image from "next/image";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Pakai beberapa foto ilustrasi dari Unsplash (bisa diganti ke asset sendiri)
const galleryImages = [
  {
    src: "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1765125292/20240824_143135_rz029n.jpg",
    alt: "Serabi",
  },
  {
    src: "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1765125285/20230226_093848_w4fqmi.jpg",
    alt: "Tart potong",
  },
  {
    src: "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1765125282/20240801_142542_fbjhve.jpg",
    alt: "oven",
  },
  {
    src: "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1765125294/20250201_111233_auqwh7.jpg",
    alt: "carabikang",
  },
  {
    src: "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1765129014/20250214_115957_qsvxnp.jpg",
    alt: "donat",
  },
  {
    src: "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1765125295/20240803_124157_t0am8p.jpg",
    alt: "putu ayu",
  },
  {
    src: "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1765129009/20250806_095033_xhziep.jpg",
    alt: "adonan",
  },
  {
    src: "https://res.cloudinary.com/dxdb3dj8f/image/upload/v1765129003/20250221_141351_xre3kh.jpg",
    alt: "nastar",
  },
];

export default function GaleriPage() {
  return (
    <main
      className={`${montserrat.variable} ${playfair.variable} font-sans 
        min-h-screen bg-bg-light text-text-light
        dark:bg-bg-dark dark:text-text-dark`}
    >
      <Navbar />

      <section className="bg-transparent">
        <div className="max-w-6xl mx-auto px-4 pt-10 pb-4 md:pt-14 md:pb-6">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#B47A45] mb-2 dark:text-amber-200/90">
              Galeri Produksi
            </p>
            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-3 text-[#3A261A] dark:text-neutral-50">
              Galeri produksi & produk Fiacahya Snack.
            </h1>
            <p className="text-sm md:text-base text-[#6A4A35] dark:text-neutral-200 leading-relaxed">
               Dokumentasi visual mulai dari persiapan bahan, proses produksi harian, hingga
               tampilan akhir kue basah, kue kering, dan cake yang kami sajikan untuk berbagai
               kebutuhan acara.
            </p>
          </div>
        </div>

        {/* GRID FOTO – tanpa card berat, hanya container tipis & hover halus */}
        <div className="max-w-6xl mx-auto px-2 pb-12 md:px-4 md:pb-16">
          <div
            className="
              grid gap-2.5
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
            "
          >
            {galleryImages.map((img) => (
              <figure
                key={img.src}
                className="
                  relative aspect-[4/3] overflow-hidden rounded-2xl
                  bg-neutral-100/70 dark:bg-neutral-900/70
                  shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
                  transition-shadow duration-300
                "
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="
                    (max-width: 640px) 50vw,
                    (max-width: 1024px) 33vw,
                    25vw
                  "
                  className="
                    object-cover
                    transition-transform duration-500
                    hover:scale-[1.04]
                  "
                  loading="lazy"
                />
                {/* caption kecil, hanya muncul saat fokus/screen reader */}
                <figcaption className="sr-only">{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
