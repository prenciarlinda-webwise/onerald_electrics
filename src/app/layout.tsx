import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Onerald Electrics - Shërbime Elektrike Profesionale",
  description:
    "Shërbime profesionale elektrike në Dibër dhe Tiranë. Riparime elektrike dhe planifikim elektrik për biznese dhe shtëpi. Që nga viti 2020.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body className="font-sans antialiased">
        <Navbar />
        <main className="pt-16 sm:pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
