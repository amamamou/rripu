import AboutPage from '@/components/about-page';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutRoute() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <AboutPage />
      <Footer />
    </main>
  );
}
