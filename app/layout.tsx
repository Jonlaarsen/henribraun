import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/landing/Footer";
// import NavbarTwo from "@/components/nav/NavbarTwo";

const roboto = Roboto({
  variable: "--font-sans-roboto",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HENRI BRAUN | Din Partner Inom Digital Marknadsföring",
  description:
    "Henri Braun erbjuder skräddarsydda lösningar inom digital marknadsföring, optimering och webbproduktion som driver din verksamhet framåt. Spetskompetens inom digital handel och marknadsföring. Kontakta oss för professionell rådgivning och support.",
  openGraph: {
    title: "HENRI BRAUN | Din Partner Inom Digital Marknadsföring",
    description:
      "Henri Braun erbjuder skräddarsydda lösningar inom digital marknadsföring, optimering och webbproduktion som driver din verksamhet framåt. Spetskompetens inom digital handel och marknadsföring. Kontakta oss för professionell rådgivning och support.",
    url: "https://www.henribraun.se/",
    siteName: "Henri Braun",
    images: [
      {
        url: "https://www.henribraun.se/HENRIBRAUN1_line.svg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head suppressHydrationWarning>
        {/* Google Tag Manager */}
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WKLL2GKM');`,
          }}
        />
      </head>
      <body className={`${roboto.variable} ${roboto.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKLL2GKM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* <NavbarTwo /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
