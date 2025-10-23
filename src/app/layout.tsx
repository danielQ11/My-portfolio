import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/layout/Navbar"
import { Footer } from "../components/layout/Footer";
import { Space_Grotesk } from "next/font/google"; // ✅ IMPORTACIÓN QUE FALTABA

// ✅ define la fuente con variable
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk", 
});

export const metadata: Metadata = {
  title: "Mi Portafolio",
  description: "Portafolio personal con Next.js + Tailwind",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable}`}>
      <body className="font-sans bg-black text-foreground antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
