'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const sponsors = [
    'Ministry of Higher Education - Tunisia',
    'UNESCO',
    'European Association for Universities',
    'International Academic Federation',
    'Research Excellence Council',
    'Global Pedagogy Institute',
  ];

  return (
    <section ref={ref} className="w-full py-24 bg-white border-t border-gray-200" id="sponsors">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Partners &amp; Supporters</h2>
          <p className="text-base font-light text-gray-600">Supported by leading international institutions and organizations</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 p-8 hover:border-gray-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <p className="text-base font-light text-black">{sponsor}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
