"use client";
import React from "react";
import { motion } from "framer-motion";

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

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3">
          <h1 className="text-base sm:text-lg md:text-xl font-bold text-red-600">
            BLACK HAT ICONIC
          </h1>
          <div className="hidden md:flex space-x-6 text-sm">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#products">Products</a>
            <a href="#team">Team</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-4 sm:px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-4 md:mb-6">
            BLACK HAT ICONIC
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-gray-600">
            Engineering the future of software, networking, and intelligent systems.
          </p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <Section id="about" title="About Us">
        <Glass>
          <p className="text-gray-600 text-sm sm:text-base">
            BLACK HAT ICONIC is a technology company specializing in software development,
            networking infrastructure, and electronics manufacturing. We build scalable,
            secure, and high-performance solutions for modern businesses.
          </p>
        </Glass>
      </Section>

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

      {/* FOOTER */}
      <footer className="text-center py-4 text-xs sm:text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} BLACK HAT ICONIC
      </footer>

    </div>
  );
};

export default Home;
