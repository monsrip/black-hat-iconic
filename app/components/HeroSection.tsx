"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection: React.FC = () => (
  <section className="relative min-h-[100vh] flex items-center justify-center text-white px-4 overflow-hidden">

    {/* 🎥 VIDEO BACKGROUND */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/company/company.mp4" type="video/mp4" />
    </video>

    {/* 🔥 DARK OVERLAY (important for readability) */}
    <div className="absolute inset-0 bg-black/60" />

    {/* CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-4xl text-center space-y-6"
    >
      <h1 className="text-3xl sm:text-5xl font-extrabold">
       <span className="text-black-500">Black Hat</span> <span className="text-red-500">Iconic</span>  
      </h1>

      <p className="text-sm sm:text-base text-gray-200">
        Secure software, resilient networking, and industrial-grade electronics
        for next-gen digital infrastructure.
      </p>

      <Link
        href="#services"
        className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 text-sm font-semibold transition hover:bg-indigo-400"
      >
        Explore Services
      </Link>
    </motion.div>

  </section>
);

export default HeroSection;