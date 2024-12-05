import { NextResponse } from "next/server";

const products = {
  "kacamata-anti-radiasi": {
    name: "KACAMATA ANTI RADIASI",
    slug: "kacamata-anti-radiasi",
    emoji: "👓",
    tagline: "Lindungi Mata Anda dari Blue Light",
    highlights: [
      { emoji: "🔥", text: "Anti Blue Light" },
      { emoji: "💻", text: "PC & Laptop" },
      { emoji: "📱", text: "Smartphone" },
      { emoji: "✨", text: "Premium" },
    ],
    photos: [
      "https://down-id.img.susercontent.com/file/id-11134207-7ras8-m2w1qzx0a3es8f@resize_w450_nl.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-7rask-m2w1qzx0bhz8a6@resize_w450_nl.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-7rasa-m2w2437o8ri72e@resize_w450_nl.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-7r991-lnk9dlzv95oh4d@resize_w450_nl.webp",
      "https://down-id.img.susercontent.com/file/id-11134207-7qul4-lgqsieoo31r079@resize_w450_nl.webp",
    ],
    originalPrice: 253000,
    salePrice: 110000,
    whatsappNumber: "6281221871961",
    bonus: "Refill Pewangi Premium (senilai Rp 150.000)",
    videoPoster:
      "https://down-id.img.susercontent.com/file/87eb8008d88ce292582d8ea9fc3bdfae@resize_w82_nl.webp",
    videoUrl: "https://cvf.shopee.co.id/file/05e7bf777f1117480e510a51a90f2451",
    features: [
      "🔥 ANTI BLUE LIGHT",
      "☀️ UV PROTECTION",
      "👓 FRAME PREMIUM",
      "🎯 MATA TIDAK LELAH",
      "💪 AWET & TAHAN LAMA",
      "✨ DESIGN MODERN",
    ],
    stock: 7,
  },
  "kotak-makan-karakter-kaca-mata": {
    slug: "kotak-makan-karakter-kaca-mata",
    name: "Kotak Makan Karakter Kaca Mata",
    emoji: "🍱",
    tagline: "Kotak Makan Lucu & Praktis untuk Sehari-hari",
    highlights: [
      { emoji: "♨️", text: "Microwave Safe" },
      { emoji: "❄️", text: "Freezer Safe" },
      { emoji: "🧼", text: "Dishwasher Safe" },
      { emoji: "🚫", text: "BPA Free" },
    ],
    photos: [
      "https://down-id.img.susercontent.com/file/id-11134201-23030-5a1z1cfpjvov76.webp",
      "https://down-id.img.susercontent.com/file/id-11134201-23030-1hjv3ffpjvov0e.webp",
      "https://down-id.img.susercontent.com/file/id-11134201-23030-o6yxeefpjvovf5.webp",
    ],
    originalPrice: 120000,
    salePrice: 99000,
    whatsappNumber: "6281221871961",
    bonus: "Extra Bubble Wrap (Optional)",
    videoPoster:
      "https://down-id.img.susercontent.com/file/id-11110105-7r98q-lnuzsyz3w2i5eb@resize_w82_nl.webp",
    videoUrl:
      "https://cvf.shopee.co.id/file/api/v4/11110105/mms/id-11110105-6ke1k-lnuzsqcweu899b.16000081699504395.mp4",
    features: [
      "🍱 KAPASITAS 800ML",
      "♨️ AMAN DI MICROWAVE",
      "❄️ BISA DISIMPAN DI FREEZER",
      "🧼 BISA DICUCI DI DISHWASHER",
      "🚫 BEBAS BPA",
      "✨ DESAIN KARAKTER LUCU",
      "🎁 COCOK UNTUK HADIAH",
    ],
    specifications: {
      Kategori: "Tempat Penyimpanan Makanan / Kotak Bekal",
      Stok: "1753",
      Kapasitas: "800ml",
      Material: "PP (Food Grade)",
      Fitur: [
        "BPA Free",
        "Dapat Dicuci dengan Dishwasher",
        "Dapat Disimpan dalam Freezer",
        "Dapat Dipanaskan dengan Microwave",
        "Dengan Tutup",
      ],
      Warna: ["Pink", "Abu", "Coklat"],
      Pengiriman: "KOTA JAKARTA BARAT",
    },
    notes: [
      "Tidak ada kotak kecil/tempat sambal",
      "Rekam video unboxing untuk kemudahan komplain",
      "Tambahkan Extra Bubble Wrap untuk keamanan pengiriman",
    ],
    stock: 1753,
  },
};

export async function GET(request, { params }) {
  const product = products[params.slug];

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
