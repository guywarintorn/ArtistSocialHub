import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artist Hub",
  description: "social hub by Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="flex flex-row">
          <div className="container w-full mx-auto px-10 min-h-screen flex flex-col justify-between">
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
       
      </body>
    </html>
  );
}
