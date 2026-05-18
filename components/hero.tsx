'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="relative w-full min-h-screen pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <motion.div
                className="text-xs font-light tracking-[0.15em] text-black/60 uppercase"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2 }}
              >
                RIPU26
              </motion.div>

              <motion.h1
                className="text-4xl md:text-5xl font-light leading-tight text-black"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                International Conference on Research &amp; Innovation in Pedagogy and Universities
              </motion.h1>

              <motion.div
                className="space-y-3 text-base font-light text-gray-700"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <p>Sousse, Tunisia</p>
                <p>October 2026</p>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <a
                href="#papers"
                className="inline-block text-xs font-light tracking-wide text-black border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
              >
                Call for Papers
              </a>
              <a
                href="#contact"
                className="inline-block text-xs font-light tracking-wide text-black border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
              >
                Register
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Image Collage */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.div
              className="relative h-64 md:h-80 col-span-1 overflow-hidden bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              <Image
                src="/hero/3.png"
                alt="Sousse, Tunisia"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            <motion.div
              className="relative h-64 md:h-80 col-span-1 overflow-hidden bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <Image
                src="/hero/2.png"
                alt="Conference venue"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="relative h-64 md:h-80 col-span-2 overflow-hidden bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              <Image
                src="/hero/1.png"
                alt="Academic conference"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
