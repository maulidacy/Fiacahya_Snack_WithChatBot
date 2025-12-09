// src/config/fiacahya-data.ts
import { PAKET_SNACK, getCategoryBySlug, SnackCategorySlug } from "@/data/paket-snack";

export const FIACAHYA_PROFILE = {
  brandName: "Fiacahya Snack",
  tagline: "Premium Bakery & Snack",
  lokasiSingkat: "Gubug, Grobogan",
  alamatLengkap:
    "Produksi rumahan di Gubug, Grobogan (detail alamat dibagikan saat konfirmasi order).",
  jamOperasional: {
    produksi: "04.00 – 16.00 WIB",
    cutOffOrderBesar: "H-1 pukul 15.00 WIB",
  },
  kontak: {
    whatsappAdmin: "0812-3456-7890",
    email: "hello@fiacahya-snack.com",
    instagram: "@fiacahya.snack",
  },
  catatanUmum:
    "Sebagian harga bisa berubah tergantung bahan baku & volume order. Harga final akan dikonfirmasi oleh admin.",
};

export const METODE_PEMBAYARAN = [
  "Transfer bank (detail dikirim oleh admin saat konfirmasi pesanan).",
  "E-wallet tertentu bila tersedia (info terbaru mengikuti konfirmasi admin).",
];

export {
  PAKET_SNACK,
  getCategoryBySlug,
};
export type { SnackCategorySlug };
