// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Logos/Logo.png"
            alt="Logo"
            className="h-30 w-auto align-middle -translate-y-12" // 80px height - moved up more
          />
        </div>

        {/* Links centrados */}
        <div className="flex gap-12 text-1xl font-bold text-white hover:text-cyon-50 -translate-y-12">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/About" className="hover:text-white transition-colors">About</Link>
          <Link href="/Projects" className="hover:text-white transition-colors">Projects</Link>
          <Link href="/Contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

      </div>
    </nav>
  );
};
