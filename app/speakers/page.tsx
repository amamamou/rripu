import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Speakers from '@/components/speakers';

export default function SpeakersPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Speakers />
      <Footer />
    </main>
  );
}
