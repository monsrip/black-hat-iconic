"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

/* ========= TYPES ========= */

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

type GlassProps = {
  children: React.ReactNode;
};

type Service = {
  title: string;
  desc: string;
};

type Team = {
  name: string;
  role: string;
};

/* ========= REUSABLE COMPONENTS ========= */

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <section id={id} className="py-16 md:py-24 lg:py-28 px-4 sm:px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const Glass: React.FC<GlassProps> = ({ children }) => (
  <motion.div
    whileHover={{ scale: 1.03 }}
    className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition"
  >
    {children}
  </motion.div>
);

/* ========= DATA ========= */

const services: Service[] = [
  {
    title: "Software Development",
    desc: "Custom web, mobile, and enterprise applications built for scalability and performance."
  },
  {
    title: "Software Manufacturing",
    desc: "Robust and high-performance software products tailored for industries."
  },
  {
    title: "Networking Solutions",
    desc: "Advanced networking systems, monitoring tools, and enterprise infrastructure."
  }
];

const products: string[] = [
  "Wireless Controllers",
  "Network Monitoring Systems (NMS)",
  "Routers & Switches",
  "IoT Devices"
];

const team: Team[] = [
  { name: "Sumon Mondal", role: "Managing Director (MD)" },
  { name: "Mohan Maity", role: "Chief Technology Officer (CTO)" },
  { name: "Nitam", role: "Chief Operating Officer (COO)" }
];

/* ========= MAIN COMPONENT ========= */

const Home: React.FC = () => {
  return (
    <div className="bg-white text-black font-sans">

      

      {/* HERO */}
      <HeroSection />

      {/* ABOUT */}
      <AboutSection />

      {/* SERVICES */}
      <Section id="services" title="Services">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <Glass key={i}>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                {s.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">{s.desc}</p>
            </Glass>
          ))}
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section id="products" title="Products">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {products.map((p, i) => (
            <Glass key={i}>{p}</Glass>
          ))}
        </div>
      </Section>

      {/* TEAM */}
      <Section id="team" title="Leadership Team">
        <div className="space-y-4 max-w-xl mx-auto">
          {team.map((t, i) => (
            <Glass key={i}>
              <strong className="text-sm sm:text-base">{t.name}</strong>
              <div className="text-xs sm:text-sm text-gray-600">
                {t.role}
              </div>
            </Glass>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact">
        <Glass>
          <p className="text-gray-600 text-center text-sm sm:text-base">
            02, Hazra Ghery, Rathtala, Uttar Chandanpiri, Namkhana,<br />
            West Bengal, 743357, India
          </p>
        </Glass>
      </Section>

    
     

    </div>
  );
};

export default Home;
