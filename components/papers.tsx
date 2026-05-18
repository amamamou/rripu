'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Papers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const categories = [
    { title: 'AI in Education', count: '45+' },
    { title: 'Learning Analytics', count: '38+' },
    { title: 'Smart Universities', count: '42+' },
    { title: 'Digital Learning', count: '35+' },
    { title: 'Human-Centered AI', count: '40+' },
    { title: 'Educational Innovation', count: '48+' },
  ];

  return (
    <section ref={ref} className="w-full py-24 bg-white border-t border-gray-200" id="papers">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Call for Papers</h2>
          <p className="text-base font-light text-gray-600">Research topics and submission guidelines</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 p-8 hover:border-gray-400 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <h3 className="text-lg font-light text-black mb-3">{category.title}</h3>
              <p className="text-sm font-light text-gray-600">{category.count} papers submitted</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 border-t border-gray-200 pt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-sm font-light text-gray-600 mb-6">Submit your research paper on innovative pedagogical methods and higher education transformation.</p>
          <a
            href="#contact"
            className="inline-block text-xs font-light tracking-wide text-black border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
          >
            Submit Paper
          </a>
        </motion.div>
      </div>
    </section>
  );
}
