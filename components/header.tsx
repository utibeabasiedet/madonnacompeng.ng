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

  { label: "Curriculum", href: "/curriculum" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 h-[12vh]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/MadonnaUniversityNigeria.png"
            alt="Logo"
            width={300}
            height={50}
            className="w-44 md:w-64 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors font-medium ${
                pathname === link.href ? "text-[#D11479]" : "hover:text-[#64BBE7] text-[#192F59]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#192F59]"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     <AnimatePresence>
  {isOpen && (
    <>
      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-[80%] max-w-sm h-full bg-[#192F59] text-white z-50 shadow-2xl flex flex-col"
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-red-500 transition"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col divide-y divide-gray-600 text-lg font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-6 py-4 transition-colors ${
                pathname === link.href
                  ? "text-[#D11479] bg-[#1f3b6b]"
                  : "text-gray-200 hover:text-[#64BBE7]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </motion.div>

      {/* Background overlay */}
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
      />
    </>
  )}
</AnimatePresence>

    </nav>
  );
}
