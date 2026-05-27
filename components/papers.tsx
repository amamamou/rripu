"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ConferenceAxes() {
  const axes = [
    {
      number: "01",
      title: "Intelligence Artificielle Générative & Enseignement",
      items: [
        "L'IAG comme tuteur d'apprentissage",
        "L'IAG et le geste enseignant",
        "L'IAG pour la correction des examens",
        "Les effets de l'IAG sur les apprentissages",
      ],
    },
    {
      number: "02",
      title: "Approches pédagogiques",
      items: [
        "L’approche par compétences (APC)",
        "Les plans d’études à l’ère de l’IA et de l’APC",
        "La gamification comme levier d’apprentissage",
      ],
    },
    {
      number: "03",
      title: "Genre & Éducation",
      items: [
        "La place des femmes dans l’éducation",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#1B1142] py-40 md:py-52">

      {/* Atmospheric background */}
      <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full bg-[#A64DFF]/[0.05] blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="max-w-6xl">

          <div className="text-[10px] uppercase tracking-[0.28em] text-[#D7B8FF]/60 mb-8">
            Appel à communication 
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-[82px] font-extralight leading-[0.94] tracking-tight text-white max-w-5xl">
            Partager les recherches qui façonnent l’enseignement de demain.
          </h2>

          {/* Intro + CTA */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14 items-start">

            <p className="text-base md:text-lg leading-relaxed text-white/58 max-w-3xl font-light">
              RIPU26 invite chercheurs, enseignants, doctorants et professionnels
              de l’éducation à proposer des communications explorant les mutations
              pédagogiques, institutionnelles et humaines à l’ère de l’intelligence
              artificielle et de l’approche par compétences.
            </p>

            {/* Editorial CTA */}
            <div className="border-l border-white/10 pl-8">

              <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-[#A64DFF]/70">

                <span className="relative inline-flex items-center mr-2">
                  {/* slower, softer outer pulse for a professional feel */}
                  <span className="absolute inline-flex w-4 h-4 rounded-full bg-[#A64DFF]/20 motion-safe:animate-[ping_0.9s_linear_infinite] motion-reduce:animate-none" />
                  {/* gentle pulse on the center */}
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-[#A64DFF] shadow-[0_0_0_6px_rgba(166,77,255,0.04)] motion-safe:animate-[pulse_0.9s_ease-in-out_infinite] motion-reduce:animate-none" />
                </span>

                Soumissions ouvertes

              </div>

              <Link
                href="/call-for-papers"
                className="group mt-5 inline-flex items-center gap-4"
              >

                <span className="text-white text-sm md:text-base transition-colors duration-300 group-hover:text-[#D7B8FF]">
                  Soumettre une communication
                </span>

                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-[#A64DFF] transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14M13 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

              </Link>

              <div className="mt-5 text-sm text-white/35">
                Date limite de dépôt — 01 Juillet 2026
              </div>

            </div>

          </div>


        </div>

        {/* AXES HEADER */}
        <div className="mt-28 mb-14">

          <div className="text-[10px] uppercase tracking-[0.28em] text-[#A64DFF]/65">
            Thématiques du colloque
          </div>

        </div>

        {/* AXES */}
        <div className="border-t border-white/[0.08]">

          {axes.map((axis, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
              }}
              className="grid grid-cols-1 lg:grid-cols-[120px_1fr_380px] gap-10 py-14 border-b border-white/[0.06]"
            >

              {/* Number */}
              <div className="text-[#A64DFF]/35 text-xl font-light">
                {axis.number}
              </div>

              {/* Title */}
              <div>

                <h3 className="text-2xl md:text-4xl lg:text-5xl font-extralight leading-[1.04] tracking-tight text-white">
                  {axis.title}
                </h3>

              </div>

              {/* Topics */}
              <div className="space-y-4 lg:pt-1">

                {axis.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4"
                  >

                    <div className="w-1 h-1 rounded-full bg-[#A64DFF]/50 mt-2.5 flex-shrink-0" />

                    <p className="text-sm leading-relaxed text-white/48 font-light">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom usability section */}
        <div className="mt-32 pt-14 border-t border-white/[0.06]">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-12 gap-x-10">

            <div>
              <div className="flex items-center gap-3 mb-5">

                <div className="w-6 h-px bg-[#A64DFF]/40" />

                <span className="text-[10px] uppercase tracking-[0.24em] text-[#A64DFF]/65">
                  Langues
                </span>

              </div>

              <p className="text-sm leading-relaxed text-white/45 font-light">
                Français et anglais
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">

                <div className="w-6 h-px bg-[#A64DFF]/40" />

                <span className="text-[10px] uppercase tracking-[0.24em] text-[#A64DFF]/65">
                  Évaluation
                </span>

              </div>

              <p className="text-sm leading-relaxed text-white/45 font-light">
                Double évaluation anonyme par le comité scientifique.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">

                <div className="w-6 h-px bg-[#A64DFF]/40" />

                <span className="text-[10px] uppercase tracking-[0.24em] text-[#A64DFF]/65">
                  Formats
                </span>

              </div>

              <p className="text-sm leading-relaxed text-white/45 font-light">
                Communications orales, ateliers et posters scientifiques.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">

                <div className="w-6 h-px bg-[#A64DFF]/40" />

                <span className="text-[10px] uppercase tracking-[0.24em] text-[#A64DFF]/65">
                  Publication
                </span>

              </div>

              <p className="text-sm leading-relaxed text-white/45 font-light">
                Actes du colloque et sélection de communications publiées.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}