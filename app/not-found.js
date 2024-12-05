// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center">
      <div className="max-w-xl mx-auto text-center space-y-6 p-8">
        <div className="text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          404
        </div>
        
        <h1 className="text-4xl font-bold text-gray-800">
          Halaman Tidak Ditemukan
        </h1>
        
        <p className="text-gray-600 text-lg">
          Maaf, halaman yang Anda cari tidak tersedia
        </p>
        
        <div className="space-y-4">
          <p className="text-gray-500">
            Silakan cek kembali URL atau kembali ke halaman utama
          </p>
          
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  )
}