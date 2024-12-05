import { NextResponse } from "next/server";

// app/api/testimonials/route.js
const testimonials = {
  "kacamata-anti-radiasi": [
    {
      name: "Andi Pratama",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      role: "Programmer",
      text: "Mata jadi gak cepet capek pas coding. Recommended banget! ⭐️⭐️⭐️⭐️⭐️",
      productImage: "/api/placeholder/450/450",
    },
    {
      name: "Linda Wijaya",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      role: "Content Creator",
      text: "Nyaman dipake seharian ngedit video. Mata ga perih lagi! ⭐️⭐️⭐️⭐️⭐️",
      productImage: "/api/placeholder/450/450",
    },
    {
      name: "Budi Santoso",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      role: "Digital Marketing",
      text: "Desainnya keren, cocok dipake kerja. Worth it! ⭐️⭐️⭐️⭐️⭐️",
      productImage: "/api/placeholder/450/450",
    },
  ],
  "botol-minum-pintar": [
    {
      name: "Siti Nurhayati",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      role: "Atlet",
      text: "Botol ini membantu saya tetap terhidrasi selama latihan. Keren! ⭐️⭐️⭐️⭐️⭐️",
      productImage: "/api/placeholder/450/450",
    },
    {
      name: "Rudi Hartono",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      role: "Pekerja Kantoran",
      text: "Fitur pelacak hidrasi sangat membantu. Saya jadi lebih sehat! ⭐️⭐️⭐️⭐️⭐️",
      productImage: "/api/placeholder/450/450",
    },
    {
      name: "Dewi Lestari",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      role: "Ibu Rumah Tangga",
      text: "Botol ini tahan bocor dan mudah dibersihkan. Sangat praktis! ⭐️⭐️⭐️⭐️⭐️",
      productImage: "/api/placeholder/450/450",
    },
  ],
  "kotak-makan-karakter-kaca-mata": [
    {
      name: "Maya Indah",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      role: "Ibu Muda",
      text: "Anak saya jadi semangat bawa bekal ke sekolah karena desainnya lucu! ⭐️⭐️⭐️⭐️⭐️",
      productImage:
        "https://down-id.img.susercontent.com/file/id-11134201-23030-5a1z1cfpjvov76.webp",
    },
    {
      name: "Rizki Pratama",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      role: "Pekerja Kantoran",
      text: "Bagus banget buat bawa makan siang ke kantor, tahan panas dan ga bocor! ⭐️⭐️⭐️⭐️⭐️",
      productImage:
        "https://down-id.img.susercontent.com/file/id-11134201-23030-5a1z1cfpjvov76.webp",
    },
    {
      name: "Putri Rahayu",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      role: "Mahasiswa",
      text: "Ukurannya pas, bisa buat microwave, dan gampang dibersihkan. Recommended! ⭐️⭐️⭐️⭐️⭐️",
      productImage:
        "https://down-id.img.susercontent.com/file/id-11134201-23030-5a1z1cfpjvov76.webp",
    },
    {
      name: "Dian Kusuma",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      role: "Guru TK",
      text: "Anak-anak pada suka karakter kacamatanya, jadi ikutan mau bawa bekal! ⭐️⭐️⭐️⭐️⭐️",
      productImage:
        "https://down-id.img.susercontent.com/file/id-11134201-23030-5a1z1cfpjvov76.webp",
    },
  ],
};

export async function GET(request, { params }) {
  try {
    const testimonialsBySlug = testimonials[params.slug];

    if (!testimonialsBySlug) {
      return NextResponse.json(
        { error: "Testimonials not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(testimonialsBySlug);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
