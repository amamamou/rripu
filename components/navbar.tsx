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
    { label: 'Program', href: '/program' },
    { label: 'Speakers', href: '/speakers' },
    { label: 'Committee', href: '/committee' },
    { label: 'Venue', href: '/venue' },
    { label: 'Registration', href: '/registration' },
    { label: 'Publications', href: '/publications' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white border-b border-gray-200' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-lg font-light tracking-[0.15em] text-black">
            RIPU<span className="font-semibold">26</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.slice(0, 5).map((item) => (
              <Link key={item.label} href={item.href} className="text-xs font-light tracking-wide text-gray-700 hover:text-black transition-colors duration-300">
                {item.label}
              </Link>
            ))}

            <div className="relative group">
              <button aria-haspopup="true" aria-expanded="false" className="text-xs font-light tracking-wide text-gray-700 hover:text-black transition-colors duration-300">Past Editions</button>
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 shadow-sm hidden group-hover:block group-focus-within:block">
                <div className="p-2">
                  <div className="grid grid-cols-1 gap-1">
                      <Link href="/ripu25" className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition">
                        <div className="w-10 h-10 rounded-md bg-gray-50 flex items-center justify-center text-sm font-medium text-slate-700 border border-gray-100">25</div>
                        <div className="leading-tight">
                          <div className="text-sm font-medium text-slate-900">RIPU25 — Sousse</div>
                          <div className="text-xs text-slate-500">30–31 May 2025</div>
                        </div>
                      </Link>
                    </div>
                </div>
                <div className="border-t px-3 py-2 text-xs text-slate-500">
                  <Link href="/ripu-archive" className="text-slate-700 hover:underline">View all past editions →</Link>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              {navItems.slice(5).map((item) => (
                <Link key={item.label} href={item.href} className="text-xs font-light tracking-wide text-gray-700 hover:text-black transition-colors duration-300">
                  {item.label}
                </Link>
              ))}
            </div>

            <Link href="/registration" className="text-xs font-light tracking-wide text-black border border-black px-5 py-2 hover:bg-black hover:text-white transition-all duration-300">Register</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
