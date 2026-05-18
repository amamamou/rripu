import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Venue from '@/components/venue';

export default function VenuePage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Venue />
      <Footer />
    </main>
  );
}
