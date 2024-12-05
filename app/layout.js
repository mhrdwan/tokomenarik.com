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

export const metadata = {
  title: "Toko Menarik",
  description: "Temukan Produk Berkualitas Untuk Anda",
  icons: {
    icon: "/icon_toko_menarik_no_bg.png",
    shortcut: "/icon_toko_menarik_no_bg.png",
    apple: "/icon_toko_menarik_no_bg.png",
  },
  openGraph: {
    title: `Toko Menarik | Temukan Produk Berkualitas Untuk Anda`,
    description: "Temukan Produk Berkualitas Untuk Anda",
    images: "icon_toko_menarik.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
