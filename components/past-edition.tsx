"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PastEdition() {
  return (
    <section className="w-full py-24 bg-white border-t border-gray-100" aria-labelledby="past-edition">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left editorial block */}
          <div>
            <div className="text-xs font-light tracking-[0.15em] text-black/60 uppercase mb-4">Past Edition</div>
            <h3 id="past-edition" className="text-3xl md:text-4xl font-light text-black mb-4">RIPU 2025</h3>
            <p className="text-sm text-gray-700 italic mb-4">Rencontre Internationale de la Pédagogie Universitaire</p>

            <p className="text-base text-gray-700 mb-6 max-w-xl">A short history of the previous RIPU conference exploring innovation in higher education, artificial intelligence, and modern university pedagogy.</p>

            <div className="text-sm text-gray-600 mb-6">
              <div>Sousse, Tunisia</div>
              <div className="mt-1">30–31 May 2025</div>
            </div>

            <Link href="/ripu25" className="inline-flex items-center text-sm font-medium text-black border border-black px-5 py-3 hover:bg-black hover:text-white transition-colors duration-200">
              Explore Edition
              <span className="ml-3 text-black/60">→</span>
            </Link>
          </div>

          {/* Right cinematic image - show full image (no fixed height) */}
          <motion.div
            className="w-full flex items-center justify-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/ripu25" aria-hidden>
              {/* Keep the full image visible but constrain its visual size with responsive max-height */}
              <img
                src="/ripu.jpg"
                alt="RIPU25 — conference"
                className="w-full h-auto max-h-[280px] md:max-h-[420px] lg:max-h-[560px] object-contain mx-auto"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
