export const SITE = {
  name: "Digi Petshop",
  tagline: "Sahabat Setia Hewan Kesayangan Anda",
  whatsapp: "6281234567890", // ganti dengan nomor asli
  whatsappDisplay: "0812-3456-7890",
  phone: "021-1234567",
  email: "info@digipetshop.com",
  addressLine1: "Jl. Contoh No. 123",
  addressLine2: "Jakarta Selatan, 12345",
  mapsUrl: "https://maps.google.com/?q=Jakarta+Selatan",
  hours: [
    { day: "Senin – Jumat", time: "08.00 – 20.00" },
    { day: "Sabtu", time: "08.00 – 21.00" },
    { day: "Minggu", time: "09.00 – 18.00" },
  ],
};

export const waLink = (msg = "Halo, saya ingin bertanya tentang produk dan layanan Digi Petshop.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
