"use client";

import { motion } from 'framer-motion';

const tiers = [
  { title: 'Student', price: '€120', features: ['Access to all sessions', 'Conference materials', 'Coffee breaks'] },
  { title: 'Academic', price: '€250', features: ['Access to all sessions', 'Proceedings', 'Lunch & Networking'] },
  { title: 'Industry', price: '€450', features: ['All-access pass', 'Exhibition area', 'Conference dinner'] },
];

export default function Registration() {
  return (
    <section className="w-full py-24 bg-white border-t border-gray-200" id="registration">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Registration</h2>
          <p className="text-base font-light text-gray-600">Choose the registration category that best fits your affiliation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <motion.div key={tier.title} className="border border-gray-200 p-8" whileHover={{ y: -4 }}>
              <h3 className="text-lg font-medium text-black mb-2">{tier.title}</h3>
              <div className="text-3xl font-light text-black mb-4">{tier.price}</div>
              <ul className="mb-6 text-sm font-light text-gray-600 space-y-2">
                {tier.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#contact" className="inline-block text-xs font-light tracking-wide text-black border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300">Register</a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 border-t border-gray-200 pt-12">
          <h4 className="text-sm font-light text-black mb-4">Payment & Cancellation</h4>
          <p className="text-sm font-light text-gray-600">Payment is available via bank transfer or credit card. Cancellation refunds are subject to the policy in the registration guidelines.</p>
        </div>
      </div>
    </section>
  );
}
