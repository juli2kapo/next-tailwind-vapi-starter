import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import LanguageProvider from "@/components/componentProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elykia",
  description: "Elykia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <link rel="icon" href="/icon.jpg" />
      <body className={inter.className}>
        <LanguageProvider>
          <Navbar />
            {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
