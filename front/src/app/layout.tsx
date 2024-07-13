import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/elements/Navbar";
import "./globals.css";
import Footer from "@/components/elements/Footer";
import {Suspense} from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lambda Global",
  description: "Frontend part",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      <Suspense>
      {children}
      </Suspense>
      <Footer/>
      </body>
     
    </html>
  );
}
