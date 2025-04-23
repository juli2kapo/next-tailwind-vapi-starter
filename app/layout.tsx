import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import LanguageProvider from "@/components/componentProvider";
import NoSsr from "@/components/noSsr";

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
      <link rel="icon" href="/icon.png" />
      <body className={inter.className}>
        <LanguageProvider>
          <NoSsr >
          <Navbar />
          <main className="z-40">
            {children}
          </main>
          <Footer />
          </NoSsr>
        </LanguageProvider>
      </body>
    </html>
  );
}
