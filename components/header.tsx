// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Staff", href: "/staff" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "News", href: "/news" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full h-[12vh] z-50 bg-[#fff] text-[#192F59] shadow-md">
      <div className="container mx-auto flex items-center h-auto justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-wider">
          <div className="relative">
            <Image
              src="/images/MadonnaUniversityNigeria.png"
              alt="Logo"
              width={300}
              height={50}
              className="w-48 md:w-72 object-contain" // 👈 smaller logo on mobile
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 ${
                pathname === link.href ? "text-[#D11479] font-semibold" : "hover:text-[#64BBE7]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-[#192F59]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#192F59] overflow-hidden text-white shadow-inner"
          >
            <div className="flex flex-col items-center gap-4 py-4">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`w-full text-center py-2 transition-colors duration-200 ${
                    pathname === link.href ? "text-[#D11479] font-semibold" : "hover:text-[#64BBE7]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
