'use client'

import React, { useState } from "react";
import Image from 'next/image';

const Navigation = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800">MyStore</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-800">🔍</button>
          <button className="text-gray-600 hover:text-gray-800">🛒</button>
        </div>
      </div>
    </div>
  </nav>
);

const ProductCard = ({ product }) => {
  const handleWhatsAppClick = () => {
    const message = `Halo, saya tertarik dengan produk ${product.name}! Boleh info lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6281221871961?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        {product.discount && (
          <div className="absolute top-2 right-2">
            <span className="bg-red-500 text-white text-sm px-2 py-1 rounded-full">
              {product.discount}% OFF
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center mb-2">
          <div className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</div>
          <span className="text-gray-500 text-sm ml-1">({product.reviews})</span>
        </div>
        <div className="mb-3">
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm mr-2">
              Rp {product.oldPrice.toLocaleString()}
            </span>
          )}
          <span className="text-xl font-bold text-red-600">
            Rp {product.price.toLocaleString()}
          </span>
        </div>
        <button
          onClick={handleWhatsAppClick}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Beli Sekarang</span>
          <span>💬</span>
        </button>
      </div>
    </div>
  );
};

const CategoryTabs = ({ categories, activeCategory, onSelect }) => (
  <div className="flex overflow-x-auto space-x-4 py-4 mb-6">
    {categories.map((category) => (
      <button
        key={category}
        onClick={() => onSelect(category)}
        className={`px-4 py-2 rounded-full whitespace-nowrap ${
          activeCategory === category
            ? "bg-blue-500 text-white"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        {category}
      </button>
    ))}
  </div>
);

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = [
    "Semua",
    "Kacamata",
    "Alat Rumah Tangga",
    "Elektronik",
    "Aksesori"
  ];

  const products = [
    {
      id: 1,
      name: "Kacamata Anti Radiasi Blue Light Blocker",
      price: 149000,
      oldPrice: 299000,
      discount: 50,
      image: "/api/placeholder/400/300",
      reviews: 128,
      category: "Kacamata"
    },
    {
      id: 2,
      name: "Super Mop 3000 Pro Max",
      price: 499000,
      oldPrice: 999000,
      discount: 50,
      image: "/api/placeholder/400/300",
      reviews: 256,
      category: "Alat Rumah Tangga"
    },
    {
      id: 3,
      name: "Smart Watch Sport Edition",
      price: 299000,
      oldPrice: 599000,
      discount: 50,
      image: "/api/placeholder/400/300",
      reviews: 64,
      category: "Elektronik"
    },
    {
      id: 4,
      name: "Wireless Earbuds Pro",
      price: 199000,
      oldPrice: 399000,
      discount: 50,
      image: "/api/placeholder/400/300",
      reviews: 92,
      category: "Elektronik"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Selamat Datang di MyStore</h1>
            <p className="text-xl opacity-90">Temukan Produk Berkualitas Untuk Anda</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <CategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products
            .filter(
              (product) =>
                activeCategory === "Semua" ||
                product.category === activeCategory
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>

      {/* Float WhatsApp Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors">
          <span className="text-2xl">💬</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;