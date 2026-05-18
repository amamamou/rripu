'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Venue() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="w-full bg-white" id="venue">
      {/* Large image section */}
      <motion.div
        className="relative h-96 md:h-[500px] w-full bg-gray-200 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/hero/vv.png"
          alt="RIPU Conference Venue in Sousse, Tunisia"
          fill
          className="object-cover"
          priority={false}
        />
      </motion.div>

      {/* Text section */}
      <div className="border-t border-gray-200 py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-black">Sousse, Tunisia</h2>
              <p className="text-base font-light text-gray-700 leading-relaxed">
                Located on the Mediterranean coast, Sousse offers an elegant backdrop for academic discourse. The conference venue combines modern facilities with the timeless charm of this historic university city.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-sm font-light tracking-wide text-black uppercase mb-6">Accommodation</h3>
                <p className="text-base font-light text-gray-700">Curated selection of premium hotels within walking distance. Mediterranean hospitality meets modern luxury.</p>
              </motion.div>
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <h3 className="text-sm font-light tracking-wide text-black uppercase mb-6">Transportation</h3>
                <p className="text-base font-light text-gray-700">Easy access via Monastir Airport. Local transportation, car rental, and airport transfer services available.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
