"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

type Member = {
  name: string;
  institution: string;
  country: string;
  photo?: string;
};

type CommitteeGroup = {
  role: string;
  members: Member[];
};

const committees: CommitteeGroup[] = [
  {
    role: 'General Chairs',
    members: [
      { name: 'Sonia Sahli', institution: 'ISET Sousse, Tunisie', country: 'Tunisia', photo: '/team/1.png' },
      { name: 'Denis Gillet', institution: 'EPFL, Suisse', country: 'Switzerland', photo: '/team/2.png' },
      { name: 'Thierry Spriet', institution: 'Avignon Université, France', country: 'France', photo: '/team/3.png' },
    ],
  },
  {
    role: 'Program Chairs',
    members: [
      { name: 'Dr. Anna Müller', institution: 'University of Berlin', country: 'Germany' },
      { name: 'Prof. James Thompson', institution: 'University of Oxford', country: 'United Kingdom' },
    ],
  },
  {
    role: 'Organizing Committee',
    members: [
      { name: 'Maram Amamou', institution: 'ESSTHS', country: 'Tunisia', photo: '/team/4.png' },
      { name: 'Ahmed Ksontini', institution: 'ISET Sousse', country: 'Tunisia', photo: '/team/5.png' },
    ],
  },
  {
    role: 'Scientific Committee',
    members: [
      { name: 'Prof. Elena Rossi', institution: 'University of Rome', country: 'Italy' },
      { name: 'Dr. Yuki Tanaka', institution: 'Tokyo Institute', country: 'Japan' },
      { name: 'Dr. Marie Fontaine', institution: 'University of Paris', country: 'France' },
    ],
  },
  {
    role: 'International Advisory Board',
    members: [
      { name: 'Prof. Carlos Mendes', institution: 'University of Lisbon', country: 'Portugal' },
      { name: 'Dr. Susan Park', institution: 'University of Toronto', country: 'Canada' },
    ],
  },
  {
    role: 'Local Organizers',
    members: [
      { name: 'Sonia Sahli', institution: 'ISET Sousse, Tunisie', country: 'Tunisia', photo: '/team1.jpg' },
      { name: 'Denis Gillet', institution: 'EPFL, Suisse', country: 'Switzerland', photo: '/team2.jpg' },
      { name: 'Thierry Spriet', institution: 'Avignon Université, France', country: 'France', photo: '/team3.jpg' },
    ],
  },
];

export default function Committee() {
  return (
    <section className="w-full py-24 bg-white border-t border-gray-200" id="committee">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-black mb-4">Committee</h2>
          <p className="text-base font-light text-gray-600">A multi-layered committee structure ensuring rigorous peer review and international participation.</p>
        </div>

        <div className="space-y-12">
          {committees.map((group) => (
            <div key={group.role} className="border border-gray-100 p-8">
              <h3 className="text-lg font-medium text-black mb-6">{group.role}</h3>
              {group.role === 'General Chairs' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                  {group.members.map((m) => (
                    <motion.div
                      key={m.name}
                      className="flex flex-col items-center text-center p-6 border border-gray-100"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden bg-gray-100 mb-4">
                        <Image src={m.photo || '/portrait-placeholder.jpg'} alt={m.name} fill className="object-cover" />
                      </div>
                      <div className="text-lg font-medium text-black">{m.name}</div>
                      <div className="text-sm font-light text-gray-600">{m.institution}</div>
                      <div className="text-xs font-light text-gray-500 mt-1">{m.country}</div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {group.members.map((m) => (
                    <div key={m.name} className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden relative flex-shrink-0">
                        <Image src={m.photo || '/portrait-placeholder.jpg'} alt={m.name} fill className="object-cover" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-black">{m.name}</div>
                        <div className="text-xs font-light text-gray-600">{m.institution}</div>
                        <div className="text-xs font-light text-gray-500 mt-1">{m.country}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
