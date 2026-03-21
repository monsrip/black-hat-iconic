"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/company/Full-Logo.png"
            alt="Black Hat Iconic Logo"
            width={100}
            height={100}
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-6 text-sm">
          {menu.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-red-600 transition text-black">
              {item.name}
            </a>
          ))}
        </div>

        {/* MOBILE BUTTON (React Icon) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {menu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg hover:text-red-600 transition text-black"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}