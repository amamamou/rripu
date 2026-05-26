import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export const metadata = {
  title: 'RIPU Archive',
  description: 'Archive of previous RIPU editions: proceedings, galleries and highlights.',
};

export default function RIPUArchive() {
  return (
    <main className="w-full min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-[28px] sm:text-4xl font-light tracking-tight leading-[1.02] text-black">RIPU — Past Editions</h1>
          <p className="mt-3 text-neutral-600 max-w-2xl">A curated archive of previous RIPU editions: proceedings, highlights and galleries.</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-1 gap-6">
            <article className="border rounded p-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-md bg-gray-50 flex items-center justify-center overflow-hidden">
                  <Image src="/ripu/logo_ripu25.png" alt="RIPU25" width={64} height={64} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">RIPU25 — Sousse, Tunisia</h3>
                  <p className="text-sm text-neutral-600">30–31 May 2025 · Proceedings & gallery</p>
                  <div className="mt-3 flex items-center gap-4">
                    <Link href="/ripu25" className="text-sm text-[#2F0461] hover:underline">View archive</Link>
                    <Link href="/proceedings-ripu25.pdf" className="text-sm text-neutral-700">Download proceedings (PDF)</Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <section className="mt-12">
            <h2 className="text-xl md:text-2xl font-light text-black">Gallery highlights</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Image src="/ripu/3.png" alt="RIPU gallery 1" width={1200} height={800} className="rounded" />
              <Image src="/ripu/2.png" alt="RIPU gallery 2" width={1200} height={800} className="rounded" />
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
