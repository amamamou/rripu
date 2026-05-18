"use client";

import { motion } from 'framer-motion';

const proceedings = [
  { year: '2024 - RIPU25', title: 'Proceedings of RIPU25', file: '/proceedings-ripu25.pdf' },
  { year: '2026 - RIPU26 (Preliminary)', title: 'RIPU26 CFP & Proceedings (preliminary)', file: '/cfp-ripu26.pdf' },
];

export default function Publications() {
  return (
    <section className="w-full py-24 bg-white border-t border-gray-200" id="publications">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Publications & Proceedings</h2>
          <p className="text-base font-light text-gray-600">Conference proceedings, publication partners, and indexing information.</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {proceedings.map((p) => (
            <motion.div key={p.year} className="border border-gray-200 p-6 flex items-center justify-between" whileHover={{ y: -2 }}>
              <div>
                <div className="text-sm font-medium text-black">{p.title}</div>
                <div className="text-xs font-light text-gray-600">{p.year} • DOI: 10.0000/RIPU.{p.year.split(' ')[0]}</div>
              </div>
              <div>
                <a href={p.file} download className="text-xs font-light tracking-wide text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition-all duration-300">Download</a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-sm font-light text-gray-600">
          <p>Publication partners: International Journals in Education, IEEE Xplore (pending), Scopus-indexed partner journals. Accepted papers will be eligible for journal fast-track review based on reviewer recommendations.</p>
        </div>
      </div>
    </section>
  );
}
