// src/app/produk/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

const detailCopy: Record<
  string,
  { title: string; intro: string; notes: string[] }
> = {
  "kue-basah": {
    title: "Paket Kue Basah",
    intro:
      "Pilihan kue basah untuk snack box harian, arisan, dan acara keluarga. Bisa mix isi 3–5 item per box.",
    notes: [
      "Minimal order biasanya 20 box (bisa disesuaikan).",
      "Varian bisa diganti sesuai ketersediaan bahan.",
      "Request tanpa pedas / tanpa santan bisa dibicarakan dulu.",
    ],
  },
  "kue-kering": {
    title: "Paket Kue Kering",
    intro:
      "Cocok untuk hampers lebaran, parcel perusahaan, dan gift premium dengan tampilan toples rapi.",
    notes: [
      "Pilihan toples dan stiker label bisa dikustom.",
      "Tersedia opsi grosir untuk reseller / coffee shop.",
    ],
  },
  "kue-tart-cake": {
    title: "Kue Tart & Whole Cake",
    intro:
      "Cake dekoratif untuk ulang tahun, syukuran, dan kebutuhan display di coffee shop.",
    notes: [
      "Ukuran mulai dari diameter 16 cm.",
      "Dekor minimalis, bunga segar, atau tema warna tertentu.",
      "Pre-order minimal H-1, ideal H-2.",
    ],
  },
  "snack-box-paket": {
    title: "Snack Box & Paket Acara",
    intro:
      "Paket snack box untuk rapat kantor, pengajian, dan acara keluarga. Isi dan budget bisa disesuaikan.",
    notes: [
      "Isi umum: 3–5 item kue + tisu.",
      "Bisa tambah air mineral / kopi & teh.",
      "Listing detail paket dan price list bisa dikirim via WhatsApp.",
    ],
  },
};

export default function ProdukDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const data =
    detailCopy[slug] ??
    detailCopy["snack-box-paket"]; // fallback kalau slug tidak dikenal

  return (
    <main
      className={`${montserrat.variable} ${playfair.variable} font-sans
        min-h-screen bg-bg-light text-text-light
        dark:bg-bg-dark dark:text-text-dark`}
    >
      <Navbar />

      <section className="bg-transparent">
        <div className="max-w-4xl mx-auto px-4 pt-10 pb-8 md:pt-14 md:pb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B47A45] mb-2 dark:text-amber-200/90">
            Detail Paket
          </p>
          <h1 className="font-serif text-2xl md:text-3xl mb-3 text-[#3A261A] dark:text-neutral-50">
            {data.title}
          </h1>
          <p className="text-sm md:text-base text-[#6A4A35] dark:text-neutral-200 leading-relaxed">
            {data.intro}
          </p>

          <ul className="mt-4 space-y-2 text-xs md:text-sm text-[#6A4A35] dark:text-neutral-300">
            {data.notes.map((n) => (
              <li key={n}>• {n}</li>
            ))}
          </ul>

          <a
            href={`https://wa.me/6281234567890?text=${encodeURIComponent(
              `Halo Fiacahya Snack, saya tertarik dengan ${data.title} dan ingin tanya price list / ketersediaan.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#3E2A20] text-white text-xs font-semibold px-5 py-2 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-transform dark:bg-neutral-100 dark:text-neutral-900"
          >
            Minta Price List via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
