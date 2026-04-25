"use client";

import { motion } from "framer-motion";

type Props = {
  title?: string;
  id?: string;
};

export default function ContactSection({
  title = "Contact",
  id = "contact",
}: Props) {
  return (
    <section id={id} className="py-24 px-4 sm:px-6 bg-black text-white">

      {/* HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold">
          {title.split(" ")[0]}{" "}
          <span className="text-red-500">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>
        <p className="text-gray-400 mt-4">
          Reach out to us for business inquiries and collaborations.
        </p>
      </div>

      {/* CONTACT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 text-center overflow-hidden"
      >

        {/* GLOW EFFECT */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10 blur-xl" />

        {/* ICON */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-500/10 flex items-center justify-center"
        >
          📍
        </motion.div>

        {/* ADDRESS */}
        <p className="relative z-10 text-gray-300 text-sm sm:text-base leading-relaxed">
          03, Rathtala, Uttar Chandanpiri, Namkhana,<br />
          WB - 743357
        </p>

        {/* BOTTOM LINE ANIMATION */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] bg-red-500"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1 }}
        />

      </motion.div>
    </section>
  );
}