"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PastEdition() {
  return (
    <section className="w-full bg-white border-t border-gray-100" aria-labelledby="past-edition">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-8 py-16 md:py-24">

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 items-start">

            {/* TEXTUAL EDITORIAL */}
            <motion.div className="order-1 lg:self-center" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="max-w-2xl lg:pr-8">
                <div className="flex items-center mb-3 lg:mb-4">
                  <span className="hidden lg:inline-block w-1 h-1 rounded-full bg-[#7b2cbf]/30 mr-3" aria-hidden />
                  <div className="text-xs font-light tracking-[0.18em] text-neutral-500 uppercase">Past edition</div>
                </div>

                <h3 id="past-edition" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight text-black mb-3 lg:mb-4 lg:leading-[1.02]">RIPU 2025</h3>

                <p className="text-sm text-neutral-600 italic mb-4 lg:mb-4">Rencontre Internationale de la Pédagogie Universitaire</p>

                <p className="text-sm text-neutral-700 mb-5 leading-relaxed lg:text-base lg:max-w-[56ch] lg:leading-7 lg:mb-6">A concise look back at the previous RIPU edition: keynote dialogues, peer-reviewed proceedings and institutional collaborations exploring pedagogy, AI and university practice.</p>

                <div className="text-sm text-neutral-600 mb-6 lg:mb-8">
                  <span className="inline-block">Sousse, Tunisia</span>
                  <span className="mx-3 text-neutral-300 hidden lg:inline">·</span>
                  <span className="inline-block mt-1 sm:mt-0 lg:mt-0">30–31 May 2025</span>
                </div>

                <Link href="/ripu25" className="inline-flex items-center gap-3 text-sm text-black/90 hover:text-[#5f4b8b] transition-colors duration-300">
                  <span className="font-medium">Explore edition</span>
                  <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
                    <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* IMAGE FRAME - contained, landscape, subtle overlap */}
            <motion.div
              className="order-2 mt-10 lg:mt-0 flex items-start lg:justify-end"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              <Link href="/ripu25" aria-hidden className="block w-full">
                <div className="relative overflow-hidden rounded-[18px]  border-black/5 bg-neutral-100">
                  <img
                    src="/rr.png"
                    alt="RIPU25 — conference"
                    className="w-full h-[220px] sm:h-[300px] lg:h-[420px] object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
