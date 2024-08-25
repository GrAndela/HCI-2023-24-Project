import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

// Metadata for the page
export const metadata: Metadata = {
  title: "Animal Shelter",
  description: "Place Where We Love Animals",
};

// Inter font
const inter = Inter({ subsets: ["latin"] });

export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
