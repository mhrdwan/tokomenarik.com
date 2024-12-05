import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const siteURL = process.env.NEXT_PUBLIC_BASE_URL || 'https://tokomenarik.com';

export const metadata = {
  title: "Toko Menarik",
  description: "Temukan Produk Berkualitas Untuk Anda",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/icon_toko_menarik_no_bg.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/icon_toko_menarik_no_bg.png',
    },
    {
      rel: 'shortcut icon',
      url: '/icon_toko_menarik_no_bg.png',
    }
  ],
  openGraph: {
    type: 'website',
    title: 'Toko Menarik | Temukan Produk Berkualitas Untuk Anda',
    description: 'Temukan Produk Berkualitas Untuk Anda',
    url: siteURL,
    images: [{
      url: `${siteURL}/icon_toko_menarik.jpeg`,
      width: 1200,
      height: 630,
      alt: 'Toko Menarik'
    }],
    siteName: 'Toko Menarik'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toko Menarik | Temukan Produk Berkualitas Untuk Anda',
    description: 'Temukan Produk Berkualitas Untuk Anda',
    images: [`${siteURL}/icon_toko_menarik.jpeg`],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon_toko_menarik_no_bg.png" />
        <link rel="shortcut icon" href="/icon_toko_menarik_no_bg.png" />
        <link 
          rel="apple-touch-icon" 
          sizes="180x180" 
          href="/icon_toko_menarik_no_bg.png"
        />
        <meta 
          property="og:image" 
          content={`${siteURL}/icon_toko_menarik.jpeg`}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}