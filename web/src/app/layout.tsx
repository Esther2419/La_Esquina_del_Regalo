import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "La Esquina del Regalo | Florería y Boutique",
  description: "Florería, Boutique, Desayunos y Detalles. Todo en La Esquina del Regalo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} font-sans antialiased bg-cream-50 text-wall-brown-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gold-500/20 px-6 py-4 flex justify-between items-center shadow-[0_4px_20px_rgba(212,175,55,0.05)]">
      <div className="text-2xl font-black tracking-widest text-wall-brown-900 uppercase" style={{ fontFamily: "Georgia, serif" }}>
        La Esquina <span className="text-gold-500 drop-shadow-sm">Del Regalo</span>
      </div>
      <div className="hidden md:flex gap-8 font-semibold text-wall-brown-700 tracking-wide text-sm">
        <a href="#floreria" className="hover:text-gold-500 transition-colors uppercase">Florería</a>
        <a href="#boutique" className="hover:text-gold-500 transition-colors uppercase">Boutique</a>
        <a href="#desayunos" className="hover:text-gold-500 transition-colors uppercase">Desayunos</a>
        <a href="#detalles" className="hover:text-gold-500 transition-colors uppercase">Detalles</a>
        <a href="#decoracion" className="hover:text-gold-500 transition-colors uppercase">Decoración</a>
      </div>
      <button className="bg-plant-green-700 text-white px-6 py-2 rounded-full font-bold hover:bg-gold-500 hover:shadow-[0_0_12px_rgba(212,175,55,0.4)] shadow-md transition transform hover:scale-105 border border-gold-500/20 cursor-pointer">
        Mi Carrito
      </button>
    </nav>
  );
}
