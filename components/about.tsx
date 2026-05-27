"use client";

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  const intro = {
    headline: 'A global forum for scholarship and practice',
    lead:
      'RIPU is an annual international conference convening researchers, educators and institutional leaders to advance pedagogy and higher‑education practice through peer‑reviewed research, keynote dialogue, and practice‑focused workshops.',
    support:
      'Hosted in Sousse, Tunisia, RIPU foregrounds interdisciplinary exchange and institutional collaboration across editions.'
  };

  const highlights = [
    'Peer-reviewed research papers',
    'International keynote sessions',
    'Academic workshops & dialogue',
    'Global institutional collaboration'
  ];

  // motion variants are handled inline to keep types simple and readable

  return (
    <section
      ref={ref}
      id="about"
      className="relative w-full bg-white overflow-hidden"
    >
  <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32">

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-24 items-start">

          {/* LEFT */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={inView ? (shouldReduceMotion ? {} : { opacity: 1, y: 0 }) : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="text-[10px] tracking-[0.28em] uppercase text-[#6C2EB7]/60 mb-6 flex items-center gap-2">
              <span>RIPU 2026</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[0.98] text-black">
              Enseigner et évaluer à l’ère de l’IA et de l’APC
            </h2>

            <p className="mt-8 text-sm md:text-base text-[#1B1142]/65 leading-relaxed max-w-xl">
              Hosted annually in Sousse, Tunisia, RIPU brings together researchers,
              educators, and institutional leaders to explore emerging perspectives in
              higher education through dialogue, scholarship, and interdisciplinary collaboration.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
            animate={inView ? (shouldReduceMotion ? {} : { opacity: 1, y: 0 }) : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:pt-32"
          >
            <p className="text-sm leading-relaxed text-[#1B1142]/75 max-w-md">
              Each edition of RIPU features peer-reviewed research presentations,
              keynote sessions, workshops, and institutional dialogue advancing innovation
              in teaching, learning, and university practice across disciplines.
            </p>

            {/* Highlights: mobile-first editorial tags */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
              {highlights.map((item, idx) => (
                <div
                  key={item}
                  className={`flex items-start gap-3`}
                >
                  <div className="mt-0.5 w-1 h-1 rounded-full bg-[#A64DFF]/50 flex-shrink-0" />
                  <div className="text-sm text-black/95 font-light leading-tight">{item}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>

{/* Important dates */}
<motion.div
  initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
  animate={inView ? (shouldReduceMotion ? {} : { opacity: 1, y: 0 }) : {}}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="border-t border-[#1B1142]/[0.06]"
>

  <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-16">

    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-14">

      {/* Section label */}
      <div className="flex items-center gap-4 pt-1">

        <div className="w-8 h-px bg-[#A64DFF]/40" />

        <span className="text-[11px] uppercase tracking-[0.28em] text-[#6C2EB7]/70 whitespace-nowrap font-medium">
          Dates importantes
        </span>

      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-20 gap-y-12">

        {/* Appel */}
        <div className="group">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-9 h-9 rounded-full bg-[#FAF7FF] flex items-center justify-center text-[#6C2EB7] transition-all duration-300 group-hover:bg-[#F3ECFF]">

              {/* announcement / megaphone */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 11v2a1 1 0 001 1h2l5 4V6l-5 4H4a1 1 0 00-1 1z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 9.5a4.5 4.5 0 010 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

            </div>

            <div className="text-[11px] uppercase tracking-[0.22em] text-[#6C2EB7]/65 font-medium">
              Appel
            </div>

          </div>

          <div className="text-[15px] text-[#1B1142]/90 font-normal">
            01 Juin 2026
          </div>

        </div>

        {/* Dépôt */}
        <div className="group">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-9 h-9 rounded-full bg-[#FAF7FF] flex items-center justify-center text-[#6C2EB7] transition-all duration-300 group-hover:bg-[#F3ECFF]">

              {/* upload / submission */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 16V4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M8 8l4-4 4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 20h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

            </div>

            <div className="text-[11px] uppercase tracking-[0.22em] text-[#6C2EB7]/65 font-medium">
              Dépôt
            </div>

          </div>

          <div className="text-[15px] text-[#1B1142]/90 font-normal">
            01 Juillet 2026
          </div>

        </div>

        {/* Résultats */}
        <div className="group">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-9 h-9 rounded-full bg-[#FAF7FF] flex items-center justify-center text-[#6C2EB7] transition-all duration-300 group-hover:bg-[#F3ECFF]">

              {/* validation / acceptance */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M20 7L9 18l-5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

            </div>

            <div className="text-[11px] uppercase tracking-[0.22em] text-[#6C2EB7]/65 font-medium">
              Résultats
            </div>

          </div>

          <div className="text-[15px] text-[#1B1142]/90 font-normal">
            15 Juillet 2026
          </div>

        </div>

        {/* Conference */}
        <div className="group">

          <div className="flex items-center gap-3 mb-5">

            <div className="w-9 h-9 rounded-full bg-[#FAF7FF] flex items-center justify-center text-[#6C2EB7] transition-all duration-300 group-hover:bg-[#F3ECFF]">

              {/* conference / people */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="9"
                  cy="7"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M23 21v-2a4 4 0 00-3-3.87"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

            </div>

            <div className="text-[11px] uppercase tracking-[0.22em] text-[#6C2EB7]/65 font-medium">
              Colloque
            </div>

          </div>

          <div className="text-[15px] text-[#1B1142]/90 font-normal">
            30–31 Octobre 2026
          </div>

        </div>

      </div>

    </div>

  </div>

</motion.div>
    </section>

  );
}
