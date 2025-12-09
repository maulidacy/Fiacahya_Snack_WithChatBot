// src/data/paket-snack.ts

export type SnackCategorySlug =
  | "kue-basah"
  | "kue-kering"
  | "kue-tart-cake"
  | "snack-box-paket";

export type HargaTipe = "per-pcs" | "per-box" | "per-pax" | "paket";

export interface SnackItem {
  id: string;
  nama: string;
  deskripsi?: string;
  /**
   * Label harga yang ditampilkan ke user, misalnya:
   * "Mulai Rp10.000 / box" atau "Rp2.500 – Rp3.500 / pcs"
   */
  labelHarga?: string;
  /**
   * Minimal order (optional), misalnya: 30 box
   */
  minimalOrder?: string;
  cocokUntuk?: string;
  catatanTambahan?: string;
}

export interface SnackCategory {
  slug: SnackCategorySlug;
  namaKategori: string;
  deskripsiSingkat: string;
  tipeHargaUtama: HargaTipe;
  items: SnackItem[];
}

export const PAKET_SNACK: SnackCategory[] = [
  {
    slug: "snack-box-paket",
    namaKategori: "Snack Box & Paket Acara",
    deskripsiSingkat:
      "Paket snack box untuk rapat kantor, pengajian, dan acara keluarga.",
    tipeHargaUtama: "per-box",
    items: [
      {
        id: "sb-isi-3",
        nama: "Snack Box Isi 3 Item",
        deskripsi: "Umumnya 2 kue basah + 1 kudapan kering.",
        labelHarga: "Mulai Rp10.000 / box",
        minimalOrder: "30 box",
        cocokUntuk: "Rapat singkat, pengajian, acara keluarga kecil",
      },
      {
        id: "sb-isi-4",
        nama: "Snack Box Isi 4 Item",
        deskripsi: "Kombinasi manis & asin, bisa ditambah gorengan pilihan.",
        labelHarga: "Mulai Rp13.000 / box",
        minimalOrder: "30 box",
        cocokUntuk: "Meeting kantor & acara komunitas",
      },
      {
        id: "sb-pagi",
        nama: "Snack Box Pagi (kue + roti + air mineral)",
        deskripsi: "Cocok untuk acara pagi hari atau pelatihan.",
        labelHarga: "Mulai Rp15.000 / box",
        minimalOrder: "30 box",
        cocokUntuk: "Pelatihan, seminar pagi, acara kampus",
      },
      {
        id: "sb-arisan",
        nama: "Paket Arisan / Pengajian",
        deskripsi: "Isi bisa dikustom sesuai kebutuhan dan budget.",
        labelHarga: "Mulai Rp20.000 / orang (estimasi)",
        minimalOrder: "20 paket",
        cocokUntuk: "Arisan, pengajian, kumpul keluarga",
        catatanTambahan:
          "Detail isi & harga final disesuaikan dan dikonfirmasi admin.",
      },
      {
        id: "sb-kantor-rutin",
        nama: "Paket Kantor Rutin (mingguan/bulanan)",
        deskripsi: "Snack box berulang untuk kantor atau instansi.",
        labelHarga: "By request (harga khusus kontrak)",
        cocokUntuk: "Kontrak rutin kantor / instansi",
        catatanTambahan:
          "Harga & isi paket disusun khusus sesuai kebutuhan perusahaan.",
      },
    ],
  },
  {
    slug: "kue-basah",
    namaKategori: "Kue Basah",
    deskripsiSingkat:
      "Kue tradisional dengan tampilan rapi, diproduksi harian.",
    tipeHargaUtama: "per-pcs",
    items: [
      {
        id: "kb-klepon",
        nama: "Klepon Pandan",
        labelHarga: "Perkiraan Rp2.000 – Rp2.500 / pcs",
        cocokUntuk: "Snack box & tampah tradisional",
      },
      {
        id: "kb-dadar",
        nama: "Dadar Gulung Cokelat",
        labelHarga: "Perkiraan Rp2.500 – Rp3.000 / pcs",
      },
      {
        id: "kb-nagasi",
        nama: "Nagasi Pisang",
        labelHarga: "Perkiraan Rp2.500 – Rp3.000 / pcs",
      },
      {
        id: "kb-lemper",
        nama: "Lemper Ayam",
        labelHarga: "Perkiraan Rp3.000 – Rp3.500 / pcs",
      },
    ],
  },
  {
    slug: "kue-kering",
    namaKategori: "Kue Kering",
    deskripsiSingkat:
      "Produksi musiman & reguler untuk hampers dan gift perusahaan.",
    tipeHargaUtama: "paket",
    items: [
      {
        id: "kk-kastengel",
        nama: "Kastengel",
        labelHarga: "Per toples (isi & harga menyesuaikan musim)",
      },
      {
        id: "kk-nastar",
        nama: "Nastar",
        labelHarga: "Per toples (isi & harga menyesuaikan musim)",
      },
      {
        id: "kk-putri-salju",
        nama: "Putri Salju",
        labelHarga: "Per toples (isi & harga menyesuaikan musim)",
      },
      {
        id: "kk-sagu-keju",
        nama: "Sagu Keju",
        labelHarga: "Per toples (isi & harga menyesuaikan musim)",
      },
    ],
  },
  {
    slug: "kue-tart-cake",
    namaKategori: "Kue Tart & Cake",
    deskripsiSingkat:
      "Cake dekoratif untuk ulang tahun, syukuran, dan display coffee shop.",
    tipeHargaUtama: "paket",
    items: [
      {
        id: "kt-fresh-cream",
        nama: "Tart Fresh Cream",
        labelHarga: "Harga menyesuaikan ukuran & dekor",
        catatanTambahan: "Bisa custom ucapan & tema warna.",
      },
      {
        id: "kt-butter-cake",
        nama: "Butter Cake",
        labelHarga: "Mulai ukuran loyang kecil (harga by request)",
      },
      {
        id: "kt-brownies",
        nama: "Brownies Panggang",
        labelHarga: "Per loyang / slice, harga by request",
      },
    ],
  },
];

export function getCategoryBySlug(slug: SnackCategorySlug): SnackCategory | undefined {
  return PAKET_SNACK.find((c) => c.slug === slug);
}
