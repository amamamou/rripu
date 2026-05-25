export const speakers = [
  {
    slug: 'rym-mamlouk-mellouli',
    name: 'Rym Mamlouk Mellouli',
    affiliation: 'Cairo University',
    country: 'Egypt',
    specialty: 'Educational Technology',
  photo: '/speaker-1.jpg',
    bio: 'Prof. Ahmed Hassan is a leading researcher in educational technology with a focus on blended learning, large-scale deployments of edtech platforms, and evaluation of learning outcomes in higher education.'
  },
  {
    slug: 'marie-fontaine',
    name: 'Dr. Marie Fontaine',
    affiliation: 'University of Paris',
    country: 'France',
    specialty: 'Pedagogy Research',
  photo: '/speaker-2.jpg',
    bio: 'Dr. Marie Fontaine researches curriculum development, reflective practice, and assessment strategies across multidisciplinary university programs.'
  },
  {
    slug: 'elena-rossi',
    name: 'Prof. Elena Rossi',
    affiliation: 'University of Rome',
    country: 'Italy',
    specialty: 'Higher Education Policy',
  photo: '/speaker-3.jpg',
    bio: 'Prof. Elena Rossi studies higher education policy, governance, and international collaboration initiatives among European universities.'
  },
  {
    slug: 'fatima-al-mazrouei',
    name: 'Dr. Fatima Al-Mazrouei',
    affiliation: 'UAE University',
    country: 'UAE',
    specialty: 'Curriculum Innovation',
  photo: '/speaker-1.jpg',
    bio: 'Dr. Fatima focuses on curriculum innovation and inclusive pedagogies, especially in cross-cultural higher education contexts.'
  },
  {
    slug: 'james-thompson',
    name: 'Prof. James Thompson',
    affiliation: 'University of Oxford',
    country: 'United Kingdom',
    specialty: 'Academic Leadership',
  photo: '/speaker-2.jpg',
    bio: 'Prof. James Thompson is known for his work on academic leadership, institutional strategy, and research capacity building.'
  },
  {
    slug: 'yuki-tanaka',
    name: 'Dr. Yuki Tanaka',
    affiliation: 'Tokyo Institute',
    country: 'Japan',
    specialty: 'Learning Analytics',
  photo: '/speaker-3.jpg',
    bio: 'Dr. Yuki Tanaka develops learning analytics approaches for adaptive learning systems and data-driven curriculum improvements.'
  }
];

export function getSpeakerBySlug(slug: string) {
  return speakers.find((s) => s.slug === slug) || null;
}
