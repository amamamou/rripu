import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

export default function RIPU25Page() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />

      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-light text-black mb-4">RIPU25 — Highlights &amp; Proceedings</h1>
              <p className="text-base font-light text-gray-600 mb-6">A look back at the previous edition — speakers, proceedings, and conference moments that shaped the community.</p>
              <ul className="text-sm font-light text-gray-700 space-y-3 mb-6">
                <li>Keynote: Emerging trends in digital pedagogy</li>
                <li>150+ international speakers</li>
                <li>Proceedings published and available for download</li>
              </ul>
              <a href="/proceedings-ripu25.pdf" download className="inline-block text-xs font-light tracking-wide text-black border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300">Download RIPU25 Proceedings</a>
            </div>
            <div className="relative h-80 bg-gray-100 overflow-hidden">
              <Image src="/ripu25-gallery.jpg" alt="RIPU25" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h3 className="text-2xl font-light text-black mb-6">Previous Keynote Speakers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6">
              <div className="text-lg font-medium text-black">Prof. Lina Haddad</div>
              <div className="text-sm font-light text-gray-600">University of Tunis • Tunisia</div>
            </div>
            <div className="border border-gray-200 p-6">
              <div className="text-lg font-medium text-black">Dr. Omar Saeed</div>
              <div className="text-sm font-light text-gray-600">American University • Cairo</div>
            </div>
            <div className="border border-gray-200 p-6">
              <div className="text-lg font-medium text-black">Prof. Maria Silva</div>
              <div className="text-sm font-light text-gray-600">University of Lisbon</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
