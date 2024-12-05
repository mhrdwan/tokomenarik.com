// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import NavigationAtas from '../components/Navigation';

// Logo component


// Product Card component
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link href={`/promo/${product.slug}`}>
        <div className="relative aspect-square">
          <Image
            src={product.photos[0]}
            alt={product.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center space-x-2 text-white">
                <span>{product.emoji}</span>
                <span className="font-medium">Lihat Detail</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            {product.highlights.map((highlight, index) => (
              <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded-full">
                {highlight.emoji}
              </span>
            ))}
          </div>
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
            {product.tagline}
          </p>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-gray-400 line-through text-sm">
                Rp {product.originalPrice.toLocaleString()}
              </div>
              <div className="text-xl font-bold text-red-600">
                Rp {product.salePrice.toLocaleString()}
              </div>
            </div>
            <div className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-medium">
              Stock: {product.stock}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

async function getProducts() {
  try {
    const baseUrl = process.env.NODE_ENV === 'development' 
      ? 'http://localhost:3000' 
      : process.env.NEXT_PUBLIC_BASE_URL;

    const res = await fetch(`${baseUrl}/api/product`, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return {}; // Return empty object if error
  }
}

export default async function HomePage() {
  const productsData = await getProducts();
  const products = Object.values(productsData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NavigationAtas />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/20 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Temukan Produk Berkualitas
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Koleksi produk pilihan dengan harga terbaik untuk Anda
            </p>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/6281221871961"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <span className="text-2xl">💬</span>
      </a>
    </div>
  );
}