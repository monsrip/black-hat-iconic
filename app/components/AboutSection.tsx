"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            About <span className="text-red-500">BLACK HAT ICONIC</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            BLACK HAT ICONIC is a next-generation technology company specializing in software development,
            networking infrastructure, and electronics product manufacturing. We design, develop, manufacture,
            and sell high-performance networking devices and intelligent systems.
          </p>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Our mission is to deliver scalable, secure, and enterprise-grade solutions by combining
            software intelligence with hardware innovation.
          </p>

          {/* FEATURES */}
          <div className="space-y-3">
            {[
              "Enterprise Software Systems",
              "Networking Product Manufacturing",
              "Secure Infrastructure",
              "Hardware + Software Integration",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE - VECTOR / TECH UI */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center"
        >

          {/* MAIN GLOW CIRCLE */}
          <div className="absolute w-72 h-72 bg-red-600/20 blur-[100px] rounded-full" />

          {/* CENTER CORE */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-40 h-40 border border-red-500 rounded-full flex items-center justify-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-black rounded-full shadow-[0_0_30px_rgba(255,0,0,0.6)]" />
          </motion.div>

          {/* FLOATING TECH NODES */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
              }}
              className="absolute w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_rgba(255,0,0,0.8)]"
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 12}%`,
              }}
            />
          ))}

          {/* CONNECTION LINES */}
          <div className="absolute w-full h-full " />
        </motion.div>

      </div>
    </section>
  );
}