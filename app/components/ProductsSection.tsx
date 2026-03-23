"use client";
import { motion } from "framer-motion";
import Link from "next/link";

/* ================= DATA ================= */

const products = [
  {
    title: "Wireless Controllers",
    desc: "Centralized wireless management systems for enterprise networks with high scalability.",
    type: "wireless",
    url: "#",
  },
  {
    title: "Network Monitoring Systems (NMS)",
    desc: "Real-time analytics, monitoring, and intelligent performance tracking solutions.",
    type: "monitoring",
    url: "#",
  },
  {
    title: "Routers & Switches",
    desc: "High-performance networking hardware built for speed, reliability, and scalability.",
    type: "network",
    url: "#",
  },
  {
    title: "IoT Devices",
    desc: "Smart connected devices enabling automation and intelligent infrastructure.",
    type: "iot",
    url: "#",
  },
  {
    title: "MAC Address Generator",
    desc: "Generate random MAC addresses instantly for testing and networking purposes.",
    type: "tools",
    url: "https://www.blackhathunter.com/",
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
                animate={{
                  scale: [1, 1.8, 2.5],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 5,          // slower = smoother
                  repeat: Infinity,
                  ease: "easeInOut",      // 🔥 key for smoothness
                  delay: i * 0.7,         // better spacing
                }}
                className="absolute w-32 h-32 border border-red-900 rounded-full"
            />
            ))}

            {/* SIDE SIGNAL LINES */}
            {[...Array(5)].map((_, i) => (
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


      {type === "monitoring" && (
        <div className="absolute inset-0 overflow-hidden">

          {/* ================= BACKGROUND BARS ================= */}
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between px-10 opacity-20">
            {[20, 40, 30, 60, 45, 70, 35, 55, 25, 65].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [h, h + 20, h] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-[6px] bg-gradient-to-t from-red-600 to-red-400 rounded"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          {/* ================= FLOWING DATA LINES ================= */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: ["-20%", "120%"] }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                ease: "linear",
                delay: i * 1.2,
              }}
              className="absolute w-40 h-[2px] bg-red-500/20 blur-sm"
              style={{
                top: `${20 + i * 20}%`,
              }}
            />
          ))}

          {/* ================= FLOATING PULSE DOTS ================= */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
              className="absolute w-2 h-2 bg-red-400 rounded-full"
              style={{
                left: `${10 + i * 15}%`,
                bottom: `${10 + (i % 3) * 20}%`,
                opacity: 0.2,
              }}
            />
          ))}

          {/* ================= SOFT GLOW LAYER ================= */}
          <div className="absolute inset-0 bg-red-500/5 blur-3xl" />

        </div>
      )}

      {/* ================= NETWORK ================= */}
      {type === "network" && (
        <div className="absolute inset-0 flex items-center justify-center">

          {/* ================= CENTER CORE ================= */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-3 h-3 bg-red-500 rounded-full z-10"
          />

          {/* ================= ORBIT RINGS ================= */}
          {[...Array(5)].map((_, i) => {
            const size = 120 + i * 60;

            return (
              <motion.div
                key={i}
                animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 12 + i * 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute border border-red-500/20 rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* ================= DATA PACKET ================= */}
                <motion.div
                  className="absolute w-2 h-2 bg-red-400 rounded-full"
                  style={{
                    top: "0%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              </motion.div>
            );
          })}

          {/* ================= RADIAL LINES ================= */}
          {/* {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-[2px] h-[200px] bg-red-500/10"
        style={{
          transform: `rotate(${i * 30}deg)`,
        }}
        animate={{ opacity: [0.1, 0.4, 0.1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))} */}

          {/* ================= BACKGROUND FLOW ================= */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: ["-20%", "120%"] }}
              transition={{
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[200%] h-[1px] bg-red-500/5"
              style={{
                top: `${20 + i * 15}%`,
              }}
            />
          ))}

        </div>
      )}

      {/* ================= IOT ================= */}
      {type === "iot" && (
        <div className="absolute inset-0 overflow-hidden">

          <svg className="w-full h-full" viewBox="0 0 400 240">

            {/* ================= CONNECTION MESH ================= */}
            {[
              [40, 60, 120, 40],
              [120, 40, 200, 80],
              [200, 80, 300, 50],
              [40, 160, 120, 140],
              [120, 140, 200, 180],
              [200, 180, 300, 150],
              [120, 40, 120, 140],
              [200, 80, 200, 180],
              [40, 60, 40, 160],
              [300, 50, 300, 150],
            ].map((line, i) => (
              <motion.line
                key={i}
                x1={line[0]}
                y1={line[1]}
                x2={line[2]}
                y2={line[3]}
                stroke="rgba(239,68,68,0.15)"   // 🔥 low opacity
                strokeWidth="1"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* ================= DEVICES ================= */}
            {[
              { x: 40, y: 60 },
              { x: 120, y: 40 },
              { x: 200, y: 80 },
              { x: 300, y: 50 },
              { x: 40, y: 160 },
              { x: 120, y: 140 },
              { x: 200, y: 180 },
              { x: 300, y: 150 },
            ].map((node, i) => (
              <g key={i}>

                {/* DEVICE DOT */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="3"
                  fill="rgba(239,68,68,0.4)"   // low opacity
                />

                {/* SIGNAL PULSE */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r="8"
                  stroke="rgba(248,113,113,0.3)"
                  strokeWidth="1"
                  fill="transparent"
                  animate={{
                    scale: [0.5, 1.8],
                    opacity: [0.3, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />

              </g>
            ))}

            {/* ================= DATA FLOW ================= */}
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={i}
                r="2"
                fill="rgba(255,255,255,0.5)"
                animate={{
                  cx: [40, 120, 200, 300],
                  cy: [60, 40, 80, 50],
                  opacity: [1, 1, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "linear",
                }}
              />
            ))}

          </svg>

          {/* ================= AMBIENT BACKGROUND FLOW ================= */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ x: ["-20%", "120%"] }}
              transition={{
                duration: 12 + i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[200%] h-[1px] bg-red-500/5"
              style={{ top: `${20 + i * 15}%` }}
            />
          ))}

        </div>
      )}

      {type === "tools" && (
  <div className="absolute inset-0 flex items-center justify-center">
    
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        animate={{ rotate: 360 }}
        transition={{
          duration: 10 + i * 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute border border-red-500/10 rounded-full"
        style={{
          width: `${80 + i * 40}px`,
          height: `${80 + i * 40}px`,
        }}
      />
    ))}

    <div className="w-2 h-2 bg-red-500 rounded-full z-10" />
  </div>
)}
    </div>
  );
}

/* ================= MAIN COMPONENT ================= */

export default function ProductsSection() {
  return (
    <section id="products" className="bg-black text-white py-24 px-4 sm:px-6">

      {/* HEADER */}
      <div className="mx-auto text-center mb-20">
        <h2 className="text-3xl sm:text-5xl font-bold">
          Our <span className="text-red-500">Products</span>
        </h2>
        <p className="text-gray-400 mt-4">
          Built for performance, scalability, and future-ready infrastructure.
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="mx-auto space-y-20">

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

                <Link
                  href={p.url} target="_blank"
                  className="mt-4 inline-block px-6 py-2 border border-red-500 rounded-full text-sm hover:bg-red-500 transition"
                >
                  Learn More
                </Link>
              </motion.div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}