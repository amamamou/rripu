import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Committee from '@/components/committee';

export default function CommitteePage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Committee />
      <Footer />
    </main>
  );
}
