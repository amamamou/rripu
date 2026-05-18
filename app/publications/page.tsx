import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Publications from '@/components/publications';

export default function PublicationsPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Publications />
      <Footer />
    </main>
  );
}
