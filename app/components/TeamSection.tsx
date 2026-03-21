"use client";

import { motion } from "framer-motion";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

type Props = {
  team: TeamMember[];
  title?: string;
  id?: string;
};

export default function TeamSection({
  team,
  title = "Leadership Team",
  id = "team",
}: Props) {
  return (
    <section id={id} className="py-24 px-4 sm:px-6 bg-black text-white">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h2 className="text-3xl sm:text-5xl font-bold">
          {title.split(" ")[0]}{" "}
          <span className="text-red-500">
            {title.split(" ").slice(1).join(" ")}
          </span>
        </h2>
        <p className="text-gray-400 mt-4">
          Meet the people behind the innovation.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {team.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-72 cursor-pointer"
          >

            {/* IMAGE */}
            <div className="absolute inset-0 overflow-hidden">
              {t.image ? (
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-red-900/20 to-black">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white text-xl font-bold">
                    {t.name.charAt(0)}
                  </div>
                </div>
              )}
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
              <h3 className="text-lg font-semibold text-white">
                {t.name}
              </h3>
              <p className="text-sm text-gray-300">
                {t.role}
              </p>
            </div>

            {/* GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 via-transparent to-red-500/10" />

          </motion.div>
        ))}

      </div>
    </section>
  );
}