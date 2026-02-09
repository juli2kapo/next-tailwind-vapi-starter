import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import LanguageProvider from "@/components/componentProvider";
import NoSsr from "@/components/noSsr";
import Script from "next/script";

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
    <html lang="es" className="bg-black">
      <head>
        <meta name="facebook-domain-verification" content="ma7f97alsfl4v7gyocohfini4vyg1z" />
      </head>
      {/* <link rel="icon" href="Images/iconBlack.svg" /> */}
      <link rel="icon" href="Images/6.svg" />

      <body className={inter.className}>
        {/* --- 2. PEGA ESTO AQUÍ (INICIO GA4) --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q026PHQE01"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Q026PHQE01');
          `}
        </Script>
        {/* --- (FIN GA4) --- */}

        <LanguageProvider>
          <NoSsr>
            <Navbar />
            <main>
              {children}
            </main>
            <Footer />
          </NoSsr>
        </LanguageProvider>
      </body>
    </html>
  );
}