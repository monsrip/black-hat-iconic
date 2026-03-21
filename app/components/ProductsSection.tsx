"use client";
import { motion } from "framer-motion";

/* ================= DATA ================= */

const products = [
  {
    title: "Wireless Controllers",
    desc: "Centralized wireless management systems for enterprise networks with high scalability.",
    type: "wireless",
  },
  {
    title: "Network Monitoring Systems (NMS)",
    desc: "Real-time analytics, monitoring, and intelligent performance tracking solutions.",
    type: "monitoring",
  },
  {
    title: "Routers & Switches",
    desc: "High-performance networking hardware built for speed, reliability, and scalability.",
    type: "network",
  },
  {
    title: "IoT Devices",
    desc: "Smart connected devices enabling automation and intelligent infrastructure.",
    type: "iot",
  },
];

/* ================= BACKGROUND VECTOR ================= */

function BackgroundVector({ type }: { type: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* BASE GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-red-900/20 to-black" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* GLOW */}
      <div className="absolute inset-0 bg-red-600/10 blur-3xl" />

      {/* ================= WIRELESS ================= */}
      {type === "wireless" && (
        <div className="relative w-full h-full flex items-center justify-center">

            {/* SIGNAL TOWER */}
            <div className="w-2 h-2 bg-red-500 rounded-full z-10" />

            {/* EXPANDING WAVES */}
            {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
                key={i}
                animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.6,
                }}
                className="absolute w-24 h-24 border border-red-500 rounded-full"
            />
            ))}

            {/* SIDE SIGNAL LINES */}
            {[...Array(3)].map((_, i) => (
            <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="absolute w-16 h-[1px] bg-red-500"
                style={{
                transform: `rotate(${i * 30}deg)`,
                }}
            />
            ))}

        </div>
        )}

      {/* ================= MONITORING ================= */}
      {type === "monitoring" && (
        <div className="relative w-full h-full flex items-center justify-center">

            {/* GRAPH CONTAINER */}
            <div className="w-64 h-40 flex items-end gap-2">

            {[20, 40, 30, 60, 45, 70].map((h, i) => (
                <motion.div
                key={i}
                animate={{ height: [h, h + 15, h] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                }}
                className="w-2 bg-gradient-to-t from-red-600 to-red-400 rounded"
                style={{ height: h }}
                />
            ))}

            </div>

            {/* DATA LINE OVERLAY */}
            <motion.div
            animate={{ x: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-32 h-[2px] bg-red-500/70 blur-sm"
            />

            {/* PULSE DOT */}
            <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute w-2 h-2 bg-red-500 rounded-full bottom-10 left-1/2"
            />

        </div>
        )}

      {/* ================= NETWORK ================= */}
      {type === "network" && (
        <>
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute border border-red-500/20 rounded-full"
              style={{
                width: `${120 + i * 60}px`,
                height: `${120 + i * 60}px`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </>
      )}

      {/* ================= IOT ================= */}
      {type === "iot" && (
        <>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
              className="absolute w-[2px] h-[20px] bg-red-500/60"
              style={{
                left: `${i * 5}%`,
                bottom: "0%",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function ProductsSection() {
  return (
    <section className="bg-black text-white py-24 px-4 sm:px-6">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl sm:text-5xl font-bold">
          Our <span className="text-red-500">Products</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Built for performance, scalability, and future-ready infrastructure.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-6xl mx-auto space-y-20">

        {products.map((p, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-3xl border border-white/10 py-20"
          >

            {/* BACKGROUND VECTOR */}
            <BackgroundVector type={p.type} />

            {/* CONTENT */}
            <div className="relative z-10 px-6 sm:px-12 max-w-3xl">

              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {p.title}
                </h3>

                <p className="text-gray-400">
                  {p.desc}
                </p>

                <button className="mt-4 px-6 py-2 border border-red-500 rounded-full text-sm hover:bg-red-500 transition">
                  Learn More
                </button>
              </motion.div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}