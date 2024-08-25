
"use client";

import React, { useState } from 'react';
import Button from "@/components/button/page";
import Dropdown from '@/components/dropdown/page';
import "../globals.css";


// Define the pages
const pages = {
  Home: "/",
  Adopt: "./adopt",
  "Pet Care": "./petcare",
  "Support Us": "./supportus",
  "About Us": "./aboutus",
  "Log In": "./login"
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
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
    <>
      <nav className="flex items-center justify-center p-4">
        <ul className="flex gap-8">
          {Object.entries(pages).map(([name, path]) => (
            <li key={name}>
              <Button path={path} name={name} />
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
    </>
  );
}
