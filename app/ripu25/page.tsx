import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata = {
  title: 'RIPU25 — Archive',
  description: 'Archive of RIPU25 — proceedings, featured speakers, gallery and reflections.',
};

export default function RIPU25() {
  return (
    <main className="w-full min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero: uses background-image if `/ripu25-hero.jpg` is present; falls back to slate background */}
      <section className="relative w-full h-[420px] flex items-end bg-slate-900 bg-[url('/ripu25-hero.jpg')] bg-cover bg-center text-white">
        <div className="relative z-10 container mx-auto p-6">
          <h1 className="text-4xl font-semibold">RIPU25 — Archive</h1>
          <p className="mt-2 text-slate-200 max-w-2xl">Une rétrospective éditoriale de la 25e édition du colloque RIPU.</p>
        </div>
      </section>

      <div className="container mx-auto py-12 px-6">
        {/* French intro */}
        <section className="prose max-w-3xl">
          <h2>Introduction (Français)</h2>
          <p>
            La 25ème édition de RIPU s'est tenue à Sousse et a rassemblé des chercheurs internationaux travaillant sur
            l'intelligence périurbaine et les usages émergents des réseaux. Cette page archive les actes, les discours
            et une sélection de moments forts.
          </p>
        </section>

        {/* Key figures */}
        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded">
            <h3 className="text-2xl font-semibold">Participants</h3>
            <p className="mt-2">~320 researchers, practitioners and students</p>
          </div>
          <div className="p-6 border rounded">
            <h3 className="text-2xl font-semibold">Papers</h3>
            <p className="mt-2">120 peer-reviewed papers in the proceedings</p>
          </div>
          <div className="p-6 border rounded">
            <h3 className="text-2xl font-semibold">Countries</h3>
            <p className="mt-2">Representatives from 28 countries</p>
          </div>
        </section>

        {/* Featured speakers */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Featured Speakers</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <article className="p-4 border rounded">
              <img src="/team/1.png" alt="Sonia Sahli" className="w-full h-auto rounded" />
              <h4 className="mt-3 font-semibold">Sonia Sahli</h4>
              <p className="text-sm text-slate-600">Experte en ingénierie pédagogique — ISET Sousse</p>
            </article>
            <article className="p-4 border rounded">
              <img src="/team/2.png" alt="Denis Gillet" className="w-full h-auto rounded" />
              <h4 className="mt-3 font-semibold">Denis Gillet</h4>
              <p className="text-sm text-slate-600">Président de Graasp.org — EPFL</p>
            </article>
          
            <article className="p-4 border rounded">
              <img src="/team/3.png" alt="Thierry Spriet" className="w-full h-auto rounded" />
              <h4 className="mt-3 font-semibold">Thierry Spriet</h4>
              <p className="text-sm text-slate-600">Maître de conférences HC — Avignon Université</p>
            </article>
            <article className="p-4 border rounded">
              <img src="/team/6.png" alt="Nawel Souissi" className="w-full h-auto rounded" />
              <h4 className="mt-3 font-semibold">Nawel Souissi</h4>
              <p className="text-sm text-slate-600">Experte en accréditation internationale — PRISTINI School of AI</p>
            </article>
          </div>
        </section>

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

