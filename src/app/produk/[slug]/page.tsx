import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Playfair_Display, Montserrat } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

type Product = {
  name: string;
  price: string;
  note?: string;
};

const PRODUCT_DETAIL: Record<
  string,
  {
    title: string;
    intro: string;
    products: Product[];
  }
> = {
  "kue-basah": {
    title: "Paket Kue Basah",
    intro:
      "Pilihan kue basah untuk snack box harian, arisan, dan acara keluarga. Harga bisa disesuaikan jumlah dan kombinasi item.",
    products: [
      { name: "Klepon Pandan", price: "Rp1.500 – Rp2.000 / pcs" },
      { name: "Dadar Gulung Cokelat", price: "Rp2.500 / pcs" },
      { name: "Nagasi Pisang", price: "Rp2.500 / pcs" },
      { name: "Lemper Ayam", price: "Rp3.000 / pcs" },
      { name: "Snack Box Kue Basah (isi 3–4 item)", price: "Mulai Rp10.000 / box" },
    ],
  },
  "kue-kering": {
    title: "Paket Kue Kering",
    intro:
      "Kue kering untuk hampers lebaran, parcel perusahaan, dan penjualan grosir. Harga tergantung ukuran toples dan jumlah varian.",
    products: [
      { name: "Kastengel", price: "Mulai Rp70.000 / toples" },
      { name: "Nastar Premium", price: "Mulai Rp75.000 / toples" },
      { name: "Putri Salju", price: "Mulai Rp65.000 / toples" },
      { name: "Sagu Keju", price: "Mulai Rp70.000 / toples" },
      {
        name: "Paket Hampers 3–4 Toples",
        price: "Mulai Rp250.000 / paket",
      },
    ],
  },
  "kue-tart-cake": {
    title: "Kue Tart & Whole Cake",
    intro:
      "Whole cake dan tart dekoratif untuk ulang tahun, syukuran, atau display coffee shop. Custom ukuran dan dekor bisa disesuaikan.",
    products: [
      { name: "Tart Fresh Cream Ø 16 cm", price: "Mulai Rp180.000" },
      { name: "Tart Fresh Cream Ø 20 cm", price: "Mulai Rp230.000" },
      { name: "Butter Cake Loyang Kecil", price: "Mulai Rp85.000 / loyang" },
      { name: "Brownies Panggang", price: "Mulai Rp90.000 / loyang" },
      {
        name: "Mini Cake Individual",
        price: "Mulai Rp35.000 / pcs (min. order berlaku)",
      },
    ],
  },
  "snack-box-paket": {
    title: "Snack Box & Paket Acara",
    intro:
      "Paket snack box untuk rapat kantor, pengajian, dan acara keluarga. Isi dan menu bisa diganti sesuai kebutuhan.",
    products: [
      {
        name: "Snack Box Isi 3 Item",
        price: "Mulai Rp10.000 / box",
        note: "Umumnya 2 kue basah + 1 kudapan kering.",
      },
      {
        name: "Snack Box Isi 4 Item",
        price: "Mulai Rp13.000 / box",
      },
      {
        name: "Snack Box Pagi (kue + roti + air mineral)",
        price: "Mulai Rp15.000 / box",
      },
      {
        name: "Paket Arisan / Pengajian",
        price: "Mulai Rp20.000 / orang",
      },
      {
        name: "Paket Kantor Rutin (mingguan/bulanan)",
        price: "By request (harga khusus kontrak)",
      },
    ],
  },
};

// helper supaya aman kalau slug di URL aneh
function getCategoryData(slug: string) {
  const key = slug as keyof typeof PRODUCT_DETAIL;
  if (PRODUCT_DETAIL[key]) {
    return PRODUCT_DETAIL[key];
  }
  // fallback kalau slug tidak dikenal
  return PRODUCT_DETAIL["snack-box-paket"];
}

export default function ProdukDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = getCategoryData(params.slug);

  return (
    <main
      className={`${montserrat.variable} ${playfair.variable} font-sans
        min-h-screen bg-bg-light text-text-light
        dark:bg-bg-dark dark:text-text-dark`}
    >
      <Navbar />

      <section className="bg-transparent">
        <div className="max-w-5xl mx-auto px-4 pt-10 pb-10 md:pt-14 md:pb-12">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#B47A45] mb-2 dark:text-amber-200/90">
            Detail Paket
          </p>
          <h1 className="font-serif text-2xl md:text-3xl mb-3 text-[#3A261A] dark:text-neutral-50">
            {data.title}
          </h1>
          <p className="text-sm md:text-base text-[#6A4A35] dark:text-neutral-200 leading-relaxed mb-5">
            {data.intro}
          </p>

          {/* LIST PRODUK + HARGA */}
          <div className="rounded-2xl border border-[#E3C9A8]/80 bg-white/90 px-4 py-4 md:px-5 md:py-5 shadow-soft dark:border-neutral-800 dark:bg-[#111111]/95">
            <div className="grid gap-3">
              {data.products.map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 border-b border-[#F0E0C3]/80 last:border-b-0 dark:border-neutral-800/80 pb-2 last:pb-0"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#3A261A] dark:text-neutral-50">
                      {p.name}
                    </p>
                    {p.note && (
                      <p className="text-[11px] text-[#8C6647] dark:text-neutral-400">
                        {p.note}
                      </p>
                    )}
                  </div>
                  <p className="text-xs md:text-sm font-semibold text-[#C48A4A] dark:text-amber-200">
                    {p.price}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA WA */}
          <a
            href={`https://wa.me/6281234567890?text=${encodeURIComponent(
              `Halo Fiacahya Snack, saya tertarik dengan ${data.title} dan ingin tanya ketersediaan & penawaran harga lebih detail.`,
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#3E2A20] text-white text-xs font-semibold px-5 py-2 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-transform dark:bg-neutral-100 dark:text-neutral-900"
          >
            Diskusikan paket ini via WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
