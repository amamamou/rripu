import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Papers from '@/components/papers';

export default function CFPPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <section className="w-full py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <h1 className="text-4xl md:text-5xl font-light text-black mb-4">Call for Papers</h1>
          <p className="text-base font-light text-gray-600 mb-6">RIPU invites submissions on research and innovation in pedagogy and universities. Submissions undergo double-blind peer review.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-medium text-black mb-3">Tracks & Topics</h3>
              <ul className="text-sm font-light text-gray-700 space-y-2">
                <li>AI in Education</li>
                <li>Learning Analytics</li>
                <li>Smart Universities</li>
                <li>XR Learning</li>
                <li>Educational Innovation</li>
                <li>Human-Centered AI</li>
                <li>Digital Pedagogy</li>
                <li>Future Learning Systems</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-black mb-3">Submission Guidelines</h3>
              <p className="text-sm font-light text-gray-700 mb-4">Full papers (up to 8 pages) and short papers (up to 4 pages) accepted. Use the provided template and follow ACM/IEEE formatting where applicable.</p>
              <a href="/cfp-ripu26.pdf" download className="inline-block text-xs font-light tracking-wide text-black border border-black px-6 py-3 hover:bg-black hover:text-white transition-all duration-300">Download CFP PDF</a>
            </div>
          </div>

          <Papers />
        </div>
      </section>
      <Footer />
    </main>
  );
}
