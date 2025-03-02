import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/navbar";

import { Lato } from "next/font/google";
import { ToastProvider } from "@/providers/toast-provider";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Binaya Shrestha",
  description:
    "Binaya Shrestha, Fullstack javascript developer. Portfolio website",
};
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <Navbar />
        <ToastProvider />

        {children}
        <Footer />
      </body>
    </html>
  );
}
