"use client";

import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import MediaGallery from "./MediaGallery";
import { Badge, Card } from "./ui";
import TestimonialCarousel from "./TestimonialCarousel";
import CountdownTimer from "./CountdownTimer";

const ProductLanding = ({ productData, testimonials }) => {
 
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative pb-20">
      <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-48 left-48 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 sm:py-24">
            <div className="text-center space-y-8">
              <div className="flex justify-center gap-4">
                <Badge className="bg-blue-100 text-blue-800 text-sm py-2 px-4 uppercase tracking-wider animate-bounce">
                  🎯 Promo Special
                </Badge>
                <Badge className="bg-green-100 text-green-800 text-sm py-2 px-4 uppercase tracking-wider">
                  ✨ Free Box
                </Badge>
              </div>

              <div className="space-y-4">
                <h1 className="relative">
                  <span className="block text-5xl md:text-7xl font-black tracking-tight">
                    <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                      {productData?.name}
                    </span>
                  </span>
                  <span className="absolute -right-4 top-0 text-7xl animate-pulse">
                    {productData?.emoji}
                  </span>
                </h1>

                <p className="text-2xl md:text-3xl font-medium text-gray-600">
                  {productData?.tagline}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {productData?.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-white/50 backdrop-blur-sm rounded-lg p-3 shadow-sm"
                  >
                    <span className="text-2xl">{highlight.emoji}</span>
                    <p className="text-gray-700 font-medium">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl animate-pulse shadow-lg">
                <span className="text-2xl">🔥</span>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-xl">FLASH SALE!</span>
                  <span className="text-sm font-medium">
                    Berakhir dalam waktu terbatas
                  </span>
                </div>
                <span className="text-2xl">🔥</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <Card className="mb-12 p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <MediaGallery photos={productData?.photos} />
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <span className="text-red-500">⏰</span>
                <CountdownTimer />
              </div>

              <div className="flex items-center">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                <span className="ml-2 text-gray-600">(1,234 Reviews)</span>
              </div>

              <div className="space-y-2">
                <span className="text-2xl text-gray-500 line-through">
                  Rp {productData?.originalPrice.toLocaleString()}
                </span>
                <div className="text-5xl font-bold text-red-600">
                  Rp {productData?.salePrice.toLocaleString()}
                </div>
              </div>

              <WhatsAppButton
                phoneNumber={productData?.whatsappNumber}
                productName={productData?.name}
              />

              <p className="text-center text-green-600 font-semibold">
                ✨ BONUS: {productData?.bonus}
              </p>
            </div>
          </div>
        </Card>

        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              🎥 VIDEO PRODUK {productData?.name.toUpperCase()}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat detail produk dan cara penggunaan {productData?.name} kami
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-2xl bg-black">
              <video
                className="absolute top-0 left-0 w-full h-full object-contain"
                controls
                poster={productData?.videoPoster}
                preload="metadata"
                playsInline
              >
                <source src={productData?.videoUrl} type="video/mp4" />
                Your browser does not support video playback.
              </video>
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tutorial Penggunaan & Review Produk
              </h3>
              <p className="text-gray-600">
                Tonton video ini untuk melihat keunggulan dan cara merawat{" "}
                {productData?.name}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="md:text-3xl mt-[20px] font-bold mb-8 text-gray-800">
            ⚡️ KEUNGGULAN {productData?.name.toUpperCase()} ⚡️
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {productData?.features.map((feature, index) => (
              <Card
                key={index}
                className="p-4 transform hover:scale-105 transition-transform text-black"
              >
                <div className="text-lg font-semibold">{feature}</div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            💝 TESTIMONI CUSTOMER KAMI 💝
          </h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>

        <div className="text-center bg-yellow-50 rounded-xl p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            ✅ GARANSI 100% UANG KEMBALI ✅
          </h2>
          <p className="text-lg text-gray-600">
            Tidak puas? Kembalikan dalam 30 hari dan dapatkan uang Anda kembali!
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-red-600">
            🔥 STOK TERBATAS! 🔥
          </h2>
          <p className="text-2xl mb-8 text-gray-800">
            Sisa stok hari ini: {productData?.stock} unit
          </p>
          <p className="mt-4 text-gray-600">
            ⚡️ Pengiriman Express | 🎁 Bonus Melimpah | 💯 Garansi Resmi
          </p>
        </div>
      </div>
      // Tambahkan di bagian akhir component ProductLanding sebelum closing div
      terakhir:
      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${
          productData?.whatsappNumber
        }?text=Halo, saya tertarik dengan produk ${encodeURIComponent(
          productData?.name
        )}. Mohon info lebih lanjut.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">💬</span>
          <span className=" md:block font-medium">Order Sekarang</span>
        </div>

        {/* Pulse Effect */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full animate-ping bg-green-500 opacity-25"></div>
      </a>
      {/* Order Sekarang Floating Button - Mobile Only */}
      {/* <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
        <WhatsAppButton
          phoneNumber={productData?.whatsappNumber}
          productName={productData?.name}
        />
      </div> */}
    </div>
  );
};

export default ProductLanding;
