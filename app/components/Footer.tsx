"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-gray-400 pt-16 pb-8 px-6">

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/10 to-black" />
      <div className="absolute inset-0 bg-red-500/5 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12"
        >

          {/* ✅ BRAND WITH LOGO */}
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-4 bg-white/80 border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              <Image
                src="/company/Full-Logo.png" // 🔥 replace if needed
                alt="Black Hat Iconic"
                width={150}
                height={150}
                className="object-contain drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]"
              />

              {/* <h2 className="text-white text-xl font-bold">
                BLACK HAT <span className="text-red-500">ICONIC</span>
              </h2> */}
            </motion.div>

            <p className="text-sm">
              Building next-gen networking solutions, monitoring systems, and intelligent infrastructure.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Products", "Solutions", "Contact"].map((item, i) => (
                <li key={i}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-red-500 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 📍 CONTACT */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm leading-relaxed">
              03, Rathtala,<br />
              Uttar Chandanpiri, Namkhana,<br />
              WB - 743357
            </p>

            <p className="mt-3 text-sm">
              📧 info@blackhaticonic.com
            </p>
            <motion.a
              href="tel:+918942816444"  // 🔥 replace if needed
              whileHover={{ x: 5 }}
              className="block mt-2 text-sm hover:text-red-500 transition"
            >
              📞 +91 9242299009
            </motion.a>
          </div>

          {/* 🗺️ MAP */}
          {/* 🗺️ MAP */}
<div>
  <h3 className="text-white font-semibold mb-4">Location</h3>

  <div className="rounded-xl overflow-hidden border border-white/10">
    <iframe
      src="https://www.google.com/maps?q=M7XJ%2BGC%20Uttar%20Chandanpiri%2C%20West%20Bengal%2C%20India&output=embed"
      width="100%"
      height="160"
      loading="lazy"
      className="w-full h-40 border-0"
    ></iframe>
  </div>
</div>

        </motion.div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mb-6" />

        {/* BOTTOM */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm"
        >

          <p>
            © {new Date().getFullYear()} BLACK HAT ICONIC PRIVATE LIMITED. All rights reserved.
          </p>

        </motion.div>

      </div>
    </footer>
  );
}