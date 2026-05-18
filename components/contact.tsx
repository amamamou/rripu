'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={ref} className="w-full py-24 bg-white border-t border-gray-200" id="contact">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Contact &amp; Registration</h2>
          <p className="text-base font-light text-gray-600">Questions about the conference? Please get in touch.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <h3 className="text-sm font-light tracking-wide text-gray-600 uppercase mb-2">Email</h3>
              <a href="mailto:info@ripu2026.org" className="text-lg font-light text-black hover:text-gray-600 transition-colors">
                info@ripu2026.org
              </a>
            </div>
            <div>
              <h3 className="text-sm font-light tracking-wide text-gray-600 uppercase mb-2">Phone</h3>
              <a href="tel:+216" className="text-lg font-light text-black hover:text-gray-600 transition-colors">
                +216 (0) XX XXX XXX
              </a>
            </div>
            <div>
              <h3 className="text-sm font-light tracking-wide text-gray-600 uppercase mb-2">Location</h3>
              <p className="text-lg font-light text-black">Sousse, Tunisia</p>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              // Handle form submission
            }}
          >
            <div>
              <label className="block text-xs font-light tracking-wide text-gray-600 uppercase mb-3">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-gray-300 px-4 py-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-light tracking-wide text-gray-600 uppercase mb-3">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-gray-300 px-4 py-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors bg-white"
              />
            </div>
            <div>
              <label className="block text-xs font-light tracking-wide text-gray-600 uppercase mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={4}
                className="w-full border border-gray-300 px-4 py-3 text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors resize-none bg-white"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full text-xs font-light tracking-wide text-black border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Send
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
