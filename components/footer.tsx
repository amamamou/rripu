'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    'About': ['Conference', 'Objectives', 'History'],
    'Information': ['Call for Papers', 'Program', 'Registration'],
    'Resources': ['Contact', 'Venue', 'Accommodation'],
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-light tracking-[0.15em] text-black">
              RIPU<span className="font-semibold">26</span>
            </h3>
            <p className="text-sm font-light text-gray-600 leading-relaxed">
              International Conference on Research and Innovation in Pedagogy and Universities
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerSections).map((section, index) => (
            <motion.div
              key={section[0]}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xs font-light tracking-wide text-black uppercase">{section[0]}</h4>
              <ul className="space-y-3">
                {section[1].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light text-gray-600 hover:text-black transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gray-200 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        ></motion.div>

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-light text-gray-600">
            &copy; {currentYear} RIPU 2026. All rights reserved.
          </p>
          <p className="text-xs font-light text-gray-600">
            Sousse, Tunisia
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
