import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Button from "@/components/button/page";
import React, { useState } from 'react';
import Dropdown from '@/components/dropdown/page'; 


// Get this info from some external source (e.g. CMS)
const pages = {
  Home: "/",
  Adopt: "./adopt",
  "Pet Care": "./petcare",
  "Support Us": "./supportus",
  "About Us": "./aboutus",
  "Log In": "./login"
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animal Shelter",
  description: "Place Where We Love Animals",
};

export default function RootLayout({children,}: {children: React.ReactNode; }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseOver = () => {
    setShowDropdown(true);
  };

  const handleMouseOut = () => {
    setShowDropdown(false);
  };

  const notifyParent = () => {
    setShowDropdown(false);
  };
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-center p-4">
          <ul className="flex gap-8">
            {Object.entries(pages).map(([name, path]) => (
              <li key={name}>
                <Button path={path} name={name}></Button>
                <Dropdown
                showDropdown={showDropdown}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                notifyParent={notifyParent}
                />
              </li>
            ))}
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
