import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SpeakerCard from '@/components/speaker-card';
import { speakers as speakersData } from '@/lib/speakers';
import Programme from '@/components/programme';

export const metadata = {
  title: 'RIPU25 — Archive',
  description: 'Archive of RIPU25 — proceedings, featured speakers, gallery and reflections.',
};

export default function RIPU25() {
  const localPhotos = ['/team/11.png', '/team/22.png', '/team/33.png', '/team/66.png'];
  const localSpeakers = [
    {
      slug: 'sonia-sahli',
      name: 'Sonia Sahli',
      specialty: 'Experte en ingénierie pédagogique',
      affiliation: 'ISET Sousse',
      country: 'Tunisia',
      photo: localPhotos[0],
    },
    {
      slug: 'denis-gillet',
      name: 'Denis Gillet',
      specialty: 'Président de Graasp.org',
      affiliation: 'EPFL',
      country: 'Switzerland',
      photo: localPhotos[1],
    },
    {
      slug: 'thierry-spriet',
      name: 'Thierry Spriet',
      specialty: 'Maître de conférences HC',
      affiliation: 'Avignon Université',
      country: 'France',
      photo: localPhotos[2],
    },
    {
      slug: 'nawel-souissi',
      name: 'Nawel Souissi',
      specialty: 'Experte en accréditation internationale',
      affiliation: 'PRISTINI School of AI',
      country: 'Tunisia',
      photo: localPhotos[3],
    },
  ];
  return (
    <main className="w-full min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero: refined editorial intro with desktop image */}
      <section className="w-full bg-white">
        <div className="container mx-auto px-6 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-8 items-center">

            {/* Text */}
            <div>
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight leading-tight text-slate-900">Rencontre Internationale<br/>de la Pédagogie Universitaire — RIPU 25</h1>
                <p className="mt-4 text-sm text-neutral-600 max-w-3xl">L'enseignement universitaire à l'ère de l'IA et la recherche appliquée</p>
              </div>
            </div>

            {/* Desktop image (hidden on mobile to preserve mobile composition) */}
              <div className="hidden lg:flex justify-end items-start">
                <div className="w-full max-w-[360px] transform lg:translate-y-6">
                  <div className="rounded-[12px] overflow-hidden bg-neutral-100" >
                    <img src="/rr.png" alt="RIPU 25 — conference" className="w-full h-[240px] md:h-[280px] lg:h-[320px] object-cover" />
                  </div>
                </div>
              </div>

          </div>
        </div>
      </section>

      <div className="container mx-auto py-12 px-6">
        {/* French intro (polished) */}
        <section className="mt-8 max-w-3xl text-neutral-800">
          <h2 className="text-2xl font-light mb-4">Rencontre Internationale de la Pédagogie Universitaire</h2>
          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            L'intelligence artificielle transforme nos façons d'enseigner et d'apprendre. Les universités doivent
            s'adapter, innover et créer des réponses pédagogiques rigoureuses et éthiques. C'est dans cet esprit que
            l'ISET de Sousse a organisé RIPU 25 — un rassemblement international d'experts et d'enseignants dédié à
            l'avenir de l'enseignement supérieur à l'ère de l'IA.
          </p>

          <p className="text-sm text-neutral-700 leading-relaxed mb-4">
            RIPU 25 a réuni des intervenants et praticiens de plusieurs pays pour partager perspectives, méthodes et
            résultats empiriques. Au programme : conférences, ateliers pratiques et discussions visant à imaginer une
            pédagogie plus moderne, efficace et inclusive.
          </p>

          <p className="text-sm text-neutral-700 leading-relaxed">
            L'objectif de RIPU 25 est simple : accompagner les universités dans la formation des étudiants de demain,
            en s'appuyant sur des pratiques pédagogiques informées par la recherche et la technologie.
          </p>
        </section>

        {/* Key figures removed per editorial direction */}

        {/* Featured speakers */}
        <section className="mt-12">
          <h2 className="text-2xl font-light">Featured Speakers</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {localSpeakers.map((sp) => (
              <div key={sp.slug}>
                <Link href={`/speakers/${sp.slug}`} className="block">
                  <SpeakerCard
                    name={sp.name}
                    title={sp.specialty}
                    institution={sp.affiliation}
                    country={sp.country}
                    image={sp.photo}
                    colored={true}
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Programme sélectionné (refined component) */}
        <Programme />

        {/* Gallery */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image src="/ripu/1.png" alt="Gallery 1" width={1200} height={800} className="rounded" />
            <Image src="/ripu/2.png" alt="Gallery 2" width={1200} height={800} className="rounded" />
          </div>
        </section>

        {/* Proceedings & materials */}
        <section className="mt-12 prose">
          <h2>Proceedings & Materials</h2>
          <p>
            Download the full proceedings and supplementary materials.
          </p>
          <ul>
            <li>
              <Link href="/proceedings-ripu25.pdf" className="text-blue-600 underline">
                Proceedings (PDF)
              </Link>
            </li>
            <li>
              <Link href="/ripu25-slides.zip" className="text-blue-600 underline">
                Slides & supplementary materials (zip)
              </Link>
            </li>
          </ul>
        </section>

        {/* Closing reflection */}
        <section className="mt-12 prose">
          <h2>Closing Reflection</h2>
          <p>
            RIPU25 highlighted the importance of transdisciplinary approaches. The proceedings continue to inform
            research and practice across urban and peri-urban contexts.
          </p>
        </section>
      </div>

      <Footer />
    </main>
  );
}

