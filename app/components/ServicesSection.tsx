"use client";
import { motion } from "framer-motion";
import {
  HiCode,
  HiServer,
  HiShieldCheck,
  HiChip,
  HiCloud,
  HiWifi,
  HiDatabase,
  HiCog,
} from "react-icons/hi";

const services = [
  {
    title: "Enterprise Software Systems",
    desc: "Scalable enterprise applications, ERP systems, and custom software designed for high-performance business operations.",
    icon: <HiCode />,
  },
  {
    title: "Custom Software Solutions",
    desc: "Tailored web and mobile applications built to meet specific business needs with modern technologies.",
    icon: <HiCog />,
  },
  {
    title: "Networking Product Manufacturing",
    desc: "Design, development, and manufacturing of advanced networking devices including routers, controllers, and switches.",
    icon: <HiServer />,
  },
  {
    title: "Wireless & Network Infrastructure",
    desc: "Deployment of wireless networks, access points, and large-scale enterprise networking solutions.",
    icon: <HiWifi />,
  },
  {
    title: "Secure Infrastructure",
    desc: "Enterprise-grade cybersecurity solutions including firewalls, monitoring, and threat protection systems.",
    icon: <HiShieldCheck />,
  },
  {
    title: "Network Monitoring Systems (NMS)",
    desc: "Development and implementation of intelligent monitoring systems for real-time network performance and security tracking.",
    icon: <HiDatabase />,
  },
  {
    title: "Hardware + Software Integration",
    desc: "Seamless integration of hardware devices with intelligent software systems for automation and smart operations.",
    icon: <HiChip />,
  },
  {
    title: "Cloud & Infrastructure Solutions",
    desc: "Cloud deployment, hybrid infrastructure setup, and DevOps solutions for scalable and reliable systems.",
    icon: <HiCloud />,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-black text-white">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Our <span className="text-red-500">Services</span>
        </h2>
        <p className="text-gray-400 mt-4 text-sm sm:text-base">
          Delivering powerful solutions across software, networking, and hardware systems.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="relative group p-[1px] rounded-2xl bg-gradient-to-br from-red-500/40 to-transparent"
          >
            {/* CARD */}
            <div className="h-full bg-black rounded-2xl p-6 border border-white/10 group-hover:border-red-500 transition">

              {/* ICON */}
              <div className="text-3xl text-red-500 mb-4 group-hover:scale-110 transition">
                {s.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-semibold mb-2">
                {s.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {s.desc}
              </p>

              {/* GLOW EFFECT */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-red-500/10 blur-xl" />

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}