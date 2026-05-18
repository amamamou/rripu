import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Program from '@/components/program';

export default function ProgramPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Program />
      <Footer />
    </main>
  );
}
