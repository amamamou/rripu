'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    { number: '5000+', label: 'Attendees', delay: 0 },
    { number: '150+', label: 'Speakers', delay: 0.1 },
    { number: '50+', label: 'Countries', delay: 0.2 },
    { number: '200+', label: 'Papers', delay: 0.3 },
  ];

  return (
    <section ref={ref} className="w-full py-20 bg-white border-t border-gray-200" id="stats">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="border-l border-gray-300 pl-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: stat.delay }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-light text-black mb-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: stat.delay + 0.15 }}
              >
                {stat.number}
              </motion.div>
              <p className="text-xs font-light tracking-wide text-gray-600 uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
