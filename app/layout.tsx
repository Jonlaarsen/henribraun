import type { Metadata } from "next";
import { Fira_Sans, DM_Serif_Display, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/landing/Footer";

const firaSans = Fira_Sans({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-serif-stack",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "HENRIBRAUN",
  description: "HENRIBRAUN | Digital marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.variable} ${dmSerif.variable} ${notoSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
