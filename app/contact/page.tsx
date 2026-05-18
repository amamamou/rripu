import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Contact from '@/components/contact';

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
