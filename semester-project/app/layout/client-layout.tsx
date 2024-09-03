"use client";

import React from 'react';
import Button from "@/components/button/page";
import Footer from "@/components/footer/page"; 
import "../globals.css";

const pages = {
  Home: "/",
  Adopt: "/adopt",
  "Pet Care": "/petcare",
  "Support Us": "/supportus",
  "About Us": "/aboutus",
  "Log In": "/login"
};

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-container">
      <nav className="flex items-center justify-center p-4">
        <ul className="flex gap-8">
          {Object.entries(pages).map(([name, path]) => (
            <li key={name}>
              <Button path={path} name={name} />
            </li>
          ))}
        </ul>
      </nav>
      <main className="main-content">
        {children}
      </main>
      <Footer /> 
    </div>
  );
}
