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
            <div className="text-[10px] tracking-[0.28em] uppercase text-neutral-400 mb-6 flex items-center gap-2">
              <span>RIPU 2026</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[0.98] text-black">
              Enseigner et évaluer à l’ère de l’IA et de l’APC
            </h2>

            <p className="mt-8 text-sm md:text-base text-neutral-500 leading-relaxed max-w-xl">
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
            <p className="text-sm leading-relaxed text-neutral-600 max-w-md">
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
                  <div className="mt-0.5 w-1 h-1 rounded-full bg-[#7b2cbf]/40 flex-shrink-0" />
                  <div className="text-sm text-black/95 font-light leading-tight">{item}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
