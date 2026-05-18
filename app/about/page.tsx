import About from '@/components/about';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
