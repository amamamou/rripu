import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Registration from '@/components/registration';

export default function RegistrationPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <Navbar />
      <Registration />
      <Footer />
    </main>
  );
}
