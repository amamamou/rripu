'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Call for Papers', href: '/call-for-papers' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Committee', href: '/committee' },
    { label: 'Past Editions', href: '/ripu-archive' },
    { label: 'Venue', href: '/venue' },
    { label: 'Registration', href: '/registration' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 font-[family-name:var(--font-montserrat)] ${
        scrolled ? 'bg-white border-b border-gray-200' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-light tracking-[0.15em] text-black flex items-center gap-2">
            <span>RIPU</span>
            <span className="font-semibold text-[#2F0461]/40">26</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(0, 5).map((item) => (
              <Link key={item.label} href={item.href} className="text-xs font-light tracking-wide text-gray-700 hover:text-black transition-colors duration-300">
                {item.label}
              </Link>
            ))}

          

            <div className="hidden lg:flex items-center gap-6">
              {navItems.slice(5).map((item) => (
                <Link key={item.label} href={item.href} className="text-xs font-light tracking-wide text-gray-700 hover:text-black transition-colors duration-300">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="inline-flex items-center">
              <Link
                href="/registration"
                className="group relative text-xs font-light tracking-wide text-black border border-[#1B1142] px-5 py-2 transition-all duration-300 hover:pr-8 hover:border-[#1B1142] hover:bg-[#A64DFF]/5 hover:text-black inline-flex items-center"
              >
                <span>Soummetre une communication</span>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 text-[#1B1142]" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
