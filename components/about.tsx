'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="w-full py-24 bg-white border-t border-gray-200" id="about">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-black">
              A Global Platform for Academic Excellence
            </h2>
            <p className="text-base font-light text-gray-700 leading-relaxed">
              RIPU 2026 brings together international scholars, researchers, and educators to explore innovation in pedagogy and universities. Set in the Mediterranean charm of Sousse, Tunisia, the conference fosters global academic collaboration and the exchange of groundbreaking research.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-gray-200 pt-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { label: 'Research Papers', description: 'Peer-reviewed publications on educational innovation' },
              { label: 'Keynote Speakers', description: 'Global leaders in higher education and research' },
              { label: 'Workshops', description: 'Interactive sessions on emerging pedagogical methods' },
              { label: 'Networking', description: 'Connect with academics and researchers worldwide' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <h3 className="text-sm font-light tracking-wide text-black uppercase">{item.label}</h3>
                <p className="text-base font-light text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
